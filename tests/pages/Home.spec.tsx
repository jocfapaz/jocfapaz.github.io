import { render, screen } from '@testing-library/react';
import { MemoryRouter, Outlet, Route, Routes } from 'react-router-dom';
import Home from '../../src/pages/Home';
import type { PortfolioState } from '../../src/hooks/usePortfolioData';
import { portfolioFixture } from '../fixtures/portfolio';

function ContextRoute({ value }: { value: PortfolioState }) {
  return <Outlet context={value} />;
}

function renderHome(value: PortfolioState) {
  return render(
    <MemoryRouter>
      <Routes>
        <Route element={<ContextRoute value={value} />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </MemoryRouter>,
  );
}

describe('Home', () => {
  it('muestra el estado de carga', () => {
    renderHome({ data: null, loading: true, error: null });

    expect(screen.getByRole('status')).toBeTruthy();
    expect(screen.getByText(/Cargando portafolio/)).toBeTruthy();
  });

  it('muestra el estado de error cuando no hay datos', () => {
    renderHome({ data: null, loading: false, error: 'Fallo de carga' });

    expect(screen.getByRole('alert')).toBeTruthy();
    expect(screen.getByText('Fallo de carga')).toBeTruthy();
  });

  it('muestra el mensaje de error por defecto cuando no hay datos ni error', () => {
    renderHome({ data: null, loading: false, error: null });

    expect(screen.getByRole('alert')).toBeTruthy();
    expect(screen.getByText(/Intenta recargar/)).toBeTruthy();
  });

  it('renderiza las secciones con los datos del portafolio', () => {
    const { profile, projects, news, certifications, contact, education } = portfolioFixture;

    renderHome({ data: portfolioFixture, loading: false, error: null });

    expect(screen.getByRole('heading', { level: 2, name: 'Sobre mí' })).toBeTruthy();
    expect(screen.getAllByText(profile.bio).length).toBeGreaterThan(0);
    expect(screen.getByText(education[0].title)).toBeTruthy();
    expect(screen.getByRole('heading', { name: 'Proyectos' })).toBeTruthy();
    expect(screen.getByText(projects[0].title)).toBeTruthy();
    expect(screen.getByRole('heading', { name: 'Noticias destacadas' })).toBeTruthy();
    expect(screen.getByText(news[0].title)).toBeTruthy();
    expect(screen.getByRole('heading', { name: 'Noticias recientes' })).toBeTruthy();
    expect(screen.getByText(news[1].title)).toBeTruthy();
    expect(screen.getByRole('heading', { name: 'Certificaciones' })).toBeTruthy();
    expect(screen.getByText(certifications[0].title)).toBeTruthy();
    expect(screen.getByRole('heading', { name: 'Contacto' })).toBeTruthy();
    expect(screen.getByText(contact.email)).toBeTruthy();
  });
});
