"use server"
import prisma from '@/lib/db'
export async function CrearProfe(formData: FormData) {
  const nombre= formData.get("nombre")
  const correo= formData.get("correo")
  const telefono= formData.get("telefono")
  
  console.log(nombre, correo, telefono)

  if (!nombre || !correo || !telefono) {
    console.log("NO SE ENVIO NADA")
    return;
  }
  //db logic
  const DebugCreate = await prisma.Profesor.create({
    data: {
      nombre: nombre,
      correo: correo,
      telefono: telefono,
      activo: true,
      actualizadoEn: new Date(),

    }
  })
  console.log(DebugCreate);
}
