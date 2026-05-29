async function requestJson<T>(url: string, init?: RequestInit): Promise<T> {
  const response = await fetch(url, {
    ...init,
    headers: {
      "Content-Type": "application/json",
      ...(init?.headers || {}),
    },
  });
  const data = await response.json();

  if (!response.ok || data?.ok === false) {
    throw new Error(data?.message || "Error en la solicitud.");
  }

  return data;
}

export async function getSportsElements(params?: {
  search?: string;
  includeInactive?: boolean;
}) {
  return requestJson(
    `/api/recursos-deportivos/elementos${buildQuery(params)}`
  );
}

export async function createSportsElement(payload: unknown) {
  return requestJson("/api/recursos-deportivos/elementos", {
    method: "POST",
    body: JSON.stringify(payload),
  });
}

export async function updateSportsElement(id: string, payload: unknown) {
  return requestJson(`/api/recursos-deportivos/elementos/${id}`, {
    method: "PUT",
    body: JSON.stringify(payload),
  });
}

export async function deactivateSportsElement(id: string) {
  return requestJson(`/api/recursos-deportivos/elementos/${id}`, {
    method: "DELETE",
  });
}

export async function getSportsRequests() {
  return requestJson("/api/recursos-deportivos/solicitudes");
}

export async function getSportsRequestById(id: string) {
  return requestJson(`/api/recursos-deportivos/solicitudes/${id}`);
}

export async function createSportsRequest(payload: unknown) {
  return requestJson("/api/recursos-deportivos/solicitudes", {
    method: "POST",
    body: JSON.stringify(payload),
  });
}

export async function updateSportsRequest(id: string, payload: unknown) {
  return requestJson(`/api/recursos-deportivos/solicitudes/${id}`, {
    method: "PUT",
    body: JSON.stringify(payload),
  });
}

export async function cancelSportsRequest(id: string) {
  return requestJson(`/api/recursos-deportivos/solicitudes/${id}`, {
    method: "DELETE",
  });
}

export async function getSportsTeachers() {
  return requestJson("/api/recursos-deportivos/profesores");
}

function buildQuery(params?: { search?: string; includeInactive?: boolean }) {
  const searchParams = new URLSearchParams();

  if (params?.search) {
    searchParams.set("search", params.search);
  }

  if (params?.includeInactive) {
    searchParams.set("includeInactive", "true");
  }

  const query = searchParams.toString();
  return query ? `?${query}` : "";
}

export async function getStudents(params?: {
  search?: string;
  includeInactive?: boolean;
}) {
  return requestJson(
    `/api/recursos-deportivos/estudiantes${buildQuery(params)}`
  );
}

export async function createStudent(payload: unknown) {
  return requestJson("/api/recursos-deportivos/estudiantes", {
    method: "POST",
    body: JSON.stringify(payload),
  });
}

export async function updateStudent(id: string, payload: unknown) {
  return requestJson(`/api/recursos-deportivos/estudiantes/${id}`, {
    method: "PUT",
    body: JSON.stringify(payload),
  });
}

export async function deactivateStudent(id: string) {
  return requestJson(`/api/recursos-deportivos/estudiantes/${id}`, {
    method: "DELETE",
  });
}

export async function getTeachers(params?: {
  search?: string;
  includeInactive?: boolean;
}) {
  return requestJson(
    `/api/recursos-deportivos/profesores${buildQuery(params)}`
  );
}

export async function createTeacher(payload: unknown) {
  return requestJson("/api/recursos-deportivos/profesores", {
    method: "POST",
    body: JSON.stringify(payload),
  });
}

export async function updateTeacher(id: string, payload: unknown) {
  return requestJson(`/api/recursos-deportivos/profesores/${id}`, {
    method: "PUT",
    body: JSON.stringify(payload),
  });
}

export async function deactivateTeacher(id: string) {
  return requestJson(`/api/recursos-deportivos/profesores/${id}`, {
    method: "DELETE",
  });
}

export async function getSportsPersonByDocument(cc: string) {
  return requestJson(
    `/api/recursos-deportivos/personas/${encodeURIComponent(cc)}`
  );
}

export async function getActiveSportsRequestByDocument(documento: string) {
  return requestJson(
    `/api/recursos-deportivos/solicitudes/activas/${encodeURIComponent(
      documento
    )}`
  );
}

export async function getSportsStats() {
  return requestJson("/api/recursos-deportivos/estadisticas");
}
