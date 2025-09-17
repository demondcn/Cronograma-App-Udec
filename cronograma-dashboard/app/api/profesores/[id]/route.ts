import { NextRequest, NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const profesor = await prisma.profesor.findUnique({
      where: { id: params.id }
    })
    
    if (!profesor) {
      return NextResponse.json(
        { error: 'Profesor no encontrado' },
        { status: 404 }
      )
    }
    
    return NextResponse.json(profesor, { status: 200 })
  } catch (error) {
    console.error('Error fetching teacher:', error)
    return NextResponse.json(
      { error: 'Error al obtener profesor' },
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
    const { nombre, correo, telefono, activo } = body
    
    // Verificar si el profesor existe
    const profesorExistente = await prisma.profesor.findUnique({
      where: { id: params.id }
    })
    
    if (!profesorExistente) {
      return NextResponse.json(
        { error: 'Profesor no encontrado' },
        { status: 404 }
      )
    }
    
    const profesor = await prisma.profesor.update({
      where: { id: params.id },
      data: {
        nombre,
        correo,
        telefono: telefono || null,
        activo: activo !== undefined ? activo : true,
        actualizadoEn: new Date()
      }
    })
    
    return NextResponse.json(profesor, { status: 200 })
  } catch (error: any) {
    console.error('Error updating teacher:', error)
    
    if (error.code === 'P2002') {
      return NextResponse.json(
        { error: 'El correo ya existe' },
        { status: 400 }
      )
    } else {
      return NextResponse.json(
        { error: 'Error al actualizar profesor' },
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
    // Verificar si el profesor existe
    const profesorExistente = await prisma.profesor.findUnique({
      where: { id: params.id }
    })
    
    if (!profesorExistente) {
      return NextResponse.json(
        { error: 'Profesor no encontrado' },
        { status: 404 }
      )
    }
    
    await prisma.profesor.delete({
      where: { id: params.id }
    })
    
    return NextResponse.json(
      { message: 'Profesor eliminado correctamente' },
      { status: 200 }
    )
  } catch (error: any) {
    console.error('Error deleting teacher:', error)
    
    if (error.code === 'P2003') {
      return NextResponse.json(
        { error: 'No se puede eliminar el profesor porque tiene horarios asociados' },
        { status: 400 }
      )
    } else {
      return NextResponse.json(
        { error: 'Error al eliminar profesor' },
        { status: 500 }
      )
    }
  }
}