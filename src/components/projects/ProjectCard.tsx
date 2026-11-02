import Card from '../ui/Card';
import type { Project } from '../../data/types';

export type ProjectCardProps = Omit<Project, 'id' | 'tech'> & { tech?: string[] };

export default function ProjectCard({ title, description, tech = [], image, demoUrl, repoUrl }: ProjectCardProps) {
  return (
    <Card title={title} description={description}>
      {image && (
        <img
          src={image}
          alt={title}
          loading="lazy"
          decoding="async"
          className="mt-4 w-full h-40 object-cover rounded-lg border border-emerald-200 dark:border-emerald-800"
        />
      )}
      {tech.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-4">
          {tech.map((t) => (
            <span
              key={t}
              className="text-xs font-medium text-sky-600 dark:text-sky-200 bg-sky-50 dark:bg-sky-950/50 px-2.5 py-1 rounded-full border border-sky-200 dark:border-sky-800"
            >
              {t}
            </span>
          ))}
        </div>
      )}
      {(demoUrl || repoUrl) && (
        <div className="flex flex-wrap gap-2 mt-4">
          {demoUrl && (
            <a
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-semibold text-sky-950 bg-sky-300 hover:bg-sky-400 dark:bg-sky-800 dark:text-sky-100 dark:hover:bg-sky-700 px-3 py-1.5 rounded-full transition-colors"
            >
              Ver demo
            </a>
          )}
          {repoUrl && (
            <a
              href={repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-semibold text-sky-600 dark:text-sky-200 bg-sky-100 dark:bg-sky-900/50 hover:bg-sky-200 dark:hover:bg-sky-800 px-3 py-1.5 rounded-full transition-colors"
            >
              Repositorio
            </a>
          )}
        </div>
      )}
    </Card>
  );
}
