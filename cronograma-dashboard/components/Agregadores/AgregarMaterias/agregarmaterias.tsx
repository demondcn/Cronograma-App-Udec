import type React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CrearMateria } from "./actions/materias";
// const programas = [
//   { id: 1, nombre: "ADMINISTRACIÓN DE EMPRESAS" },
//   { id: 2, nombre: "INGENIERÍA DE SOFTWARE" },
//   { id: 3, nombre: "INGENIERÍA INDUSTRIAL" },
//   { id: 4, nombre: "CIENCIAS DEL DEPORTE" },
// ];
interface Programa {
  id: string;
  nombre: string;
}

interface AgregarMateriaFormProps {
  isOpen: boolean;
  onClose: () => void;
  programas: Programa[];
}

export default function AgregarMateriaForm({
  isOpen,
  onClose,
  programas,
}: AgregarMateriaFormProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
      <Card className="w-full max-w-md mx-auto bg-gradient-to-br from-gray-900 to-gray-800 border-2 border-emerald-400/50 shadow-2xl shadow-emerald-500/20">
        <CardHeader className="bg-gradient-to-r from-emerald-500 to-cyan-500 text-white rounded-t-lg">
          <CardTitle className="text-center font-bold text-xl font-mono">
            📚 Nueva Materia
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <form action={CrearMateria} className="space-y-4">
            <div className="space-y-2">
              <Label
                htmlFor="nombre"
                className="text-emerald-300 font-semibold font-mono"
              >
                Nombre de la Materia
              </Label>
              <Input
                name="nombre"
                id="nombre"
                type="text"
                placeholder="Ej: Pensamiento Algorítmico"
                className="border-2 border-emerald-400/50 focus:border-emerald-400 bg-gray-800/50 text-white"
                required
              />
            </div>

            <div className="space-y-2">
              <Label
                htmlFor="codigo"
                className="text-emerald-300 font-semibold font-mono"
              >
                Código
              </Label>
              <Input
                name="codigo"
                id="codigo"
                type="text"
                placeholder="Ej: PA101"
                className="border-2 border-emerald-400/50 focus:border-emerald-400 bg-gray-800/50 text-white"
                required
              />
            </div>

            <div className="space-y-2">
              <Label
                htmlFor="creditos"
                className="text-emerald-300 font-semibold font-mono"
              >
                Créditos
              </Label>
              <Input
                name="creditos"
                id="creditos"
                type="number"
                min="1"
                max="6"
                placeholder="Ej: 3"
                className="border-2 border-emerald-400/50 focus:border-emerald-400 bg-gray-800/50 text-white"
                required
              />
            </div>

            <div className="space-y-2">
              <Label
                htmlFor="semestre"
                className="text-emerald-300 font-semibold font-mono"
              >
                Semestre
              </Label>
              <Input
                name="semestre"
                id="semestre"
                type="number"
                min="1"
                max="10"
                placeholder="Ej: 1"
                className="border-2 border-emerald-400/50 focus:border-emerald-400 bg-gray-800/50 text-white"
                required
              />
            </div>

            <div className="space-y-2">
              <Label
                htmlFor="programaId"
                className="text-emerald-300 font-semibold font-mono"
              >
                Programa Académico
              </Label>
              <Select name="programa" required>
                <SelectTrigger className="border-2 border-emerald-400/50 focus:border-emerald-400 bg-gray-800/50 text-white">
                  <SelectValue placeholder="Selecciona un programa" />
                </SelectTrigger>
                <SelectContent className="bg-gray-800 border-emerald-400/50">
                  {programas.map((programa) => (
                    <SelectItem
                      key={programa.id}
                      value={programa.id.toString()}
                      className="text-white hover:bg-emerald-500/20"
                    >
                      {programa.nombre}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
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
                className="flex-1 bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-white font-semibold"
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
