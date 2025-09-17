import { NextRequest, NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function GET() {
  try {
    const horarios = await prisma.horario.findMany({
      include: {
        asignatura: true,
        aula: true,
        profesor: true
      },
      orderBy: { creadoEn: 'desc' }
    })
    return NextResponse.json(horarios, { status: 200 })
  } catch (error) {
    console.error('Error fetching schedules:', error)
    return NextResponse.json(
      { error: 'Error al obtener horarios' },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
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
      cantidadSt 
    } = body
    
    if (!diaSemana || !horaInicio || !horaFin || !semestre || !asignaturaId || !aulaId) {
      return NextResponse.json(
        { error: 'Faltan campos obligatorios' },
        { status: 400 }
      )
    }
    
    // Verificar si la asignatura existe
    const asignatura = await prisma.asignatura.findUnique({
      where: { id: asignaturaId }
    })
    
    if (!asignatura) {
      return NextResponse.json(
        { error: 'La asignatura especificada no existe' },
        { status: 400 }
      )
    }
    
    // Verificar si el aula existe
    const aula = await prisma.aula.findUnique({
      where: { id: aulaId }
    })
    
    if (!aula) {
      return NextResponse.json(
        { error: 'El aula especificada no existe' },
        { status: 400 }
      )
    }
    
    // Si se especifica un profesor, verificar que existe
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
    
    const horario = await prisma.horario.create({
      data: {
        diaSemana: parseInt(diaSemana),
        horaInicio,
        horaFin,
        semestre,
        grupo: grupo || null,
        activo: activo !== undefined ? activo : true,
        asignaturaId,
        aulaId,
        profesorId: profesorId || null,
        cantidadSt: cantidadSt || null,
        actualizadoEn: new Date()
      },
      include: {
        asignatura: true,
        aula: true,
        profesor: true
      }
    })
    
    return NextResponse.json(horario, { status: 201 })
  } catch (error: any) {
    console.error('Error creating schedule:', error)
    
    if (error.code === 'P2002') {
      return NextResponse.json(
        { error: 'Ya existe un horario con estos datos' },
        { status: 400 }
      )
    } else {
      return NextResponse.json(
        { error: 'Error al crear horario' },
        { status: 500 }
      )
    }
  }
}