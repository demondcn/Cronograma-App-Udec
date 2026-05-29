import { NextResponse } from "next/server";

import prisma from "@/lib/db";

function normalizeDocument(value: unknown) {
  return String(value || "")
    .trim()
    .replace(/[\s.-]+/g, "");
}

function normalizeText(value: unknown) {
  return String(value || "").trim().replace(/\s+/g, " ");
}

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const estudiante = await prisma.estudiante.findUnique({ where: { id } });

    if (!estudiante) {
      return NextResponse.json(
        { ok: false, message: "Estudiante no encontrado." },
        { status: 404 }
      );
    }

    return NextResponse.json({ ok: true, data: estudiante });
  } catch (error) {
    console.error("Error getting sports student:", error);

    return NextResponse.json(
      { ok: false, message: "Error al obtener estudiante." },
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
    const nombre = normalizeText(body.nombre);
    const cc = normalizeDocument(body.cc);
    const carrera = normalizeText(body.carrera) || null;
    const activo = body.activo === undefined ? true : Boolean(body.activo);

    if (!nombre || !cc) {
      return NextResponse.json(
        { ok: false, message: "Nombre y documento son obligatorios." },
        { status: 400 }
      );
    }

    const current = await prisma.estudiante.findUnique({ where: { id } });

    if (!current) {
      return NextResponse.json(
        { ok: false, message: "Estudiante no encontrado." },
        { status: 404 }
      );
    }

    const existing = await prisma.estudiante.findUnique({ where: { cc } });

    if (existing && existing.id !== id) {
      return NextResponse.json(
        { ok: false, message: "Ya existe otro estudiante con ese documento." },
        { status: 409 }
      );
    }

    const estudiante = await prisma.estudiante.update({
      where: { id },
      data: {
        nombre,
        cc,
        carrera,
        activo,
      },
    });

    return NextResponse.json({ ok: true, data: estudiante });
  } catch (error) {
    console.error("Error updating sports student:", error);

    return NextResponse.json(
      { ok: false, message: "Error al actualizar estudiante." },
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
    const estudiante = await prisma.estudiante.update({
      where: { id },
      data: { activo: false },
    });

    return NextResponse.json({ ok: true, data: estudiante });
  } catch (error) {
    console.error("Error deactivating sports student:", error);

    return NextResponse.json(
      { ok: false, message: "Error al desactivar estudiante." },
      { status: 500 }
    );
  }
}
