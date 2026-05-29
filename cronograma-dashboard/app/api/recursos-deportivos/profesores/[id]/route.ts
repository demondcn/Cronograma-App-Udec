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

function placeholderEmail(cc: string) {
  return `${cc}@sin-correo.local`;
}

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const profesor = await prisma.profesor.findUnique({
      where: { id },
      select: {
        id: true,
        nombre: true,
        correo: true,
        cc: true,
        carrera: true,
        telefono: true,
        activo: true,
      },
    });

    if (!profesor) {
      return NextResponse.json(
        { ok: false, message: "Profesor no encontrado." },
        { status: 404 }
      );
    }

    return NextResponse.json({ ok: true, data: profesor });
  } catch (error) {
    console.error("Error getting sports teacher:", error);

    return NextResponse.json(
      { ok: false, message: "Error al obtener profesor." },
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
    const telefono = normalizeText(body.telefono) || null;
    const correo = normalizeText(body.correo) || placeholderEmail(cc);
    const activo = body.activo === undefined ? true : Boolean(body.activo);

    if (!nombre || !cc) {
      return NextResponse.json(
        { ok: false, message: "Nombre y documento son obligatorios." },
        { status: 400 }
      );
    }

    const current = await prisma.profesor.findUnique({ where: { id } });

    if (!current) {
      return NextResponse.json(
        { ok: false, message: "Profesor no encontrado." },
        { status: 404 }
      );
    }

    const [existingByCc, existingByEmail] = await Promise.all([
      prisma.profesor.findFirst({ where: { cc } }),
      prisma.profesor.findUnique({ where: { correo } }),
    ]);

    if (existingByCc && existingByCc.id !== id) {
      return NextResponse.json(
        { ok: false, message: "Ya existe otro profesor con ese documento." },
        { status: 409 }
      );
    }

    if (existingByEmail && existingByEmail.id !== id) {
      return NextResponse.json(
        { ok: false, message: "Ya existe otro profesor con ese correo." },
        { status: 409 }
      );
    }

    const profesor = await prisma.profesor.update({
      where: { id },
      data: {
        nombre,
        cc,
        carrera,
        correo,
        telefono,
        activo,
        actualizadoEn: new Date(),
      },
    });

    return NextResponse.json({ ok: true, data: profesor });
  } catch (error) {
    console.error("Error updating sports teacher:", error);

    return NextResponse.json(
      { ok: false, message: "Error al actualizar profesor." },
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
    const profesor = await prisma.profesor.update({
      where: { id },
      data: {
        activo: false,
        actualizadoEn: new Date(),
      },
    });

    return NextResponse.json({ ok: true, data: profesor });
  } catch (error) {
    console.error("Error deactivating sports teacher:", error);

    return NextResponse.json(
      { ok: false, message: "Error al desactivar profesor." },
      { status: 500 }
    );
  }
}
