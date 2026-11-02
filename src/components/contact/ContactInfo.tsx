import githubIcon from '../../assets/github.svg';
import type { ContactInfo as ContactData } from '../../data/types';

interface ContactInfoProps {
  contact: ContactData;
}

export default function ContactInfo({ contact }: ContactInfoProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-center">
      <div className="p-4 bg-emerald-50/80 dark:bg-emerald-900/50 rounded-xl border border-emerald-200/80 dark:border-emerald-800/70">
        <p className="text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300">
          Email
        </p>
        <a
          href={`mailto:${contact.email}`}
          className="text-xs sm:text-sm font-medium text-sky-600 dark:text-sky-300 hover:underline mt-1 block truncate"
        >
          {contact.email}
        </a>
      </div>
      <div className="p-4 bg-emerald-50/80 dark:bg-emerald-900/50 rounded-xl border border-emerald-200/80 dark:border-emerald-800/70">
        <p className="text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300">
          Teléfono
        </p>
        <a
          href={`tel:${contact.phone.replace(/\s+/g, '')}`}
          className="text-xs sm:text-sm font-medium text-sky-600 dark:text-sky-300 hover:underline mt-1 block"
        >
          {contact.phone}
        </a>
      </div>
      <div className="p-4 bg-emerald-50/80 dark:bg-emerald-900/50 rounded-xl border border-emerald-200/80 dark:border-emerald-800/70">
        <p className="text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300">
          Ubicación
        </p>
        <p className="text-xs sm:text-sm font-medium text-slate-800 dark:text-slate-200 mt-1">
          {contact.location}
        </p>
      </div>
      <div className="p-4 bg-emerald-50/80 dark:bg-emerald-900/50 rounded-xl border border-emerald-200/80 dark:border-emerald-800/70">
        <p className="text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300">
          GitHub
        </p>
        <a
          href={contact.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs sm:text-sm font-medium text-sky-600 dark:text-sky-300 hover:underline mt-1 inline-flex items-center justify-center gap-1"
        >
          {contact.github.replace('https://github.com/', '')}
          <img
            src={githubIcon}
            alt=""
            aria-hidden="true"
            width={16}
            height={16}
            className="w-4 h-4"
          />
        </a>
      </div>
    </div>
  );
}
