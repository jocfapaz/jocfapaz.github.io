import { selectFeaturedNews, selectRecentNews } from '../../src/data/selectors';
import type { NewsItem } from '../../src/data/types';

const news: NewsItem[] = [
  {
    id: 'featured-old',
    title: 'Destacada antigua',
    date: '2026-01-10',
    content: 'Contenido',
    featured: true,
  },
  {
    id: 'recent-old',
    title: 'Reciente antigua',
    date: '2026-02-10',
    content: 'Contenido',
    featured: false,
  },
  {
    id: 'featured-new',
    title: 'Destacada nueva',
    date: '2026-03-10',
    content: 'Contenido',
    featured: true,
  },
  {
    id: 'recent-new',
    title: 'Reciente nueva',
    date: '2026-04-10',
    content: 'Contenido',
    featured: false,
  },
];

describe('selectores de noticias', () => {
  it('filtra las noticias destacadas y las ordena por fecha descendente', () => {
    const original = [...news];

    const result = selectFeaturedNews(news);

    expect(result.map((item) => item.id)).toEqual(['featured-new', 'featured-old']);
    expect(news).toEqual(original);
  });

  it('filtra las noticias recientes y las ordena por fecha descendente', () => {
    const original = [...news];

    const result = selectRecentNews(news);

    expect(result.map((item) => item.id)).toEqual(['recent-new', 'recent-old']);
    expect(news).toEqual(original);
  });

  it('devuelve listas vacías cuando no hay noticias', () => {
    expect(selectFeaturedNews([])).toEqual([]);
    expect(selectRecentNews([])).toEqual([]);
  });
});
