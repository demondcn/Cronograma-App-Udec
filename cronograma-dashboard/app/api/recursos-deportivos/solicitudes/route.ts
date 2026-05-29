import { NextResponse } from "next/server";

import prisma from "@/lib/db";

interface SelectedSportsItemPayload {
  elementoId?: string;
  cantidad?: number;
}

const includeSolicitud = {
  estudiante: true,
  profesor: {
    select: {
      id: true,
      nombre: true,
      correo: true,
      cc: true,
      carrera: true,
    },
  },
  detalles: {
    include: {
      elemento: true,
    },
  },
  movimientos: {
    orderBy: {
      creadoEn: "desc" as const,
    },
  },
};

function getColombiaDay(date = new Date()) {
  return new Intl.DateTimeFormat("es-CO", {
    timeZone: "America/Bogota",
    weekday: "long",
  })
    .format(date)
    .toUpperCase();
}

function getColombiaTimeHHMM(date = new Date()) {
  return new Intl.DateTimeFormat("es-CO", {
    timeZone: "America/Bogota",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).format(date);
}

function normalizeSelectedItems(value: unknown) {
  if (!Array.isArray(value)) {
    return [];
  }

  const groupedItems = new Map<string, number>();

  for (const item of value as SelectedSportsItemPayload[]) {
    const elementoId = String(item.elementoId || "").trim();
    const cantidad = Number(item.cantidad);

    if (!elementoId || !Number.isInteger(cantidad) || cantidad <= 0) {
      return null;
    }

    groupedItems.set(elementoId, (groupedItems.get(elementoId) || 0) + cantidad);
  }

  return Array.from(groupedItems, ([elementoId, cantidad]) => ({
    elementoId,
    cantidad,
  }));
}

function buildElementDetail(elemento: {
  marca: string | null;
  color: string | null;
}) {
  return [elemento.marca, elemento.color].filter(Boolean).join(" - ") || null;
}

export async function GET() {
  try {
    const solicitudes = await prisma.solicitudDeportiva.findMany({
      orderBy: { fechaSolicitud: "desc" },
      include: includeSolicitud,
    });

    return NextResponse.json({ ok: true, data: solicitudes });
  } catch (error) {
    console.error("Error listing sports requests:", error);

    return NextResponse.json(
      { ok: false, message: "Error al listar solicitudes deportivas." },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const nombreSolicitante = String(body.nombreSolicitante || "").trim();
    const documentoSolicitante = String(
      body.documentoSolicitante || ""
    )
      .trim()
      .replace(/[\s.-]+/g, "");
    const estudianteId = body.estudianteId
      ? String(body.estudianteId).trim()
      : null;
    const profesorId = body.profesorId ? String(body.profesorId).trim() : null;
    const profesorNombre = body.profesorNombre
      ? String(body.profesorNombre).trim()
      : null;
    const selectedItems = normalizeSelectedItems(body.selectedItems);

    if (!nombreSolicitante) {
      return NextResponse.json(
        { ok: false, message: "El nombre del solicitante es obligatorio." },
        { status: 400 }
      );
    }

    if (!documentoSolicitante) {
      return NextResponse.json(
        { ok: false, message: "El documento del solicitante es obligatorio." },
        { status: 400 }
      );
    }

    if (!selectedItems || selectedItems.length === 0) {
      return NextResponse.json(
        {
          ok: false,
          message: "Selecciona al menos un elemento con cantidad válida.",
        },
        { status: 400 }
      );
    }

    const existingActiveRequest = await prisma.solicitudDeportiva.findFirst({
      where: {
        OR: [
          ...(estudianteId ? [{ estudianteId }] : []),
          { documentoSolicitante },
        ],
        estado: {
          in: ["RECEPCIONADA", "PENDIENTE"],
        },
      },
      include: {
        detalles: true,
      },
    });

    if (existingActiveRequest) {
      return NextResponse.json(
        {
          ok: false,
          message:
            "El estudiante ya tiene una solicitud activa. Debe devolver o cerrar los elementos antes de hacer una nueva solicitud.",
          activeRequest: {
            id: existingActiveRequest.id,
            estado: existingActiveRequest.estado,
            fechaSolicitud: existingActiveRequest.fechaSolicitud,
            horaSolicitud: existingActiveRequest.horaSolicitud,
            detalles: existingActiveRequest.detalles,
          },
        },
        { status: 409 }
      );
    }

    const solicitud = await prisma.$transaction(async (tx) => {
      const elementos = await tx.elementoDeportivo.findMany({
        where: {
          id: { in: selectedItems.map((item) => item.elementoId) },
        },
      });
      const elementosMap = new Map(
        elementos.map((elemento) => [elemento.id, elemento])
      );

      for (const item of selectedItems) {
        const elemento = elementosMap.get(item.elementoId);

        if (!elemento) {
          throw new Error(`Elemento no encontrado: ${item.elementoId}`);
        }

        if (!elemento.activo) {
          throw new Error(`Elemento inactivo: ${elemento.nombre}`);
        }

        if (item.cantidad > elemento.cantidadDisponible) {
          throw new Error(
            `No hay disponibilidad suficiente para ${elemento.nombre}.`
          );
        }
      }

      if (profesorId) {
        const profesor = await tx.profesor.findFirst({
          where: { id: profesorId, activo: true },
          select: { id: true },
        });

        if (!profesor) {
          throw new Error("Profesor responsable no encontrado o inactivo.");
        }
      }

      if (estudianteId) {
        const estudiante = await tx.estudiante.findFirst({
          where: { id: estudianteId, activo: true },
          select: { id: true, cc: true },
        });

        if (!estudiante) {
          throw new Error("Estudiante no encontrado o inactivo.");
        }
      }

      const fechaSolicitud = new Date();
      const createdRequest = await tx.solicitudDeportiva.create({
        data: {
          nombreSolicitante,
          documentoSolicitante,
          estudianteId,
          profesorId,
          profesorNombre,
          fechaSolicitud,
          diaSolicitud: getColombiaDay(fechaSolicitud),
          horaSolicitud: getColombiaTimeHHMM(fechaSolicitud),
          estado: "RECEPCIONADA",
          detalles: {
            create: selectedItems.map((item) => {
              const elemento = elementosMap.get(item.elementoId);

              if (!elemento) {
                throw new Error(`Elemento no encontrado: ${item.elementoId}`);
              }

              return {
                elementoId: elemento.id,
                cantidad: item.cantidad,
                nombreElemento: elemento.nombre,
                detalleElemento: buildElementDetail(elemento),
              };
            }),
          },
          movimientos: {
            create: {
              tipo: "CREACION",
              estadoNuevo: "RECEPCIONADA",
              descripcion: "Solicitud deportiva creada.",
              detalles: {
                selectedItems,
              },
            },
          },
        },
      });

      for (const item of selectedItems) {
        await tx.elementoDeportivo.update({
          where: { id: item.elementoId },
          data: {
            cantidadDisponible: {
              decrement: item.cantidad,
            },
          },
        });
      }

      return tx.solicitudDeportiva.findUniqueOrThrow({
        where: { id: createdRequest.id },
        include: includeSolicitud,
      });
    });

    return NextResponse.json({ ok: true, data: solicitud }, { status: 201 });
  } catch (error) {
    console.error("Error creating sports request:", error);

    return NextResponse.json(
      {
        ok: false,
        message:
          error instanceof Error
            ? error.message
            : "Error al crear solicitud deportiva.",
      },
      { status: 400 }
    );
  }
}
