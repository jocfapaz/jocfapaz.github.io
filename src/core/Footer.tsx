import githubIcon from '../assets/github.svg';
import type { ContactInfo } from '../data/types';

interface FooterProps {
  contact?: ContactInfo;
}

function Footer({ contact }: FooterProps) {
  const email = contact?.email ?? 'josefarocaliberon@gmail.com';
  const github = contact?.github ?? 'https://github.com/jocfapaz';

  return (
    <footer className="max-w-4xl mx-auto bg-slate-900 text-slate-400 py-8 px-6 mt-12 mb-6 rounded-2xl border-t border-slate-800 shadow-lg">
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm">
        <p className="text-center sm:text-left">
          © 2026 <span className="text-white font-medium">Josefa Roca</span>.
        </p>
        <nav
          aria-label="Enlaces del pie de página"
          className="flex flex-wrap items-center justify-center gap-6 text-xs"
        >
          <a href={`mailto:${email}`} className="hover:text-pink-400 transition-colors">
            Email
          </a>
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 hover:text-pink-400 transition-colors"
          >
            GitHub
            <img
              src={githubIcon}
              alt=""
              aria-hidden="true"
              width={16}
              height={16}
              className="w-4 h-4"
            />
          </a>
          <a href="#top" className="hover:text-pink-400 transition-colors">
            Volver arriba
          </a>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
