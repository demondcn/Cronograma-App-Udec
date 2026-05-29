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

export async function GET() {
  try {
    const elementos = await prisma.elementoDeportivo.findMany({
      where: { activo: true },
      orderBy: { nombre: "asc" },
      select: {
        id: true,
        nombre: true,
        codigo: true,
        descripcion: true,
        marca: true,
        color: true,
        categoria: true,
        cantidadTotal: true,
        cantidadDisponible: true,
        activo: true,
        icono: true,
      },
    });

    return NextResponse.json({ ok: true, data: elementos });
  } catch (error) {
    console.error("Error listing sports elements:", error);

    return NextResponse.json(
      { ok: false, message: "Error al listar elementos deportivos." },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const nombre = String(body.nombre || "").trim();
    const cantidadTotal = parseQuantity(body.cantidadTotal);
    const cantidadDisponible = parseQuantity(body.cantidadDisponible);

    if (!nombre) {
      return NextResponse.json(
        { ok: false, message: "El nombre del elemento es obligatorio." },
        { status: 400 }
      );
    }

    const quantityError = validateQuantities(cantidadTotal, cantidadDisponible);

    if (quantityError) {
      return NextResponse.json(
        { ok: false, message: quantityError },
        { status: 400 }
      );
    }

    const elemento = await prisma.elementoDeportivo.create({
      data: {
        nombre,
        codigo: body.codigo ? String(body.codigo).trim() : null,
        descripcion: body.descripcion ? String(body.descripcion).trim() : null,
        marca: body.marca ? String(body.marca).trim() : null,
        color: body.color ? String(body.color).trim() : null,
        categoria: body.categoria ? String(body.categoria).trim() : null,
        cantidadTotal,
        cantidadDisponible,
        icono: body.icono ? String(body.icono).trim() : null,
        activo: body.activo === undefined ? true : Boolean(body.activo),
      },
    });

    return NextResponse.json({ ok: true, data: elemento }, { status: 201 });
  } catch (error: any) {
    console.error("Error creating sports element:", error);

    if (error?.code === "P2002") {
      return NextResponse.json(
        { ok: false, message: "Ya existe un elemento con ese código." },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { ok: false, message: "Error al crear elemento deportivo." },
      { status: 500 }
    );
  }
}
