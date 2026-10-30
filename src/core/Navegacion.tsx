import { useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useTheme } from '../hooks/useTheme';

const linkClass =
  'block rounded-full px-3 sm:px-4 py-2 text-slate-700 transition-all duration-200 hover:bg-pink-50 hover:text-pink-700 dark:text-slate-200 dark:hover:bg-slate-800 dark:hover:text-pink-400';

const activeLinkClass = 'bg-pink-50 text-pink-700 dark:bg-slate-800 dark:text-pink-400';

const themeButtonClass = 
  'block rounded-full px-3 py-2 text-white shadow-sm transition-all duration-200 sm:px-4 bg-slate-900 hover:bg-pink-800 dark:bg-pink-700 dark:hover:bg-pink-800 cursor-pointer';

function Navegacion() {
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();
  const navigate = useNavigate();

  // Reinicia la URL al inicio ("/") cuando se recarga la página
  useEffect(() => {
    if (window.location.hash) {
      navigate('/', { replace: true });
      window.scrollTo(0, 0);
    }
  }, [navigate]);

  const isHomeActive = location.pathname === '/' && location.hash === '';
  const getHashClass = (hash: string) => 
    location.hash === hash ? activeLinkClass : '';

  return (
    <nav
      aria-label="Navegación principal"
      className="sticky top-4 z-50 my-6 mx-auto w-fit max-w-[calc(100vw-2rem)] rounded-2xl border border-slate-200 bg-white/80 dark:bg-slate-900/80 dark:border-slate-700 p-1.5 shadow-md backdrop-blur-md transition-colors sm:rounded-full"
    >
      <ul className="flex flex-wrap items-center justify-center gap-1 text-xs font-medium text-slate-600 dark:text-slate-300 sm:text-sm">
        <li>
          <Link to="/" className={`${linkClass} ${isHomeActive ? activeLinkClass : ''}`}>
            Inicio
          </Link>
        </li>
        <li>
          <Link to="/#sobre-mi" className={`${linkClass} ${getHashClass('#sobre-mi')}`}>
            Sobre mí
          </Link>
        </li>
        <li>
          <Link to="/#proyectos" className={`${linkClass} ${getHashClass('#proyectos')}`}>
            Proyectos
          </Link>
        </li>
        <li>
          <Link to="/#noticias-destacadas" className={`${linkClass} ${getHashClass('#noticias-destacadas')}`}>
            Noticias
          </Link>
        </li>
        <li>
          <Link to="/#cv" className={`${linkClass} ${getHashClass('#cv')}`}>
            Perfil & CV
          </Link>
        </li>
        <li>
          <Link to="/#certificaciones" className={`${linkClass} ${getHashClass('#certificaciones')}`}>
            Certificaciones
          </Link>
        </li>
        <li>
          <Link to="/#contacto" className={`${linkClass} ${getHashClass('#contacto')}`}>
            Contacto
          </Link>
        </li>
        <li>
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? 'Cambiar a tema claro' : 'Cambiar a tema oscuro'}
            aria-pressed={theme === 'dark'}
            className={themeButtonClass}
          >
            {theme === 'dark' ? 'Tema claro' : 'Tema oscuro'}
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Navegacion;