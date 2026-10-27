import ProjectCard, { type ProjectCardProps } from './ProjectCard';

interface ProjectsGridProps {
  projects: ProjectCardProps[];
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
        <ProjectCard key={project.title} {...project} />
      ))}
    </div>
  );
}
