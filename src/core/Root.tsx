import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './Header';
import Navegacion from './Navegacion';
import Footer from './Footer';
import { usePortfolioData } from '../hooks/usePortfolioData';

function ScrollManager() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
      return;
    }

    let attempts = 0;
    let timer = 0;

    const scrollToHash = () => {
      const id = decodeURIComponent(hash.slice(1));
      const target = document.getElementById(id);

      if (target) {
        const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        target.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' });
        return;
      }

      if (attempts < 20) {
        attempts += 1;
        timer = window.setTimeout(scrollToHash, 50);
      }
    };

    scrollToHash();

    return () => window.clearTimeout(timer);
  }, [pathname, hash]);

  return null;
}

export default function Root() {
  const portfolio = usePortfolioData();

  return (
    <div id="top" className="min-h-screen bg-slate-50">
      <a
        href="#contenido"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-pink-700 focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
      >
        Saltar al contenido
      </a>
      <ScrollManager />
      <Header profile={portfolio.data?.profile} />
      <Navegacion />
      <main
        id="contenido"
        tabIndex={-1}
        className="max-w-4xl mx-auto px-4 sm:px-6 focus:outline-none"
      >
        <Outlet context={portfolio} />
      </main>
      <Footer contact={portfolio.data?.contact} />
    </div>
  );
}
