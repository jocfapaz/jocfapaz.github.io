import type { EducationItem } from '../../data/types';

interface EducationListProps {
  items: EducationItem[];
}

export default function EducationList({ items }: EducationListProps) {
  if (items.length === 0) {
    return (
      <p className="text-sm text-slate-600 dark:text-slate-300">
        No hay información educativa para mostrar por ahora.
      </p>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {items.map((item) => (
        <div
          key={item.id}
          className="p-4 bg-emerald-50/80 dark:bg-emerald-900/50 border border-emerald-200/80 dark:border-emerald-800/70 rounded-xl"
        >
          <h4 className="font-bold text-slate-900 dark:text-white">{item.title}</h4>
          <p className="text-sm font-medium text-sky-600 dark:text-sky-300 mt-0.5">
            {item.institution}
          </p>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-2">{item.period}</p>
        </div>
      ))}
    </div>
  );
}
