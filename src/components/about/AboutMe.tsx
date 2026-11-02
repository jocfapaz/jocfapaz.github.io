interface AboutMeProps {
  title?: string;
  bio: string;
  skills?: string[];
}

export default function AboutMe({ title = "Sobre mí", bio, skills = [] }: AboutMeProps) {
  return (
    <div>
      <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3">{title}</h3>
      <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm sm:text-base mb-6">
        {bio}
      </p>
      {skills.length > 0 && (
        <div>
          <h4 className="text-base font-bold text-slate-900 dark:text-white mb-4">Habilidades</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {skills.map((skill) => (
              <div
                key={skill}
                className="p-3 bg-emerald-50/80 dark:bg-emerald-900/50 border border-emerald-200/60 dark:border-emerald-800/70 rounded-lg text-xs sm:text-sm text-slate-700 dark:text-slate-200 font-medium flex items-center gap-2"
              >
                <span className="text-sky-500 dark:text-sky-300 font-bold" aria-hidden="true">
                  ✓
                </span>
                {skill}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
