'use server'

import prisma from "@/lib/db";

interface Profes {
  id: string;
  nombre: string;
}

export async function obtenerProfes(): Promise<Profes[]> {
  try {
    const profes = await prisma.profesor.findMany({
      select: {
        id: true,
        nombre: true,
      },
      orderBy: {
        id: 'asc' // Ordena las asignaturas por id
      }
    });

    // Devuelve un array con las asignaturas en el formato adecuado
    return profes.map(profesor => ({
      id: profesor.id,
      nombre: profesor.nombre,
    }));
  } catch (error) {
    console.error('Error obteniendo profes:', error);
    return [];
  }
}
