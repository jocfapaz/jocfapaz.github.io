import { render, screen } from '@testing-library/react';
import AboutMe from '../../src/components/about/AboutMe';

describe('AboutMe', () => {
  it('renderiza la biografía y las habilidades', () => {
    render(<AboutMe bio="Biografía de prueba" skills={['React', 'TypeScript']} />);

    expect(screen.getByRole('heading', { level: 3 }).textContent).toContain('Sobre');
    expect(screen.getByText('Biografía de prueba')).toBeTruthy();
    expect(screen.getByText('Habilidades')).toBeTruthy();
    expect(screen.getByText('React')).toBeTruthy();
    expect(screen.getByText('TypeScript')).toBeTruthy();
  });

  it('permite personalizar el título y oculta habilidades cuando no hay', () => {
    render(<AboutMe title="Perfil" bio="Biografía de prueba" />);

    expect(screen.getByRole('heading', { level: 3, name: 'Perfil' })).toBeTruthy();
    expect(screen.queryByText('Habilidades')).toBeNull();
  });
});
