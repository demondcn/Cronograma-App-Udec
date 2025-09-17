import { NextRequest, NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const aula = await prisma.aula.findUnique({
      where: { id: params.id }
    })
    
    if (!aula) {
      return NextResponse.json(
        { error: 'Aula no encontrada' },
        { status: 404 }
      )
    }
    
    return NextResponse.json(aula, { status: 200 })
  } catch (error) {
    console.error('Error fetching classroom:', error)
    return NextResponse.json(
      { error: 'Error al obtener aula' },
      { status: 500 }
    )
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const body = await request.json()
    const { nombre, capacidad, edificio, piso, equipos, activa } = body
    
    // Verificar si el aula existe
    const aulaExistente = await prisma.aula.findUnique({
      where: { id: params.id }
    })
    
    if (!aulaExistente) {
      return NextResponse.json(
        { error: 'Aula no encontrada' },
        { status: 404 }
      )
    }
    
    const aula = await prisma.aula.update({
      where: { id: params.id },
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
    
    return NextResponse.json(aula, { status: 200 })
  } catch (error: any) {
    console.error('Error updating classroom:', error)
    
    if (error.code === 'P2002') {
      return NextResponse.json(
        { error: 'El nombre ya existe' },
        { status: 400 }
      )
    } else {
      return NextResponse.json(
        { error: 'Error al actualizar aula' },
        { status: 500 }
      )
    }
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    // Verificar si el aula existe
    const aulaExistente = await prisma.aula.findUnique({
      where: { id: params.id }
    })
    
    if (!aulaExistente) {
      return NextResponse.json(
        { error: 'Aula no encontrada' },
        { status: 404 }
      )
    }
    
    await prisma.aula.delete({
      where: { id: params.id }
    })
    
    return NextResponse.json(
      { message: 'Aula eliminada correctamente' },
      { status: 200 }
    )
  } catch (error: any) {
    console.error('Error deleting classroom:', error)
    
    if (error.code === 'P2003') {
      return NextResponse.json(
        { error: 'No se puede eliminar el aula porque tiene horarios asociados' },
        { status: 400 }
      )
    } else {
      return NextResponse.json(
        { error: 'Error al eliminar aula' },
        { status: 500 }
      )
    }
  }
}