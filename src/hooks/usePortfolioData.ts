import { useCallback, useEffect, useRef, useState } from 'react';
import { loadPortfolio } from '../services/portfolioService';
import type { PortfolioData } from '../data/types';

export interface PortfolioState {
  data: PortfolioData | null;
  loading: boolean;
  error: string | null;
  reload: () => void;
}

export type PortfolioLoader = (signal?: AbortSignal) => Promise<PortfolioData>;

const defaultLoader: PortfolioLoader = (signal) => loadPortfolio({ signal });

function toErrorMessage(cause: unknown): string {
  return cause instanceof Error
    ? cause.message
    : 'No se pudo cargar la información del portafolio.';
}

export function usePortfolioData(loader: PortfolioLoader = defaultLoader): PortfolioState {
  const [data, setData] = useState<PortfolioData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [attempt, setAttempt] = useState(0);
  const loaderRef = useRef(loader);

  useEffect(() => {
    loaderRef.current = loader;
  }, [loader]);

  useEffect(() => {
    const controller = new AbortController();
    let active = true;

    setLoading(true);
    setError(null);

    loaderRef.current(controller.signal)
      .then((portfolio) => {
        if (active) {
          setData(portfolio);
        }
      })
      .catch((cause: unknown) => {
        if (active) {
          setError(toErrorMessage(cause));
        }
      })
      .finally(() => {
        if (active) {
          setLoading(false);
        }
      });

    return () => {
      active = false;
      controller.abort();
    };
  }, [attempt]);

  const reload = useCallback(() => {
    setAttempt((current) => current + 1);
  }, []);

  return { data, loading, error, reload };
}
