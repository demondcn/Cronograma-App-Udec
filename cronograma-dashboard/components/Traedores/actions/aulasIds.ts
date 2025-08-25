'use server'

import prisma from "@/lib/db";

interface Aulas {
  id: string;
  nombre: string;
}

export async function obtenerAulas(): Promise<Aulas[]> {
  try {
    const aulas = await prisma.aula.findMany({
      select: {
        id: true,
        nombre: true,
      },
      orderBy: {
        id: 'asc'
      }
    });

    return aulas.map(aula => ({
      id: aula.id,
      nombre: aula.nombre,
    }));
  } catch (error) {
    console.error('Error obteniendo aulas:', error);
    return [];
  }
}
