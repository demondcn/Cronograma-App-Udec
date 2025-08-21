"use server"
import prisma from '@/lib/db'
export async function CrearMateria(formData: FormData) {
  const id = formData.get("id")
  const nombre = formData.get("nombre")
  const codigo = formData.get("codigo")
  const programaId  = formData.get("programa")
  const semestreStr = formData.get("semestre")
  console.log(nombre, codigo, programaId , semestreStr)
  
  if (!nombre || !codigo || !programaId || !semestreStr){
    return;
  }
  //db logic
  const semestre = parseInt(semestreStr as string, 10) // <-- convierte a int
  const DebugCreate = await prisma.Asignatura.create({
    data: {
        id: id,
        nombre: nombre,
        codigo: codigo,
        programaId: programaId,
        semestre: semestre,
        creditos: 0,
        activa:  true,
        actualizadoEn: new Date()
    }
  })
  console.log(DebugCreate);
}
