const API_BASE_URL = import.meta.env.VITE_API_BASE_URL ?? '';

function getAuthHeaders(): Record<string, string> {
  const token = window.localStorage.getItem('accessToken');
  return token ? { Authorization: `Bearer ${token}` } : {};
}

export async function apiFetch<T>(path: string, options: RequestInit = {}) {
  const defaultHeaders: Record<string, string> = {
    'Content-Type': 'application/json'
  };
  const authHeaders = getAuthHeaders();
  const customHeaders = (options.headers as Record<string, string> | undefined) ?? {};

  const response = await fetch(`${API_BASE_URL}${path}`, {
    credentials: 'include',
    ...options,
    headers: {
      ...defaultHeaders,
      ...authHeaders,
      ...customHeaders
    }
  });

  if (!response.ok) {
    const errorBody = await response.json().catch(() => null);
    const message = errorBody?.message || response.statusText || 'Erro ao se comunicar com o servidor.';
    throw new Error(message);
  }

  return (await response.json()) as T;
}
