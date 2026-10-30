import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useTheme } from '../hooks/useTheme';

const linkClass =
  'block rounded-full px-3 sm:px-4 py-2 text-slate-700 transition-all duration-200 hover:bg-pink-50 hover:text-pink-700 dark:text-slate-200 dark:hover:bg-slate-800 dark:hover:text-pink-400';

const activeLinkClass = 'bg-pink-50 text-pink-700 dark:bg-slate-800 dark:text-pink-400';

const themeButtonClass = 
  'block rounded-full px-3 py-2 text-white shadow-sm transition-all duration-200 sm:px-4 bg-slate-900 hover:bg-pink-800 dark:bg-pink-700 dark:hover:bg-pink-800 cursor-pointer w-full sm:w-auto text-center';

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
      className="sticky top-4 z-50 my-6 mx-auto w-11/12 max-w-4xl rounded-2xl border border-slate-200 bg-white/80 dark:bg-slate-900/80 dark:border-slate-700 p-2 shadow-md backdrop-blur-md transition-colors sm:w-fit sm:rounded-full"
    >
      <div className="flex items-center justify-between sm:hidden px-2 py-1">
        <span className="text-sm font-bold text-slate-800 dark:text-slate-200">Menú</span>
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-slate-600 dark:text-slate-300 hover:text-pink-600 dark:hover:text-pink-400 focus:outline-none p-1"
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

      <ul className={`${isMenuOpen ? 'flex' : 'hidden'} sm:flex flex-col sm:flex-row flex-wrap items-center justify-center gap-1 mt-3 sm:mt-0 text-sm font-medium text-slate-600 dark:text-slate-300 w-full sm:w-auto`}>
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