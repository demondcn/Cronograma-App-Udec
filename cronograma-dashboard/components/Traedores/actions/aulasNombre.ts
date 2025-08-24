'use server'

import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient()

export async function obtenerAulas() {
  try {
    const aulas = await prisma.aula.findMany({
      select: {
        nombre: true
      },
      where: {
        activa: true
      },
      orderBy: {
        id: 'asc'
      }
    })
    
    return aulas.map(aula => aula.nombre)
  } catch (error) {
    console.error('Error obteniendo aulas:', error)
    return []
  }
}