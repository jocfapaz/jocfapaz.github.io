import { Outlet } from 'react-router-dom';
import Header from './Header';
import Navegacion from './Navegacion';
import Footer from './Footer';

export default function Root() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Navegacion />
      <main className="flex-1 w-full max-w-4xl mx-auto px-4">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
