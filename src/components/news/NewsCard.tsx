import Card from '../ui/Card';
import type { NewsItem } from '../../data/types';

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
          className="text-xs font-semibold uppercase tracking-wider text-sky-600 dark:text-sky-300"
        >
          {formatDate(date)}
        </time>
      }
    />
  );
}
