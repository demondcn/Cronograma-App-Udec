import { NextResponse } from "next/server";

import prisma from "@/lib/db";

function normalizeDocument(value: string) {
  return String(value || "")
    .trim()
    .replace(/[\s.-]+/g, "");
}

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ documento: string }> }
) {
  try {
    const { documento } = await params;
    const cleanDocument = normalizeDocument(documento);

    if (!cleanDocument) {
      return NextResponse.json(
        { ok: false, message: "Documento no válido." },
        { status: 400 }
      );
    }

    const estudiante = await prisma.estudiante.findUnique({
      where: { cc: cleanDocument },
      select: { id: true },
    });

    const activeRequest = await prisma.solicitudDeportiva.findFirst({
      where: {
        OR: [
          ...(estudiante ? [{ estudianteId: estudiante.id }] : []),
          { documentoSolicitante: cleanDocument },
        ],
        estado: {
          in: ["RECEPCIONADA", "PENDIENTE"],
        },
      },
      orderBy: { fechaSolicitud: "desc" },
      include: {
        detalles: true,
      },
    });

    return NextResponse.json({
      ok: true,
      hasActiveRequest: Boolean(activeRequest),
      data: activeRequest,
    });
  } catch (error) {
    console.error("Error checking active sports request:", error);

    return NextResponse.json(
      { ok: false, message: "Error al consultar solicitudes activas." },
      { status: 500 }
    );
  }
}
