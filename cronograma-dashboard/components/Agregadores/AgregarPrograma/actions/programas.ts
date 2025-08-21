"use server"
import prisma from '@/lib/db'
export async function CrearPrograma(formData: FormData) {
  const nombre = formData.get("nombre")
  const codigo = formData.get("codigo")
  const color = formData.get("color")
  const colorbrillo = formData.get("colorbrillo")
  const colortexto = formData.get("colortexto")

  console.log(nombre, codigo, color , colorbrillo, colortexto)
  
  if (!nombre || !codigo || !color || !colorbrillo || !colortexto){
    console.log("NO SE ENVIO NADA")
    return;
  }
  //db logic
  const DebugCreate = await prisma.Programa.create({
    data: {
        nombre: nombre,
        codigo: codigo,
        color: color,
        colorBrillo: colorbrillo,
        colorTexto: colortexto,
        actualizadoEn: new Date()
    }
  })
  console.log(DebugCreate);
}
