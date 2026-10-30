import { act, render, screen } from '@testing-library/react';
import { usePortfolioData } from '../../src/hooks/usePortfolioData';
import type { PortfolioData } from '../../src/data/types';
import { portfolioFixture } from '../fixtures/portfolio';

interface PortfolioProbeProps {
  loader: () => Promise<PortfolioData>;
}

function PortfolioProbe({ loader }: PortfolioProbeProps) {
  const { data, loading, error } = usePortfolioData(loader);

  return (
    <div>
      <span data-testid="loading">{String(loading)}</span>
      <span data-testid="error">{error ?? ''}</span>
      <span data-testid="data">{data ? data.profile.name : ''}</span>
    </div>
  );
}

async function flushAsyncUpdates() {
  await act(async () => {
    await Promise.resolve();
  });
}

describe('usePortfolioData', () => {
  it('inicia en estado de carga y actualiza el estado con los datos', async () => {
    const loader = jasmine.createSpy('loader').and.callFake(async () => portfolioFixture);

    render(<PortfolioProbe loader={loader} />);

    expect(loader).toHaveBeenCalledTimes(1);
    expect(screen.getByTestId('loading').textContent).toBe('true');
    expect(screen.getByTestId('data').textContent).toBe('');
    expect(screen.getByTestId('error').textContent).toBe('');

    await flushAsyncUpdates();

    expect(screen.getByTestId('loading').textContent).toBe('false');
    expect(screen.getByTestId('data').textContent).toBe(portfolioFixture.profile.name);
    expect(screen.getByTestId('error').textContent).toBe('');
    expect(loader).toHaveBeenCalledTimes(1);
  });

  it('expone el mensaje de error cuando la carga falla', async () => {
    const loader = jasmine.createSpy('loader').and.callFake(async () => {
      throw new Error('Error de prueba');
    });

    render(<PortfolioProbe loader={loader} />);

    await flushAsyncUpdates();

    expect(screen.getByTestId('loading').textContent).toBe('false');
    expect(screen.getByTestId('data').textContent).toBe('');
    expect(screen.getByTestId('error').textContent).toBe('Error de prueba');
  });

  it('usa un mensaje genérico cuando el rechazo no es un Error', async () => {
    const loader = jasmine.createSpy('loader').and.callFake(() => Promise.reject('fallo'));

    render(<PortfolioProbe loader={loader} />);

    await flushAsyncUpdates();

    expect(screen.getByTestId('loading').textContent).toBe('false');
    expect(screen.getByTestId('data').textContent).toBe('');
    expect(screen.getByTestId('error').textContent).toContain('No se pudo cargar');
  });

  it('no actualiza el DOM si se desmonta antes de resolver', async () => {
    let resolveLoader: (value: PortfolioData) => void = () => {};
    const loader = () =>
      new Promise<PortfolioData>((resolve) => {
        resolveLoader = resolve;
      });

    const { unmount } = render(<PortfolioProbe loader={loader} />);

    unmount();
    resolveLoader(portfolioFixture);
    await flushAsyncUpdates();

    expect(screen.queryByTestId('data')).toBeNull();
  });

  it('no actualiza el DOM si se desmonta antes de rechazar', async () => {
    let rejectLoader: (reason?: unknown) => void = () => {};
    const loader = () =>
      new Promise<PortfolioData>((_resolve, reject) => {
        rejectLoader = reject;
      });

    const { unmount } = render(<PortfolioProbe loader={loader} />);

    unmount();
    rejectLoader(new Error('Error tardío'));
    await flushAsyncUpdates();

    expect(screen.queryByTestId('error')).toBeNull();
  });
});
