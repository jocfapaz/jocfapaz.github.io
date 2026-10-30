import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Navegacion from '../../src/core/Navegacion';

describe('Navegacion', () => {
  beforeEach(() => {
    spyOn(window, 'matchMedia').and.returnValue({ matches: false } as MediaQueryList);
  });

  it('renderiza los enlaces internos, anclas y el botón de tema', () => {
    render(
      <MemoryRouter>
        <Navegacion />
      </MemoryRouter>,
    );

    expect(screen.getByRole('navigation', { name: 'Navegación principal' })).toBeTruthy();
    expect(screen.getByRole('link', { name: 'Inicio' }).getAttribute('href')).toBe('/');
    expect(screen.getByRole('link', { name: 'Contacto' }).getAttribute('href')).toBe('/contact');
    expect(screen.getByRole('link', { name: /Sobre/ }).getAttribute('href')).toBe('/#sobre-mi');
    expect(screen.getByRole('link', { name: 'Proyectos' }).getAttribute('href')).toBe(
      '/#proyectos',
    );
    expect(screen.getByRole('link', { name: 'Noticias' }).getAttribute('href')).toBe(
      '/#noticias-destacadas',
    );
    expect(screen.getByRole('link', { name: 'Perfil & CV' }).getAttribute('href')).toBe('/#cv');
    expect(screen.getByRole('link', { name: 'Certificaciones' }).getAttribute('href')).toBe(
      '/#certificaciones',
    );
    expect(screen.getByRole('button', { name: 'Cambiar a tema oscuro' })).toBeTruthy();
  });

  it('alterna el tema y actualiza su estado accesible', () => {
    render(
      <MemoryRouter>
        <Navegacion />
      </MemoryRouter>,
    );

    const button = screen.getByRole('button', { name: 'Cambiar a tema oscuro' });

    fireEvent.click(button);

    expect(screen.getByRole('button', { name: 'Cambiar a tema claro' })).toBeTruthy();
    expect(button.getAttribute('aria-pressed')).toBe('true');
    expect(document.documentElement.classList.contains('dark')).toBe(true);
  });
});
