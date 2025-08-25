"use server"
import prisma from '@/lib/db'
export async function CrearMateria(formData: FormData) {
  const id = crypto.randomUUID()
  const nombre = formData.get("nombre")
  const codigo = formData.get("codigo")
  const creditosStr = formData.get("creditos")
  const semestreStr = formData.get("semestre")
  const programaId  = formData.get("programa")
  //console.log(nombre, codigo, programaId , semestreStr)
  
  if (!nombre || !codigo || !programaId || !semestreStr || !creditosStr) {
    console.log("Faltan datos obligatorios");
    //console.log({nombre, codigo, programaId , semestreStr, creditosStr});
    return;
  }
  //db logic
  const semestre = parseInt(semestreStr as string, 10) // <-- convierte a int
  const creditos = parseInt(creditosStr as string, 10) // <-- convierte a int
  const DebugCreate = await prisma.Asignatura.create({
    data: {
        id: id,
        nombre: nombre,
        codigo: codigo,
        programaId: programaId,
        semestre: semestre,
        creditos: creditos,
        activa:  true,
        actualizadoEn: new Date()
    }
  })
  //console.log(DebugCreate);
}
