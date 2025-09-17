import { NextRequest, NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function GET() {
  try {
    const profesores = await prisma.profesor.findMany({
      orderBy: { creadoEn: 'desc' }
    })
    return NextResponse.json(profesores, { status: 200 })
  } catch (error) {
    console.error('Error fetching teachers:', error)
    return NextResponse.json(
      { error: 'Error al obtener profesores' },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { nombre, correo, telefono, activo } = body
    
    if (!nombre || !correo) {
      return NextResponse.json(
        { error: 'Nombre y correo son obligatorios' },
        { status: 400 }
      )
    }
    
    const profesor = await prisma.profesor.create({
      data: {
        nombre,
        correo,
        telefono: telefono || null,
        activo: activo !== undefined ? activo : true,
        actualizadoEn: new Date()
      }
    })
    
    return NextResponse.json(profesor, { status: 201 })
  } catch (error: any) {
    console.error('Error creating teacher:', error)
    
    if (error.code === 'P2002') {
      return NextResponse.json(
        { error: 'El correo ya existe' },
        { status: 400 }
      )
    } else {
      return NextResponse.json(
        { error: 'Error al crear profesor' },
        { status: 500 }
      )
    }
  }
}