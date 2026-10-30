import { render, screen } from '@testing-library/react';
import { MemoryRouter, Outlet, Route, Routes } from 'react-router-dom';
import Contact from '../../src/pages/Contact';
import type { PortfolioState } from '../../src/hooks/usePortfolioData';
import { portfolioFixture } from '../fixtures/portfolio';

function ContextRoute({ value }: { value: PortfolioState }) {
  return <Outlet context={value} />;
}

function renderContact(value: PortfolioState) {
  return render(
    <MemoryRouter>
      <Routes>
        <Route element={<ContextRoute value={value} />}>
          <Route index element={<Contact />} />
        </Route>
      </Routes>
    </MemoryRouter>,
  );
}

describe('Contact', () => {
  it('muestra el estado de carga', () => {
    renderContact({ data: null, loading: true, error: null });

    expect(screen.getByText(/Cargando/)).toBeTruthy();
  });

  it('muestra el estado de error', () => {
    renderContact({ data: null, loading: false, error: 'Fallo de contacto' });

    expect(screen.getByRole('alert')).toBeTruthy();
    expect(screen.getByText(/No se pudo cargar/)).toBeTruthy();
  });

  it('muestra los datos de contacto y sus enlaces', () => {
    const { contact } = portfolioFixture;

    renderContact({ data: portfolioFixture, loading: false, error: null });

    expect(screen.getByRole('link', { name: contact.email }).getAttribute('href')).toBe(
      `mailto:${contact.email}`,
    );
    expect(screen.getByRole('link', { name: contact.phone }).getAttribute('href')).toBe(
      `tel:${contact.phone.replace(/\s+/g, '')}`,
    );
    expect(screen.getByText(new RegExp(contact.location))).toBeTruthy();
    expect(
      screen.getByRole('link', { name: contact.github.replace('https://github.com/', '') }),
    ).toBeTruthy();
  });
});
