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
    <article className={`p-4 bg-slate-50 dark:bg-slate-800/50 border border-slate-200/80 dark:border-slate-700/60 rounded-xl ${className}`}>
      <h3 className="font-bold text-slate-900 dark:text-white">{title}</h3>
      {description && <p className="text-sm text-slate-600 dark:text-slate-300 mt-1">{description}</p>}
      {children}
      {footer && <div className="mt-3">{footer}</div>}
    </article>
  );
}
