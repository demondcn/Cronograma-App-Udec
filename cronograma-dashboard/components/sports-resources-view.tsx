"use client";

import Link from "next/link";
import { type ReactNode, useEffect, useMemo, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  Check,
  CheckCircle,
  ClipboardList,
  Dumbbell,
  Eye,
  FileText,
  Lock,
  Minus,
  Package,
  Pencil,
  Plus,
  RefreshCw,
  Save,
  Send,
  Shield,
  Trash2,
  Trophy,
  User,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

type SportsRequestStatus =
  | "RECEPCIONADA"
  | "PENDIENTE"
  | "ENTREGADO"
  | "DEVOLUCION"
  | "CANCELADA";

type SportsUserRole = "ESTUDIANTE" | "DOCENTE" | "ADMINISTRATIVO" | "OTRO";

type PublicStep = 1 | 2 | 3;

interface SportsItemSelection {
  id: string;
  name: string;
  detail: string;
  quantity: number;
}

interface SportsRequest {
  id: string;
  documentNumber: string;
  role: SportsUserRole;
  selectedItems: SportsItemSelection[];
  requestDate: string;
  requestDay: string;
  status: SportsRequestStatus;
  observations: string;
  elements?: string;
}

interface SportsRequestForm {
  documentNumber: string;
  role: SportsUserRole;
  elementsText: string;
  status: SportsRequestStatus;
  observations: string;
}

interface SportsInventoryItem {
  id: string;
  name: string;
  detail: string;
  available: number;
  icon: string;
  tags: string[];
}

const SPORTS_REQUESTS_STORAGE_KEY = "sports_requests";
const SPORTS_ADMIN_SESSION_KEY = "sports_admin_authenticated";
const SPORTS_ADMIN_PASSWORD = "70407";

const roleOptions: SportsUserRole[] = [
  "ESTUDIANTE",
  "DOCENTE",
  "ADMINISTRATIVO",
  "OTRO",
];

const statusOptions: SportsRequestStatus[] = [
  "RECEPCIONADA",
  "PENDIENTE",
  "ENTREGADO",
  "DEVOLUCION",
  "CANCELADA",
];

const dayNames = [
  "DOMINGO",
  "LUNES",
  "MARTES",
  "MIÉRCOLES",
  "JUEVES",
  "VIERNES",
  "SÁBADO",
];

const sportsInventory: SportsInventoryItem[] = [
  {
    id: "balon-futbol",
    name: "Balón de Fútbol",
    detail: "Golty - Amarillo",
    available: 3,
    icon: "⚽",
    tags: ["Golty", "Amarillo"],
  },
  {
    id: "balon-voleibol",
    name: "Balón de Voleibol",
    detail: "Mikasa - Azul/Amarillo",
    available: 4,
    icon: "🏐",
    tags: ["Mikasa", "Azul/Amarillo"],
  },
  {
    id: "raqueta-tenis",
    name: "Raqueta de Tenis",
    detail: "Genérica",
    available: 6,
    icon: "🎾",
    tags: ["Tenis"],
  },
  {
    id: "conos",
    name: "Conos",
    detail: "Naranja",
    available: 20,
    icon: "🔶",
    tags: ["Naranja"],
  },
  {
    id: "petos",
    name: "Petos",
    detail: "Colores surtidos",
    available: 15,
    icon: "🎽",
    tags: ["Surtidos"],
  },
  {
    id: "platillos",
    name: "Platillos",
    detail: "Naranja/Amarillo",
    available: 30,
    icon: "🟠",
    tags: ["Naranja", "Amarillo"],
  },
  {
    id: "aros",
    name: "Aros",
    detail: "Plástico",
    available: 10,
    icon: "⭕",
    tags: ["Plástico"],
  },
];

const emptyAdminForm: SportsRequestForm = {
  documentNumber: "",
  role: "ESTUDIANTE",
  elementsText: "",
  status: "RECEPCIONADA",
  observations: "",
};

const roleStyles: Record<SportsUserRole, string> = {
  ESTUDIANTE: "border-sky-300/40 bg-sky-400/15 text-sky-100",
  DOCENTE: "border-orange-300/50 bg-orange-400/20 text-orange-100",
  ADMINISTRATIVO: "border-violet-300/40 bg-violet-400/15 text-violet-100",
  OTRO: "border-gray-300/30 bg-gray-400/15 text-gray-100",
};

const statusStyles: Record<SportsRequestStatus, string> = {
  RECEPCIONADA: "border-yellow-300/50 bg-yellow-400/20 text-yellow-100",
  PENDIENTE: "border-red-300/50 bg-red-500/20 text-red-100",
  ENTREGADO: "border-blue-300/50 bg-blue-500/20 text-blue-100",
  DEVOLUCION: "border-emerald-300/50 bg-emerald-500/20 text-emerald-100",
  CANCELADA: "border-gray-300/40 bg-gray-500/20 text-gray-100",
};

const publicSteps: Array<{
  id: PublicStep;
  label: string;
  icon: typeof ClipboardList;
}> = [
  { id: 1, label: "Tus Datos", icon: ClipboardList },
  { id: 2, label: "Elementos", icon: Package },
  { id: 3, label: "Confirmar", icon: Send },
];

function getTodayRequestDate() {
  const now = new Date();

  return {
    requestDate: now.toLocaleDateString("es-CO", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    }),
    requestDay: dayNames[now.getDay()],
  };
}

function createRequestId() {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) {
    return crypto.randomUUID();
  }

  return `${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

function isSportsRole(value: unknown): value is SportsUserRole {
  return typeof value === "string" && roleOptions.includes(value as SportsUserRole);
}

function isSportsStatus(value: unknown): value is SportsRequestStatus {
  return (
    typeof value === "string" &&
    statusOptions.includes(value as SportsRequestStatus)
  );
}

function normalizeItems(
  value: unknown,
  legacyText: unknown,
  requestId: string
): SportsItemSelection[] {
  if (Array.isArray(value)) {
    return value
      .map((item, index) => {
        if (!item || typeof item !== "object") {
          return null;
        }

        const rawItem = item as Partial<SportsItemSelection>;
        const quantity = Number(rawItem.quantity);

        return {
          id: String(rawItem.id || `${requestId}-item-${index + 1}`),
          name: String(rawItem.name || "Elemento deportivo"),
          detail: String(rawItem.detail || ""),
          quantity: Number.isFinite(quantity) && quantity > 0 ? quantity : 1,
        };
      })
      .filter((item): item is SportsItemSelection => item !== null);
  }

  if (typeof legacyText === "string" && legacyText.trim()) {
    return [
      {
        id: `${requestId}-legacy-item`,
        name: legacyText.trim(),
        detail: "Registro anterior",
        quantity: 1,
      },
    ];
  }

  return [];
}

function normalizeRequest(value: unknown, index: number): SportsRequest | null {
  if (!value || typeof value !== "object") {
    return null;
  }

  const rawRequest = value as Partial<SportsRequest>;
  const id = String(rawRequest.id || `sports-request-${index + 1}`);
  const documentNumber = String(rawRequest.documentNumber || "").trim();

  if (!documentNumber) {
    return null;
  }

  return {
    id,
    documentNumber,
    role: isSportsRole(rawRequest.role) ? rawRequest.role : "OTRO",
    selectedItems: normalizeItems(
      rawRequest.selectedItems,
      rawRequest.elements,
      id
    ),
    requestDate: String(rawRequest.requestDate || ""),
    requestDay: String(rawRequest.requestDay || ""),
    status: isSportsStatus(rawRequest.status)
      ? rawRequest.status
      : "RECEPCIONADA",
    observations: String(rawRequest.observations || ""),
  };
}

function readStoredRequests() {
  if (typeof window === "undefined") {
    return [];
  }

  try {
    const rawValue = window.localStorage.getItem(SPORTS_REQUESTS_STORAGE_KEY);
    const parsedValue = rawValue ? JSON.parse(rawValue) : [];

    if (!Array.isArray(parsedValue)) {
      return [];
    }

    return parsedValue
      .map((item, index) => normalizeRequest(item, index))
      .filter((item): item is SportsRequest => item !== null);
  } catch {
    return [];
  }
}

function saveStoredRequests(requests: SportsRequest[]) {
  if (typeof window === "undefined") {
    return;
  }

  window.localStorage.setItem(
    SPORTS_REQUESTS_STORAGE_KEY,
    JSON.stringify(requests)
  );
  window.dispatchEvent(new Event("sports_requests_updated"));
}

function formatSelectedItems(request: SportsRequest) {
  if (request.selectedItems.length === 0) {
    return "Sin elementos";
  }

  return request.selectedItems
    .map((item) =>
      item.detail
        ? `${item.quantity} x ${item.name} (${item.detail})`
        : `${item.quantity} x ${item.name}`
    )
    .join(", ");
}

function selectedItemsToEditText(request: SportsRequest) {
  return request.selectedItems
    .map((item) =>
      item.detail
        ? `${item.quantity} x ${item.name} - ${item.detail}`
        : `${item.quantity} x ${item.name}`
    )
    .join("\n");
}

function parseItemsFromText(text: string, requestId: string) {
  const lines = text
    .split(/\n|,/)
    .map((line) => line.trim())
    .filter(Boolean);

  return lines.map((line, index) => {
    const match = line.match(/^(\d+)\s*x\s*(.+?)(?:\s*[-–]\s*(.+))?$/i);

    return {
      id: `${requestId}-edited-item-${index + 1}`,
      name: match ? match[2].trim() : line,
      detail: match?.[3]?.trim() || "",
      quantity: match ? Math.max(1, Number(match[1])) : 1,
    };
  });
}

export function SportsResourcesView() {
  const [currentStep, setCurrentStep] = useState<PublicStep>(1);
  const [documentNumber, setDocumentNumber] = useState("");
  const [role, setRole] = useState<SportsUserRole | "">("");
  const [quantities, setQuantities] = useState<Record<string, number>>({});
  const [formError, setFormError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const selectedItems = useMemo(
    () =>
      sportsInventory
        .map((item) => ({
          id: item.id,
          name: item.name,
          detail: item.detail,
          quantity: quantities[item.id] || 0,
        }))
        .filter((item) => item.quantity > 0),
    [quantities]
  );

  const selectedTotal = useMemo(
    () => selectedItems.reduce((total, item) => total + item.quantity, 0),
    [selectedItems]
  );

  const summaryDate = getTodayRequestDate();

  const updateQuantity = (item: SportsInventoryItem, change: number) => {
    setSuccessMessage("");
    setFormError("");
    setQuantities((currentQuantities) => {
      const currentValue = currentQuantities[item.id] || 0;
      const nextValue = Math.min(
        item.available,
        Math.max(0, currentValue + change)
      );

      return {
        ...currentQuantities,
        [item.id]: nextValue,
      };
    });
  };

  const goToDataStep = () => {
    setFormError("");
    setCurrentStep(1);
  };

  const goToItemsStep = () => {
    const cleanDocument = documentNumber.trim();

    if (!cleanDocument || !role) {
      setFormError("Completa el número de documento y selecciona tu rol.");
      return;
    }

    setFormError("");
    setSuccessMessage("");
    setCurrentStep(2);
  };

  const goToConfirmStep = () => {
    if (selectedTotal === 0) {
      setFormError("Selecciona al menos un elemento deportivo.");
      return;
    }

    setFormError("");
    setCurrentStep(3);
  };

  const submitRequest = () => {
    const cleanDocument = documentNumber.trim();

    if (!cleanDocument || !role || selectedItems.length === 0) {
      setFormError("Completa todos los pasos antes de enviar la solicitud.");
      return;
    }

    const requestDate = getTodayRequestDate();
    const currentRequests = readStoredRequests();
    const newRequest: SportsRequest = {
      id: createRequestId(),
      documentNumber: cleanDocument,
      role,
      selectedItems,
      requestDate: requestDate.requestDate,
      requestDay: requestDate.requestDay,
      status: "RECEPCIONADA",
      observations: "",
    };

    saveStoredRequests([newRequest, ...currentRequests]);
    setDocumentNumber("");
    setRole("");
    setQuantities({});
    setFormError("");
    setSuccessMessage("Solicitud enviada correctamente.");
    setCurrentStep(1);
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#020617] text-white">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#020617] via-[#021f17] to-[#00110c]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(250,204,21,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(250,204,21,0.08)_1px,transparent_1px)] bg-[size:40px_40px]" />
      <div className="pointer-events-none absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-transparent via-amber-300/80 to-transparent" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-transparent via-orange-500/80 to-transparent" />

      <div className="relative z-10">
        <PublicHeader />

        <div className="mx-auto flex w-full max-w-5xl flex-col gap-8 px-4 py-8 sm:px-6 lg:px-8">
          <StepIndicator currentStep={currentStep} />

          {successMessage && (
            <div className="mx-auto w-full max-w-3xl rounded-xl border border-emerald-300/45 bg-emerald-500/15 px-4 py-3 text-sm font-semibold text-emerald-100 shadow-lg shadow-emerald-500/10">
              {successMessage}
            </div>
          )}

          <Card className="mx-auto w-full max-w-3xl border-amber-300/35 bg-[#031b18]/90 text-white shadow-2xl shadow-orange-500/20 backdrop-blur-sm">
            <CardContent className="px-5 py-8 sm:px-9 sm:py-10">
            {currentStep === 1 && (
              <section className="mx-auto max-w-md space-y-7">
                <StepTitle
                  icon={<ClipboardList className="h-6 w-6" />}
                  title="Ingresa tus Datos"
                  description="Completa la información para realizar el préstamo"
                />

                <div className="grid gap-5">
                  <div className="grid gap-2">
                    <label className="flex items-center gap-2 text-sm font-bold text-amber-100">
                      <User className="h-4 w-4 text-orange-400" />
                      Número de Documento
                    </label>
                    <Input
                      value={documentNumber}
                      onChange={(event) => {
                        setDocumentNumber(event.target.value);
                        setFormError("");
                      }}
                      inputMode="numeric"
                      placeholder="Ingresa tu número de documento"
                      className="h-11 border-amber-300/35 bg-black/35 text-gray-100 placeholder:text-slate-400 focus-visible:border-orange-400 focus-visible:ring-orange-500/30"
                    />
                    <span className="text-xs text-slate-400">
                      Ingresa tu cédula o carné estudiantil
                    </span>
                  </div>

                  <div className="grid gap-2">
                    <label className="flex items-center gap-2 text-sm font-bold text-amber-100">
                      <ClipboardList className="h-4 w-4 text-orange-400" />
                      Rol en la Institución
                    </label>
                    <Select
                      value={role}
                      onValueChange={(value) => {
                        setRole(value as SportsUserRole);
                        setFormError("");
                      }}
                    >
                      <SelectTrigger className="h-11 w-full border-amber-300/35 bg-black/35 text-gray-100 focus:ring-orange-500/30 sm:w-52">
                        <SelectValue placeholder="Selecciona tu rol" />
                      </SelectTrigger>
                      <SelectContent className="border-amber-300/30 bg-gray-950 text-amber-50">
                        {roleOptions.map((roleOption) => (
                          <SelectItem key={roleOption} value={roleOption}>
                            {roleOption}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <StepError message={formError} />

                <div className="flex justify-end">
                  <Button
                    type="button"
                    onClick={goToItemsStep}
                    className="bg-orange-500 px-5 font-bold text-white shadow-lg shadow-orange-500/30 hover:bg-orange-600"
                  >
                    Continuar
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
              </section>
            )}

            {currentStep === 2 && (
              <section className="space-y-7">
                <StepTitle
                  icon={<Package className="h-6 w-6" />}
                  title="Selecciona los Elementos"
                  description="Elige los elementos deportivos que deseas solicitar"
                />

                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {sportsInventory.map((item) => {
                    const quantity = quantities[item.id] || 0;
                    const isSelected = quantity > 0;

                    return (
                      <div
                        key={item.id}
                        className={`relative flex min-h-[252px] flex-col items-center justify-between rounded-2xl border p-5 text-center transition-all ${
                          isSelected
                            ? "border-orange-400 bg-orange-500/10 shadow-xl shadow-orange-500/25"
                            : "border-amber-300/20 bg-black/30 shadow-lg shadow-black/20 hover:-translate-y-0.5 hover:border-orange-400/70 hover:bg-orange-500/10 hover:shadow-orange-500/20"
                        }`}
                      >
                        {isSelected && (
                          <span className="absolute right-3 top-3 flex h-7 w-7 items-center justify-center rounded-full bg-orange-500 text-white shadow-lg shadow-orange-500/40">
                            <Check className="h-4 w-4" />
                          </span>
                        )}

                        <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-amber-300/60 bg-gradient-to-br from-amber-300/25 via-orange-500/25 to-yellow-300/20 text-3xl shadow-lg shadow-amber-500/20">
                          <span aria-hidden="true">{item.icon}</span>
                        </div>

                        <div className="space-y-2">
                          <h3 className="font-black text-amber-50">
                            {item.name}
                          </h3>
                          <div className="flex flex-wrap justify-center gap-2">
                            {item.tags.map((detailPart) => (
                              <span
                                key={`${item.id}-${detailPart}`}
                                className="rounded-full border border-amber-300/35 bg-amber-300/10 px-2.5 py-1 text-[11px] font-black text-amber-100"
                              >
                                {detailPart}
                              </span>
                            ))}
                          </div>
                          <p className="inline-flex rounded-full border border-orange-400/40 bg-orange-500/10 px-3 py-1 text-xs font-black text-orange-200">
                            {item.available} disponibles
                          </p>
                        </div>

                        <div className="flex items-center justify-center gap-4">
                          <Button
                            type="button"
                            variant="outline"
                            size="icon"
                            disabled={quantity === 0}
                            onClick={() => updateQuantity(item, -1)}
                            className="h-9 w-9 rounded-full border-amber-300/35 bg-black/35 text-amber-100 hover:border-orange-400 hover:bg-orange-500 hover:text-white disabled:border-slate-600 disabled:text-slate-500 disabled:opacity-60 disabled:hover:bg-black/35 disabled:hover:text-slate-500"
                          >
                            <Minus className="h-4 w-4" />
                          </Button>
                          <span className="w-8 text-center text-xl font-black text-amber-50">
                            {quantity}
                          </span>
                          <Button
                            type="button"
                            variant="outline"
                            size="icon"
                            disabled={quantity >= item.available}
                            onClick={() => updateQuantity(item, 1)}
                            className="h-9 w-9 rounded-full border-amber-300/35 bg-black/35 text-amber-100 hover:border-orange-400 hover:bg-orange-500 hover:text-white disabled:border-slate-600 disabled:text-slate-500 disabled:opacity-60 disabled:hover:bg-black/35 disabled:hover:text-slate-500"
                          >
                            <Plus className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div
                  className={`rounded-xl border px-4 py-3 text-sm font-bold ${
                    selectedTotal > 0
                      ? "border-orange-400/40 bg-orange-500/10 text-orange-100 shadow-lg shadow-orange-500/10"
                      : "border-amber-300/20 bg-black/25 text-slate-400"
                  }`}
                >
                  Has seleccionado {selectedTotal} elemento(s)
                </div>

                <StepError message={formError} />

                <div className="flex flex-col-reverse gap-3 sm:flex-row sm:justify-between">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={goToDataStep}
                    className="border-amber-300/35 bg-black/25 text-amber-100 hover:bg-orange-500/15 hover:text-orange-100"
                  >
                    <ArrowLeft className="h-4 w-4" />
                    Atrás
                  </Button>
                  <Button
                    type="button"
                    onClick={goToConfirmStep}
                    className="bg-orange-500 px-5 font-bold text-white shadow-lg shadow-orange-500/30 hover:bg-orange-600"
                  >
                    Continuar
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
              </section>
            )}

            {currentStep === 3 && (
              <section className="space-y-7">
                <StepTitle
                  icon={<Send className="h-6 w-6" />}
                  title="Confirma tu Solicitud"
                  description="Revisa los datos antes de enviar"
                />

                <div className="grid gap-4">
                  <div className="rounded-xl border border-amber-300/25 bg-black/25 p-4 shadow-lg shadow-black/20">
                    <h3 className="flex items-center gap-2 text-sm font-black text-orange-300">
                      <ClipboardList className="h-4 w-4" />
                      Datos del Solicitante
                    </h3>
                    <div className="mt-4 grid gap-4 sm:grid-cols-2">
                      <SummaryItem
                        label="Número de Documento"
                        value={documentNumber.trim()}
                      />
                      <SummaryItem label="Rol" value={role || "Sin rol"} />
                      <SummaryItem
                        label="Fecha"
                        value={summaryDate.requestDate}
                      />
                      <SummaryItem label="Día" value={summaryDate.requestDay} />
                    </div>
                  </div>

                  <div className="rounded-xl border border-amber-300/25 bg-black/25 p-4 shadow-lg shadow-black/20">
                    <h3 className="flex items-center gap-2 text-sm font-black text-orange-300">
                      <Package className="h-4 w-4" />
                      Elementos Solicitados
                    </h3>
                    <div className="mt-4 grid gap-3">
                      {selectedItems.map((item) => (
                        <div
                          key={item.id}
                          className="flex items-center justify-between gap-4 rounded-lg border border-amber-300/20 bg-emerald-950/35 px-4 py-3"
                        >
                          <div className="min-w-0">
                            <p className="font-bold text-amber-50">
                              {item.name}
                            </p>
                            <p className="text-sm text-slate-400">
                              {item.detail}
                            </p>
                          </div>
                          <span className="shrink-0 rounded-lg bg-orange-500 px-3 py-2 text-sm font-black text-white shadow-lg shadow-orange-500/25">
                            x{item.quantity}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <StepError message={formError} />

                <div className="flex flex-col-reverse gap-3 sm:flex-row sm:justify-between">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => {
                      setFormError("");
                      setCurrentStep(2);
                    }}
                    className="border-amber-300/35 bg-black/25 text-amber-100 hover:bg-orange-500/15 hover:text-orange-100"
                  >
                    <ArrowLeft className="h-4 w-4" />
                    Atrás
                  </Button>
                  <Button
                    type="button"
                    onClick={submitRequest}
                    className="bg-orange-500 px-5 font-bold text-white shadow-lg shadow-orange-500/30 hover:bg-orange-600"
                  >
                    <Send className="h-4 w-4" />
                    Enviar solicitud
                  </Button>
                </div>
              </section>
            )}
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
}

export function SportsResourcesAdminView() {
  const [requests, setRequests] = useState<SportsRequest[]>([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [passwordInput, setPasswordInput] = useState("");
  const [authError, setAuthError] = useState("");
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingRequest, setEditingRequest] = useState<SportsRequest | null>(
    null
  );
  const [viewingRequest, setViewingRequest] = useState<SportsRequest | null>(
    null
  );
  const [formData, setFormData] = useState<SportsRequestForm>(emptyAdminForm);
  const [formError, setFormError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    setRequests(readStoredRequests());
    setIsAuthenticated(
      window.sessionStorage.getItem(SPORTS_ADMIN_SESSION_KEY) === "true"
    );

    const syncRequests = () => setRequests(readStoredRequests());

    window.addEventListener("storage", syncRequests);
    window.addEventListener("sports_requests_updated", syncRequests);

    return () => {
      window.removeEventListener("storage", syncRequests);
      window.removeEventListener("sports_requests_updated", syncRequests);
    };
  }, []);

  const stats = useMemo(
    () => ({
      recepcionadas: requests.filter(
        (request) => request.status === "RECEPCIONADA"
      ).length,
      pendientes: requests.filter((request) => request.status === "PENDIENTE")
        .length,
      entregados: requests.filter((request) => request.status === "ENTREGADO")
        .length,
      devoluciones: requests.filter(
        (request) => request.status === "DEVOLUCION"
      ).length,
    }),
    [requests]
  );

  const persistRequests = (
    updater: SportsRequest[] | ((currentRequests: SportsRequest[]) => SportsRequest[])
  ) => {
    setRequests((currentRequests) => {
      const nextRequests =
        typeof updater === "function" ? updater(currentRequests) : updater;
      saveStoredRequests(nextRequests);
      return nextRequests;
    });
  };

  const handleLogin = () => {
    if (passwordInput === SPORTS_ADMIN_PASSWORD) {
      window.sessionStorage.setItem(SPORTS_ADMIN_SESSION_KEY, "true");
      setIsAuthenticated(true);
      setPasswordInput("");
      setAuthError("");
      return;
    }

    setAuthError("Contraseña incorrecta.");
  };

  const logout = () => {
    window.sessionStorage.removeItem(SPORTS_ADMIN_SESSION_KEY);
    setIsAuthenticated(false);
    setPasswordInput("");
    setAuthError("");
  };

  const resetForm = () => {
    setFormData(emptyAdminForm);
    setEditingRequest(null);
    setFormError("");
  };

  const closeDialog = () => {
    setIsDialogOpen(false);
    resetForm();
  };

  const openEditDialog = (request: SportsRequest) => {
    setSuccessMessage("");
    setEditingRequest(request);
    setFormData({
      documentNumber: request.documentNumber,
      role: request.role,
      elementsText: selectedItemsToEditText(request),
      status: request.status,
      observations: request.observations,
    });
    setFormError("");
    setIsDialogOpen(true);
  };

  const handleAdminSubmit = () => {
    if (!editingRequest) {
      return;
    }

    const documentNumber = formData.documentNumber.trim();
    const elementsText = formData.elementsText.trim();
    const observations = formData.observations.trim();

    if (!documentNumber || !formData.role || !elementsText) {
      setFormError("Completa documento, rol y elementos solicitados.");
      return;
    }

    persistRequests((currentRequests) =>
      currentRequests.map((request) =>
        request.id === editingRequest.id
          ? {
              ...request,
              documentNumber,
              role: formData.role,
              selectedItems: parseItemsFromText(elementsText, request.id),
              status: formData.status,
              observations,
            }
          : request
      )
    );
    setSuccessMessage("Solicitud modificada correctamente.");
    closeDialog();
  };

  const updateRequestStatus = (
    requestId: string,
    status: SportsRequestStatus
  ) => {
    persistRequests((currentRequests) =>
      currentRequests.map((request) =>
        request.id === requestId ? { ...request, status } : request
      )
    );
  };

  const deleteRequest = (requestId: string) => {
    if (!window.confirm("¿Seguro que deseas eliminar esta solicitud?")) {
      return;
    }

    persistRequests((currentRequests) =>
      currentRequests.filter((request) => request.id !== requestId)
    );
  };

  if (!isAuthenticated) {
    return (
      <AdminLogin
        passwordInput={passwordInput}
        setPasswordInput={setPasswordInput}
        authError={authError}
        handleLogin={handleLogin}
      />
    );
  }

  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-br from-gray-950 via-emerald-950 to-black text-white">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(245,158,11,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(245,158,11,0.07)_1px,transparent_1px)] bg-[size:48px_48px]" />
      <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-transparent via-amber-300/70 to-transparent" />
      <div className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-transparent via-orange-400/70 to-transparent" />

      <div className="container relative z-10 mx-auto space-y-6 p-4 sm:p-6">
        <header className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="space-y-3">
            <div className="flex flex-wrap gap-3">
              <Button
                asChild
                variant="outline"
                className="w-fit border-amber-400/40 bg-black/30 text-amber-100 hover:bg-amber-400/15 hover:text-amber-50"
              >
                <Link href="/recursos-educativos">
                  <ArrowLeft className="h-4 w-4" />
                  Volver al formulario
                </Link>
              </Button>
              <Button
                type="button"
                variant="outline"
                onClick={logout}
                className="w-fit border-red-300/40 bg-red-500/10 text-red-100 hover:bg-red-500/20 hover:text-red-50"
              >
                <Lock className="h-4 w-4" />
                Cerrar sesión
              </Button>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-lg border border-amber-300/50 bg-amber-400/15 shadow-lg shadow-amber-500/20">
                <Dumbbell className="h-7 w-7 text-amber-200" />
              </div>
              <div>
                <h1 className="text-3xl font-black tracking-normal text-amber-100 sm:text-4xl">
                  CENTRO DE RECURSOS DEPORTIVOS
                </h1>
                <p className="mt-1 text-sm font-mono text-amber-200/80 sm:text-base">
                  Gestión de solicitudes y préstamos de elementos deportivos
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 rounded-lg border border-amber-300/30 bg-black/40 px-4 py-2 text-sm text-amber-200">
            <Calendar className="h-4 w-4" />
            <span className="font-mono">SEMESTRE 2026-1</span>
          </div>
        </header>

        <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          <StatCard
            title="SOLICITUDES RECEPCIONADAS"
            value={stats.recepcionadas}
            icon={<ClipboardList className="h-6 w-6" />}
            className="border-yellow-300/35 text-yellow-100 shadow-yellow-500/10"
          />
          <StatCard
            title="SOLICITUDES PENDIENTES"
            value={stats.pendientes}
            icon={<FileText className="h-6 w-6" />}
            className="border-red-300/35 text-red-100 shadow-red-500/10"
          />
          <StatCard
            title="ELEMENTOS ENTREGADOS"
            value={stats.entregados}
            icon={<CheckCircle className="h-6 w-6" />}
            className="border-blue-300/35 text-blue-100 shadow-blue-500/10"
          />
          <StatCard
            title="DEVOLUCIONES REGISTRADAS"
            value={stats.devoluciones}
            icon={<RefreshCw className="h-6 w-6" />}
            className="border-emerald-300/35 text-emerald-100 shadow-emerald-500/10"
          />
        </section>

        <Card className="border-amber-300/35 bg-black/35 text-white shadow-xl shadow-amber-500/10 backdrop-blur-sm">
          <CardHeader className="gap-4 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <CardTitle className="flex items-center gap-2 text-lg font-mono text-amber-200">
                <Trophy className="h-5 w-5" />
                SOLICITUDES DE ELEMENTOS DEPORTIVOS
              </CardTitle>
              <p className="mt-2 text-sm text-gray-300">
                Solicitudes recibidas desde el formulario público del centro de
                recursos deportivos.
              </p>
            </div>

            <Button
              asChild
              className="h-12 bg-gradient-to-r from-amber-400 to-orange-500 px-5 font-bold text-black shadow-lg shadow-orange-500/25 hover:from-amber-300 hover:to-orange-400"
            >
              <Link href="/recursos-educativos">
                <Plus className="h-5 w-5" />
                Nueva solicitud
              </Link>
            </Button>
          </CardHeader>
          <CardContent>
            {successMessage && (
              <div className="mb-4 rounded-lg border border-emerald-300/40 bg-emerald-500/15 px-4 py-3 text-sm font-medium text-emerald-100">
                {successMessage}
              </div>
            )}

            <div className="overflow-x-auto rounded-xl border border-amber-300/25 bg-gray-950/55 shadow-inner shadow-amber-500/10">
              <div className="min-w-[1328px]">
                <div className="grid grid-cols-[112px_108px_126px_146px_215px_178px_205px_238px] bg-gradient-to-r from-amber-500 to-orange-500 text-xs font-black uppercase tracking-normal text-black">
                  <TableHead>Fecha</TableHead>
                  <TableHead>Día</TableHead>
                  <TableHead>Documento</TableHead>
                  <TableHead>Rol</TableHead>
                  <TableHead>Elementos</TableHead>
                  <TableHead>Estado</TableHead>
                  <TableHead>Observaciones</TableHead>
                  <TableHead>Acciones</TableHead>
                </div>

                {requests.length === 0 ? (
                  <div className="flex min-h-[180px] items-center justify-center bg-gray-950/70 px-6 py-10 text-center text-sm text-gray-300">
                    No hay solicitudes registradas. Las solicitudes enviadas
                    desde el formulario público aparecerán aquí.
                  </div>
                ) : (
                  requests.map((request) => (
                    <div
                      key={request.id}
                      className="grid grid-cols-[112px_108px_126px_146px_215px_178px_205px_238px] border-t border-amber-300/15 bg-gray-950/65 text-sm text-gray-100 transition-colors hover:bg-amber-500/10"
                    >
                      <TableCell className="justify-center whitespace-nowrap text-center font-bold text-amber-100">
                        {request.requestDate}
                      </TableCell>
                      <TableCell className="justify-center whitespace-nowrap text-center font-mono text-xs text-yellow-100">
                        {request.requestDay}
                      </TableCell>
                      <TableCell className="justify-center whitespace-nowrap text-center font-mono text-xs text-gray-100">
                        {request.documentNumber}
                      </TableCell>
                      <TableCell className="justify-center">
                        <Badge
                          variant="outline"
                          className={`${roleStyles[request.role]} whitespace-nowrap text-[11px]`}
                        >
                          <User className="mr-1 h-3 w-3" />
                          {request.role}
                        </Badge>
                      </TableCell>
                      <TableCell className="whitespace-normal leading-relaxed text-amber-50/90">
                        <span className="line-clamp-3 break-words">
                          {formatSelectedItems(request)}
                        </span>
                      </TableCell>
                      <TableCell className="justify-center px-2">
                        <Select
                          value={request.status}
                          onValueChange={(value) =>
                            updateRequestStatus(
                              request.id,
                              value as SportsRequestStatus
                            )
                          }
                        >
                          <SelectTrigger
                            className={`h-11 w-full rounded-xl px-3 text-xs font-bold shadow-none ${statusStyles[request.status]}`}
                          >
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent className="border-amber-300/30 bg-gray-950 text-amber-50">
                            {statusOptions.map((status) => (
                              <SelectItem key={status} value={status}>
                                {status}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </TableCell>
                      <TableCell className="whitespace-normal text-gray-200">
                        {request.observations ? (
                          <span className="line-clamp-2 break-words leading-relaxed">
                            {request.observations}
                          </span>
                        ) : (
                          <span className="text-sm italic text-gray-500">
                            Sin observaciones
                          </span>
                        )}
                      </TableCell>
                      <TableCell className="justify-center border-l border-amber-300/25 bg-gradient-to-r from-amber-950/30 via-orange-950/20 to-gray-950/30 px-3">
                        <div className="grid w-full grid-cols-[76px_1fr] gap-2">
                          <Button
                            type="button"
                            variant="outline"
                            onClick={() => setViewingRequest(request)}
                            className="h-8 w-full border-sky-300/40 bg-sky-500/10 px-2 text-xs text-sky-100 hover:bg-sky-500/25 hover:text-sky-50"
                          >
                            <Eye className="h-4 w-4" />
                            Ver
                          </Button>
                          <Button
                            type="button"
                            variant="outline"
                            onClick={() => openEditDialog(request)}
                            className="h-8 w-full border-amber-300/50 bg-amber-500/15 px-2 text-xs text-amber-100 hover:bg-amber-500/30 hover:text-amber-50"
                          >
                            <Pencil className="h-4 w-4" />
                            Modificar
                          </Button>
                          <Button
                            type="button"
                            variant="outline"
                            onClick={() => deleteRequest(request.id)}
                            className="col-span-2 h-8 w-full border-red-300/40 bg-red-500/10 px-2 text-xs text-red-100 hover:bg-red-500/25 hover:text-red-50"
                          >
                            <Trash2 className="h-4 w-4" />
                            Eliminar
                          </Button>
                        </div>
                      </TableCell>
                    </div>
                  ))
                )}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Dialog
        open={isDialogOpen}
        onOpenChange={(open) => {
          if (open) {
            setIsDialogOpen(true);
          } else {
            closeDialog();
          }
        }}
      >
        <DialogContent className="border-amber-300/40 bg-gray-950 text-white shadow-2xl shadow-orange-500/20">
          <DialogHeader>
            <DialogTitle className="text-amber-100">
              Modificar solicitud
            </DialogTitle>
            <DialogDescription className="text-gray-300">
              Actualiza los datos de la solicitud sin cambiar su fecha original.
            </DialogDescription>
          </DialogHeader>

          <div className="grid gap-4">
            <div className="grid gap-2">
              <label className="text-sm font-medium text-amber-100">
                Número de documento
              </label>
              <Input
                value={formData.documentNumber}
                onChange={(event) =>
                  setFormData((currentForm) => ({
                    ...currentForm,
                    documentNumber: event.target.value,
                  }))
                }
                inputMode="numeric"
                placeholder="Ej. 1000123456"
                className="border-amber-300/30 bg-black/30 text-white placeholder:text-gray-500"
              />
            </div>

            <div className="grid gap-2">
              <label className="text-sm font-medium text-amber-100">
                Tipo de rol
              </label>
              <Select
                value={formData.role}
                onValueChange={(value) =>
                  setFormData((currentForm) => ({
                    ...currentForm,
                    role: value as SportsUserRole,
                  }))
                }
              >
                <SelectTrigger className="w-full border-amber-300/30 bg-black/30 text-white">
                  <SelectValue placeholder="Selecciona un rol" />
                </SelectTrigger>
                <SelectContent className="border-amber-300/30 bg-gray-950 text-amber-50">
                  {roleOptions.map((role) => (
                    <SelectItem key={role} value={role}>
                      {role}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="grid gap-2">
              <label className="text-sm font-medium text-amber-100">
                Elementos solicitados
              </label>
              <Textarea
                value={formData.elementsText}
                onChange={(event) =>
                  setFormData((currentForm) => ({
                    ...currentForm,
                    elementsText: event.target.value,
                  }))
                }
                placeholder="Ej. 2 x Balón de Fútbol - Golty Amarillo"
                className="min-h-28 border-amber-300/30 bg-black/30 text-white placeholder:text-gray-500"
              />
              <span className="text-xs text-gray-400">
                Usa una línea por elemento. Formato recomendado: 2 x Elemento -
                detalle.
              </span>
            </div>

            <div className="grid gap-2">
              <label className="text-sm font-medium text-amber-100">
                Estado
              </label>
              <Select
                value={formData.status}
                onValueChange={(value) =>
                  setFormData((currentForm) => ({
                    ...currentForm,
                    status: value as SportsRequestStatus,
                  }))
                }
              >
                <SelectTrigger
                  className={`w-full font-semibold ${statusStyles[formData.status]}`}
                >
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="border-amber-300/30 bg-gray-950 text-amber-50">
                  {statusOptions.map((status) => (
                    <SelectItem key={status} value={status}>
                      {status}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="grid gap-2">
              <label className="text-sm font-medium text-amber-100">
                Observaciones
              </label>
              <Textarea
                value={formData.observations}
                onChange={(event) =>
                  setFormData((currentForm) => ({
                    ...currentForm,
                    observations: event.target.value,
                  }))
                }
                placeholder="Agrega una observación si aplica..."
                className="min-h-24 border-amber-300/30 bg-black/30 text-white placeholder:text-gray-500"
              />
            </div>

            {formError && (
              <div className="rounded-lg border border-red-300/40 bg-red-500/15 px-3 py-2 text-sm text-red-100">
                {formError}
              </div>
            )}
          </div>

          <DialogFooter>
            <Button
              type="button"
              variant="outline"
              onClick={closeDialog}
              className="border-gray-500/50 bg-gray-900 text-gray-100 hover:bg-gray-800"
            >
              Cancelar
            </Button>
            <Button
              type="button"
              onClick={handleAdminSubmit}
              className="bg-gradient-to-r from-amber-400 to-orange-500 font-bold text-black hover:from-amber-300 hover:to-orange-400"
            >
              <Save className="h-4 w-4" />
              Guardar cambios
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <Dialog
        open={viewingRequest !== null}
        onOpenChange={(open) => {
          if (!open) {
            setViewingRequest(null);
          }
        }}
      >
        <DialogContent className="border-sky-300/40 bg-gray-950 text-white shadow-2xl shadow-sky-500/20">
          <DialogHeader>
            <DialogTitle className="text-sky-100">
              Detalle de solicitud
            </DialogTitle>
            <DialogDescription className="text-gray-300">
              Consulta de solo lectura del registro seleccionado.
            </DialogDescription>
          </DialogHeader>

          {viewingRequest && (
            <div className="grid gap-3 text-sm">
              <DetailRow label="Fecha" value={viewingRequest.requestDate} />
              <DetailRow label="Día" value={viewingRequest.requestDay} />
              <DetailRow
                label="Documento"
                value={viewingRequest.documentNumber}
              />
              <DetailRow label="Rol" value={viewingRequest.role} />
              <DetailRow
                label="Elementos"
                value={formatSelectedItems(viewingRequest)}
              />
              <DetailRow label="Estado" value={viewingRequest.status} />
              <DetailRow
                label="Observaciones"
                value={viewingRequest.observations || "Sin observaciones"}
              />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </main>
  );
}

function PublicHeader() {
  return (
    <header className="border-b border-amber-300/20 bg-black/45 shadow-lg shadow-orange-500/10 backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-4 px-4 py-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-orange-400/50 bg-orange-500/15 text-orange-300 shadow-lg shadow-orange-500/20">
            <Dumbbell className="h-6 w-6" />
          </div>
          <div>
            <h1 className="text-lg font-black tracking-normal text-amber-50 sm:text-xl">
              CENTRO DE RECURSOS DEPORTIVOS
            </h1>
            <p className="text-sm font-medium text-slate-300">
              Solicitud de elementos deportivos
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <Button
            asChild
            variant="outline"
            className="border-amber-300/35 bg-black/25 text-amber-100 hover:bg-orange-500/15 hover:text-orange-100"
          >
            <Link href="/">
              <ArrowLeft className="h-4 w-4" />
              Inicio
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="border-orange-400/45 bg-black/25 text-orange-200 hover:bg-orange-500/15 hover:text-orange-100"
          >
            <Link href="/recursos-educativos/admin">
              <Shield className="h-4 w-4" />
              Administración
            </Link>
          </Button>
          <div className="flex items-center gap-2 rounded-lg border border-amber-300/40 bg-black/25 px-4 py-2 text-xs font-black text-amber-100 shadow-lg shadow-amber-500/10">
            <Calendar className="h-4 w-4" />
            SEMESTRE 2026-1
          </div>
        </div>
      </div>
    </header>
  );
}

function StepIndicator({ currentStep }: { currentStep: PublicStep }) {
  return (
    <div className="mx-auto flex w-full max-w-md items-start justify-center">
      {publicSteps.map((step, index) => {
        const Icon = step.icon;
        const isActive = currentStep === step.id;
        const isCompleted = currentStep > step.id;

        return (
          <div key={step.id} className="flex flex-1 items-start last:flex-none">
            <div className="flex flex-col items-center gap-2">
              <div
                className={`flex h-12 w-12 items-center justify-center rounded-xl border text-sm transition-all ${
                  isCompleted
                    ? "border-amber-300/70 bg-gradient-to-br from-orange-500 to-amber-400 text-white shadow-lg shadow-orange-500/25"
                    : isActive
                      ? "border-orange-400 bg-orange-500 text-white shadow-lg shadow-orange-500/30"
                      : "border-amber-300/25 bg-black/35 text-slate-400"
                }`}
              >
                {isCompleted ? (
                  <Check className="h-6 w-6" />
                ) : (
                  <Icon className="h-5 w-5" />
                )}
              </div>
              <span
                className={`text-xs font-bold ${
                  isActive || isCompleted
                    ? "text-orange-300"
                    : "text-slate-400"
                }`}
              >
                {step.label}
              </span>
            </div>

            {index < publicSteps.length - 1 && (
              <div
                className={`mx-4 mt-6 h-0.5 flex-1 rounded-full ${
                  currentStep > step.id
                    ? "bg-gradient-to-r from-orange-500 to-amber-400"
                    : "bg-amber-300/20"
                }`}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}

function StepTitle({
  icon,
  title,
  description,
}: {
  icon: ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="flex flex-col items-center gap-4 text-center">
      <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-orange-400/50 bg-orange-500/15 text-orange-300 shadow-lg shadow-orange-500/20">
        {icon}
      </div>
      <div>
        <h2 className="text-2xl font-black tracking-normal text-amber-50">
          {title}
        </h2>
        <p className="mt-2 text-sm text-slate-300">{description}</p>
      </div>
    </div>
  );
}

function StepError({ message }: { message: string }) {
  if (!message) {
    return null;
  }

  return (
    <div className="rounded-xl border border-red-300/45 bg-red-500/15 px-4 py-3 text-sm font-semibold text-red-100 shadow-lg shadow-red-500/10">
      {message}
    </div>
  );
}

function SummaryItem({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-xs font-semibold text-slate-400">{label}</p>
      <p className="mt-1 font-black text-amber-50">{value}</p>
    </div>
  );
}

function AdminLogin({
  passwordInput,
  setPasswordInput,
  authError,
  handleLogin,
}: {
  passwordInput: string;
  setPasswordInput: (value: string) => void;
  authError: string;
  handleLogin: () => void;
}) {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-gray-950 via-emerald-950 to-black p-4 text-white">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(245,158,11,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(245,158,11,0.07)_1px,transparent_1px)] bg-[size:48px_48px]" />
      <Card className="relative z-10 w-full max-w-md border-amber-300/35 bg-black/50 text-white shadow-xl shadow-amber-500/10 backdrop-blur-sm">
        <CardHeader className="text-center">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl border border-amber-300/50 bg-amber-400/15 text-amber-100">
            <Shield className="h-7 w-7" />
          </div>
          <CardTitle className="text-xl font-black text-amber-100">
            Administración Deportiva
          </CardTitle>
          <p className="text-sm text-gray-300">
            Ingresa la contraseña para gestionar solicitudes.
          </p>
        </CardHeader>
        <CardContent className="grid gap-4">
          <Input
            type="password"
            value={passwordInput}
            onChange={(event) => {
              setPasswordInput(event.target.value);
            }}
            onKeyDown={(event) => {
              if (event.key === "Enter") {
                handleLogin();
              }
            }}
            placeholder="Contraseña"
            className="border-amber-300/30 bg-black/30 text-white placeholder:text-gray-500"
          />

          {authError && (
            <div className="rounded-lg border border-red-300/40 bg-red-500/15 px-3 py-2 text-sm text-red-100">
              {authError}
            </div>
          )}

          <Button
            type="button"
            onClick={handleLogin}
            className="bg-gradient-to-r from-amber-400 to-orange-500 font-bold text-black hover:from-amber-300 hover:to-orange-400"
          >
            <Lock className="h-4 w-4" />
            Ingresar
          </Button>

          <Button
            asChild
            variant="outline"
            className="border-amber-300/30 bg-black/20 text-amber-100 hover:bg-amber-400/15 hover:text-amber-50"
          >
            <Link href="/recursos-educativos">
              <ArrowLeft className="h-4 w-4" />
              Volver al formulario
            </Link>
          </Button>
        </CardContent>
      </Card>
    </main>
  );
}

function StatCard({
  title,
  value,
  icon,
  className,
}: {
  title: string;
  value: number;
  icon: ReactNode;
  className: string;
}) {
  return (
    <Card
      className={`border bg-black/35 shadow-lg backdrop-blur-sm ${className}`}
    >
      <CardContent className="p-5">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-xs font-mono opacity-80">{title}</p>
            <p className="mt-2 text-3xl font-black">{value}</p>
          </div>
          <div className="rounded-lg border border-current/20 bg-white/5 p-3">
            {icon}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

function TableHead({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-14 items-center justify-center border-r border-black/20 px-4 py-3 text-center leading-tight">
      {children}
    </div>
  );
}

function TableCell({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`flex min-h-28 items-center border-r border-amber-300/10 px-4 py-5 ${className}`}
    >
      {children}
    </div>
  );
}

function DetailRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="grid gap-1 rounded-lg border border-sky-300/15 bg-black/30 p-3 sm:grid-cols-[140px_1fr] sm:gap-3">
      <span className="font-mono text-xs uppercase text-sky-200/80">
        {label}
      </span>
      <span className="whitespace-pre-wrap text-gray-100">{value}</span>
    </div>
  );
}
