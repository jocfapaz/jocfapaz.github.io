import { render, screen } from '@testing-library/react';
import ProjectCard from '../../src/components/projects/ProjectCard';

describe('ProjectCard', () => {
  it('renderiza imagen, tecnologías y enlaces cuando están disponibles', () => {
    render(
      <ProjectCard
        title="Proyecto completo"
        description="Descripción del proyecto"
        tech={['React', 'TypeScript']}
        image="/proyecto.png"
        demoUrl="https://example.com/demo"
        repoUrl="https://example.com/repo"
      />,
    );

    expect(screen.getByRole('heading', { name: 'Proyecto completo' })).toBeTruthy();
    expect(screen.getByText('Descripción del proyecto')).toBeTruthy();
    const image = screen.getByRole('img', { name: 'Proyecto completo' });
    expect(image.getAttribute('loading')).toBe('lazy');
    expect(image.getAttribute('decoding')).toBe('async');
    expect(screen.getByText('React')).toBeTruthy();
    expect(screen.getByText('TypeScript')).toBeTruthy();

    expect(screen.getByRole('link', { name: 'Ver demo' }).getAttribute('href')).toBe(
      'https://example.com/demo',
    );
    expect(screen.getByRole('link', { name: 'Repositorio' }).getAttribute('href')).toBe(
      'https://example.com/repo',
    );
  });

  it('oculta los elementos opcionales cuando no se reciben', () => {
    render(<ProjectCard title="Proyecto mínimo" description="Descripción" />);

    expect(screen.getByRole('heading', { name: 'Proyecto mínimo' })).toBeTruthy();
    expect(screen.queryByRole('img')).toBeNull();
    expect(screen.queryByRole('link')).toBeNull();
  });

  it('renderiza solo el repositorio cuando no hay demo', () => {
    render(
      <ProjectCard
        title="Proyecto con repositorio"
        description="Descripción"
        tech={[]}
        repoUrl="https://example.com/repo"
      />,
    );

    expect(screen.queryByRole('link', { name: 'Ver demo' })).toBeNull();
    expect(screen.getByRole('link', { name: 'Repositorio' }).getAttribute('href')).toBe(
      'https://example.com/repo',
    );
  });
});
