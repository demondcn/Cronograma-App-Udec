import type React from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CrearPrograma } from "./actions/programas"

interface AgregarProgramaFormProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function AgregarProgramaForm({ isOpen, onClose }: AgregarProgramaFormProps) {
    if (!isOpen) return null

    return (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
            <Card className="w-full max-w-md mx-auto bg-gradient-to-br from-cyan-50 to-emerald-50 border-2 border-emerald-400 shadow-lg shadow-emerald-200/50">
                <CardHeader className="bg-gradient-to-r from-emerald-500 to-cyan-500 text-white rounded-t-lg">
                    <CardTitle className="text-center font-bold text-xl">Agregar Nuevo Programa</CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                    <form action={CrearPrograma} className="space-y-4">

                        <div className="space-y-2">
                            <Label htmlFor="nombre" className="text-emerald-700 font-semibold">
                                Nombre del programa
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
                            <Label htmlFor="nombre" className="text-emerald-700 font-semibold">
                                Codigo del programa
                            </Label>
                            <Input
                                name="codigo"
                                id="codigo"
                                type="text"
                                placeholder="Ej: Cálculo Diferencial"
                                className="border-2 border-emerald-300 focus:border-emerald-500 focus:ring-emerald-500 bg-white/80"
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="nombre" className="text-emerald-700 font-semibold">
                                Color del programa
                            </Label>
                            <Input
                                name="color"
                                id="color"
                                type="text"
                                placeholder="Ej: Cálculo Diferencial"
                                className="border-2 border-emerald-300 focus:border-emerald-500 focus:ring-emerald-500 bg-white/80"
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="nombre" className="text-emerald-700 font-semibold">
                                ColorBrillo del programa
                            </Label>
                            <Input
                                name="colorbrillo"
                                id="colorbrillo"
                                type="text"
                                placeholder="Ej: Cálculo Diferencial"
                                className="border-2 border-emerald-300 focus:border-emerald-500 focus:ring-emerald-500 bg-white/80"
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="nombre" className="text-emerald-700 font-semibold">
                                ColorTexto del programa
                            </Label>
                            <Input
                                name="colortexto"
                                id="colortexto"
                                type="text"
                                placeholder="Ej: Cálculo Diferencial"
                                className="border-2 border-emerald-300 focus:border-emerald-500 focus:ring-emerald-500 bg-white/80"
                            />
                        </div>
                        <div className="flex gap-2">
                            <Button
                                type="submit"
                                className="flex-1 bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-white font-semibold py-3 shadow-lg shadow-emerald-300/50 transition-all duration-300 hover:shadow-xl hover:shadow-emerald-400/50"
                            >
                                Agregar Programa
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
