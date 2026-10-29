import type { Certification } from '../../data/types';

interface CertificationsListProps {
  items: Certification[];
}

export default function CertificationsList({ items }: CertificationsListProps) {
  if (items.length === 0) {
    return (
      <p className="text-sm text-slate-600 dark:text-slate-300">
        No hay certificaciones para mostrar por ahora.
      </p>
    );
  }

  return (
    <div className="space-y-3">
      {items.map((item) => (
        <div
          key={item.id}
          className="p-4 bg-slate-50 dark:bg-slate-800/50 border border-slate-200/80 dark:border-slate-700/60 rounded-xl flex flex-col sm:flex-row justify-between sm:items-center gap-2"
        >
          <div>
            <strong className="text-slate-900 dark:text-white font-bold">{item.title}</strong>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              {item.institution} ({item.year})
            </p>
          </div>
          <span className="text-xs font-semibold text-pink-600 dark:text-pink-400 bg-pink-50 dark:bg-pink-950/50 px-3 py-1 rounded-full border border-pink-100 dark:border-pink-900/50 w-fit">
            {item.status}
          </span>
        </div>
      ))}
    </div>
  );
}
