import { render, screen } from '@testing-library/react';
import Header from '../../src/core/Header';
import { portfolioFixture } from '../fixtures/portfolio';

describe('Header', () => {
  it('renderiza los datos del perfil recibidos por props', () => {
    render(<Header profile={portfolioFixture.profile} />);

    expect(
      screen.getByRole('heading', { level: 1, name: portfolioFixture.profile.name }),
    ).toBeTruthy();
    expect(screen.getByText(portfolioFixture.profile.role)).toBeTruthy();
    expect(screen.getByText(portfolioFixture.profile.tagline)).toBeTruthy();
    expect(screen.getByText(/Santiago, Chile/)).toBeTruthy();
    expect(screen.getByText(/Duoc UC/)).toBeTruthy();
    expect(screen.getByText(/Disponible para prácticas/)).toBeTruthy();

    const image = screen.getByRole('img', { name: portfolioFixture.profile.name });
    expect(image.getAttribute('width')).toBe('112');
    expect(image.getAttribute('height')).toBe('112');
    expect(image.getAttribute('decoding')).toBe('async');
  });

  it('muestra valores por defecto cuando no recibe un perfil', () => {
    render(<Header />);

    expect(
      screen.getByRole('heading', { level: 1, name: /Josefa Roca Liberón/ }),
    ).toBeTruthy();
    expect(screen.getByText(/Estudiante de Ingeniería Informática/)).toBeTruthy();
  });
});
