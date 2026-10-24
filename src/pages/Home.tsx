export default function Home() {
  return (
    <div className="space-y-8 w-full pb-8">
      {/* Sección CV */}
      <section id="cv" className="bg-white dark:bg-slate-900 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm transition-colors">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 pb-2 border-b border-slate-100 dark:border-slate-800 flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-pink-500"></span>
          Perfil Profesional
        </h2>
        <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
          Estudiante de Ingeniería Informática motivada por el aprendizaje continuo y el desarrollo de soluciones tecnológicas. Destaco por mi capacidad para la resolución de problemas, adaptabilidad ante nuevos desafíos técnicos y habilidades de comunicación efectiva para el trabajo colaborativo en proyectos de software.
        </p>

        {/* Educación */}
        <div className="mt-8">
          <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4">Educación</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 bg-slate-50 dark:bg-slate-800/50 border border-slate-200/80 dark:border-slate-700/60 rounded-xl">
              <h4 className="font-bold text-slate-900 dark:text-white">Ingeniería Informática</h4>
              <p className="text-sm font-medium text-pink-600 dark:text-pink-400 mt-0.5">Duoc UC</p>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-2">2025 - Presente</p>
            </div>
            <div className="p-4 bg-slate-50 dark:bg-slate-800/50 border border-slate-200/80 dark:border-slate-700/60 rounded-xl">
              <h4 className="font-bold text-slate-900 dark:text-white">Enseñanza Media Científico-Humanista</h4>
              <p className="text-sm font-medium text-slate-600 dark:text-slate-300 mt-0.5">Colegio Domingo Matte Mesías</p>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-2">2013 - 2024</p>
            </div>
          </div>
        </div>

        {/* Habilidades */}
        <div className="mt-8">
          <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4">Habilidades</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="p-3 bg-slate-50 dark:bg-slate-800/50 border border-slate-200/60 dark:border-slate-700/60 rounded-lg text-xs sm:text-sm text-slate-700 dark:text-slate-200 font-medium flex items-center gap-2">
              <span className="text-pink-500 font-bold">✓</span> Lógica de programación y análisis
            </div>
            <div className="p-3 bg-slate-50 dark:bg-slate-800/50 border border-slate-200/60 dark:border-slate-700/60 rounded-lg text-xs sm:text-sm text-slate-700 dark:text-slate-200 font-medium flex items-center gap-2">
              <span className="text-pink-500 font-bold">✓</span> Trabajo en equipo colaborativo
            </div>
            <div className="p-3 bg-slate-50 dark:bg-slate-800/50 border border-slate-200/60 dark:border-slate-700/60 rounded-lg text-xs sm:text-sm text-slate-700 dark:text-slate-200 font-medium flex items-center gap-2">
              <span className="text-pink-500 font-bold">✓</span> Metodologías Ágiles (Scrum)
            </div>
            <div className="p-3 bg-slate-50 dark:bg-slate-800/50 border border-slate-200/60 dark:border-slate-700/60 rounded-lg text-xs sm:text-sm text-slate-700 dark:text-slate-200 font-medium flex items-center gap-2">
              <span className="text-pink-500 font-bold">✓</span> Adaptabilidad tecnológica
            </div>
          </div>
        </div>
      </section>

      {/* Sección Certificaciones */}
      <section id="certificaciones" className="bg-white dark:bg-slate-900 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm transition-colors">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 pb-2 border-b border-slate-100 dark:border-slate-800 flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-pink-500"></span>
          Certificaciones
        </h2>
        <div className="p-4 bg-slate-50 dark:bg-slate-800/50 border border-slate-200/80 dark:border-slate-700/60 rounded-xl flex flex-col sm:flex-row justify-between sm:items-center gap-2">
          <div>
            <strong className="text-slate-900 dark:text-white font-bold">Certificación Profesional Scrum Product Owner</strong>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Duoc UC (2026)</p>
          </div>
          <span className="text-xs font-semibold text-pink-600 dark:text-pink-400 bg-pink-50 dark:bg-pink-950/50 px-3 py-1 rounded-full border border-pink-100 dark:border-pink-900/50 w-fit">
            En proceso
          </span>
        </div>
      </section>

      {/* Sección Contacto */}
      <section id="contacto" className="bg-white dark:bg-slate-900 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm transition-colors">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 pb-2 border-b border-slate-100 dark:border-slate-800 flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-pink-500"></span>
          Contacto
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
          <div className="p-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200/80 dark:border-slate-700/60">
            <p className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">Email</p>
            <a href="mailto:josefarocaliberon@gmail.com" className="text-xs sm:text-sm font-medium text-pink-600 dark:text-pink-400 hover:underline mt-1 block truncate">
              josefarocaliberon@gmail.com
            </a>
          </div>
          <div className="p-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200/80 dark:border-slate-700/60">
            <p className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">Teléfono</p>
            <a href="tel:+56912345678" className="text-xs sm:text-sm font-medium text-pink-600 dark:text-pink-400 hover:underline mt-1 block">
              +56 9 1234 5678
            </a>
          </div>
          <div className="p-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200/80 dark:border-slate-700/60">
            <p className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">Ubicación</p>
            <p className="text-xs sm:text-sm font-medium text-slate-800 dark:text-slate-200 mt-1">Santiago, Chile</p>
          </div>
        </div>
      </section>
    </div>
  );
}
