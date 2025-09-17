import { NextRequest, NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

interface Params {
  params: { id: string }
}

export async function GET(request: NextRequest, { params }: Params) {
  try {
    const { id } = params
    const programa = await prisma.programa.findUnique({
      where: { id }
    })
    
    if (!programa) {
      return NextResponse.json(
        { error: 'Programa no encontrado' },
        { status: 404 }
      )
    }
    
    return NextResponse.json(programa)
  } catch (error) {
    console.error('Error fetching program:', error)
    return NextResponse.json(
      { error: 'Error al obtener programa' },
      { status: 500 }
    )
  }
}

export async function PUT(request: NextRequest, { params }: Params) {
  try {
    const { id } = params
    const { nombre, codigo, color, colorBrillo, colorTexto } = await request.json()
    
    // Verificar si el programa existe
    const programaExistente = await prisma.programa.findUnique({
      where: { id }
    })
    
    if (!programaExistente) {
      return NextResponse.json(
        { error: 'Programa no encontrado' },
        { status: 404 }
      )
    }
    
    const programa = await prisma.programa.update({
      where: { id },
      data: {
        nombre,
        codigo,
        color,
        colorBrillo,
        colorTexto,
        actualizadoEn: new Date()
      }
    })
    
    return NextResponse.json(programa)
  } catch (error: any) {
    console.error('Error updating program:', error)
    
    if (error.code === 'P2002') {
      return NextResponse.json(
        { error: 'El código o nombre ya existe' },
        { status: 400 }
      )
    } else {
      return NextResponse.json(
        { error: 'Error al actualizar programa' },
        { status: 500 }
      )
    }
  }
}

export async function DELETE(request: NextRequest, { params }: Params) {
  try {
    const { id } = params
    
    // Verificar si el programa existe
    const programaExistente = await prisma.programa.findUnique({
      where: { id }
    })
    
    if (!programaExistente) {
      return NextResponse.json(
        { error: 'Programa no encontrado' },
        { status: 404 }
      )
    }
    
    await prisma.programa.delete({
      where: { id }
    })
    
    return NextResponse.json({ message: 'Programa eliminado correctamente' })
  } catch (error: any) {
    console.error('Error deleting program:', error)
    
    if (error.code === 'P2003') {
      return NextResponse.json(
        { error: 'No se puede eliminar el programa porque tiene asignaturas asociadas' },
        { status: 400 }
      )
    } else {
      return NextResponse.json(
        { error: 'Error al eliminar programa' },
        { status: 500 }
      )
    }
  }
}