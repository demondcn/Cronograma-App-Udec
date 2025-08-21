import type React from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CrearAula } from "./actions/aulas"

interface AgregarAulaFormProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function AgregarAulaForm({ isOpen, onClose }: AgregarAulaFormProps) {
    if (!isOpen) return null

    return (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
            <Card className="w-full max-w-md mx-auto bg-gradient-to-br from-cyan-50 to-emerald-50 border-2 border-emerald-400 shadow-lg shadow-emerald-200/50">
                <CardHeader className="bg-gradient-to-r from-emerald-500 to-cyan-500 text-white rounded-t-lg">
                    <CardTitle className="text-center font-bold text-xl">Agregar Nuevo Aula</CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                    <form action={CrearAula} className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="nombre" className="text-emerald-700 font-semibold">
                                Id del Aula
                            </Label>
                            <Input
                                name="id"
                                id="id"
                                type="text"
                                placeholder="Ej: Cálculo Diferencial"
                                className="border-2 border-emerald-300 focus:border-emerald-500 focus:ring-emerald-500 bg-white/80"
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="nombre" className="text-emerald-700 font-semibold">
                                Nombre del Aula
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
                                Capacidad del Aula
                            </Label>
                            <Input
                                name="capacidad"
                                id="capacidad"
                                type="text"
                                placeholder="Ej: Cálculo Diferencial"
                                className="border-2 border-emerald-300 focus:border-emerald-500 focus:ring-emerald-500 bg-white/80"
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="nombre" className="text-emerald-700 font-semibold">
                                Edificio del Aula
                            </Label>
                            <Input
                                name="edificio"
                                id="edificio"
                                type="text"
                                placeholder="Ej: Cálculo Diferencial"
                                className="border-2 border-emerald-300 focus:border-emerald-500 focus:ring-emerald-500 bg-white/80"
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="nombre" className="text-emerald-700 font-semibold">
                                Piso del Aula
                            </Label>
                            <Input
                                name="piso"
                                id="piso"
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
                                Agregar Aula
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
