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

export async function getSportsElements() {
  return requestJson("/api/recursos-deportivos/elementos");
}

export async function createSportsElement(payload: unknown) {
  return requestJson("/api/recursos-deportivos/elementos", {
    method: "POST",
    body: JSON.stringify(payload),
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

export async function getSportsPersonByDocument(cc: string) {
  return requestJson(
    `/api/recursos-deportivos/personas/${encodeURIComponent(cc)}`
  );
}

export async function getSportsStats() {
  return requestJson("/api/recursos-deportivos/estadisticas");
}
