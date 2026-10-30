import { render, screen } from '@testing-library/react';
import NewsList from '../../src/components/news/NewsList';
import type { NewsItem } from '../../src/data/types';

const items: NewsItem[] = [
  {
    id: 'news-list-1',
    title: 'Primera noticia',
    date: '2026-10-20',
    content: 'Contenido de la primera noticia.',
    featured: true,
  },
  {
    id: 'news-list-2',
    title: 'Segunda noticia',
    date: '2026-08-18',
    content: 'Contenido de la segunda noticia.',
    featured: false,
  },
];

describe('NewsList', () => {
  it('renderiza una tarjeta por cada noticia recibida', () => {
    const { container } = render(<NewsList items={items} />);

    expect(container.querySelectorAll('article').length).toBe(items.length);
    expect(screen.getByText(items[0].title)).toBeTruthy();
    expect(screen.getByText(items[1].title)).toBeTruthy();
  });

  it('muestra un mensaje cuando no hay noticias', () => {
    render(<NewsList items={[]} />);

    expect(screen.getByText(/No hay noticias para mostrar/)).toBeTruthy();
  });
});
