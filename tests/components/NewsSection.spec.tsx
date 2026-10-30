import { render, screen } from '@testing-library/react';
import NewsSection from '../../src/components/news/NewsSection';
import type { NewsItem } from '../../src/data/types';

const item: NewsItem = {
  id: 'news-section-1',
  title: 'Noticia de sección',
  date: '2026-10-20',
  content: 'Contenido de la noticia.',
  featured: true,
};

describe('NewsSection', () => {
  it('renderiza el título, el id y las noticias recibidas', () => {
    const { container } = render(<NewsSection id="noticias" title="Noticias" items={[item]} />);

    expect(screen.getByRole('heading', { level: 2, name: 'Noticias' })).toBeTruthy();
    expect(container.querySelector('#noticias')).not.toBeNull();
    expect(screen.getByText(item.title)).toBeTruthy();
  });

  it('muestra el mensaje vacío cuando no hay noticias', () => {
    render(<NewsSection title="Noticias vacías" items={[]} />);

    expect(screen.getByText(/No hay noticias para mostrar/)).toBeTruthy();
  });
});
