import { NextRequest, NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

interface Params {
  params: { id: string }
}

export async function GET(request: NextRequest, { params }: Params) {
  try {
    const { id } = params
    const asignatura = await prisma.asignatura.findUnique({
      where: { id },
      include: { programa: true }
    })
    
    if (!asignatura) {
      return NextResponse.json(
        { error: 'Asignatura no encontrada' },
        { status: 404 }
      )
    }
    
    return NextResponse.json(asignatura)
  } catch (error) {
    console.error('Error fetching subject:', error)
    return NextResponse.json(
      { error: 'Error al obtener asignatura' },
      { status: 500 }
    )
  }
}

export async function PUT(request: NextRequest, { params }: Params) {
  try {
    const { id } = params
    const { nombre, codigo, programaId, semestre, creditos, activa } = await request.json()
    
    // Verificar si la asignatura existe
    const asignaturaExistente = await prisma.asignatura.findUnique({
      where: { id }
    })
    
    if (!asignaturaExistente) {
      return NextResponse.json(
        { error: 'Asignatura no encontrada' },
        { status: 404 }
      )
    }
    
    // Si se cambia el programa, verificar que existe
    if (programaId) {
      const programa = await prisma.programa.findUnique({
        where: { id: programaId }
      })
      
      if (!programa) {
        return NextResponse.json(
          { error: 'El programa especificado no existe' },
          { status: 400 }
        )
      }
    }
    
    const asignatura = await prisma.asignatura.update({
      where: { id },
      data: {
        nombre,
        codigo,
        programaId,
        semestre: semestre || null,
        creditos: creditos || null,
        activa: activa !== undefined ? activa : true,
        actualizadoEn: new Date()
      }
    })
    
    return NextResponse.json(asignatura)
  } catch (error: any) {
    console.error('Error updating subject:', error)
    
    if (error.code === 'P2002') {
      return NextResponse.json(
        { error: 'El código ya existe' },
        { status: 400 }
      )
    } else {
      return NextResponse.json(
        { error: 'Error al actualizar asignatura' },
        { status: 500 }
      )
    }
  }
}

export async function DELETE(request: NextRequest, { params }: Params) {
  try {
    const { id } = params
    
    // Verificar si la asignatura existe
    const asignaturaExistente = await prisma.asignatura.findUnique({
      where: { id }
    })
    
    if (!asignaturaExistente) {
      return NextResponse.json(
        { error: 'Asignatura no encontrada' },
        { status: 404 }
      )
    }
    
    await prisma.asignatura.delete({
      where: { id }
    })
    
    return NextResponse.json({ message: 'Asignatura eliminada correctamente' })
  } catch (error: any) {
    console.error('Error deleting subject:', error)
    
    if (error.code === 'P2003') {
      return NextResponse.json(
        { error: 'No se puede eliminar la asignatura porque tiene horarios asociados' },
        { status: 400 }
      )
    } else {
      return NextResponse.json(
        { error: 'Error al eliminar asignatura' },
        { status: 500 }
      )
    }
  }
}