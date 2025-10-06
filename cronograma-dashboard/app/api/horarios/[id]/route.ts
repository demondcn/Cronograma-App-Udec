import { NextRequest, NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params
    const horario = await prisma.horario.findUnique({
      where: { id },
      include: {
        asignatura: true,
        aula: true,
        profesor: true
      }
    })
    
    if (!horario) {
      return NextResponse.json(
        { error: 'Horario no encontrado' },
        { status: 404 }
      )
    }
    
    return NextResponse.json(horario, { status: 200 })
  } catch (error) {
    console.error('Error fetching schedule:', error)
    return NextResponse.json(
      { error: 'Error al obtener horario' },
      { status: 500 }
    )
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params
    const body = await request.json()
    const { 
      diaSemana, 
      horaInicio, 
      horaFin, 
      semestre, 
      grupo, 
      activo, 
      asignaturaId, 
      aulaId, 
      profesorId, 
      cantidadSt,
      cadi
    } = body
    
    // Verificar si el horario existe
    const horarioExistente = await prisma.horario.findUnique({
      where: { id }
    })
    
    if (!horarioExistente) {
      return NextResponse.json(
        { error: 'Horario no encontrado' },
        { status: 404 }
      )
    }
    
    // Si se cambia la asignatura, verificar que existe
    if (asignaturaId) {
      const asignatura = await prisma.asignatura.findUnique({
        where: { id: asignaturaId }
      })
      
      if (!asignatura) {
        return NextResponse.json(
          { error: 'La asignatura especificada no existe' },
          { status: 400 }
        )
      }
    }
    
    // Si se cambia el aula, verificar que existe
    if (aulaId) {
      const aula = await prisma.aula.findUnique({
        where: { id: aulaId }
      })
      
      if (!aula) {
        return NextResponse.json(
          { error: 'El aula especificada no existe' },
          { status: 400 }
        )
      }
    }
    
    // Si se cambia el profesor, verificar que existe
    if (profesorId) {
      const profesor = await prisma.profesor.findUnique({
        where: { id: profesorId }
      })
      
      if (!profesor) {
        return NextResponse.json(
          { error: 'El profesor especificado no existe' },
          { status: 400 }
        )
      }
    }
    
    // Convertir cantidadSt a número si viene como string
    const cantidadStNumber = cantidadSt ? parseInt(cantidadSt) : null
    
    const horario = await prisma.horario.update({
      where: { id },
      data: {
        diaSemana: diaSemana ? parseInt(diaSemana) : undefined,
        horaInicio,
        horaFin,
        semestre,
        grupo: grupo || null,
        cadi: cadi || null,
        activo: activo !== undefined ? activo : true,
        asignaturaId,
        aulaId,
        profesorId: profesorId || null,
        cantidadSt: cantidadStNumber, // Usar el número convertido
        actualizadoEn: new Date()
      },
      include: {
        asignatura: true,
        aula: true,
        profesor: true
      }
    })
    
    return NextResponse.json(horario, { status: 200 })
  } catch (error: any) {
    console.error('Error updating schedule:', error)
    
    if (error.code === 'P2002') {
      return NextResponse.json(
        { error: 'Ya existe un horario con estos datos' },
        { status: 400 }
      )
    } else {
      return NextResponse.json(
        { error: 'Error al actualizar horario' },
        { status: 500 }
      )
    }
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params
    
    // Verificar si el horario existe
    const horarioExistente = await prisma.horario.findUnique({
      where: { id }
    })
    
    if (!horarioExistente) {
      return NextResponse.json(
        { error: 'Horario no encontrado' },
        { status: 404 }
      )
    }
    
    await prisma.horario.delete({
      where: { id }
    })
    
    return NextResponse.json(
      { message: 'Horario eliminado correctamente' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error deleting schedule:', error)
    return NextResponse.json(
      { error: 'Error al eliminar horario' },
      { status: 500 }
    )
  }
}