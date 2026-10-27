import type { ReactNode } from 'react';

interface SectionProps {
  id?: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
}

export default function Section({ id, title, subtitle, children, className = '' }: SectionProps) {
  return (
    <section
      id={id}
      className={`bg-white dark:bg-slate-900 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm transition-colors ${className}`}
    >
      <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 pb-2 border-b border-slate-100 dark:border-slate-800 flex items-center gap-2">
        <span className="w-2.5 h-2.5 rounded-full bg-pink-500"></span>
        {title}
      </h2>
      {subtitle && (
        <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm sm:text-base mb-6">
          {subtitle}
        </p>
      )}
      {children}
    </section>
  );
}
