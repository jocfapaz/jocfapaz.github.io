function Header(){
    return(
        <nav className="sticky top-4 z-50 my-6 max-w-fit mx-auto bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border border-slate-200 dark:border-slate-800 p-1.5 rounded-full shadow-md transition-colors"> 
             <ul className="flex items-center gap-1 text-xs sm:text-sm font-medium text-slate-600 dark:text-slate-300">
        <li>
          <a href="#cv" className="px-3 sm:px-4 py-2 rounded-full text-slate-700 dark:text-slate-200 hover:text-pink-600 dark:hover:text-pink-400 hover:bg-pink-50 dark:hover:bg-slate-800 transition-all duration-200 block">
            Perfil & CV
          </a>
        </li>
        <li>
          <a href="#certificaciones" className="px-3 sm:px-4 py-2 rounded-full text-slate-700 dark:text-slate-200 hover:text-pink-600 dark:hover:text-pink-400 hover:bg-pink-50 dark:hover:bg-slate-800 transition-all duration-200 block">
            Certificaciones
          </a>
        </li>
        <li>
          <a href="./pets.html" className="px-3 sm:px-4 py-2 rounded-full text-slate-700 dark:text-slate-200 hover:text-pink-600 dark:hover:text-pink-400 hover:bg-pink-50 dark:hover:bg-slate-800 transition-all duration-200 block">
            Mascotas
          </a>
        </li>
        <li>
          <a href="#contacto" className="px-3 sm:px-4 py-2 rounded-full bg-slate-900 dark:bg-pink-600 text-white hover:bg-pink-600 dark:hover:bg-pink-500 transition-all duration-200 block shadow-sm">
            Contacto
          </a>
        </li>
        <li>
          <button id="theme-toggle" type="button" aria-label="Cambiar tema" className="px-3 py-2 rounded-full text-slate-700 dark:text-slate-200 hover:text-pink-600 dark:hover:text-pink-400 hover:bg-pink-50 dark:hover:bg-slate-800 transition-all duration-200 block cursor-pointer">
            <span id="theme-toggle-icon">🌙Modo Oscuro</span>
          </button>
        </li>
      </ul>
    </nav>
    )
}
export default Header