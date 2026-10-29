import type { NewsItem } from '../../data/news';
import NewsCard from './NewsCard';

interface NewsListProps {
  items: NewsItem[];
}

export default function NewsList({ items }: NewsListProps) {
  if (items.length === 0) {
    return (
      <p className="text-sm text-slate-600 dark:text-slate-300">
        No hay noticias para mostrar por ahora.
      </p>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {items.map((item) => (
        <NewsCard key={item.id} {...item} />
      ))}
    </div>
  );
}
