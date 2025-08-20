import type React from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CrearMateria } from "./actions/materias"
const programas = [
    { id: 1, nombre: "ADMINISTRACIÓN DE EMPRESAS" },
    { id: 2, nombre: "INGENIERÍA DE SOFTWARE" },
    { id: 3, nombre: "INGENIERÍA INDUSTRIAL" },
    { id: 4, nombre: "CIENCIAS DEL DEPORTE" },
]


interface AgregarMateriaFormProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function AgregarMateriaForm({ isOpen, onClose }: AgregarMateriaFormProps) {
    if (!isOpen) return null

    return (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
            <Card className="w-full max-w-md mx-auto bg-gradient-to-br from-cyan-50 to-emerald-50 border-2 border-emerald-400 shadow-lg shadow-emerald-200/50">
                <CardHeader className="bg-gradient-to-r from-emerald-500 to-cyan-500 text-white rounded-t-lg">
                    <CardTitle className="text-center font-bold text-xl">Agregar Nueva Materia</CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                    <form action={CrearMateria} className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="nombre" className="text-emerald-700 font-semibold">
                                Nombre de la Materia
                            </Label>
                            <Input
                                name="nombre"
                                id="nombre"
                                type="text"
                                placeholder="Ej: Cálculo Diferencial"
                                className="border-2 border-emerald-300 focus:border-emerald-500 focus:ring-emerald-500 bg-white/80"
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="codigo" className="text-emerald-700 font-semibold">
                                Código
                            </Label>
                            <Input
                                name="codigo"
                                id="codigo"
                                type="text"
                                placeholder="Ej: MAT101"
                                className="border-2 border-emerald-300 focus:border-emerald-500 focus:ring-emerald-500 bg-white/80"
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="programa" className="text-emerald-700 font-semibold">
                                Programa
                            </Label>
                            <Select name="programa">
                                <SelectTrigger className="...">
                                    <SelectValue placeholder="Selecciona un programa" />
                                </SelectTrigger>
                                <SelectContent className="...">
                                    {programas.map((programa) => (
                                        <SelectItem
                                            key={programa.id}
                                            value={programa.id.toString()}
                                            className="hover:bg-emerald-50 focus:bg-emerald-100"
                                        >
                                            {programa.nombre}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>

                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="semestre" className="text-emerald-700 font-semibold">
                                Semestre
                            </Label>
                            <Select
                                name="semestre"
                            >
                                <SelectTrigger className="border-2 border-emerald-300 focus:border-emerald-500 focus:ring-emerald-500 bg-white/80">
                                    <SelectValue placeholder="Selecciona el semestre" />
                                </SelectTrigger>
                                <SelectContent className="bg-white border-emerald-300">
                                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((sem) => (
                                        <SelectItem key={sem} value={sem.toString()} className="hover:bg-emerald-50 focus:bg-emerald-100">
                                            {sem}° Semestre
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>

                        <div className="flex gap-2">
                            <Button
                                type="submit"
                                className="flex-1 bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-white font-semibold py-3 shadow-lg shadow-emerald-300/50 transition-all duration-300 hover:shadow-xl hover:shadow-emerald-400/50"
                            >
                                Agregar Materia
                            </Button>
                            <Button
                                type="button"
                                onClick={onClose}
                                variant="outline"
                                className="flex-1 border-emerald-500 text-emerald-600 hover:bg-emerald-50"
                            >
                                Cancelar
                            </Button>
                        </div>
                    </form>
                </CardContent>
            </Card>
        </div>
    )
}
