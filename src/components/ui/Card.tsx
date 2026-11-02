import type { ReactNode } from 'react';

interface CardProps {
  title: string;
  description?: string;
  children?: ReactNode;
  className?: string;
  footer?: ReactNode;
}

export default function Card({ title, description, children, className = '', footer }: CardProps) {
  return (
    <article className={`p-4 bg-emerald-50/80 dark:bg-emerald-900/50 border border-emerald-200/80 dark:border-emerald-800/70 rounded-xl ${className}`}>
      <h3 className="font-bold text-slate-900 dark:text-white">{title}</h3>
      {description && <p className="text-sm text-slate-600 dark:text-slate-300 mt-1">{description}</p>}
      {children}
      {footer && <div className="mt-3">{footer}</div>}
    </article>
  );
}
