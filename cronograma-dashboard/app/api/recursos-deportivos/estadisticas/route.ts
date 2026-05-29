import { NextResponse } from "next/server";

import prisma from "@/lib/db";

export async function GET() {
  try {
    const [
      recepcionadas,
      pendientes,
      devoluciones,
      canceladas,
      elementosActivos,
      elementosBajaDisponibilidad,
    ] = await Promise.all([
      prisma.solicitudDeportiva.count({
        where: { estado: "RECEPCIONADA" },
      }),
      prisma.solicitudDeportiva.count({
        where: { estado: "PENDIENTE" },
      }),
      prisma.solicitudDeportiva.count({
        where: { estado: "DEVOLUCION" },
      }),
      prisma.solicitudDeportiva.count({
        where: { estado: "CANCELADA" },
      }),
      prisma.elementoDeportivo.count({
        where: { activo: true },
      }),
      prisma.elementoDeportivo.count({
        where: {
          activo: true,
          cantidadDisponible: {
            lte: 2,
          },
        },
      }),
    ]);

    return NextResponse.json({
      ok: true,
      data: {
        solicitudes: {
          RECEPCIONADA: recepcionadas,
          PENDIENTE: pendientes,
          DEVOLUCION: devoluciones,
          CANCELADA: canceladas,
        },
        elementosActivos,
        elementosBajaDisponibilidad,
      },
    });
  } catch (error) {
    console.error("Error getting sports stats:", error);

    return NextResponse.json(
      { ok: false, message: "Error al obtener estadísticas deportivas." },
      { status: 500 }
    );
  }
}
