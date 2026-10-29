import Card from '../ui/Card';
import type { NewsItem } from '../../data/news';

const dateFormatter = new Intl.DateTimeFormat('es-CL', {
  day: '2-digit',
  month: 'long',
  year: 'numeric',
});

function formatDate(value: string) {
  const date = new Date(`${value}T00:00:00`);
  return Number.isNaN(date.getTime()) ? value : dateFormatter.format(date);
}

export default function NewsCard({ title, date, content }: NewsItem) {
  return (
    <Card
      title={title}
      description={content}
      footer={
        <time
          dateTime={date}
          className="text-xs font-semibold uppercase tracking-wider text-pink-600 dark:text-pink-400"
        >
          {formatDate(date)}
        </time>
      }
    />
  );
}
