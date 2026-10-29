import { useOutletContext } from 'react-router-dom';
import AboutMe from '../components/about/AboutMe';
import EducationList from '../components/about/EducationList';
import CertificationsList from '../components/certifications/CertificationsList';
import ContactInfo from '../components/contact/ContactInfo';
import NewsSection from '../components/news/NewsSection';
import ProjectsGrid from '../components/projects/ProjectsGrid';
import Section from '../components/ui/Section';
import { selectFeaturedNews, selectRecentNews } from '../data/selectors';
import type { PortfolioState } from '../hooks/usePortfolioData';

export default function Home() {
  const { data, loading, error } = useOutletContext<PortfolioState>();

  if (loading) {
    return (
      <div
        role="status"
        aria-live="polite"
        className="bg-white dark:bg-slate-900 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm"
      >
        <p className="text-sm text-slate-600 dark:text-slate-300">Cargando portafolio…</p>
      </div>
    );
  }

  if (error || !data) {
    return (
      <div
        role="alert"
        className="bg-white dark:bg-slate-900 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm"
      >
        <h2 className="text-xl font-bold text-slate-900 dark:text-white">
          No se pudo cargar el portafolio
        </h2>
        <p className="text-sm text-slate-600 dark:text-slate-300 mt-2">
          {error ?? 'Intenta recargar la página.'}
        </p>
      </div>
    );
  }

  const featuredNews = selectFeaturedNews(data.news);
  const recentNews = selectRecentNews(data.news);

  return (
    <div className="space-y-8 w-full pb-8">
      <Section id="sobre-mi" title="Sobre mí">
        <AboutMe bio={data.profile.bio} skills={data.profile.skills} />
        <div className="mt-8">
          <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4">Educación</h3>
          <EducationList items={data.education} />
        </div>
      </Section>

      <Section id="proyectos" title="Proyectos">
        <ProjectsGrid projects={data.projects} />
      </Section>

      <NewsSection id="noticias-destacadas" title="Noticias destacadas" items={featuredNews} />

      <NewsSection id="noticias-recientes" title="Noticias recientes" items={recentNews} />

      <section
        id="cv"
        className="bg-white dark:bg-slate-900 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm transition-colors"
      >
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 pb-2 border-b border-slate-100 dark:border-slate-800 flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-pink-500"></span>
          Perfil Profesional
        </h2>
        <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
          {data.profile.bio}
        </p>
      </section>

      <section
        id="certificaciones"
        className="bg-white dark:bg-slate-900 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm transition-colors"
      >
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 pb-2 border-b border-slate-100 dark:border-slate-800 flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-pink-500"></span>
          Certificaciones
        </h2>
        <CertificationsList items={data.certifications} />
      </section>

      <section
        id="contacto"
        className="bg-white dark:bg-slate-900 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm transition-colors"
      >
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 pb-2 border-b border-slate-100 dark:border-slate-800 flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-pink-500"></span>
          Contacto
        </h2>
        <ContactInfo contact={data.contact} />
      </section>
    </div>
  );
}
