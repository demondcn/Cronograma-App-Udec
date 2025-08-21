"use server";
import prisma from "@/lib/db";
export async function CrearProfe(formData: FormData) {
  const id = formData.get("id");
  const nombre = formData.get("nombre");
  const correo = formData.get("correo");
  const telefono = formData.get("telefono");

  console.log(nombre, correo, telefono);

  if (!nombre || !correo || !telefono) {
    console.log("NO SE ENVIO NADA");
    return;
  }
  //db logic
  const DebugCreate = await prisma.Profesor.create({
    data: {
      id: id,
      nombre: nombre,
      correo: correo,
      telefono: telefono,
      activo: true,
      actualizadoEn: new Date(),
    },
  });
  console.log(DebugCreate);
}
