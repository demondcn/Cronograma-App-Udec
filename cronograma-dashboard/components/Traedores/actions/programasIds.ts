"use server";
import prisma from "@/lib/db";
export async function obtenerProgramas() {
  const programas = await prisma.programa.findMany({
    select: { id: true, nombre: true},
    orderBy: { nombre: "asc" },
  });
  return programas;
}