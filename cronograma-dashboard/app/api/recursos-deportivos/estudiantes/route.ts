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

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const includeInactive = searchParams.get("includeInactive") === "true";
    const search = normalizeText(searchParams.get("search")).toLowerCase();

    const estudiantes = await prisma.estudiante.findMany({
      where: {
        ...(includeInactive ? {} : { activo: true }),
        ...(search
          ? {
              OR: [
                { nombre: { contains: search, mode: "insensitive" } },
                { cc: { contains: search, mode: "insensitive" } },
                { carrera: { contains: search, mode: "insensitive" } },
              ],
            }
          : {}),
      },
      orderBy: { nombre: "asc" },
    });

    return NextResponse.json({ ok: true, data: estudiantes });
  } catch (error) {
    console.error("Error listing sports students:", error);

    return NextResponse.json(
      { ok: false, message: "Error al listar estudiantes." },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
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

    const existing = await prisma.estudiante.findUnique({ where: { cc } });

    if (existing) {
      return NextResponse.json(
        { ok: false, message: "Ya existe un estudiante con ese documento." },
        { status: 409 }
      );
    }

    const estudiante = await prisma.estudiante.create({
      data: {
        nombre,
        cc,
        carrera,
        activo,
      },
    });

    return NextResponse.json({ ok: true, data: estudiante }, { status: 201 });
  } catch (error) {
    console.error("Error creating sports student:", error);

    return NextResponse.json(
      { ok: false, message: "Error al crear estudiante." },
      { status: 500 }
    );
  }
}
