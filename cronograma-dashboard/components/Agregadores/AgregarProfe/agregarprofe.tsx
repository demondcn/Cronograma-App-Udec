import type React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CrearProfe } from "./actions/profes";

interface AgregarProfesFormProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AgregarProfeForm({
  isOpen,
  onClose,
}: AgregarProfesFormProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
      <Card className="w-full max-w-md mx-auto bg-gradient-to-br from-gray-900 to-gray-800 border-2 border-yellow-400/50 shadow-2xl shadow-yellow-500/20">
        <CardHeader className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white rounded-t-lg">
          <CardTitle className="text-center font-bold text-xl font-mono">
            👨‍🏫 Nuevo Profesor
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <form action={CrearProfe} className="space-y-4">
            <div className="space-y-2">
              <Label
                htmlFor="nombre"
                className="text-yellow-300 font-semibold font-mono"
              >
                Nombre del Profe
              </Label>
              <Input
                name="nombre"
                id="nombre"
                type="text"
                placeholder="Ej: Juan Pérez"
                className="border-2 border-yellow-400/50 focus:border-yellow-400 bg-gray-800/50 text-white"
              />
            </div>
            <div className="space-y-2">
              <Label
                htmlFor="nombre"
                className="text-yellow-300 font-semibold font-mono"
              >
                Correo del Profe
              </Label>
              <Input
                name="correo"
                id="correo"
                type="text"
                placeholder="Ej: juanpere@gmail.com"
                className="border-2 border-yellow-400/50 focus:border-yellow-400 bg-gray-800/50 text-white"
              />
            </div>
            <div className="space-y-2">
              <Label
                htmlFor="nombre"
                className="text-yellow-300 font-semibold font-mono"
              >
                Telefono del Profe
              </Label>
              <Input
                name="telefono"
                id="telefono"
                type="text"
                placeholder="Ej: +57 3001234567"
                className="border-2 border-yellow-400/50 focus:border-yellow-400 bg-gray-800/50 text-white"
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
                className="flex-1 bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white font-semibold"
              >
                Crear
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
