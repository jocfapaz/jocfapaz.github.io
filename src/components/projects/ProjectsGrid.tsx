import ProjectCard from './ProjectCard';
import type { Project } from '../../data/types';

interface ProjectsGridProps {
  projects: Project[];
}

export default function ProjectsGrid({ projects }: ProjectsGridProps) {
  if (projects.length === 0) {
    return (
      <p className="text-sm text-slate-600 dark:text-slate-300">
        No hay proyectos para mostrar por ahora.
      </p>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          title={project.title}
          description={project.description}
          tech={project.tech}
          image={project.image}
          demoUrl={project.demoUrl}
          repoUrl={project.repoUrl}
        />
      ))}
    </div>
  );
}
