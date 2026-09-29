import { Outlet } from 'react-router-dom';
import Header from './Header';
import Navegacion from './Navegacion';
import Footer from './Footer';

export default function Root() {
  return (
    <div>
      <Header />
      <Navegacion />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
