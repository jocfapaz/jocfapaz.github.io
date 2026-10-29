import { Outlet } from 'react-router-dom';
import Header from './Header';
import Navegacion from './Navegacion';
import Footer from './Footer';
import { usePortfolioData } from '../hooks/usePortfolioData';

export default function Root() {
  const portfolio = usePortfolioData();

  return (
    <div className="min-h-screen bg-slate-50">
      <Header profile={portfolio.data?.profile} />
      <Navegacion />
      <main className="max-w-4xl mx-auto px-4 sm:px-6">
        <Outlet context={portfolio} />
      </main>
      <Footer contact={portfolio.data?.contact} />
    </div>
  );
}
