import { Link, NavLink } from 'react-router-dom';
import { useTheme } from '../hooks/useTheme';

const linkClass =
  'block rounded-full px-3 sm:px-4 py-2 text-slate-700 transition-all duration-200 hover:bg-pink-50 hover:text-pink-700 dark:text-slate-200 dark:hover:bg-slate-800 dark:hover:text-pink-400';

const activeLinkClass = 'bg-pink-50 text-pink-700 dark:bg-slate-800 dark:text-pink-400';

function Navegacion() {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav
      aria-label="Navegación principal"
      className="sticky top-4 z-50 my-6 mx-auto w-fit max-w-[calc(100vw-2rem)] rounded-2xl border border-slate-200 bg-white/80 p-1.5 shadow-md backdrop-blur-md transition-colors sm:rounded-full"
    >
      <ul className="flex flex-wrap items-center justify-center gap-1 text-xs font-medium text-slate-600 dark:text-slate-300 sm:text-sm">
        <li>
          <NavLink
            to="/"
            end
            className={({ isActive }) => `${linkClass} ${isActive ? activeLinkClass : ''}`}
          >
            Inicio
          </NavLink>
        </li>
        <li>
          <Link to="/#sobre-mi" className={linkClass}>
            Sobre mí
          </Link>
        </li>
        <li>
          <Link to="/#proyectos" className={linkClass}>
            Proyectos
          </Link>
        </li>
        <li>
          <Link to="/#noticias-destacadas" className={linkClass}>
            Noticias
          </Link>
        </li>
        <li>
          <Link to="/#cv" className={linkClass}>
            Perfil & CV
          </Link>
        </li>
        <li>
          <Link to="/#certificaciones" className={linkClass}>
            Certificaciones
          </Link>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `block rounded-full px-3 py-2 text-white shadow-sm transition-all duration-200 sm:px-4 ${
                isActive
                  ? 'bg-pink-700 dark:bg-pink-700'
                  : 'bg-slate-900 hover:bg-pink-800 dark:bg-pink-700 dark:hover:bg-pink-800'
              }`
            }
          >
            Contacto
          </NavLink>
        </li>
        <li>
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? 'Cambiar a tema claro' : 'Cambiar a tema oscuro'}
            aria-pressed={theme === 'dark'}
            className={`${linkClass} cursor-pointer`}
          >
            {theme === 'dark' ? 'Tema claro' : 'Tema oscuro'}
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Navegacion;
