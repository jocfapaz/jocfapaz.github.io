import newsData from './news.json';

export interface NewsItem {
  id: string;
  title: string;
  date: string;
  content: string;
  featured?: boolean;
}

const news = newsData as NewsItem[];

function byDateDesc(a: NewsItem, b: NewsItem) {
  return b.date.localeCompare(a.date);
}

export const featuredNews = news.filter((item) => item.featured).sort(byDateDesc);

export const recentNews = news.filter((item) => !item.featured).sort(byDateDesc);
