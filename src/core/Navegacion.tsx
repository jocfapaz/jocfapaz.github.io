import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useTheme } from '../hooks/useTheme';

const linkClass =
  'block rounded-full px-3 sm:px-4 py-2 text-emerald-800 transition-all duration-200 hover:bg-sky-100 hover:text-sky-800 dark:text-emerald-100 dark:hover:bg-emerald-900 dark:hover:text-sky-300';

const activeLinkClass = 'bg-sky-100 text-sky-800 dark:bg-emerald-900 dark:text-sky-300';

const themeButtonClass = 
  'block rounded-full px-3 py-2 text-sky-950 shadow-sm transition-all duration-200 sm:px-4 bg-sky-200 hover:bg-sky-300 dark:bg-emerald-800 dark:text-sky-100 dark:hover:bg-emerald-700 cursor-pointer w-full sm:w-auto text-center';

function Navegacion() {
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();
  const navigate = useNavigate();
  
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (window.location.hash) {
      navigate('/', { replace: true });
      window.scrollTo(0, 0);
    }
  }, [navigate]);

  const isHomeActive = location.pathname === '/' && location.hash === '';
  const getHashClass = (hash: string) => 
    location.hash === hash ? activeLinkClass : '';

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav
      aria-label="Navegación principal"
      className="sticky top-4 z-50 my-6 mx-auto w-11/12 max-w-4xl rounded-2xl border border-emerald-300 bg-emerald-100/80 dark:bg-emerald-950/80 dark:border-emerald-800 p-2 shadow-md backdrop-blur-md transition-colors sm:w-fit sm:rounded-full"
    >
      <div className="flex items-center justify-between sm:hidden px-2 py-1">
        <span className="text-sm font-bold text-emerald-950 dark:text-emerald-100">Menú</span>
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-emerald-800 dark:text-emerald-200 hover:text-sky-600 dark:hover:text-sky-300 focus:outline-none p-1"
          aria-label="Alternar menú"
        >
          <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
            {isMenuOpen ? (
              <path d="M6 18L18 6M6 6l12 12"></path>
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            )}
          </svg>
        </button>
      </div>

      <ul className={`${isMenuOpen ? 'flex' : 'hidden'} sm:flex flex-col sm:flex-row flex-wrap items-center justify-center gap-1 mt-3 sm:mt-0 text-sm font-medium text-emerald-800 dark:text-emerald-200 w-full sm:w-auto`}>
        <li className="w-full sm:w-auto text-center">
          <Link to="/" onClick={handleLinkClick} className={`${linkClass} ${isHomeActive ? activeLinkClass : ''}`}>
            Inicio
          </Link>
        </li>
        <li className="w-full sm:w-auto text-center">
          <Link to="/#sobre-mi" onClick={handleLinkClick} className={`${linkClass} ${getHashClass('#sobre-mi')}`}>
            Sobre mí
          </Link>
        </li>
        <li className="w-full sm:w-auto text-center">
          <Link to="/#proyectos" onClick={handleLinkClick} className={`${linkClass} ${getHashClass('#proyectos')}`}>
            Proyectos
          </Link>
        </li>
        <li className="w-full sm:w-auto text-center">
          <Link to="/#noticias-destacadas" onClick={handleLinkClick} className={`${linkClass} ${getHashClass('#noticias-destacadas')}`}>
            Noticias
          </Link>
        </li>
        <li className="w-full sm:w-auto text-center">
          <Link to="/#cv" onClick={handleLinkClick} className={`${linkClass} ${getHashClass('#cv')}`}>
            Perfil & CV
          </Link>
        </li>
        <li className="w-full sm:w-auto text-center">
          <Link to="/#certificaciones" onClick={handleLinkClick} className={`${linkClass} ${getHashClass('#certificaciones')}`}>
            Certificaciones
          </Link>
        </li>
        <li className="w-full sm:w-auto text-center">
          <Link to="/#contacto" onClick={handleLinkClick} className={`${linkClass} ${getHashClass('#contacto')}`}>
            Contacto
          </Link>
        </li>
        <li className="w-full sm:w-auto text-center mt-2 sm:mt-0 px-2 sm:px-0">
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