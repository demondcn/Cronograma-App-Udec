'use server'

import prisma from "@/lib/db";

// Definir la interfaz para una asignatura
interface Asignatura {
  id: string;
  nombre: string;
}

export async function obtenerAsignaturas(): Promise<Asignatura[]> {
  try {
    // Consulta las asignaturas desde la base de datos
    const asignaturas = await prisma.asignatura.findMany({
      select: {
        id: true,
        nombre: true,
      },
      orderBy: {
        id: 'asc' // Ordena las asignaturas por id
      }
    });

    // Devuelve un array con las asignaturas en el formato adecuado
    return asignaturas.map(asignatura => ({
      id: asignatura.id,
      nombre: asignatura.nombre,
    }));
  } catch (error) {
    console.error('Error obteniendo asignaturas:', error);
    return [];
  }
}
