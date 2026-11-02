import fotoPerfil from '../assets/foto.jpg';
import type { Profile } from '../data/types';

interface HeaderProps {
  profile?: Profile;
}

function Header({ profile }: HeaderProps) {
  return (
    <header className="max-w-4xl mx-auto bg-emerald-100/80 text-slate-800 py-10 px-8 rounded-2xl mb-8 shadow-xl border border-emerald-300 dark:bg-emerald-900 dark:text-white dark:border-emerald-800 mt-6">
      <div className="flex flex-col md:flex-row items-center gap-6">
        <img
          src={fotoPerfil}
          alt={profile?.name ?? 'Josefa Roca'}
          width={112}
          height={112}
          decoding="async"
          className="w-28 h-28 rounded-full object-cover border-2 border-sky-300 shadow-lg"
        />
        <div className="text-center md:text-left flex-1">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            {profile?.name ?? 'Josefa Roca Liberón'}
          </h1>
          <p className="text-sky-700 dark:text-sky-300 font-medium text-lg mt-1">
            {profile?.role ?? 'Estudiante de Ingeniería Informática'}
          </p>
          <p className="text-slate-600 dark:text-emerald-100 text-sm mt-2 max-w-xl leading-relaxed">
            {profile?.tagline ??
              'Apasionada por el desarrollo de software, resolución de problemas y aprendizaje continuo. Enfocada en construir soluciones eficientes e innovadoras.'}
          </p>
          <div className="mt-4 flex flex-wrap justify-center md:justify-start gap-4 text-xs text-emerald-800 dark:text-emerald-200/80">
            <span className="flex items-center gap-1">
              <span aria-hidden="true">📍</span>
              {profile?.location ?? 'Santiago, Chile'}
            </span>
            <span className="flex items-center gap-1">
              <span aria-hidden="true">🎓</span>
              {profile?.institution ?? 'Duoc UC'}
            </span>
            <span className="flex items-center gap-1">
              <span aria-hidden="true">💼</span>
              {profile?.availability ?? 'Disponible para prácticas'}
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
