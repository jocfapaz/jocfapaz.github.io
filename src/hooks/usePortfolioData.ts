import { useEffect, useState } from 'react';
import { loadPortfolio } from '../services/portfolioService';
import type { PortfolioData } from '../data/types';

export interface PortfolioState {
  data: PortfolioData | null;
  loading: boolean;
  error: string | null;
}

type PortfolioLoader = () => Promise<PortfolioData>;

export function usePortfolioData(loader: PortfolioLoader = loadPortfolio): PortfolioState {
  const [data, setData] = useState<PortfolioData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let active = true;

    loader()
      .then((portfolio) => {
        if (active) {
          setData(portfolio);
        }
      })
      .catch((cause: unknown) => {
        if (active) {
          setError(
            cause instanceof Error
              ? cause.message
              : 'No se pudo cargar la información del portafolio.',
          );
        }
      })
      .finally(() => {
        if (active) {
          setLoading(false);
        }
      });

    return () => {
      active = false;
    };
  }, [loader]);

  return { data, loading, error };
}
