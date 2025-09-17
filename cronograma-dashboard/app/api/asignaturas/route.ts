import { NextRequest, NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function GET() {
  try {
    const asignaturas = await prisma.asignatura.findMany({
      include: { programa: true },
      orderBy: { creadoEn: 'desc' }
    })
    return NextResponse.json(asignaturas)
  } catch (error) {
    console.error('Error fetching subjects:', error)
    return NextResponse.json(
      { error: 'Error al obtener asignaturas' },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const { nombre, codigo, programaId, semestre, creditos, activa } = await request.json()
    
    if (!nombre || !codigo || !programaId) {
      return NextResponse.json(
        { error: 'Faltan campos obligatorios' },
        { status: 400 }
      )
    }
    
    // Verificar si el programa existe
    const programa = await prisma.programa.findUnique({
      where: { id: programaId }
    })
    
    if (!programa) {
      return NextResponse.json(
        { error: 'El programa especificado no existe' },
        { status: 400 }
      )
    }
    
    const asignatura = await prisma.asignatura.create({
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
    
    return NextResponse.json(asignatura, { status: 201 })
  } catch (error: any) {
    console.error('Error creating subject:', error)
    
    if (error.code === 'P2002') {
      return NextResponse.json(
        { error: 'El código ya existe' },
        { status: 400 }
      )
    } else {
      return NextResponse.json(
        { error: 'Error al crear asignatura' },
        { status: 500 }
      )
    }
  }
}