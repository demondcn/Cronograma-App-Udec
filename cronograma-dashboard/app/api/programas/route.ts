import { NextRequest, NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function GET() {
  try {
    const programas = await prisma.programa.findMany({
      orderBy: { creadoEn: 'desc' }
    })
    return NextResponse.json(programas)
  } catch (error) {
    console.error('Error fetching programs:', error)
    return NextResponse.json(
      { error: 'Error al obtener programas' },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const { nombre, codigo, color, colorBrillo, colorTexto } = await request.json()
    
    if (!nombre || !codigo || !color || !colorBrillo || !colorTexto) {
      return NextResponse.json(
        { error: 'Faltan campos obligatorios' },
        { status: 400 }
      )
    }
    
    const programa = await prisma.programa.create({
      data: {
        nombre,
        codigo,
        color,
        colorBrillo,
        colorTexto,
        actualizadoEn: new Date()
      }
    })
    
    return NextResponse.json(programa, { status: 201 })
  } catch (error: any) {
    console.error('Error creating program:', error)
    
    if (error.code === 'P2002') {
      return NextResponse.json(
        { error: 'El código o nombre ya existe' },
        { status: 400 }
      )
    } else {
      return NextResponse.json(
        { error: 'Error al crear programa' },
        { status: 500 }
      )
    }
  }
}