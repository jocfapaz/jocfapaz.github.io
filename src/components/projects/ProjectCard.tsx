import Card from '../ui/Card';

export interface ProjectCardProps {
  title: string;
  description: string;
  tech?: string[];
  image?: string;
  demoUrl?: string;
  repoUrl?: string;
}

export default function ProjectCard({ title, description, tech = [], image, demoUrl, repoUrl }: ProjectCardProps) {
  return (
    <Card title={title} description={description}>
      {image && (
        <img
          src={image}
          alt={title}
          className="mt-4 w-full h-40 object-cover rounded-lg border border-slate-200 dark:border-slate-700"
        />
      )}
      {tech.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-4">
          {tech.map((t) => (
            <span
              key={t}
              className="text-xs font-medium text-slate-600 dark:text-slate-300 bg-white dark:bg-slate-900 px-2.5 py-1 rounded-full border border-slate-200 dark:border-slate-700"
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
              className="text-xs font-semibold text-white bg-pink-600 hover:bg-pink-500 px-3 py-1.5 rounded-full transition-colors"
            >
              Ver demo
            </a>
          )}
          {repoUrl && (
            <a
              href={repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-semibold text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 px-3 py-1.5 rounded-full transition-colors"
            >
              Repositorio
            </a>
          )}
        </div>
      )}
    </Card>
  );
}
