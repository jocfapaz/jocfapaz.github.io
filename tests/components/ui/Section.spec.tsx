import { render, screen } from '@testing-library/react';
import Section from '../../../src/components/ui/Section';

describe('Section', () => {
  it('renderiza título, subtítulo, id, contenido y clase personalizada', () => {
    const { container } = render(
      <Section id="seccion" title="Título" subtitle="Subtítulo" className="clase-extra">
        <p>Contenido</p>
      </Section>,
    );

    const section = container.querySelector('section');

    expect(screen.getByRole('heading', { level: 2, name: 'Título' })).toBeTruthy();
    expect(screen.getByText('Subtítulo')).toBeTruthy();
    expect(screen.getByText('Contenido')).toBeTruthy();
    expect(section?.id).toBe('seccion');
    expect(section?.className).toContain('clase-extra');
  });

  it('omite el subtítulo cuando no se recibe', () => {
    const { container } = render(
      <Section title="Sin subtítulo">
        <p>Contenido</p>
      </Section>,
    );

    expect(screen.getByRole('heading', { level: 2, name: 'Sin subtítulo' })).toBeTruthy();
    expect(container.querySelectorAll('p').length).toBe(1);
  });
});
