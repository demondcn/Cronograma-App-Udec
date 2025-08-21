"use server"
import prisma from '@/lib/db'
export async function CrearAula(formData: FormData) {
  const id = formData.get("id") 
  const nombre = formData.get("nombre")
  const capacidads = formData.get("capacidad")
  const edificio = formData.get("edificio")
  const piso = formData.get("piso")
 
  console.log(id,nombre, capacidads, edificio, piso)

  if (!id || !nombre || !capacidads || !edificio || !piso) {
    console.log("NO SE ENVIO NADA")
    return;
  }
  const capacidad = parseInt(capacidads as string, 10)
  //db logic
  const DebugCreate = await prisma.Aula.create({
    data: {
      id: id,
      nombre: nombre,
      capacidad: capacidad,
      edificio: edificio,
      piso: piso,
      actualizadoEn:  new Date(),
      activa: true

    }
  })
  console.log(DebugCreate);
}
