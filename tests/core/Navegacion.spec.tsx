/// <reference types="jasmine" />
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

    // 1. Abrimos el menú hamburguesa para que los enlaces sean visibles en el test
    const menuButton = screen.getByLabelText('Alternar menú');
    fireEvent.click(menuButton);

    expect(screen.getByRole('navigation', { name: 'Navegación principal' })).toBeTruthy();
    expect(screen.getByRole('link', { name: 'Inicio' }).getAttribute('href')).toBe('/');
    
    // 2. CORREGIDO: Ahora espera '/#contacto' en lugar de '/contact'
    expect(screen.getByRole('link', { name: 'Contacto' }).getAttribute('href')).toBe('/#contacto');
    
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

    // Abrimos el menú hamburguesa para que el botón de tema sea visible
    const menuButton = screen.getByLabelText('Alternar menú');
    fireEvent.click(menuButton);

    const button = screen.getByRole('button', { name: 'Cambiar a tema oscuro' });

    fireEvent.click(button);

    expect(screen.getByRole('button', { name: 'Cambiar a tema claro' })).toBeTruthy();
    expect(button.getAttribute('aria-pressed')).toBe('true');
    expect(document.documentElement.classList.contains('dark')).toBe(true);
  });
});