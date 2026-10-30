import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import Root from '../../src/core/Root';
import Contact from '../../src/pages/Contact';
import Home from '../../src/pages/Home';

describe('Navegación y estado compartido', () => {
  it('carga el portafolio y navega a Contacto al hacer clic', async () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <Routes>
          <Route path="/" element={<Root />}>
            <Route index element={<Home />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
      </MemoryRouter>,
    );

    expect(await screen.findByRole('heading', { level: 2, name: 'Sobre mí' })).toBeTruthy();

    fireEvent.click(screen.getByRole('link', { name: 'Contacto' }));

    expect(await screen.findByText(/Puedes escribirme a:/)).toBeTruthy();
    expect(screen.getByRole('heading', { name: 'Contacto' })).toBeTruthy();
  });
});
