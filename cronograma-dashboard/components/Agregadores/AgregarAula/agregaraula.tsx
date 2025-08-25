import type React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CrearAula } from "./actions/aulas";

interface AgregarAulaFormProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AgregarAulaForm({
  isOpen,
  onClose,
}: AgregarAulaFormProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
      <Card className="w-full max-w-md mx-auto bg-gradient-to-br from-gray-900 to-gray-800 border-2 border-blue-400/50 shadow-2xl shadow-blue-500/20">
        <CardHeader className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-t-lg">
          <CardTitle className="text-center font-bold text-xl font-mono">
            🏫 Nueva Aula
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <form action={CrearAula} className="space-y-4">
            <div className="space-y-2">
              <Label
                htmlFor="nombre"
                className="text-blue-300 font-semibold font-mono"
              >
                Id del Aula
              </Label>
              <Input
                name="id"
                id="id"
                type="number"
                placeholder="Numero del aula"
                className="border-2 border-blue-400/50 focus:border-blue-400 bg-gray-800/50 text-white"
              />
            </div>
            <div className="space-y-2">
              <Label
                htmlFor="nombre"
                className="text-blue-300 font-semibold font-mono"
              >
                Nombre del Aula
              </Label>
              <Input
                name="nombre"
                id="nombre"
                type="text"
                placeholder="Ej: A208"
                className="border-2 border-blue-400/50 focus:border-blue-400 bg-gray-800/50 text-white"
              />
            </div>
            <div className="space-y-2">
              <Label
                htmlFor="nombre"
                className="text-blue-300 font-semibold font-mono"
              >
                Capacidad del Aula
              </Label>
              <Input
                name="capacidad"
                id="capacidad"
                type="text"
                placeholder="Ej: 31"
                className="border-2 border-blue-400/50 focus:border-blue-400 bg-gray-800/50 text-white"
              />
            </div>
            <div className="space-y-2">
              <Label
                htmlFor="nombre"
                className="text-blue-300 font-semibold font-mono"
              >
                Edificio del Aula
              </Label>
              <Input
                name="edificio"
                id="edificio"
                type="text"
                placeholder="Ej: A"
                className="border-2 border-blue-400/50 focus:border-blue-400 bg-gray-800/50 text-white"
              />
            </div>
            <div className="space-y-2">
              <Label
                htmlFor="nombre"
                className="text-blue-300 font-semibold font-mono"
              >
                Piso del Aula
              </Label>
              <Input
                name="piso"
                id="piso"
                type="text"
                placeholder="Ej: Primer Piso"
                className="border-2 border-blue-400/50 focus:border-blue-400 bg-gray-800/50 text-white"
              />
            </div>
            <div className="flex gap-2">
              <Button
                type="button"
                onClick={onClose}
                variant="outline"
                className="flex-1 border-gray-500 text-gray-300 hover:bg-gray-700 bg-transparent"
              >
                Cancelar
              </Button>
              <Button
                type="submit"
                className="flex-1 bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white font-semibold"
              >
                Agregar Aula
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
