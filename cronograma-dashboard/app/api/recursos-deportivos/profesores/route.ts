import { NextResponse } from "next/server";

import prisma from "@/lib/db";

export async function GET() {
  try {
    const profesores = await prisma.profesor.findMany({
      where: { activo: true },
      orderBy: { nombre: "asc" },
      select: {
        id: true,
        nombre: true,
        correo: true,
        cc: true,
        carrera: true,
      },
    });

    return NextResponse.json({ ok: true, data: profesores });
  } catch (error) {
    console.error("Error listing sports teachers:", error);

    return NextResponse.json(
      { ok: false, message: "Error al listar profesores activos." },
      { status: 500 }
    );
  }
}
