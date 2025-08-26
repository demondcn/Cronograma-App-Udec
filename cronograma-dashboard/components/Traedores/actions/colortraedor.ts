"use server";
import prisma from "@/lib/db";

export async function Colores() {
  // Traer programas con sus asignaturas activas
  const programas = await prisma.programa.findMany({
    include: {
      asignaturas: {
        where: { activa: true },
        select: { nombre: true },
      },
    },
  });

  // Construir el objeto en el formato deseado
  const subjectCategories: Record<string, any> = {};

  for (const programa of programas) {
    subjectCategories[programa.codigo] = {
      color: programa.color,
      glowColor: programa.colorBrillo,
      textColor: programa.colorTexto,
      subjects: programa.asignaturas.map((a) => a.nombre.toUpperCase()),
    };
  }

  return subjectCategories;
}
