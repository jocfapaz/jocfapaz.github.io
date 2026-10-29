import Section from '../ui/Section';
import NewsList from './NewsList';
import type { NewsItem } from '../../data/news';

interface NewsSectionProps {
  id?: string;
  title: string;
  items: NewsItem[];
}

export default function NewsSection({ id, title, items }: NewsSectionProps) {
  return (
    <Section id={id} title={title}>
      <NewsList items={items} />
    </Section>
  );
}
