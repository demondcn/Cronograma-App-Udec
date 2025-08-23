"use server";
import prisma from "@/lib/db";

export async function debugHorarios() {
  // Trae todos los horarios activos con sus relaciones
  const horarios = await prisma.horario.findMany({
    where: { activo: true },
    include: {
      asignatura: {
        include: {
          programa: true,
        },
      },
      aula: true,
      profesor: true,
    },
  });

  // Imprime los datos en consola del servidor para debug
  console.log("Horarios activos con relaciones:");
  horarios.forEach((h) => {
    console.log({
      id: h.id,
      diaSemana: h.diaSemana,
      horaInicio: h.horaInicio,
      horaFin: h.horaFin,
      aula: h.aula?.nombre,
      asignatura: h.asignatura?.nombre,
      programa: h.asignatura?.programa?.nombre,
      profesor: h.profesor?.nombre,
      grupo: h.grupo,
      semestre: h.semestre,
    });
  });

  // Devuelve los datos para inspección en el frontend si lo necesitas
  return horarios;
}