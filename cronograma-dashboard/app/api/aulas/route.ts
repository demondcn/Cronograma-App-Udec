import { NextRequest, NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function GET() {
  try {
    const aulas = await prisma.aula.findMany({
      orderBy: { creadoEn: 'desc' }
    })
    return NextResponse.json(aulas, { status: 200 })
  } catch (error) {
    console.error('Error fetching classrooms:', error)
    return NextResponse.json(
      { error: 'Error al obtener aulas' },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { nombre, capacidad, edificio, piso, equipos, activa } = body
    
    if (!nombre) {
      return NextResponse.json(
        { error: 'El nombre es obligatorio' },
        { status: 400 }
      )
    }
    
    const aula = await prisma.aula.create({
      data: {
        nombre,
        capacidad: capacidad || null,
        edificio: edificio || null,
        piso: piso || null,
        equipos: equipos || {},
        activa: activa !== undefined ? activa : true,
        actualizadoEn: new Date()
      }
    })
    
    return NextResponse.json(aula, { status: 201 })
  } catch (error: any) {
    console.error('Error creating classroom:', error)
    
    if (error.code === 'P2002') {
      return NextResponse.json(
        { error: 'El nombre ya existe' },
        { status: 400 }
      )
    } else {
      return NextResponse.json(
        { error: 'Error al crear aula' },
        { status: 500 }
      )
    }
  }
}