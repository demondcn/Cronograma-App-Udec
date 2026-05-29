import { NextResponse } from "next/server";

import prisma from "@/lib/db";

function parseQuantity(value: unknown) {
  const quantity = Number(value);

  return Number.isFinite(quantity) ? Math.trunc(quantity) : 0;
}

function validateQuantities(cantidadTotal: number, cantidadDisponible: number) {
  if (cantidadTotal < 0 || cantidadDisponible < 0) {
    return "Las cantidades no pueden ser negativas.";
  }

  if (cantidadDisponible > cantidadTotal) {
    return "La cantidad disponible no puede superar la cantidad total.";
  }

  return null;
}

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const elemento = await prisma.elementoDeportivo.findUnique({
      where: { id },
    });

    if (!elemento) {
      return NextResponse.json(
        { ok: false, message: "Elemento deportivo no encontrado." },
        { status: 404 }
      );
    }

    return NextResponse.json({ ok: true, data: elemento });
  } catch (error) {
    console.error("Error getting sports element:", error);

    return NextResponse.json(
      { ok: false, message: "Error al obtener elemento deportivo." },
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
    const currentElement = await prisma.elementoDeportivo.findUnique({
      where: { id },
    });

    if (!currentElement) {
      return NextResponse.json(
        { ok: false, message: "Elemento deportivo no encontrado." },
        { status: 404 }
      );
    }

    const cantidadTotal =
      body.cantidadTotal === undefined
        ? currentElement.cantidadTotal
        : parseQuantity(body.cantidadTotal);
    const cantidadDisponible =
      body.cantidadDisponible === undefined
        ? currentElement.cantidadDisponible
        : parseQuantity(body.cantidadDisponible);
    const quantityError = validateQuantities(cantidadTotal, cantidadDisponible);

    if (quantityError) {
      return NextResponse.json(
        { ok: false, message: quantityError },
        { status: 400 }
      );
    }

    const elemento = await prisma.elementoDeportivo.update({
      where: { id },
      data: {
        nombre: body.nombre === undefined ? undefined : String(body.nombre).trim(),
        codigo:
          body.codigo === undefined
            ? undefined
            : body.codigo
              ? String(body.codigo).trim()
              : null,
        descripcion:
          body.descripcion === undefined
            ? undefined
            : body.descripcion
              ? String(body.descripcion).trim()
              : null,
        marca:
          body.marca === undefined
            ? undefined
            : body.marca
              ? String(body.marca).trim()
              : null,
        color:
          body.color === undefined
            ? undefined
            : body.color
              ? String(body.color).trim()
              : null,
        categoria:
          body.categoria === undefined
            ? undefined
            : body.categoria
              ? String(body.categoria).trim()
              : null,
        cantidadTotal,
        cantidadDisponible,
        activo: body.activo === undefined ? undefined : Boolean(body.activo),
        icono:
          body.icono === undefined
            ? undefined
            : body.icono
              ? String(body.icono).trim()
              : null,
      },
    });

    return NextResponse.json({ ok: true, data: elemento });
  } catch (error: any) {
    console.error("Error updating sports element:", error);

    if (error?.code === "P2002") {
      return NextResponse.json(
        { ok: false, message: "Ya existe un elemento con ese código." },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { ok: false, message: "Error al actualizar elemento deportivo." },
      { status: 500 }
    );
  }
}

export async function DELETE(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const currentElement = await prisma.elementoDeportivo.findUnique({
      where: { id },
    });

    if (!currentElement) {
      return NextResponse.json(
        { ok: false, message: "Elemento deportivo no encontrado." },
        { status: 404 }
      );
    }

    const elemento = await prisma.elementoDeportivo.update({
      where: { id },
      data: { activo: false },
    });

    return NextResponse.json({ ok: true, data: elemento });
  } catch (error) {
    console.error("Error disabling sports element:", error);

    return NextResponse.json(
      { ok: false, message: "Error al desactivar elemento deportivo." },
      { status: 500 }
    );
  }
}
