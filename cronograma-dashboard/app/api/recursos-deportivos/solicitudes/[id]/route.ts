import { NextResponse } from "next/server";

import prisma from "@/lib/db";

interface SelectedSportsItemPayload {
  elementoId?: string;
  cantidad?: number;
}

type SportsRequestStatus =
  | "RECEPCIONADA"
  | "PENDIENTE"
  | "DEVOLUCION"
  | "CANCELADA";

const statusOptions = new Set<SportsRequestStatus>([
  "RECEPCIONADA",
  "PENDIENTE",
  "DEVOLUCION",
  "CANCELADA",
]);

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

function normalizeStatus(value: unknown) {
  if (typeof value !== "string" || !statusOptions.has(value as SportsRequestStatus)) {
    return null;
  }

  return value as SportsRequestStatus;
}

function buildElementDetail(elemento: {
  marca: string | null;
  color: string | null;
}) {
  return [elemento.marca, elemento.color].filter(Boolean).join(" - ") || null;
}

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const solicitud = await prisma.solicitudDeportiva.findUnique({
      where: { id },
      include: includeSolicitud,
    });

    if (!solicitud) {
      return NextResponse.json(
        { ok: false, message: "Solicitud deportiva no encontrada." },
        { status: 404 }
      );
    }

    return NextResponse.json({ ok: true, data: solicitud });
  } catch (error) {
    console.error("Error getting sports request:", error);

    return NextResponse.json(
      { ok: false, message: "Error al obtener solicitud deportiva." },
      { status: 500 }
    );
  }
}

export async function PUT(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const body = await request.json();
    const selectedItems =
      body.selectedItems === undefined
        ? undefined
        : normalizeSelectedItems(body.selectedItems);
    const nextStatus =
      body.estado === undefined ? undefined : normalizeStatus(body.estado);

    if (body.selectedItems !== undefined && (!selectedItems || selectedItems.length === 0)) {
      return NextResponse.json(
        {
          ok: false,
          message: "Selecciona al menos un elemento con cantidad válida.",
        },
        { status: 400 }
      );
    }

    if (body.estado !== undefined && !nextStatus) {
      return NextResponse.json(
        { ok: false, message: "Estado de solicitud no válido." },
        { status: 400 }
      );
    }

    const solicitud = await prisma.$transaction(async (tx) => {
      const currentRequest = await tx.solicitudDeportiva.findUnique({
        where: { id },
        include: { detalles: true },
      });

      if (!currentRequest) {
        throw new Error("Solicitud deportiva no encontrada.");
      }

      const profesorId =
        body.profesorId === undefined
          ? currentRequest.profesorId
          : body.profesorId
            ? String(body.profesorId).trim()
            : null;
      const estudianteId =
        body.estudianteId === undefined
          ? currentRequest.estudianteId
          : body.estudianteId
            ? String(body.estudianteId).trim()
            : null;

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
          select: { id: true },
        });

        if (!estudiante) {
          throw new Error("Estudiante no encontrado o inactivo.");
        }
      }

      if (selectedItems) {
        for (const detail of currentRequest.detalles) {
          await tx.elementoDeportivo.update({
            where: { id: detail.elementoId },
            data: {
              cantidadDisponible: {
                increment: detail.cantidad,
              },
            },
          });
        }

        await tx.detalleSolicitudDeportiva.deleteMany({
          where: { solicitudId: currentRequest.id },
        });

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

        await tx.detalleSolicitudDeportiva.createMany({
          data: selectedItems.map((item) => {
            const elemento = elementosMap.get(item.elementoId);

            if (!elemento) {
              throw new Error(`Elemento no encontrado: ${item.elementoId}`);
            }

            return {
              solicitudId: currentRequest.id,
              elementoId: elemento.id,
              cantidad: item.cantidad,
              nombreElemento: elemento.nombre,
              detalleElemento: buildElementDetail(elemento),
            };
          }),
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
      }

      const nombreSolicitante =
        body.nombreSolicitante === undefined
          ? currentRequest.nombreSolicitante
          : String(body.nombreSolicitante || "").trim();
      const documentoSolicitante =
        body.documentoSolicitante === undefined
          ? currentRequest.documentoSolicitante
          : String(body.documentoSolicitante || "")
              .trim()
              .replace(/[\s.-]+/g, "");

      if (!nombreSolicitante || !documentoSolicitante) {
        throw new Error("Nombre y documento del solicitante son obligatorios.");
      }

      const updatedRequest = await tx.solicitudDeportiva.update({
        where: { id: currentRequest.id },
        data: {
          nombreSolicitante,
          documentoSolicitante,
          estudianteId,
          profesorId,
          profesorNombre:
            body.profesorNombre === undefined
              ? currentRequest.profesorNombre
              : body.profesorNombre
                ? String(body.profesorNombre).trim()
                : null,
          estado: nextStatus || currentRequest.estado,
          observaciones:
            body.observaciones === undefined
              ? currentRequest.observaciones
              : body.observaciones
                ? String(body.observaciones).trim()
                : null,
        },
      });

      if (selectedItems) {
        await tx.movimientoSolicitudDeportiva.create({
          data: {
            solicitudId: currentRequest.id,
            tipo: "ACTUALIZACION",
            descripcion: "Elementos de la solicitud actualizados.",
            detalles: { selectedItems },
          },
        });
      }

      if (nextStatus && nextStatus !== currentRequest.estado) {
        await tx.movimientoSolicitudDeportiva.create({
          data: {
            solicitudId: currentRequest.id,
            tipo: "CAMBIO_ESTADO",
            estadoAnterior: currentRequest.estado,
            estadoNuevo: nextStatus,
            descripcion: `Estado actualizado de ${currentRequest.estado} a ${nextStatus}.`,
          },
        });
      }

      if (
        body.observaciones !== undefined &&
        updatedRequest.observaciones !== currentRequest.observaciones
      ) {
        await tx.movimientoSolicitudDeportiva.create({
          data: {
            solicitudId: currentRequest.id,
            tipo: "OBSERVACION",
            descripcion: "Observaciones actualizadas.",
            detalles: { observaciones: updatedRequest.observaciones },
          },
        });
      }

      return tx.solicitudDeportiva.findUniqueOrThrow({
        where: { id: currentRequest.id },
        include: includeSolicitud,
      });
    });

    return NextResponse.json({ ok: true, data: solicitud });
  } catch (error) {
    console.error("Error updating sports request:", error);

    return NextResponse.json(
      {
        ok: false,
        message:
          error instanceof Error
            ? error.message
            : "Error al actualizar solicitud deportiva.",
      },
      { status: 400 }
    );
  }
}

export async function DELETE(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const solicitud = await prisma.$transaction(async (tx) => {
      const currentRequest = await tx.solicitudDeportiva.findUnique({
        where: { id },
        include: { detalles: true },
      });

      if (!currentRequest) {
        throw new Error("Solicitud deportiva no encontrada.");
      }

      if (currentRequest.estado !== "CANCELADA") {
        for (const detail of currentRequest.detalles) {
          await tx.elementoDeportivo.update({
            where: { id: detail.elementoId },
            data: {
              cantidadDisponible: {
                increment: detail.cantidad,
              },
            },
          });
        }

        await tx.solicitudDeportiva.update({
          where: { id: currentRequest.id },
          data: { estado: "CANCELADA" },
        });

        await tx.movimientoSolicitudDeportiva.create({
          data: {
            solicitudId: currentRequest.id,
            tipo: "ELIMINACION",
            estadoAnterior: currentRequest.estado,
            estadoNuevo: "CANCELADA",
            descripcion: "Solicitud cancelada y cantidades devueltas al inventario.",
          },
        });
      }

      return tx.solicitudDeportiva.findUniqueOrThrow({
        where: { id: currentRequest.id },
        include: includeSolicitud,
      });
    });

    return NextResponse.json({ ok: true, data: solicitud });
  } catch (error) {
    console.error("Error canceling sports request:", error);

    return NextResponse.json(
      {
        ok: false,
        message:
          error instanceof Error
            ? error.message
            : "Error al cancelar solicitud deportiva.",
      },
      { status: 400 }
    );
  }
}
