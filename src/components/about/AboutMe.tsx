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
                className="p-3 bg-slate-50 dark:bg-slate-800/50 border border-slate-200/60 dark:border-slate-700/60 rounded-lg text-xs sm:text-sm text-slate-700 dark:text-slate-200 font-medium flex items-center gap-2"
              >
                <span className="text-pink-500 font-bold">✓</span>
                {skill}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
