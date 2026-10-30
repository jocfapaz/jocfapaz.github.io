import fotoPerfil from '../assets/foto.jpg';
import type { Profile } from '../data/types';

interface HeaderProps {
  profile?: Profile;
}

function Header({ profile }: HeaderProps) {
  return (
    <header className="max-w-4xl mx-auto bg-slate-900 text-white py-10 px-8 rounded-2xl mb-8 shadow-xl border border-slate-800 mt-6">
      <div className="flex flex-col md:flex-row items-center gap-6">
        <img
          src={fotoPerfil}
          alt={profile?.name ?? 'Josefa Roca'}
          width={112}
          height={112}
          decoding="async"
          className="w-28 h-28 rounded-full object-cover border-2 border-pink-500 shadow-lg"
        />
        <div className="text-center md:text-left flex-1">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            {profile?.name ?? 'Josefa Roca Liberón'}
          </h1>
          <p className="text-pink-400 font-medium text-lg mt-1">
            {profile?.role ?? 'Estudiante de Ingeniería Informática'}
          </p>
          <p className="text-slate-300 text-sm mt-2 max-w-xl leading-relaxed">
            {profile?.tagline ??
              'Apasionada por el desarrollo de software, resolución de problemas y aprendizaje continuo. Enfocada en construir soluciones eficientes e innovadoras.'}
          </p>
          <div className="mt-4 flex flex-wrap justify-center md:justify-start gap-4 text-xs text-slate-400">
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
