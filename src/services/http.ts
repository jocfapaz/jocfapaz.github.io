const DEFAULT_TIMEOUT_MS = 10_000;

function normalizeBaseUrl(value: string): string {
  return value.trim().replace(/\/+$/, '');
}

function resolveApiBaseUrl(): string {
  const configured = import.meta.env.VITE_API_URL;

  if (typeof configured === 'string' && configured.trim().length > 0) {
    return normalizeBaseUrl(configured);
  }

  const base = import.meta.env.BASE_URL.replace(/\/+$/, '');
  return `${base}/api`;
}

export const API_BASE_URL = resolveApiBaseUrl();

export class ApiError extends Error {
  readonly status: number;
  readonly url: string;

  constructor(message: string, status: number, url: string, options?: ErrorOptions) {
    super(message, options);
    this.name = 'ApiError';
    this.status = status;
    this.url = url;
  }
}

export interface RequestOptions {
  signal?: AbortSignal;
  timeoutMs?: number;
}

function buildUrl(path: string): string {
  return `${API_BASE_URL}${path.startsWith('/') ? path : `/${path}`}`;
}

export async function getJson<T>(path: string, options: RequestOptions = {}): Promise<T> {
  const url = buildUrl(path);
  const controller = new AbortController();
  const timeoutMs = options.timeoutMs ?? DEFAULT_TIMEOUT_MS;

  const forwardAbort = () => controller.abort(options.signal?.reason);

  if (options.signal?.aborted) {
    controller.abort(options.signal.reason);
  } else {
    options.signal?.addEventListener('abort', forwardAbort, { once: true });
  }

  const timeoutId = window.setTimeout(() => {
    controller.abort(new DOMException('Tiempo de espera agotado.', 'TimeoutError'));
  }, timeoutMs);

  try {
    const response = await fetch(url, {
      headers: { Accept: 'application/json' },
      signal: controller.signal,
    });

    if (!response.ok) {
      throw new ApiError(
        `La API respondió con un estado ${response.status}.`,
        response.status,
        url,
      );
    }

    try {
      return (await response.json()) as T;
    } catch (cause) {
      throw new ApiError(
        'La API devolvió una respuesta JSON inválida.',
        response.status,
        url,
        { cause },
      );
    }
  } catch (cause) {
    if (cause instanceof ApiError) {
      throw cause;
    }

    if (controller.signal.aborted) {
      if (options.signal?.aborted) {
        throw cause;
      }

      throw new ApiError('La solicitud a la API tardó demasiado.', 0, url, { cause });
    }

    throw new ApiError('No se pudo conectar con la API.', 0, url, { cause });
  } finally {
    window.clearTimeout(timeoutId);
    options.signal?.removeEventListener('abort', forwardAbort);
  }
}
