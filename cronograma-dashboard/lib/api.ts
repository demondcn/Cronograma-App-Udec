// lib/api.ts
const isLocal = process.env.NODE_ENV === "development";

// URL principal (local en dev, Vercel en producción)
const primaryAPI = isLocal
  ? "http://localhost:3000"
  : "https://tusitio.vercel.app";

// URL de respaldo (Netlify)
const backupAPI = "https://tusitio.netlify.app";

export async function fetchWithFallback(
  endpoint: string,
  options: RequestInit = {}
) {
  try {
    const res = await fetch(`${primaryAPI}${endpoint}`, options);
    if (!res.ok) throw new Error("Error en API primaria");
    return res;
  } catch (err) {
    console.warn("⚠️ API primaria no disponible, intentando Netlify...");
    return fetch(`${backupAPI}${endpoint}`, options);
  }
}
