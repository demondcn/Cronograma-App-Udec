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
import {
  cancelSportsRequest,
  createStudent,
  createTeacher,
  createSportsRequest,
  createSportsElement,
  deactivateStudent,
  deactivateTeacher,
  deactivateSportsElement,
  getActiveSportsRequestByDocument,
  getSportsElements,
  getSportsPersonByDocument,
  getSportsRequests,
  getSportsTeachers,
  getStudents,
  getTeachers,
  updateStudent,
  updateSportsElement,
  updateSportsRequest,
  updateTeacher,
} from "@/lib/sports-resources-api";

type SportsRequestStatus =
  | "RECEPCIONADA"
  | "PENDIENTE"
  | "DEVOLUCION"
  | "CANCELADA";

type SportsUserRole =
  | "ESTUDIANTE"
  | "PROFESOR"
  | "DOCENTE"
  | "ADMINISTRATIVO"
  | "OTRO";

type SportsPersonType = "ESTUDIANTE" | "PROFESOR";

type PublicStep = 1 | 2 | 3;
type AdminSection =
  | "solicitudes"
  | "elementos"
  | "estudiantes"
  | "profesores";
type ElementFilter = "activos" | "inactivos" | "todos";

interface SportsItemSelection {
  id: string;
  elementoId?: string;
  name: string;
  detail: string;
  quantity: number;
}

interface SportsRequest {
  id: string;
  applicantName: string;
  documentNumber: string;
  estudianteId?: string | null;
  applicantType?: SportsPersonType | null;
  applicantCareer?: string | null;
  profesorId?: string | null;
  responsibleTeacher: string;
  role: SportsUserRole;
  selectedItems: SportsItemSelection[];
  requestDate: string;
  requestDay: string;
  requestTime: string;
  status: SportsRequestStatus;
  observations: string;
  elements?: string;
}

interface SportsRequestForm {
  applicantName: string;
  documentNumber: string;
  estudianteId?: string | null;
  applicantType?: SportsPersonType | null;
  applicantCareer?: string | null;
  profesorId?: string | null;
  responsibleTeacher: string;
  role: SportsUserRole;
  selectedItems: SportsItemSelection[];
  status: SportsRequestStatus;
  observations: string;
}

interface SportsInventoryItem {
  id: string;
  name: string;
  detail: string;
  available: number;
  total: number;
  icon: string;
  tags: string[];
}

interface SportsElement {
  id: string;
  nombre: string;
  codigo?: string | null;
  descripcion?: string | null;
  marca?: string | null;
  color?: string | null;
  categoria?: string | null;
  cantidadTotal: number;
  cantidadDisponible: number;
  activo: boolean;
  icono?: string | null;
}

interface SportsTeacher {
  id: string;
  nombre: string;
  correo?: string | null;
  cc?: string | null;
  carrera?: string | null;
  telefono?: string | null;
  activo?: boolean;
}

interface Student {
  id: string;
  nombre: string;
  cc: string;
  carrera?: string | null;
  activo: boolean;
}

interface SportsPerson {
  tipo: SportsPersonType;
  id: string;
  nombre: string;
  cc: string;
  carrera?: string | null;
}

interface SportsRequestDetail {
  id: string;
  solicitudId: string;
  elementoId: string;
  cantidad: number;
  nombreElemento: string;
  detalleElemento?: string | null;
}

interface SportsRequestFromDb {
  id: string;
  nombreSolicitante: string;
  documentoSolicitante: string;
  estudianteId?: string | null;
  estudiante?: {
    id: string;
    nombre: string;
    cc: string;
    carrera?: string | null;
  } | null;
  profesorId?: string | null;
  profesorNombre?: string | null;
  carreraSolicitante?: string | null;
  profesor?: {
    id: string;
    nombre: string;
    correo?: string | null;
    cc?: string | null;
    carrera?: string | null;
  } | null;
  fechaSolicitud: string;
  diaSolicitud: string;
  horaSolicitud?: string | null;
  estado: SportsRequestStatus;
  observaciones?: string | null;
  detalles: SportsRequestDetail[];
}

interface ApiResponse<T> {
  ok: boolean;
  data: T;
  message?: string;
}

interface StudentForm {
  id?: string;
  nombre: string;
  cc: string;
  carrera: string;
  activo: boolean;
}

interface TeacherForm {
  id?: string;
  nombre: string;
  cc: string;
  carrera: string;
  correo: string;
  telefono: string;
  activo: boolean;
}

interface ElementForm {
  id?: string;
  nombre: string;
  codigo: string;
  descripcion: string;
  marca: string;
  color: string;
  categoria: string;
  cantidadTotal: string;
  cantidadDisponible: string;
  icono: string;
  activo: boolean;
}

interface ActiveRequestLookup {
  ok: boolean;
  hasActiveRequest: boolean;
  data: SportsRequestFromDb | null;
}

const SPORTS_ADMIN_SESSION_KEY = "sports_admin_authenticated";
const SPORTS_ADMIN_PASSWORD = "70407";
const FALLBACK_TEACHER_ID = "__sin-profesor";

const FALLBACK_TEACHERS: SportsTeacher[] = [
  {
    id: FALLBACK_TEACHER_ID,
    nombre: "Sin profesor registrado",
    correo: null,
  },
];

const statusOptions: SportsRequestStatus[] = [
  "RECEPCIONADA",
  "PENDIENTE",
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
    total: 3,
    icon: "\u{26bd}",
    tags: ["Golty", "Amarillo"],
  },
  {
    id: "balon-voleibol",
    name: "Balón de Voleibol",
    detail: "Mikasa - Azul/Amarillo",
    available: 4,
    total: 4,
    icon: "\u{1f3d0}",
    tags: ["Mikasa", "Azul/Amarillo"],
  },
  {
    id: "raqueta-tenis",
    name: "Raqueta de Tenis",
    detail: "Genérica",
    available: 6,
    total: 6,
    icon: "\u{1f3be}",
    tags: ["Tenis"],
  },
  {
    id: "conos",
    name: "Conos",
    detail: "Naranja",
    available: 20,
    total: 20,
    icon: "\u{1f536}",
    tags: ["Naranja"],
  },
  {
    id: "petos",
    name: "Petos",
    detail: "Colores surtidos",
    available: 15,
    total: 15,
    icon: "\u{1f3bd}",
    tags: ["Surtidos"],
  },
  {
    id: "platillos",
    name: "Platillos",
    detail: "Naranja/Amarillo",
    available: 30,
    total: 30,
    icon: "\u{1f7e0}",
    tags: ["Naranja", "Amarillo"],
  },
  {
    id: "aros",
    name: "Aros",
    detail: "Plástico",
    available: 10,
    total: 10,
    icon: "\u{2b55}",
    tags: ["Plástico"],
  },
];

const emptyAdminForm: SportsRequestForm = {
  applicantName: "",
  documentNumber: "",
  estudianteId: null,
  applicantType: null,
  applicantCareer: null,
  responsibleTeacher: "",
  role: "ESTUDIANTE",
  selectedItems: [],
  status: "RECEPCIONADA",
  observations: "",
};

const emptyStudentForm: StudentForm = {
  nombre: "",
  cc: "",
  carrera: "",
  activo: true,
};

const emptyTeacherForm: TeacherForm = {
  nombre: "",
  cc: "",
  carrera: "",
  correo: "",
  telefono: "",
  activo: true,
};

const emptyElementForm: ElementForm = {
  nombre: "",
  codigo: "",
  descripcion: "",
  marca: "",
  color: "",
  categoria: "",
  cantidadTotal: "0",
  cantidadDisponible: "0",
  icono: "",
  activo: true,
};

const statusStyles: Record<SportsRequestStatus, string> = {
  RECEPCIONADA: "border-yellow-300/50 bg-yellow-400/20 text-yellow-100",
  PENDIENTE: "border-red-300/50 bg-red-500/20 text-red-100",
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

function formatSelectedItemsList(items: SportsItemSelection[]) {
  if (items.length === 0) {
    return "Sin elementos";
  }

  return items
    .map((item) =>
      item.detail
        ? `${item.quantity} x ${item.name} (${item.detail})`
        : `${item.quantity} x ${item.name}`
    )
    .join(", ");
}

function getElementDetail(element: SportsElement) {
  return [element.marca, element.color].filter(Boolean).join(" - ");
}

function mapElementFromDb(element: SportsElement): SportsInventoryItem {
  const detail = getElementDetail(element);

  return {
    id: element.id,
    name: element.nombre,
    detail,
    available: element.cantidadDisponible,
    total: element.cantidadTotal,
    icon: element.icono || "\u{1f3c5}",
    tags: [element.marca, element.color, element.categoria].filter(
      (tag): tag is string => Boolean(tag)
    ),
  };
}

function formatDbDate(value: string) {
  const date = new Date(value);

  if (Number.isNaN(date.getTime())) {
    return value;
  }

  return date.toLocaleDateString("es-CO", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
}

function formatHourFromDateColombia(value?: string | Date | null) {
  if (!value) return "--:--";

  const date = new Date(value);

  if (Number.isNaN(date.getTime())) {
    return "--:--";
  }

  return new Intl.DateTimeFormat("es-CO", {
    timeZone: "America/Bogota",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).format(date);
}

function mapRequestFromDb(request: SportsRequestFromDb): SportsRequest {
  const applicantCareer =
    request.estudiante?.carrera || request.carreraSolicitante || null;

  return {
    id: request.id,
    applicantName: request.nombreSolicitante,
    documentNumber: request.documentoSolicitante,
    estudianteId: request.estudianteId || null,
    applicantType: request.estudianteId ? "ESTUDIANTE" : null,
    applicantCareer,
    profesorId: request.profesorId || null,
    responsibleTeacher: cleanTeacherName(
      request.profesor?.nombre || request.profesorNombre
    ),
    role: "ESTUDIANTE",
    selectedItems: request.detalles.map((detail) => ({
      id: detail.elementoId,
      elementoId: detail.elementoId,
      name: detail.nombreElemento,
      detail: detail.detalleElemento || "",
      quantity: detail.cantidad,
    })),
    requestDate: formatDbDate(request.fechaSolicitud),
    requestDay: request.diaSolicitud,
    requestTime:
      request.horaSolicitud || formatHourFromDateColombia(request.fechaSolicitud),
    status: request.estado,
    observations: request.observaciones || "",
  };
}

function findTeacherById(teachers: SportsTeacher[], teacherId: string) {
  return teachers.find((teacher) => teacher.id === teacherId);
}

function cleanTeacherName(value?: string | null) {
  if (!value) return "Sin profesor";

  const clean = value.trim();
  const parts = clean.split(" - ").map((part) => part.trim());

  if (parts.length === 2 && parts[0] === parts[1]) {
    return parts[0];
  }

  return clean;
}

function normalizeDocumentNumber(value: string) {
  return value.trim().replace(/[\s.-]+/g, "");
}

export function SportsResourcesView() {
  const [currentStep, setCurrentStep] = useState<PublicStep>(1);
  const [applicantName, setApplicantName] = useState("");
  const [documentNumber, setDocumentNumber] = useState("");
  const [resolvedPerson, setResolvedPerson] = useState<SportsPerson | null>(
    null
  );
  const [personLookupStatus, setPersonLookupStatus] = useState<
    "idle" | "loading" | "found" | "not-found"
  >("idle");
  const [personLookupError, setPersonLookupError] = useState("");
  const [activeRequestWarning, setActiveRequestWarning] = useState("");
  const [activeRequest, setActiveRequest] = useState<SportsRequestFromDb | null>(
    null
  );
  const [responsibleTeacher, setResponsibleTeacher] = useState("");
  const [responsibleTeacherName, setResponsibleTeacherName] = useState("");
  const [teacherSearch, setTeacherSearch] = useState("");
  const [itemSearch, setItemSearch] = useState("");
  const [sportsElements, setSportsElements] =
    useState<SportsInventoryItem[]>(sportsInventory);
  const [teachers, setTeachers] = useState<SportsTeacher[]>(FALLBACK_TEACHERS);
  const [quantities, setQuantities] = useState<Record<string, number>>({});
  const [loadingElements, setLoadingElements] = useState(false);
  const [loadingTeachers, setLoadingTeachers] = useState(false);
  const [savingRequest, setSavingRequest] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [formError, setFormError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const loadElements = async () => {
    setLoadingElements(true);
    try {
      const response =
        (await getSportsElements()) as ApiResponse<SportsElement[]>;
      setSportsElements(response.data.map(mapElementFromDb));
      setErrorMessage("");
    } catch (error) {
      console.error("Error cargando elementos deportivos:", error);
      setSportsElements(sportsInventory);
      setErrorMessage(
        "No se pudieron cargar los elementos deportivos. Se muestra inventario temporal."
      );
    } finally {
      setLoadingElements(false);
    }
  };

  const loadTeachers = async () => {
    setLoadingTeachers(true);
    try {
      const response =
        (await getSportsTeachers()) as ApiResponse<SportsTeacher[]>;
      setTeachers(response.data.length > 0 ? response.data : FALLBACK_TEACHERS);
      setErrorMessage("");
    } catch (error) {
      console.error("Error cargando profesores:", error);
      setTeachers(FALLBACK_TEACHERS);
      setErrorMessage(
        "No se pudieron cargar los profesores activos. Puedes continuar sin profesor registrado."
      );
    } finally {
      setLoadingTeachers(false);
    }
  };

  useEffect(() => {
    loadElements();
    loadTeachers();
  }, []);

  const filteredInventory = useMemo(() => {
    const normalizedSearch = itemSearch.trim().toLowerCase();

    if (!normalizedSearch) {
      return sportsElements.filter((item) => item.available > 0);
    }

    return sportsElements.filter((item) =>
      item.available > 0 &&
      [item.name, item.detail, ...item.tags]
        .join(" ")
        .toLowerCase()
        .includes(normalizedSearch)
    );
  }, [itemSearch, sportsElements]);

  const filteredTeachers = useMemo(() => {
    const normalizedSearch = teacherSearch.trim().toLowerCase();

    if (!normalizedSearch) {
      return teachers;
    }

    return teachers.filter((teacher) =>
      [teacher.nombre, teacher.correo || "", teacher.cc || "", teacher.carrera || ""]
        .join(" ")
        .toLowerCase()
        .includes(normalizedSearch)
    );
  }, [teacherSearch, teachers]);

  const selectedItems = useMemo(
    () =>
      sportsElements
        .map((item) => ({
          id: item.id,
          elementoId: item.id,
          name: item.name,
          detail: item.detail,
          quantity: quantities[item.id] || 0,
        }))
        .filter((item) => item.quantity > 0),
    [quantities, sportsElements]
  );

  const selectedTotal = useMemo(
    () => selectedItems.reduce((total, item) => total + item.quantity, 0),
    [selectedItems]
  );

  const summaryDate = getTodayRequestDate();

  const resetResolvedPerson = () => {
    setResolvedPerson(null);
    setApplicantName("");
    setPersonLookupStatus("idle");
    setPersonLookupError("");
    setActiveRequestWarning("");
    setActiveRequest(null);
  };

  const lookupPersonByDocument = async () => {
    const cleanDocument = normalizeDocumentNumber(documentNumber);

    setFormError("");
    setSuccessMessage("");
    setPersonLookupError("");

    if (!cleanDocument) {
      resetResolvedPerson();
      setPersonLookupError("Ingresa un número de documento válido.");
      return;
    }

    setDocumentNumber(cleanDocument);
    setPersonLookupStatus("loading");
    setResolvedPerson(null);
    setApplicantName("");

    try {
      const response = (await getSportsPersonByDocument(
        cleanDocument
      )) as ApiResponse<SportsPerson>;
      setResolvedPerson(response.data);
      setApplicantName(response.data.nombre);
      setPersonLookupStatus("found");
      setPersonLookupError("");

      const activeResponse = (await getActiveSportsRequestByDocument(
        cleanDocument
      )) as ActiveRequestLookup;

      if (activeResponse.hasActiveRequest && activeResponse.data) {
        setActiveRequest(activeResponse.data);
        setActiveRequestWarning(
          "Tienes una solicitud activa. No puedes crear una nueva hasta que sea devuelta o cancelada."
        );
      } else {
        setActiveRequest(null);
        setActiveRequestWarning("");
      }
    } catch (error) {
      setResolvedPerson(null);
      setApplicantName("");
      setPersonLookupStatus("not-found");
      setActiveRequest(null);
      setActiveRequestWarning("");
      setPersonLookupError(
        error instanceof Error
          ? error.message
          : "No se encontró una persona con ese documento. Verifica el número o comunícate con administración."
      );
    }
  };

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
    const cleanName = resolvedPerson?.nombre.trim() || "";
    const cleanDocument = normalizeDocumentNumber(documentNumber);
    const cleanTeacher = responsibleTeacherName.trim();

    if (
      !cleanDocument ||
      !resolvedPerson ||
      !cleanName ||
      !cleanTeacher ||
      activeRequest
    ) {
      setFormError(
        activeRequest
          ? "No puedes realizar una nueva solicitud porque tienes una solicitud activa. Debes devolver o cerrar los elementos antes de solicitar otros."
          : "Busca un documento válido en la base de datos y selecciona el profesor responsable."
      );
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

  const submitRequest = async () => {
    const cleanName = resolvedPerson?.nombre.trim() || applicantName.trim();
    const cleanDocument = normalizeDocumentNumber(documentNumber);
    const rawTeacher = responsibleTeacherName.trim();
    const cleanTeacher = cleanTeacherName(rawTeacher);

    if (
      !cleanName ||
      !cleanDocument ||
      !resolvedPerson ||
      !rawTeacher ||
      activeRequest ||
      selectedItems.length === 0
    ) {
      setFormError(
        activeRequest
          ? "No puedes realizar una nueva solicitud porque tienes una solicitud activa. Debes devolver o cerrar los elementos antes de solicitar otros."
          : "Completa todos los pasos antes de enviar la solicitud."
      );
      return;
    }

    setSavingRequest(true);
    setFormError("");
    setSuccessMessage("");
    setErrorMessage("");

    let createdRequest: SportsRequestFromDb;

    try {
      const response = (await createSportsRequest({
        estudianteId:
          resolvedPerson.tipo === "ESTUDIANTE" ? resolvedPerson.id : undefined,
        nombreSolicitante: cleanName,
        documentoSolicitante: cleanDocument,
        profesorId:
          responsibleTeacher && responsibleTeacher !== FALLBACK_TEACHER_ID
            ? responsibleTeacher
            : undefined,
        profesorNombre: cleanTeacher,
        selectedItems: selectedItems.map((item) => ({
          elementoId: item.elementoId || item.id,
          cantidad: item.quantity,
        })),
      })) as ApiResponse<SportsRequestFromDb>;

      createdRequest = response.data;
      setApplicantName("");
      setDocumentNumber("");
      resetResolvedPerson();
      setResponsibleTeacher("");
      setResponsibleTeacherName("");
      setTeacherSearch("");
      setItemSearch("");
      setQuantities({});
      setCurrentStep(1);
      await loadElements();
    } catch (error) {
      console.error("Error guardando solicitud deportiva:", error);
      const message =
        error instanceof Error
          ? error.message
          : "No se pudo guardar la solicitud.";
      setFormError(
        message.includes("solicitud activa")
          ? "No puedes realizar una nueva solicitud porque tienes una solicitud activa. Debes devolver o cerrar los elementos antes de solicitar otros."
          : message
      );
      setSavingRequest(false);
      return;
    }

    try {
      const response = await fetch("/api/whatsapp/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          applicantName: createdRequest.nombreSolicitante,
          documentNumber: createdRequest.documentoSolicitante,
          selectedItems: createdRequest.detalles.map((detail) => ({
            name: detail.nombreElemento,
            detail: detail.detalleElemento || "",
            quantity: detail.cantidad,
          })),
          status: createdRequest.estado,
        }),
      });

      const result = await response.json();

      if (!response.ok || !result.ok) {
        console.error(
          "Error enviando notificaciones de WhatsApp:",
          JSON.stringify(result, null, 2)
        );
        setSuccessMessage(
          "Solicitud registrada, pero falló WhatsApp. Revisa que la plantilla nueva_solicitud_deportiva esté aprobada y que el idioma sea es."
        );
        return;
      }

      setSuccessMessage(
        "Solicitud registrada correctamente en la base de datos."
      );
    } catch (error) {
      console.error("Error enviando notificaciones de WhatsApp:", error);
      setSuccessMessage(
        "Solicitud registrada, pero falló WhatsApp. Revisa que la plantilla nueva_solicitud_deportiva esté aprobada y que el idioma sea es."
      );
    } finally {
      setSavingRequest(false);
    }
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

          {errorMessage && (
            <div className="mx-auto w-full max-w-3xl rounded-xl border border-red-300/45 bg-red-500/15 px-4 py-3 text-sm font-semibold text-red-100 shadow-lg shadow-red-500/10">
              {errorMessage}
            </div>
          )}

          <Card className="mx-auto w-full max-w-3xl border-amber-300/35 bg-[#031b18]/90 text-white shadow-2xl shadow-orange-500/20 backdrop-blur-sm">
            <CardContent className="px-5 py-8 sm:px-9 sm:py-10">
            {currentStep === 1 && (
              <section className="mx-auto max-w-md space-y-7">
                <StepTitle
                  icon={<ClipboardList className="h-6 w-6" />}
                  title="Ingresa tus Datos"
                  description="Busca tu documento para cargar tus datos desde la base"
                />

                <div className="grid gap-5">
                  <div className="grid gap-2">
                    <label className="flex items-center gap-2 text-sm font-bold text-amber-100">
                      <ClipboardList className="h-4 w-4 text-orange-400" />
                      Número de documento
                    </label>
                    <div className="flex flex-col gap-2 sm:flex-row">
                      <Input
                        value={documentNumber}
                        onBlur={() => {
                          if (
                            documentNumber.trim() &&
                            personLookupStatus !== "loading" &&
                            normalizeDocumentNumber(documentNumber) !==
                              resolvedPerson?.cc
                          ) {
                            lookupPersonByDocument();
                          }
                        }}
                        onChange={(event) => {
                          setDocumentNumber(event.target.value);
                          resetResolvedPerson();
                          setFormError("");
                        }}
                        inputMode="numeric"
                        placeholder="Ingresa tu número de documento"
                        className="h-11 border-amber-300/35 bg-black/35 text-gray-100 placeholder:text-slate-400 focus-visible:border-orange-400 focus-visible:ring-orange-500/30"
                      />
                      <Button
                        type="button"
                        onClick={lookupPersonByDocument}
                        disabled={personLookupStatus === "loading"}
                        className="h-11 bg-orange-500 px-4 font-bold text-white hover:bg-orange-600"
                      >
                        {personLookupStatus === "loading" ? (
                          <RefreshCw className="h-4 w-4 animate-spin" />
                        ) : (
                          <Eye className="h-4 w-4" />
                        )}
                        Buscar
                      </Button>
                    </div>
                    <span className="text-xs text-slate-400">
                      Ingresa tu cédula o carné estudiantil. El nombre se carga desde la base de datos.
                    </span>
                    {resolvedPerson && (
                      <div className="rounded-xl border border-emerald-300/35 bg-emerald-500/10 p-4 text-sm text-emerald-50">
                        <p className="font-black">{resolvedPerson.nombre}</p>
                        <div className="mt-2 grid gap-1 text-xs uppercase tracking-wide text-emerald-200">
                          <p>Tipo: {resolvedPerson.tipo}</p>
                          <p>Documento: {resolvedPerson.cc}</p>
                          <p>
                            Carrera:{" "}
                            {resolvedPerson.carrera || "Sin carrera registrada"}
                          </p>
                        </div>
                      </div>
                    )}
                    {personLookupError && (
                      <div className="rounded-xl border border-red-300/40 bg-red-500/15 px-3 py-2 text-sm text-red-100">
                        {personLookupError}
                      </div>
                    )}
                    {activeRequestWarning && (
                      <div className="rounded-xl border border-amber-300/40 bg-amber-500/15 px-3 py-3 text-sm text-amber-100">
                        <p className="font-bold">{activeRequestWarning}</p>
                        {activeRequest && (
                          <p className="mt-1 text-xs text-amber-200/90">
                            Estado: {activeRequest.estado} - Elementos:{" "}
                            {activeRequest.detalles
                              .map(
                                (detail) =>
                                  `${detail.cantidad} x ${detail.nombreElemento}`
                              )
                              .join(", ")}
                          </p>
                        )}
                      </div>
                    )}
                  </div>

                  <div className="grid gap-2">
                    <label className="flex items-center gap-2 text-sm font-bold text-amber-100">
                      <Shield className="h-4 w-4 text-orange-400" />
                      Profesor responsable
                    </label>
                    <Input
                      value={teacherSearch}
                      onChange={(event) => setTeacherSearch(event.target.value)}
                      placeholder="Buscar profesor por nombre..."
                      className="h-10 border-amber-300/35 bg-black/35 text-gray-100 placeholder:text-slate-400 focus-visible:border-orange-400 focus-visible:ring-orange-500/30"
                    />
                    <Select
                      value={responsibleTeacher}
                      onValueChange={(value) => {
                        const selectedTeacher = findTeacherById(
                          teachers,
                          value
                        );
                        setResponsibleTeacher(value);
                        setResponsibleTeacherName(
                          selectedTeacher?.nombre || ""
                        );
                        setTeacherSearch("");
                        setFormError("");
                      }}
                    >
                      <SelectTrigger className="h-11 border-amber-300/35 bg-black/35 text-gray-100 focus:border-orange-400 focus:ring-orange-500/30">
                        <SelectValue placeholder="Selecciona el profesor responsable" />
                      </SelectTrigger>
                      <SelectContent className="border-amber-300/30 bg-gray-950 text-amber-50">
                        {filteredTeachers.map((teacher) => (
                          <SelectItem key={teacher.id} value={teacher.id}>
                            {teacher.nombre}
                          </SelectItem>
                        ))}
                        {filteredTeachers.length === 0 && (
                          <div className="px-3 py-2 text-sm text-slate-400">
                            No hay profesores activos registrados.
                          </div>
                        )}
                      </SelectContent>
                    </Select>
                    <span className="text-xs text-slate-400">
                      {loadingTeachers
                        ? "Cargando profesores activos..."
                        : "Selecciona el docente que autoriza o acompaña la solicitud"}
                    </span>
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

                <div className="grid gap-2">
                  <label className="flex items-center gap-2 text-sm font-bold text-amber-100">
                    <Package className="h-4 w-4 text-orange-400" />
                    Buscar elemento deportivo
                  </label>
                  <Input
                    value={itemSearch}
                    onChange={(event) => setItemSearch(event.target.value)}
                    placeholder="Buscar por nombre, marca, color o tipo..."
                    className="h-11 border-amber-300/35 bg-black/35 text-gray-100 placeholder:text-slate-400 focus-visible:border-orange-400 focus-visible:ring-orange-500/30"
                  />
                </div>

                <div className="sticky top-3 z-20 flex flex-col gap-3 rounded-2xl border border-amber-300/30 bg-[#031b18]/95 p-4 shadow-xl shadow-orange-500/15 backdrop-blur-md sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="text-sm font-black text-amber-50">
                      Selecciona los elementos
                    </p>
                    <p
                      className={`mt-1 text-xs font-bold ${
                        selectedTotal > 0 ? "text-orange-200" : "text-slate-400"
                      }`}
                    >
                      Has seleccionado {selectedTotal} elemento(s)
                    </p>
                  </div>
                  <div className="flex flex-col-reverse gap-2 sm:flex-row">
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
                      disabled={selectedTotal === 0}
                      className="bg-orange-500 px-5 font-bold text-white shadow-lg shadow-orange-500/30 hover:bg-orange-600 disabled:opacity-50"
                    >
                      Continuar
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                {loadingElements && (
                  <div className="rounded-xl border border-amber-300/20 bg-black/25 px-4 py-3 text-sm font-semibold text-amber-100">
                    Cargando elementos deportivos...
                  </div>
                )}

                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {filteredInventory.map((item) => {
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

                {filteredInventory.length === 0 && (
                  <div className="rounded-xl border border-amber-300/20 bg-black/25 px-4 py-6 text-center text-sm font-semibold text-slate-300">
                    No se encontraron elementos con ese filtro.
                  </div>
                )}

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
                        label="Solicitante"
                        value={applicantName.trim()}
                      />
                      <SummaryItem
                        label="Número de documento"
                        value={documentNumber.trim()}
                      />
                      <SummaryItem
                        label="Carrera"
                        value={
                          resolvedPerson?.carrera || "Sin carrera registrada"
                        }
                      />
                      <SummaryItem
                        label="Profesor responsable"
                        value={cleanTeacherName(responsibleTeacherName)}
                      />
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
                    disabled={savingRequest}
                    className="bg-orange-500 px-5 font-bold text-white shadow-lg shadow-orange-500/30 hover:bg-orange-600"
                  >
                    <Send className="h-4 w-4" />
                    {savingRequest ? "Enviando..." : "Enviar solicitud"}
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
  const [activeSection, setActiveSection] =
    useState<AdminSection>("solicitudes");
  const [requests, setRequests] = useState<SportsRequest[]>([]);
  const [sportsElements, setSportsElements] =
    useState<SportsInventoryItem[]>(sportsInventory);
  const [managedElements, setManagedElements] = useState<SportsElement[]>([]);
  const [teachers, setTeachers] = useState<SportsTeacher[]>(FALLBACK_TEACHERS);
  const [students, setStudents] = useState<Student[]>([]);
  const [managedTeachers, setManagedTeachers] = useState<SportsTeacher[]>([]);
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
  const [adminTeacherSearch, setAdminTeacherSearch] = useState("");
  const [studentSearch, setStudentSearch] = useState("");
  const [teacherCrudSearch, setTeacherCrudSearch] = useState("");
  const [elementSearch, setElementSearch] = useState("");
  const [elementFilter, setElementFilter] = useState<ElementFilter>("activos");
  const [isStudentDialogOpen, setIsStudentDialogOpen] = useState(false);
  const [isTeacherDialogOpen, setIsTeacherDialogOpen] = useState(false);
  const [isElementDialogOpen, setIsElementDialogOpen] = useState(false);
  const [editingStudent, setEditingStudent] = useState<Student | null>(null);
  const [editingTeacher, setEditingTeacher] = useState<SportsTeacher | null>(
    null
  );
  const [editingElement, setEditingElement] = useState<SportsElement | null>(
    null
  );
  const [studentForm, setStudentForm] = useState<StudentForm>(emptyStudentForm);
  const [teacherForm, setTeacherForm] = useState<TeacherForm>(emptyTeacherForm);
  const [elementForm, setElementForm] = useState<ElementForm>(emptyElementForm);
  const [loadingRequests, setLoadingRequests] = useState(false);
  const [loadingElements, setLoadingElements] = useState(false);
  const [loadingTeachers, setLoadingTeachers] = useState(false);
  const [loadingStudents, setLoadingStudents] = useState(false);
  const [loadingManagedTeachers, setLoadingManagedTeachers] = useState(false);
  const [loadingManagedElements, setLoadingManagedElements] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [formError, setFormError] = useState("");
  const [crudFormError, setCrudFormError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const loadAdminElements = async () => {
    setLoadingElements(true);
    try {
      const response =
        (await getSportsElements()) as ApiResponse<SportsElement[]>;
      setSportsElements(response.data.map(mapElementFromDb));
    } catch (error) {
      console.error("Error cargando elementos deportivos:", error);
      setSportsElements(sportsInventory);
      setErrorMessage("No se pudieron cargar los elementos deportivos.");
    } finally {
      setLoadingElements(false);
    }
  };

  const loadAdminTeachers = async () => {
    setLoadingTeachers(true);
    try {
      const response =
        (await getSportsTeachers()) as ApiResponse<SportsTeacher[]>;
      setTeachers(response.data.length > 0 ? response.data : FALLBACK_TEACHERS);
    } catch (error) {
      console.error("Error cargando profesores:", error);
      setTeachers(FALLBACK_TEACHERS);
      setErrorMessage("No se pudieron cargar los profesores activos.");
    } finally {
      setLoadingTeachers(false);
    }
  };

  const loadManagedElements = async () => {
    setLoadingManagedElements(true);
    try {
      const response = (await getSportsElements({
        includeInactive: true,
      })) as ApiResponse<SportsElement[]>;
      setManagedElements(response.data);
    } catch (error) {
      console.error("Error cargando inventario deportivo:", error);
      setErrorMessage("No se pudo cargar el inventario deportivo.");
    } finally {
      setLoadingManagedElements(false);
    }
  };

  const loadStudents = async () => {
    setLoadingStudents(true);
    try {
      const response = (await getStudents({
        includeInactive: true,
      })) as ApiResponse<Student[]>;
      setStudents(response.data);
    } catch (error) {
      console.error("Error cargando estudiantes:", error);
      setErrorMessage("No se pudieron cargar los estudiantes.");
    } finally {
      setLoadingStudents(false);
    }
  };

  const loadManagedTeachers = async () => {
    setLoadingManagedTeachers(true);
    try {
      const response = (await getTeachers({
        includeInactive: true,
      })) as ApiResponse<SportsTeacher[]>;
      setManagedTeachers(response.data);
    } catch (error) {
      console.error("Error cargando profesores:", error);
      setErrorMessage("No se pudieron cargar los profesores.");
    } finally {
      setLoadingManagedTeachers(false);
    }
  };

  const loadRequests = async () => {
    setLoadingRequests(true);
    try {
      const response =
        (await getSportsRequests()) as ApiResponse<SportsRequestFromDb[]>;
      setRequests(response.data.map(mapRequestFromDb));
      setErrorMessage("");
    } catch (error) {
      console.error("Error cargando solicitudes deportivas:", error);
      setRequests([]);
      setErrorMessage("No se pudieron cargar las solicitudes.");
    } finally {
      setLoadingRequests(false);
    }
  };

  const refreshAdminData = async () => {
    await Promise.all([
      loadRequests(),
      loadAdminElements(),
      loadManagedElements(),
      loadAdminTeachers(),
      loadStudents(),
      loadManagedTeachers(),
    ]);
  };

  useEffect(() => {
    setIsAuthenticated(
      window.sessionStorage.getItem(SPORTS_ADMIN_SESSION_KEY) === "true"
    );
    refreshAdminData();
  }, []);

  const stats = useMemo(
    () => ({
      recepcionadas: requests.filter(
        (request) => request.status === "RECEPCIONADA"
      ).length,
      pendientes: requests.filter((request) => request.status === "PENDIENTE")
        .length,
      devoluciones: requests.filter(
        (request) => request.status === "DEVOLUCION"
      ).length,
      canceladas: requests.filter((request) => request.status === "CANCELADA")
        .length,
    }),
    [requests]
  );

  const filteredAdminTeachers = useMemo(() => {
    const normalizedSearch = adminTeacherSearch.trim().toLowerCase();

    if (!normalizedSearch) {
      return teachers;
    }

    return teachers.filter((teacher) =>
      [teacher.nombre, teacher.correo || ""]
        .join(" ")
        .toLowerCase()
        .includes(normalizedSearch)
    );
  }, [adminTeacherSearch, teachers]);

  const filteredStudents = useMemo(() => {
    const normalizedSearch = studentSearch.trim().toLowerCase();

    if (!normalizedSearch) {
      return students;
    }

    return students.filter((student) =>
      [student.nombre, student.cc, student.carrera || ""]
        .join(" ")
        .toLowerCase()
        .includes(normalizedSearch)
    );
  }, [studentSearch, students]);

  const filteredManagedElements = useMemo(() => {
    const normalizedSearch = elementSearch.trim().toLowerCase();

    return managedElements.filter((element) => {
      const matchesFilter =
        elementFilter === "todos" ||
        (elementFilter === "activos" && element.activo) ||
        (elementFilter === "inactivos" && !element.activo);

      if (!matchesFilter) return false;

      if (!normalizedSearch) return true;

      return [
        element.nombre,
        element.codigo || "",
        element.descripcion || "",
        element.marca || "",
        element.color || "",
        element.categoria || "",
      ]
        .join(" ")
        .toLowerCase()
        .includes(normalizedSearch);
    });
  }, [elementFilter, elementSearch, managedElements]);

  const filteredManagedTeachers = useMemo(() => {
    const normalizedSearch = teacherCrudSearch.trim().toLowerCase();

    if (!normalizedSearch) {
      return managedTeachers;
    }

    return managedTeachers.filter((teacher) =>
      [
        teacher.nombre,
        teacher.cc || "",
        teacher.carrera || "",
        teacher.correo || "",
      ]
        .join(" ")
        .toLowerCase()
        .includes(normalizedSearch)
    );
  }, [teacherCrudSearch, managedTeachers]);

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
    setAdminTeacherSearch("");
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
      applicantName: request.applicantName,
      documentNumber: request.documentNumber,
      profesorId: request.profesorId || FALLBACK_TEACHER_ID,
      responsibleTeacher: request.responsibleTeacher,
      role: request.role,
      selectedItems: request.selectedItems,
      status: request.status,
      observations: request.observations,
    });
    setFormError("");
    setIsDialogOpen(true);
  };

  const handleAdminSubmit = async () => {
    if (!editingRequest) {
      return;
    }

    const applicantName = formData.applicantName.trim();
    const documentNumber = formData.documentNumber.trim();
    const responsibleTeacher = cleanTeacherName(formData.responsibleTeacher);
    const observations = formData.observations.trim();

    if (
      !applicantName ||
      !documentNumber ||
      !responsibleTeacher ||
      formData.selectedItems.length === 0
    ) {
      setFormError(
        "Completa nombre, documento, profesor responsable y elementos solicitados."
      );
      return;
    }

    try {
      await updateSportsRequest(editingRequest.id, {
        nombreSolicitante: applicantName,
        documentoSolicitante: documentNumber,
        profesorId:
          formData.profesorId && formData.profesorId !== FALLBACK_TEACHER_ID
            ? formData.profesorId
            : undefined,
        profesorNombre: responsibleTeacher,
        estado: formData.status,
        observaciones: observations,
        selectedItems: formData.selectedItems.map((item) => ({
          elementoId: item.elementoId || item.id,
          cantidad: item.quantity,
        })),
      });
      await refreshAdminData();
      setSuccessMessage("Solicitud modificada correctamente.");
      closeDialog();
    } catch (error) {
      console.error("Error actualizando solicitud deportiva:", error);
      setFormError(
        error instanceof Error
          ? error.message
          : "No se pudo actualizar la solicitud."
      );
    }
  };

  const updateRequestStatus = async (
    requestId: string,
    status: SportsRequestStatus
  ) => {
    setRequests((currentRequests) =>
      currentRequests.map((request) =>
        request.id === requestId ? { ...request, status } : request
      )
    );
    try {
      await updateSportsRequest(requestId, { estado: status });
      await loadRequests();
      setSuccessMessage("Estado actualizado correctamente.");
    } catch (error) {
      console.error("Error actualizando estado:", error);
      setErrorMessage(
        error instanceof Error ? error.message : "No se pudo cambiar el estado."
      );
      await loadRequests();
    }
  };

  const updateAdminItemQuantity = (item: SportsInventoryItem, change: number) => {
    setFormData((currentForm) => {
      const currentItem = currentForm.selectedItems.find(
        (selectedItem) => selectedItem.id === item.id
      );
      const currentQuantity = currentItem?.quantity || 0;
      const nextQuantity = Math.min(
        item.available,
        Math.max(0, currentQuantity + change)
      );

      return {
        ...currentForm,
        selectedItems:
          nextQuantity === 0
            ? currentForm.selectedItems.filter(
                (selectedItem) => selectedItem.id !== item.id
              )
            : [
                ...currentForm.selectedItems.filter(
                  (selectedItem) => selectedItem.id !== item.id
                ),
                {
                  id: item.id,
                  name: item.name,
                  detail: item.detail,
                  quantity: nextQuantity,
                },
              ],
      };
    });
  };

  const deleteRequest = async (requestId: string) => {
    if (!window.confirm("¿Seguro que deseas cancelar esta solicitud?")) {
      return;
    }

    try {
      await cancelSportsRequest(requestId);
      await refreshAdminData();
      setSuccessMessage("Solicitud cancelada correctamente.");
    } catch (error) {
      console.error("Error cancelando solicitud:", error);
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "No se pudo cancelar la solicitud."
      );
    }
  };

  const openNewElementDialog = () => {
    setEditingElement(null);
    setElementForm(emptyElementForm);
    setCrudFormError("");
    setIsElementDialogOpen(true);
  };

  const openEditElementDialog = (element: SportsElement) => {
    setEditingElement(element);
    setElementForm({
      id: element.id,
      nombre: element.nombre,
      codigo: element.codigo || "",
      descripcion: element.descripcion || "",
      marca: element.marca || "",
      color: element.color || "",
      categoria: element.categoria || "",
      cantidadTotal: String(element.cantidadTotal),
      cantidadDisponible: String(element.cantidadDisponible),
      icono: element.icono || "",
      activo: element.activo,
    });
    setCrudFormError("");
    setIsElementDialogOpen(true);
  };

  const closeElementDialog = () => {
    setIsElementDialogOpen(false);
    setEditingElement(null);
    setElementForm(emptyElementForm);
    setCrudFormError("");
  };

  const submitElementForm = async () => {
    const cantidadTotal = Number(elementForm.cantidadTotal);
    const cantidadDisponible = Number(elementForm.cantidadDisponible);

    if (!elementForm.nombre.trim()) {
      setCrudFormError("El nombre del elemento es obligatorio.");
      return;
    }

    if (
      !Number.isFinite(cantidadTotal) ||
      !Number.isFinite(cantidadDisponible) ||
      cantidadTotal < 0 ||
      cantidadDisponible < 0
    ) {
      setCrudFormError("Las cantidades deben ser números mayores o iguales a 0.");
      return;
    }

    if (cantidadDisponible > cantidadTotal) {
      setCrudFormError("La cantidad disponible no puede superar la cantidad total.");
      return;
    }

    const payload = {
      nombre: elementForm.nombre.trim(),
      codigo: elementForm.codigo.trim() || null,
      descripcion: elementForm.descripcion.trim() || null,
      marca: elementForm.marca.trim() || null,
      color: elementForm.color.trim() || null,
      categoria: elementForm.categoria.trim() || null,
      cantidadTotal,
      cantidadDisponible,
      icono: elementForm.icono.trim() || null,
      activo: elementForm.activo,
    };

    try {
      if (editingElement) {
        await updateSportsElement(editingElement.id, payload);
        setSuccessMessage("Elemento actualizado correctamente.");
      } else {
        await createSportsElement(payload);
        setSuccessMessage("Elemento creado correctamente.");
      }
      await Promise.all([loadManagedElements(), loadAdminElements()]);
      closeElementDialog();
    } catch (error) {
      setCrudFormError(
        error instanceof Error ? error.message : "No se pudo guardar el elemento."
      );
    }
  };

  const deactivateElementRecord = async (element: SportsElement) => {
    if (!window.confirm("¿Seguro que deseas desactivar este elemento?")) {
      return;
    }

    try {
      await deactivateSportsElement(element.id);
      await Promise.all([loadManagedElements(), loadAdminElements()]);
      setSuccessMessage("Elemento desactivado correctamente.");
    } catch (error) {
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "No se pudo desactivar el elemento."
      );
    }
  };

  const exportRequestsToExcel = async () => {
    const XLSX = await import("xlsx");
    const rows = requests.map((request) => ({
      Fecha: request.requestDate,
      Hora: request.requestTime,
      Solicitante: request.applicantName,
      Documento: request.documentNumber,
      Carrera: request.applicantCareer || "Sin carrera",
      Profesor: cleanTeacherName(request.responsibleTeacher),
      Elementos: formatSelectedItems(request),
      Estado: request.status,
      Observaciones: request.observations || "Sin observaciones",
    }));
    const worksheet = XLSX.utils.json_to_sheet(rows);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Solicitudes");
    XLSX.writeFile(workbook, "solicitudes-recursos-deportivos.xlsx");
  };

  const openNewStudentDialog = () => {
    setEditingStudent(null);
    setStudentForm(emptyStudentForm);
    setCrudFormError("");
    setIsStudentDialogOpen(true);
  };

  const openEditStudentDialog = (student: Student) => {
    setEditingStudent(student);
    setStudentForm({
      id: student.id,
      nombre: student.nombre,
      cc: student.cc,
      carrera: student.carrera || "",
      activo: student.activo,
    });
    setCrudFormError("");
    setIsStudentDialogOpen(true);
  };

  const closeStudentDialog = () => {
    setIsStudentDialogOpen(false);
    setEditingStudent(null);
    setStudentForm(emptyStudentForm);
    setCrudFormError("");
  };

  const submitStudentForm = async () => {
    const payload = {
      nombre: studentForm.nombre.trim(),
      cc: studentForm.cc.trim(),
      carrera: studentForm.carrera.trim() || null,
      activo: studentForm.activo,
    };

    if (!payload.nombre || !payload.cc) {
      setCrudFormError("Nombre y documento son obligatorios.");
      return;
    }

    try {
      if (editingStudent) {
        await updateStudent(editingStudent.id, payload);
        setSuccessMessage("Estudiante actualizado correctamente.");
      } else {
        await createStudent(payload);
        setSuccessMessage("Estudiante creado correctamente.");
      }
      await loadStudents();
      closeStudentDialog();
    } catch (error) {
      setCrudFormError(
        error instanceof Error ? error.message : "No se pudo guardar el estudiante."
      );
    }
  };

  const deactivateStudentRecord = async (student: Student) => {
    if (!window.confirm("¿Seguro que deseas desactivar este estudiante?")) {
      return;
    }

    try {
      await deactivateStudent(student.id);
      await loadStudents();
      setSuccessMessage("Estudiante desactivado correctamente.");
    } catch (error) {
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "No se pudo desactivar el estudiante."
      );
    }
  };

  const openNewTeacherDialog = () => {
    setEditingTeacher(null);
    setTeacherForm(emptyTeacherForm);
    setCrudFormError("");
    setIsTeacherDialogOpen(true);
  };

  const openEditTeacherDialog = (teacher: SportsTeacher) => {
    setEditingTeacher(teacher);
    setTeacherForm({
      id: teacher.id,
      nombre: teacher.nombre,
      cc: teacher.cc || "",
      carrera: teacher.carrera || "",
      correo: teacher.correo || "",
      telefono: teacher.telefono || "",
      activo: teacher.activo ?? true,
    });
    setCrudFormError("");
    setIsTeacherDialogOpen(true);
  };

  const closeTeacherDialog = () => {
    setIsTeacherDialogOpen(false);
    setEditingTeacher(null);
    setTeacherForm(emptyTeacherForm);
    setCrudFormError("");
  };

  const submitTeacherForm = async () => {
    const payload = {
      nombre: teacherForm.nombre.trim(),
      cc: teacherForm.cc.trim(),
      carrera: teacherForm.carrera.trim() || null,
      correo: teacherForm.correo.trim() || null,
      telefono: teacherForm.telefono.trim() || null,
      activo: teacherForm.activo,
    };

    if (!payload.nombre || !payload.cc) {
      setCrudFormError("Nombre y documento son obligatorios.");
      return;
    }

    try {
      if (editingTeacher) {
        await updateTeacher(editingTeacher.id, payload);
        setSuccessMessage("Profesor actualizado correctamente.");
      } else {
        await createTeacher(payload);
        setSuccessMessage("Profesor creado correctamente.");
      }
      await Promise.all([loadManagedTeachers(), loadAdminTeachers()]);
      closeTeacherDialog();
    } catch (error) {
      setCrudFormError(
        error instanceof Error ? error.message : "No se pudo guardar el profesor."
      );
    }
  };

  const deactivateTeacherRecord = async (teacher: SportsTeacher) => {
    if (!window.confirm("¿Seguro que deseas desactivar este profesor?")) {
      return;
    }

    try {
      await deactivateTeacher(teacher.id);
      await Promise.all([loadManagedTeachers(), loadAdminTeachers()]);
      setSuccessMessage("Profesor desactivado correctamente.");
    } catch (error) {
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "No se pudo desactivar el profesor."
      );
    }
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
                <Link href="/recursos-deportivos">
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
            title="SOLICITUDES CANCELADAS"
            value={stats.canceladas}
            icon={<CheckCircle className="h-6 w-6" />}
            className="border-gray-300/35 text-gray-100 shadow-gray-500/10"
          />
          <StatCard
            title="DEVOLUCIONES REGISTRADAS"
            value={stats.devoluciones}
            icon={<RefreshCw className="h-6 w-6" />}
            className="border-emerald-300/35 text-emerald-100 shadow-emerald-500/10"
          />
        </section>

        <div className="flex flex-wrap gap-3 rounded-xl border border-amber-300/25 bg-black/30 p-2">
          {[
            ["solicitudes", "Solicitudes"],
            ["elementos", "Elementos deportivos"],
            ["estudiantes", "Estudiantes"],
            ["profesores", "Profesores"],
          ].map(([section, label]) => (
            <Button
              key={section}
              type="button"
              variant="outline"
              onClick={() => setActiveSection(section as AdminSection)}
              className={`border-amber-300/35 px-5 font-bold ${
                activeSection === section
                  ? "bg-gradient-to-r from-amber-400 to-orange-500 text-black hover:from-amber-300 hover:to-orange-400"
                  : "bg-black/25 text-amber-100 hover:bg-orange-500/15 hover:text-orange-100"
              }`}
            >
              {label}
            </Button>
          ))}
        </div>

        {activeSection === "solicitudes" && (
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

            <div className="flex flex-wrap gap-3">
              <Button
                type="button"
                variant="outline"
                onClick={exportRequestsToExcel}
                className="h-12 border-emerald-300/40 bg-emerald-500/10 px-5 font-bold text-emerald-100 hover:bg-emerald-500/20"
              >
                <FileText className="h-5 w-5" />
                Exportar Excel
              </Button>
              <Button
                asChild
                className="h-12 bg-gradient-to-r from-amber-400 to-orange-500 px-5 font-bold text-black shadow-lg shadow-orange-500/25 hover:from-amber-300 hover:to-orange-400"
              >
                <Link href="/recursos-deportivos">
                  <Plus className="h-5 w-5" />
                  Nueva solicitud
                </Link>
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            {successMessage && (
              <div className="mb-4 rounded-lg border border-emerald-300/40 bg-emerald-500/15 px-4 py-3 text-sm font-medium text-emerald-100">
                {successMessage}
              </div>
            )}
            {errorMessage && (
              <div className="mb-4 rounded-lg border border-red-300/40 bg-red-500/15 px-4 py-3 text-sm font-medium text-red-100">
                {errorMessage}
              </div>
            )}

            <div className="overflow-x-auto rounded-xl border border-amber-300/25 bg-gray-950/55 shadow-inner shadow-amber-500/10">
              <div className="min-w-[1640px]">
                <div className="grid grid-cols-[108px_104px_160px_120px_150px_180px_210px_170px_200px_248px] bg-gradient-to-r from-amber-500 to-orange-500 text-xs font-black uppercase tracking-normal text-black">
                  <TableHead>Fecha</TableHead>
                  <TableHead>Hora</TableHead>
                  <TableHead>Solicitante</TableHead>
                  <TableHead>Documento</TableHead>
                  <TableHead>Carrera</TableHead>
                  <TableHead>Profesor</TableHead>
                  <TableHead>Elementos</TableHead>
                  <TableHead>Estado</TableHead>
                  <TableHead>Observaciones</TableHead>
                  <TableHead>Acciones</TableHead>
                </div>

                {loadingRequests ? (
                  <div className="flex min-h-[180px] items-center justify-center bg-gray-950/70 px-6 py-10 text-center text-sm text-amber-100">
                    Cargando solicitudes...
                  </div>
                ) : requests.length === 0 ? (
                  <div className="flex min-h-[180px] items-center justify-center bg-gray-950/70 px-6 py-10 text-center text-sm text-gray-300">
                    No hay solicitudes registradas.
                  </div>
                ) : (
                  requests.map((request) => (
                    <div
                      key={request.id}
                      className="grid grid-cols-[108px_104px_160px_120px_150px_180px_210px_170px_200px_248px] border-t border-amber-300/15 bg-gray-950/65 text-sm text-gray-100 transition-colors hover:bg-amber-500/10"
                    >
                      <TableCell className="justify-center whitespace-nowrap text-center font-bold text-amber-100">
                        {request.requestDate}
                      </TableCell>
                      <TableCell className="justify-center whitespace-nowrap text-center font-mono text-xs text-yellow-100">
                        {request.requestTime}
                      </TableCell>
                      <TableCell className="font-bold text-amber-50">
                        <span className="line-clamp-2 break-words">
                          {request.applicantName}
                        </span>
                      </TableCell>
                      <TableCell className="justify-center whitespace-nowrap text-center font-mono text-xs text-gray-100">
                        {request.documentNumber}
                      </TableCell>
                      <TableCell className="font-semibold text-emerald-100/90">
                        <span className="line-clamp-2 break-words">
                          {request.applicantCareer || "Sin carrera"}
                        </span>
                      </TableCell>
                      <TableCell className="font-semibold text-amber-50/90">
                        <span className="line-clamp-2 break-words">
                          {cleanTeacherName(request.responsibleTeacher)}
                        </span>
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
        )}

        {activeSection === "elementos" && (
          <Card className="border-amber-300/35 bg-black/35 text-white shadow-xl shadow-amber-500/10 backdrop-blur-sm">
            <CardHeader className="gap-4 md:grid-cols-[1fr_auto] md:items-center">
              <div>
                <CardTitle className="flex items-center gap-2 text-lg font-mono text-amber-200">
                  <Package className="h-5 w-5" />
                  ELEMENTOS DEPORTIVOS
                </CardTitle>
                <p className="mt-2 text-sm text-gray-300">
                  Inventario disponible para préstamos deportivos.
                </p>
              </div>
              <Button
                type="button"
                onClick={openNewElementDialog}
                className="h-12 bg-gradient-to-r from-amber-400 to-orange-500 px-5 font-bold text-black shadow-lg shadow-orange-500/25 hover:from-amber-300 hover:to-orange-400"
              >
                <Plus className="h-5 w-5" />
                Nuevo elemento
              </Button>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
                <Input
                  value={elementSearch}
                  onChange={(event) => setElementSearch(event.target.value)}
                  placeholder="Buscar elemento por nombre, código, categoría, marca o color..."
                  className="max-w-xl border-amber-300/30 bg-black/30 text-white placeholder:text-gray-500"
                />
                <Select
                  value={elementFilter}
                  onValueChange={(value) => setElementFilter(value as ElementFilter)}
                >
                  <SelectTrigger className="w-full border-amber-300/30 bg-black/30 text-white lg:w-44">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="border-amber-300/30 bg-gray-950 text-amber-50">
                    <SelectItem value="activos">Activos</SelectItem>
                    <SelectItem value="inactivos">Inactivos</SelectItem>
                    <SelectItem value="todos">Todos</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="overflow-x-auto rounded-xl border border-amber-300/25 bg-gray-950/55">
                <div className="min-w-[1320px]">
                  <div className="grid grid-cols-[190px_140px_220px_150px_130px_160px_100px_120px_110px_230px] bg-gradient-to-r from-amber-500 to-orange-500 text-xs font-black uppercase text-black">
                    <TableHead>Nombre</TableHead>
                    <TableHead>Código</TableHead>
                    <TableHead>Descripción</TableHead>
                    <TableHead>Marca</TableHead>
                    <TableHead>Color</TableHead>
                    <TableHead>Categoría</TableHead>
                    <TableHead>Total</TableHead>
                    <TableHead>Disponible</TableHead>
                    <TableHead>Estado</TableHead>
                    <TableHead>Acciones</TableHead>
                  </div>
                  {loadingManagedElements ? (
                    <div className="px-6 py-10 text-center text-sm text-amber-100">
                      Cargando elementos...
                    </div>
                  ) : filteredManagedElements.length === 0 ? (
                    <div className="px-6 py-10 text-center text-sm text-gray-300">
                      No hay elementos registrados.
                    </div>
                  ) : (
                    filteredManagedElements.map((element) => (
                      <div
                        key={element.id}
                        className="grid grid-cols-[190px_140px_220px_150px_130px_160px_100px_120px_110px_230px] border-t border-amber-300/15 bg-gray-950/65 text-sm text-gray-100 hover:bg-amber-500/10"
                      >
                        <TableCell className="font-bold text-amber-50">
                          {element.icono ? `${element.icono} ` : ""}
                          {element.nombre}
                        </TableCell>
                        <TableCell className="font-mono text-xs">
                          {element.codigo || "Sin código"}
                        </TableCell>
                        <TableCell>
                          <span className="line-clamp-2">
                            {element.descripcion || "Sin descripción"}
                          </span>
                        </TableCell>
                        <TableCell>{element.marca || "Sin marca"}</TableCell>
                        <TableCell>{element.color || "Sin color"}</TableCell>
                        <TableCell>{element.categoria || "Sin categoría"}</TableCell>
                        <TableCell className="justify-center text-center font-bold">
                          {element.cantidadTotal}
                        </TableCell>
                        <TableCell className="justify-center text-center font-bold text-emerald-100">
                          {element.cantidadDisponible}
                        </TableCell>
                        <TableCell>
                          {element.activo ? "Activo" : "Inactivo"}
                        </TableCell>
                        <TableCell>
                          <div className="flex flex-wrap gap-2">
                            <Button
                              type="button"
                              variant="outline"
                              onClick={() => openEditElementDialog(element)}
                              className="h-8 border-sky-300/40 bg-sky-500/10 text-xs text-sky-100 hover:bg-sky-500/25"
                            >
                              <Eye className="h-4 w-4" />
                              Ver
                            </Button>
                            <Button
                              type="button"
                              variant="outline"
                              onClick={() => openEditElementDialog(element)}
                              className="h-8 border-amber-300/50 bg-amber-500/15 text-xs text-amber-100 hover:bg-amber-500/30"
                            >
                              <Pencil className="h-4 w-4" />
                              Editar
                            </Button>
                            <Button
                              type="button"
                              variant="outline"
                              onClick={() => deactivateElementRecord(element)}
                              disabled={!element.activo}
                              className="h-8 border-red-300/40 bg-red-500/10 text-xs text-red-100 hover:bg-red-500/25 disabled:opacity-40"
                            >
                              <Trash2 className="h-4 w-4" />
                              Desactivar
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
        )}

        {activeSection === "estudiantes" && (
          <Card className="border-amber-300/35 bg-black/35 text-white shadow-xl shadow-amber-500/10 backdrop-blur-sm">
            <CardHeader className="gap-4 md:grid-cols-[1fr_auto] md:items-center">
              <div>
                <CardTitle className="flex items-center gap-2 text-lg font-mono text-amber-200">
                  <User className="h-5 w-5" />
                  ESTUDIANTES
                </CardTitle>
                <p className="mt-2 text-sm text-gray-300">
                  Administración de estudiantes habilitados para solicitudes.
                </p>
              </div>
              <Button
                type="button"
                onClick={openNewStudentDialog}
                className="h-12 bg-gradient-to-r from-amber-400 to-orange-500 px-5 font-bold text-black shadow-lg shadow-orange-500/25 hover:from-amber-300 hover:to-orange-400"
              >
                <Plus className="h-5 w-5" />
                Nuevo estudiante
              </Button>
            </CardHeader>
            <CardContent className="space-y-4">
              <Input
                value={studentSearch}
                onChange={(event) => setStudentSearch(event.target.value)}
                placeholder="Buscar estudiante por nombre, documento o carrera..."
                className="max-w-xl border-amber-300/30 bg-black/30 text-white placeholder:text-gray-500"
              />
              <div className="overflow-x-auto rounded-xl border border-amber-300/25 bg-gray-950/55">
                <div className="min-w-[900px]">
                  <div className="grid grid-cols-[1.5fr_150px_180px_120px_220px] bg-gradient-to-r from-amber-500 to-orange-500 text-xs font-black uppercase text-black">
                    <TableHead>Nombre</TableHead>
                    <TableHead>Documento</TableHead>
                    <TableHead>Carrera</TableHead>
                    <TableHead>Estado</TableHead>
                    <TableHead>Acciones</TableHead>
                  </div>
                  {loadingStudents ? (
                    <div className="px-6 py-10 text-center text-sm text-amber-100">
                      Cargando estudiantes...
                    </div>
                  ) : filteredStudents.length === 0 ? (
                    <div className="px-6 py-10 text-center text-sm text-gray-300">
                      No hay estudiantes registrados.
                    </div>
                  ) : (
                    filteredStudents.map((student) => (
                      <div
                        key={student.id}
                        className="grid grid-cols-[1.5fr_150px_180px_120px_220px] border-t border-amber-300/15 bg-gray-950/65 text-sm text-gray-100 hover:bg-amber-500/10"
                      >
                        <TableCell className="font-bold text-amber-50">
                          {student.nombre}
                        </TableCell>
                        <TableCell className="font-mono text-xs">
                          {student.cc}
                        </TableCell>
                        <TableCell>{student.carrera || "Sin carrera"}</TableCell>
                        <TableCell>
                          {student.activo ? "Activo" : "Inactivo"}
                        </TableCell>
                        <TableCell>
                          <div className="flex flex-wrap gap-2">
                            <Button
                              type="button"
                              variant="outline"
                              onClick={() => openEditStudentDialog(student)}
                              className="h-8 border-amber-300/50 bg-amber-500/15 text-xs text-amber-100 hover:bg-amber-500/30"
                            >
                              <Pencil className="h-4 w-4" />
                              Editar
                            </Button>
                            <Button
                              type="button"
                              variant="outline"
                              onClick={() => deactivateStudentRecord(student)}
                              disabled={!student.activo}
                              className="h-8 border-red-300/40 bg-red-500/10 text-xs text-red-100 hover:bg-red-500/25 disabled:opacity-40"
                            >
                              <Trash2 className="h-4 w-4" />
                              Desactivar
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
        )}

        {activeSection === "profesores" && (
          <Card className="border-amber-300/35 bg-black/35 text-white shadow-xl shadow-amber-500/10 backdrop-blur-sm">
            <CardHeader className="gap-4 md:grid-cols-[1fr_auto] md:items-center">
              <div>
                <CardTitle className="flex items-center gap-2 text-lg font-mono text-amber-200">
                  <Shield className="h-5 w-5" />
                  PROFESORES
                </CardTitle>
                <p className="mt-2 text-sm text-gray-300">
                  Administración de profesores responsables.
                </p>
              </div>
              <Button
                type="button"
                onClick={openNewTeacherDialog}
                className="h-12 bg-gradient-to-r from-amber-400 to-orange-500 px-5 font-bold text-black shadow-lg shadow-orange-500/25 hover:from-amber-300 hover:to-orange-400"
              >
                <Plus className="h-5 w-5" />
                Nuevo profesor
              </Button>
            </CardHeader>
            <CardContent className="space-y-4">
              <Input
                value={teacherCrudSearch}
                onChange={(event) => setTeacherCrudSearch(event.target.value)}
                placeholder="Buscar profesor por nombre, documento, carrera o correo..."
                className="max-w-xl border-amber-300/30 bg-black/30 text-white placeholder:text-gray-500"
              />
              <div className="overflow-x-auto rounded-xl border border-amber-300/25 bg-gray-950/55">
                <div className="min-w-[1100px]">
                  <div className="grid grid-cols-[1.5fr_150px_180px_230px_140px_120px_220px] bg-gradient-to-r from-amber-500 to-orange-500 text-xs font-black uppercase text-black">
                    <TableHead>Nombre</TableHead>
                    <TableHead>Documento</TableHead>
                    <TableHead>Carrera</TableHead>
                    <TableHead>Correo</TableHead>
                    <TableHead>Teléfono</TableHead>
                    <TableHead>Estado</TableHead>
                    <TableHead>Acciones</TableHead>
                  </div>
                  {loadingManagedTeachers ? (
                    <div className="px-6 py-10 text-center text-sm text-amber-100">
                      Cargando profesores...
                    </div>
                  ) : filteredManagedTeachers.length === 0 ? (
                    <div className="px-6 py-10 text-center text-sm text-gray-300">
                      No hay profesores registrados.
                    </div>
                  ) : (
                    filteredManagedTeachers.map((teacher) => (
                      <div
                        key={teacher.id}
                        className="grid grid-cols-[1.5fr_150px_180px_230px_140px_120px_220px] border-t border-amber-300/15 bg-gray-950/65 text-sm text-gray-100 hover:bg-amber-500/10"
                      >
                        <TableCell className="font-bold text-amber-50">
                          {teacher.nombre}
                        </TableCell>
                        <TableCell className="font-mono text-xs">
                          {teacher.cc || "Sin documento"}
                        </TableCell>
                        <TableCell>{teacher.carrera || "Sin carrera"}</TableCell>
                        <TableCell>
                          <span className="line-clamp-2 break-all">
                            {teacher.correo || "Sin correo"}
                          </span>
                        </TableCell>
                        <TableCell>{teacher.telefono || "Sin teléfono"}</TableCell>
                        <TableCell>
                          {teacher.activo ? "Activo" : "Inactivo"}
                        </TableCell>
                        <TableCell>
                          <div className="flex flex-wrap gap-2">
                            <Button
                              type="button"
                              variant="outline"
                              onClick={() => openEditTeacherDialog(teacher)}
                              className="h-8 border-amber-300/50 bg-amber-500/15 text-xs text-amber-100 hover:bg-amber-500/30"
                            >
                              <Pencil className="h-4 w-4" />
                              Editar
                            </Button>
                            <Button
                              type="button"
                              variant="outline"
                              onClick={() => deactivateTeacherRecord(teacher)}
                              disabled={!teacher.activo}
                              className="h-8 border-red-300/40 bg-red-500/10 text-xs text-red-100 hover:bg-red-500/25 disabled:opacity-40"
                            >
                              <Trash2 className="h-4 w-4" />
                              Desactivar
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
        )}
      </div>

      <Dialog open={isElementDialogOpen} onOpenChange={setIsElementDialogOpen}>
        <DialogContent className="border-amber-300/40 bg-gray-950 text-white shadow-2xl shadow-orange-500/20">
          <DialogHeader>
            <DialogTitle className="text-amber-100">
              {editingElement ? "Editar elemento" : "Nuevo elemento"}
            </DialogTitle>
            <DialogDescription className="text-gray-300">
              Gestiona el inventario de elementos deportivos.
            </DialogDescription>
          </DialogHeader>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="grid gap-2">
              <label className="text-sm font-medium text-amber-100">Nombre</label>
              <Input
                value={elementForm.nombre}
                onChange={(event) =>
                  setElementForm((currentForm) => ({
                    ...currentForm,
                    nombre: event.target.value,
                  }))
                }
                className="border-amber-300/30 bg-black/30 text-white"
              />
            </div>
            <div className="grid gap-2">
              <label className="text-sm font-medium text-amber-100">Código</label>
              <Input
                value={elementForm.codigo}
                onChange={(event) =>
                  setElementForm((currentForm) => ({
                    ...currentForm,
                    codigo: event.target.value,
                  }))
                }
                className="border-amber-300/30 bg-black/30 text-white"
              />
            </div>
            <div className="grid gap-2 sm:col-span-2">
              <label className="text-sm font-medium text-amber-100">
                Descripción
              </label>
              <Input
                value={elementForm.descripcion}
                onChange={(event) =>
                  setElementForm((currentForm) => ({
                    ...currentForm,
                    descripcion: event.target.value,
                  }))
                }
                className="border-amber-300/30 bg-black/30 text-white"
              />
            </div>
            <div className="grid gap-2">
              <label className="text-sm font-medium text-amber-100">Marca</label>
              <Input
                value={elementForm.marca}
                onChange={(event) =>
                  setElementForm((currentForm) => ({
                    ...currentForm,
                    marca: event.target.value,
                  }))
                }
                className="border-amber-300/30 bg-black/30 text-white"
              />
            </div>
            <div className="grid gap-2">
              <label className="text-sm font-medium text-amber-100">Color</label>
              <Input
                value={elementForm.color}
                onChange={(event) =>
                  setElementForm((currentForm) => ({
                    ...currentForm,
                    color: event.target.value,
                  }))
                }
                className="border-amber-300/30 bg-black/30 text-white"
              />
            </div>
            <div className="grid gap-2">
              <label className="text-sm font-medium text-amber-100">Categoría</label>
              <Input
                value={elementForm.categoria}
                onChange={(event) =>
                  setElementForm((currentForm) => ({
                    ...currentForm,
                    categoria: event.target.value,
                  }))
                }
                className="border-amber-300/30 bg-black/30 text-white"
              />
            </div>
            <div className="grid gap-2">
              <label className="text-sm font-medium text-amber-100">Icono</label>
              <Input
                value={elementForm.icono}
                onChange={(event) =>
                  setElementForm((currentForm) => ({
                    ...currentForm,
                    icono: event.target.value,
                  }))
                }
                className="border-amber-300/30 bg-black/30 text-white"
              />
            </div>
            <div className="grid gap-2">
              <label className="text-sm font-medium text-amber-100">
                Cantidad total
              </label>
              <Input
                type="number"
                min={0}
                value={elementForm.cantidadTotal}
                onChange={(event) =>
                  setElementForm((currentForm) => ({
                    ...currentForm,
                    cantidadTotal: event.target.value,
                  }))
                }
                className="border-amber-300/30 bg-black/30 text-white"
              />
            </div>
            <div className="grid gap-2">
              <label className="text-sm font-medium text-amber-100">
                Cantidad disponible
              </label>
              <Input
                type="number"
                min={0}
                value={elementForm.cantidadDisponible}
                onChange={(event) =>
                  setElementForm((currentForm) => ({
                    ...currentForm,
                    cantidadDisponible: event.target.value,
                  }))
                }
                className="border-amber-300/30 bg-black/30 text-white"
              />
            </div>
            <label className="flex items-center gap-3 text-sm text-amber-100">
              <input
                type="checkbox"
                checked={elementForm.activo}
                onChange={(event) =>
                  setElementForm((currentForm) => ({
                    ...currentForm,
                    activo: event.target.checked,
                  }))
                }
                className="h-4 w-4 accent-orange-500"
              />
              Activo
            </label>
            {crudFormError && (
              <div className="rounded-lg border border-red-300/40 bg-red-500/15 px-3 py-2 text-sm text-red-100 sm:col-span-2">
                {crudFormError}
              </div>
            )}
          </div>

          <DialogFooter>
            <Button
              type="button"
              variant="outline"
              onClick={closeElementDialog}
              className="border-gray-500/50 bg-black/30 text-gray-100 hover:bg-gray-800"
            >
              Cancelar
            </Button>
            <Button
              type="button"
              onClick={submitElementForm}
              className="bg-gradient-to-r from-amber-400 to-orange-500 font-bold text-black hover:from-amber-300 hover:to-orange-400"
            >
              <Save className="h-4 w-4" />
              Guardar
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <Dialog open={isStudentDialogOpen} onOpenChange={setIsStudentDialogOpen}>
        <DialogContent className="border-amber-300/40 bg-gray-950 text-white shadow-2xl shadow-orange-500/20">
          <DialogHeader>
            <DialogTitle className="text-amber-100">
              {editingStudent ? "Editar estudiante" : "Nuevo estudiante"}
            </DialogTitle>
            <DialogDescription className="text-gray-300">
              Gestiona los datos del estudiante para el módulo deportivo.
            </DialogDescription>
          </DialogHeader>

          <div className="grid gap-4">
            <div className="grid gap-2">
              <label className="text-sm font-medium text-amber-100">Nombre</label>
              <Input
                value={studentForm.nombre}
                onChange={(event) =>
                  setStudentForm((currentForm) => ({
                    ...currentForm,
                    nombre: event.target.value,
                  }))
                }
                className="border-amber-300/30 bg-black/30 text-white"
              />
            </div>
            <div className="grid gap-2">
              <label className="text-sm font-medium text-amber-100">
                Número de documento
              </label>
              <Input
                value={studentForm.cc}
                onChange={(event) =>
                  setStudentForm((currentForm) => ({
                    ...currentForm,
                    cc: event.target.value,
                  }))
                }
                className="border-amber-300/30 bg-black/30 text-white"
              />
            </div>
            <div className="grid gap-2">
              <label className="text-sm font-medium text-amber-100">Carrera</label>
              <Input
                value={studentForm.carrera}
                onChange={(event) =>
                  setStudentForm((currentForm) => ({
                    ...currentForm,
                    carrera: event.target.value,
                  }))
                }
                className="border-amber-300/30 bg-black/30 text-white"
              />
            </div>
            <label className="flex items-center gap-3 text-sm text-amber-100">
              <input
                type="checkbox"
                checked={studentForm.activo}
                onChange={(event) =>
                  setStudentForm((currentForm) => ({
                    ...currentForm,
                    activo: event.target.checked,
                  }))
                }
                className="h-4 w-4 accent-orange-500"
              />
              Activo
            </label>
            {crudFormError && (
              <div className="rounded-lg border border-red-300/40 bg-red-500/15 px-3 py-2 text-sm text-red-100">
                {crudFormError}
              </div>
            )}
          </div>

          <DialogFooter>
            <Button
              type="button"
              variant="outline"
              onClick={closeStudentDialog}
              className="border-gray-500/50 bg-black/30 text-gray-100 hover:bg-gray-800"
            >
              Cancelar
            </Button>
            <Button
              type="button"
              onClick={submitStudentForm}
              className="bg-gradient-to-r from-amber-400 to-orange-500 font-bold text-black hover:from-amber-300 hover:to-orange-400"
            >
              <Save className="h-4 w-4" />
              Guardar
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <Dialog open={isTeacherDialogOpen} onOpenChange={setIsTeacherDialogOpen}>
        <DialogContent className="border-amber-300/40 bg-gray-950 text-white shadow-2xl shadow-orange-500/20">
          <DialogHeader>
            <DialogTitle className="text-amber-100">
              {editingTeacher ? "Editar profesor" : "Nuevo profesor"}
            </DialogTitle>
            <DialogDescription className="text-gray-300">
              Gestiona los profesores responsables del módulo deportivo.
            </DialogDescription>
          </DialogHeader>

          <div className="grid gap-4">
            <div className="grid gap-2">
              <label className="text-sm font-medium text-amber-100">Nombre</label>
              <Input
                value={teacherForm.nombre}
                onChange={(event) =>
                  setTeacherForm((currentForm) => ({
                    ...currentForm,
                    nombre: event.target.value,
                  }))
                }
                className="border-amber-300/30 bg-black/30 text-white"
              />
            </div>
            <div className="grid gap-2">
              <label className="text-sm font-medium text-amber-100">
                Número de documento
              </label>
              <Input
                value={teacherForm.cc}
                onChange={(event) =>
                  setTeacherForm((currentForm) => ({
                    ...currentForm,
                    cc: event.target.value,
                  }))
                }
                className="border-amber-300/30 bg-black/30 text-white"
              />
            </div>
            <div className="grid gap-2">
              <label className="text-sm font-medium text-amber-100">Carrera</label>
              <Input
                value={teacherForm.carrera}
                onChange={(event) =>
                  setTeacherForm((currentForm) => ({
                    ...currentForm,
                    carrera: event.target.value,
                  }))
                }
                className="border-amber-300/30 bg-black/30 text-white"
              />
            </div>
            <div className="grid gap-2">
              <label className="text-sm font-medium text-amber-100">Correo</label>
              <Input
                value={teacherForm.correo}
                onChange={(event) =>
                  setTeacherForm((currentForm) => ({
                    ...currentForm,
                    correo: event.target.value,
                  }))
                }
                placeholder="Opcional, se genera si queda vacío"
                className="border-amber-300/30 bg-black/30 text-white placeholder:text-gray-500"
              />
            </div>
            <div className="grid gap-2">
              <label className="text-sm font-medium text-amber-100">Teléfono</label>
              <Input
                value={teacherForm.telefono}
                onChange={(event) =>
                  setTeacherForm((currentForm) => ({
                    ...currentForm,
                    telefono: event.target.value,
                  }))
                }
                className="border-amber-300/30 bg-black/30 text-white"
              />
            </div>
            <label className="flex items-center gap-3 text-sm text-amber-100">
              <input
                type="checkbox"
                checked={teacherForm.activo}
                onChange={(event) =>
                  setTeacherForm((currentForm) => ({
                    ...currentForm,
                    activo: event.target.checked,
                  }))
                }
                className="h-4 w-4 accent-orange-500"
              />
              Activo
            </label>
            {crudFormError && (
              <div className="rounded-lg border border-red-300/40 bg-red-500/15 px-3 py-2 text-sm text-red-100">
                {crudFormError}
              </div>
            )}
          </div>

          <DialogFooter>
            <Button
              type="button"
              variant="outline"
              onClick={closeTeacherDialog}
              className="border-gray-500/50 bg-black/30 text-gray-100 hover:bg-gray-800"
            >
              Cancelar
            </Button>
            <Button
              type="button"
              onClick={submitTeacherForm}
              className="bg-gradient-to-r from-amber-400 to-orange-500 font-bold text-black hover:from-amber-300 hover:to-orange-400"
            >
              <Save className="h-4 w-4" />
              Guardar
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

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
                Nombre completo del solicitante
              </label>
              <Input
                value={formData.applicantName}
                onChange={(event) =>
                  setFormData((currentForm) => ({
                    ...currentForm,
                    applicantName: event.target.value,
                  }))
                }
                placeholder="Ej. Juan Perez"
                className="border-amber-300/30 bg-black/30 text-white placeholder:text-gray-500"
              />
            </div>

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
                Profesor responsable
              </label>
              <Input
                value={adminTeacherSearch}
                onChange={(event) => setAdminTeacherSearch(event.target.value)}
                placeholder="Buscar profesor por nombre..."
                className="border-amber-300/30 bg-black/30 text-white placeholder:text-gray-500"
              />
              <Select
                value={formData.profesorId || FALLBACK_TEACHER_ID}
                onValueChange={(value) => {
                    const selectedTeacher = findTeacherById(teachers, value);
                    setFormData((currentForm) => ({
                      ...currentForm,
                      profesorId: value,
                      responsibleTeacher: selectedTeacher?.nombre || "",
                    }));
                    setAdminTeacherSearch("");
                  }}
              >
                <SelectTrigger className="border-amber-300/30 bg-black/30 text-white">
                  <SelectValue placeholder="Selecciona el profesor responsable" />
                </SelectTrigger>
                <SelectContent className="border-amber-300/30 bg-gray-950 text-amber-50">
                  {filteredAdminTeachers.map((teacher) => (
                    <SelectItem key={teacher.id} value={teacher.id}>
                      {teacher.nombre}
                    </SelectItem>
                  ))}
                  {filteredAdminTeachers.length === 0 && (
                    <div className="px-3 py-2 text-sm text-slate-400">
                      No hay profesores activos registrados.
                    </div>
                  )}
                </SelectContent>
              </Select>
            </div>

            <div className="grid gap-2">
              <label className="text-sm font-medium text-amber-100">
                Elementos solicitados
              </label>
              <div className="grid max-h-72 gap-3 overflow-y-auto rounded-xl border border-amber-300/20 bg-black/20 p-3">
                {sportsElements.map((item) => {
                  const quantity =
                    formData.selectedItems.find(
                      (selectedItem) => selectedItem.id === item.id
                    )?.quantity || 0;

                  return (
                    <div
                      key={item.id}
                      className="grid gap-3 rounded-lg border border-amber-300/15 bg-gray-950/70 p-3 sm:grid-cols-[1fr_auto] sm:items-center"
                    >
                      <div>
                        <p className="font-bold text-amber-50">{item.name}</p>
                        <p className="text-xs text-gray-400">
                          {item.detail} - {item.available} disponibles
                        </p>
                      </div>
                      <div className="flex items-center gap-3">
                        <Button
                          type="button"
                          variant="outline"
                          size="icon"
                          disabled={quantity === 0}
                          onClick={() => updateAdminItemQuantity(item, -1)}
                          className="h-8 w-8 border-amber-300/35 bg-black/30 text-amber-100 hover:bg-orange-500/20 disabled:opacity-40"
                        >
                          <Minus className="h-4 w-4" />
                        </Button>
                        <span className="w-6 text-center font-black text-amber-50">
                          {quantity}
                        </span>
                        <Button
                          type="button"
                          variant="outline"
                          size="icon"
                          disabled={quantity >= item.available}
                          onClick={() => updateAdminItemQuantity(item, 1)}
                          className="h-8 w-8 border-amber-300/35 bg-black/30 text-amber-100 hover:bg-orange-500/20 disabled:opacity-40"
                        >
                          <Plus className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  );
                })}
              </div>
              <span className="text-xs text-gray-400">
                Puedes agregar, quitar o modificar cantidades desde este listado.
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
              <DetailRow label="Hora" value={viewingRequest.requestTime} />
              <DetailRow label="Día" value={viewingRequest.requestDay} />
              <DetailRow
                label="Solicitante"
                value={viewingRequest.applicantName}
              />
              <DetailRow
                label="Documento"
                value={viewingRequest.documentNumber}
              />
              <DetailRow
                label="Carrera"
                value={viewingRequest.applicantCareer || "Sin carrera"}
              />
              <DetailRow
                label="Profesor responsable"
                value={cleanTeacherName(viewingRequest.responsibleTeacher)}
              />
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
            <Link href="/recursos-deportivos/admin">
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
            <Link href="/recursos-deportivos">
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
