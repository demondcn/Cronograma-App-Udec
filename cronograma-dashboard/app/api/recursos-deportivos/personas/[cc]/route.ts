import { NextResponse } from "next/server";

import prisma from "@/lib/db";

function normalizeDocument(value: string) {
  return String(value || "")
    .trim()
    .replace(/[\s.-]+/g, "");
}

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ cc: string }> }
) {
  try {
    const { cc } = await params;
    const normalizedCc = normalizeDocument(cc);

    if (!normalizedCc) {
      return NextResponse.json(
        { ok: false, message: "Documento no válido." },
        { status: 400 }
      );
    }

    const estudiante = await prisma.estudiante.findFirst({
      where: {
        cc: normalizedCc,
        activo: true,
      },
      select: {
        id: true,
        nombre: true,
        cc: true,
        carrera: true,
      },
    });

    if (estudiante) {
      return NextResponse.json({
        ok: true,
        data: {
          tipo: "ESTUDIANTE",
          id: estudiante.id,
          nombre: estudiante.nombre,
          cc: estudiante.cc,
          carrera: estudiante.carrera,
        },
      });
    }

    const profesor = await prisma.profesor.findFirst({
      where: {
        cc: normalizedCc,
        activo: true,
      },
      select: {
        id: true,
        nombre: true,
        cc: true,
        carrera: true,
      },
    });

    if (profesor?.cc) {
      return NextResponse.json({
        ok: true,
        data: {
          tipo: "PROFESOR",
          id: profesor.id,
          nombre: profesor.nombre,
          cc: profesor.cc,
          carrera: profesor.carrera,
        },
      });
    }

    return NextResponse.json(
      { ok: false, message: "No se encontró una persona con ese documento" },
      { status: 404 }
    );
  } catch (error) {
    console.error("Error looking up sports person:", error);

    return NextResponse.json(
      { ok: false, message: "Error al buscar la persona." },
      { status: 500 }
    );
  }
}
