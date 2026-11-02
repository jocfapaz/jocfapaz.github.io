import { useOutletContext } from 'react-router-dom';
import githubIcon from '../assets/github.svg';
import type { PortfolioState } from '../hooks/usePortfolioData';

export default function Contact() {
  const { data, loading, error } = useOutletContext<PortfolioState>();

  return (
    <section className="p-6 max-w-4xl mx-auto bg-emerald-100 text-slate-800 rounded-2xl shadow-xl border border-emerald-300 dark:bg-emerald-900 dark:text-white dark:border-emerald-800">
      <h2 className="text-2xl font-bold mb-2 text-sky-700 dark:text-sky-300">Contacto</h2>
      {loading && (
        <p role="status" aria-live="polite">
          Cargando información de contacto…
        </p>
      )}
      {error && <p role="alert">No se pudo cargar la información de contacto.</p>}
      {data && (
        <div className="space-y-2 text-sm">
          <p>
            Puedes escribirme a:{' '}
            <a href={`mailto:${data.contact.email}`} className="text-sky-700 underline dark:text-sky-300">
              {data.contact.email}
            </a>
          </p>
          <p>
            Teléfono:{' '}
            <a
              href={`tel:${data.contact.phone.replace(/\s+/g, '')}`}
              className="text-sky-700 underline dark:text-sky-300"
            >
              {data.contact.phone}
            </a>
          </p>
          <p>Ubicación: {data.contact.location}</p>
          <p>
            GitHub:{' '}
            <a
              href={data.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sky-700 underline dark:text-sky-300 inline-flex items-center gap-1 align-middle"
            >
              {data.contact.github.replace('https://github.com/', '')}
              <img
                src={githubIcon}
                alt=""
                aria-hidden="true"
                width={16}
                height={16}
                className="w-4 h-4"
              />
            </a>
          </p>
        </div>
      )}
    </section>
  );
}
