import { fireEvent, render, screen, waitFor } from '@testing-library/react';
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
    expect(screen.getByRole('link', { name: 'Saltar al contenido' }).getAttribute('href')).toBe(
      '#contenido',
    );
    expect(screen.getByRole('main').getAttribute('id')).toBe('contenido');

    fireEvent.click(screen.getByRole('link', { name: 'Contacto' }));

    expect(await screen.findByText(/Puedes escribirme a:/)).toBeTruthy();
    expect(screen.getByRole('heading', { name: 'Contacto' })).toBeTruthy();
  });

  it('desplaza la vista a la sección indicada por el hash', async () => {
    spyOn(window, 'matchMedia').and.returnValue({ matches: false } as MediaQueryList);
    const scrollIntoView = spyOn(HTMLElement.prototype, 'scrollIntoView');

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

    expect(await screen.findByRole('heading', { level: 2, name: 'Proyectos' })).toBeTruthy();

    fireEvent.click(screen.getByRole('link', { name: 'Proyectos' }));

    await waitFor(() => expect(scrollIntoView).toHaveBeenCalled());
  });
});
