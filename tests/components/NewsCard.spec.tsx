import { render, screen } from '@testing-library/react';
import NewsCard from '../../src/components/news/NewsCard';

describe('NewsCard', () => {
  const news = {
    id: 'news-card-1',
    title: 'Título de prueba',
    date: '2026-10-20',
    content: 'Contenido breve de prueba.',
    featured: false,
  };

  it('renderiza título, contenido y fecha con formato accesible', () => {
    const { container } = render(<NewsCard {...news} />);

    expect(screen.getByRole('heading', { name: news.title })).toBeTruthy();
    expect(screen.getByText(news.content)).toBeTruthy();

    const time = container.querySelector('time');

    expect(time).not.toBeNull();
    expect(time?.getAttribute('datetime')).toBe(news.date);
    expect(time?.textContent).toContain('2026');
  });
});
