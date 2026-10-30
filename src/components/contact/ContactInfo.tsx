import type { ContactInfo as ContactData } from '../../data/types';

interface ContactInfoProps {
  contact: ContactData;
}

export default function ContactInfo({ contact }: ContactInfoProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
      <div className="p-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200/80 dark:border-slate-700/60">
        <p className="text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300">
          Email
        </p>
        <a
          href={`mailto:${contact.email}`}
          className="text-xs sm:text-sm font-medium text-pink-700 dark:text-pink-400 hover:underline mt-1 block truncate"
        >
          {contact.email}
        </a>
      </div>
      <div className="p-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200/80 dark:border-slate-700/60">
        <p className="text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300">
          Teléfono
        </p>
        <a
          href={`tel:${contact.phone.replace(/\s+/g, '')}`}
          className="text-xs sm:text-sm font-medium text-pink-700 dark:text-pink-400 hover:underline mt-1 block"
        >
          {contact.phone}
        </a>
      </div>
      <div className="p-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200/80 dark:border-slate-700/60">
        <p className="text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300">
          Ubicación
        </p>
        <p className="text-xs sm:text-sm font-medium text-slate-800 dark:text-slate-200 mt-1">
          {contact.location}
        </p>
      </div>
    </div>
  );
}
