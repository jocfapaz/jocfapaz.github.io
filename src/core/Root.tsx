import { Outlet } from 'react-router-dom';
import Header from './Header';
import Navegacion from './Navegacion';
import Footer from './Footer';

export default function Root() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      <Navegacion />
      <main className="max-w-4xl mx-auto px-4 sm:px-6">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
