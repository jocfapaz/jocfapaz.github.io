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
          className="p-4 bg-slate-50 dark:bg-slate-800/50 border border-slate-200/80 dark:border-slate-700/60 rounded-xl"
        >
          <h4 className="font-bold text-slate-900 dark:text-white">{item.title}</h4>
          <p className="text-sm font-medium text-pink-600 dark:text-pink-400 mt-0.5">
            {item.institution}
          </p>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-2">{item.period}</p>
        </div>
      ))}
    </div>
  );
}
