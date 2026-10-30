import { render, screen } from '@testing-library/react';
import ProjectsGrid from '../../src/components/projects/ProjectsGrid';
import { portfolioFixture } from '../fixtures/portfolio';

describe('ProjectsGrid', () => {
  it('renderiza los proyectos y sus enlaces', () => {
    const project = portfolioFixture.projects[0];

    render(<ProjectsGrid projects={portfolioFixture.projects} />);

    expect(screen.getByText(project.title)).toBeTruthy();
    expect(screen.getByText(project.description)).toBeTruthy();
    expect(screen.getByText(project.tech[0])).toBeTruthy();

    const demoLink = screen.getByRole('link', { name: /Ver demo/i });

    expect(demoLink.getAttribute('href')).toContain('/demo');
  });

  it('muestra un mensaje cuando no hay proyectos', () => {
    render(<ProjectsGrid projects={[]} />);

    expect(screen.getByText(/No hay proyectos para mostrar/)).toBeTruthy();
  });
});
