// Función genérica para hacer peticiones a la API
const apiRequest = async (endpoint: string, options: RequestInit = {}) => {
  const response = await fetch(`/api/${endpoint}`, {
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
    ...options,
  })

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}))
    throw new Error(errorData.error || `Error ${response.status}: ${response.statusText}`)
  }

  return response.json()
}

// Servicio para Programas
export const programaService = {
  getAll: async () => {
    return await apiRequest('programas')
  },
  
  getById: async (id: string) => {
    return await apiRequest(`programas/${id}`)
  },
  
  create: async (data: any) => {
    return await apiRequest('programas', {
      method: 'POST',
      body: JSON.stringify(data),
    })
  },
  
  update: async (id: string, data: any) => {
    return await apiRequest(`programas/${id}`, {
      method: 'PUT',
      body: JSON.stringify(data),
    })
  },
  
  delete: async (id: string) => {
    return await apiRequest(`programas/${id}`, {
      method: 'DELETE',
    })
  }
}

// Servicio para Asignaturas
export const asignaturaService = {
  getAll: async () => {
    return await apiRequest('asignaturas')
  },
  
  getById: async (id: string) => {
    return await apiRequest(`asignaturas/${id}`)
  },
  
  create: async (data: any) => {
    return await apiRequest('asignaturas', {
      method: 'POST',
      body: JSON.stringify(data),
    })
  },
  
  update: async (id: string, data: any) => {
    return await apiRequest(`asignaturas/${id}`, {
      method: 'PUT',
      body: JSON.stringify(data),
    })
  },
  
  delete: async (id: string) => {
    return await apiRequest(`asignaturas/${id}`, {
      method: 'DELETE',
    })
  }
}

// Servicio para Aulas
export const aulaService = {
  getAll: async () => {
    return await apiRequest('aulas')
  },
  
  getById: async (id: string) => {
    return await apiRequest(`aulas/${id}`)
  },
  
  create: async (data: any) => {
    return await apiRequest('aulas', {
      method: 'POST',
      body: JSON.stringify(data),
    })
  },
  
  update: async (id: string, data: any) => {
    return await apiRequest(`aulas/${id}`, {
      method: 'PUT',
      body: JSON.stringify(data),
    })
  },
  
  delete: async (id: string) => {
    return await apiRequest(`aulas/${id}`, {
      method: 'DELETE',
    })
  }
}

// Servicio para Profesores
export const profesorService = {
  getAll: async () => {
    return await apiRequest('profesores')
  },
  
  getById: async (id: string) => {
    return await apiRequest(`profesores/${id}`)
  },
  
  create: async (data: any) => {
    return await apiRequest('profesores', {
      method: 'POST',
      body: JSON.stringify(data),
    })
  },
  
  update: async (id: string, data: any) => {
    return await apiRequest(`profesores/${id}`, {
      method: 'PUT',
      body: JSON.stringify(data),
    })
  },
  
  delete: async (id: string) => {
    return await apiRequest(`profesores/${id}`, {
      method: 'DELETE',
    })
  }
}

// Servicio para Horarios
export const horarioService = {
  getAll: async () => {
    return await apiRequest('horarios')
  },
  
  getById: async (id: string) => {
    return await apiRequest(`horarios/${id}`)
  },
  
  create: async (data: any) => {
    return await apiRequest('horarios', {
      method: 'POST',
      body: JSON.stringify(data),
    })
  },
  
  update: async (id: string, data: any) => {
    return await apiRequest(`horarios/${id}`, {
      method: 'PUT',
      body: JSON.stringify(data),
    })
  },
  
  delete: async (id: string) => {
    return await apiRequest(`horarios/${id}`, {
      method: 'DELETE',
    })
  }
}