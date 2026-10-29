import type { NewsItem } from './types';

function byDateDesc(a: NewsItem, b: NewsItem) {
  return b.date.localeCompare(a.date);
}

export function selectFeaturedNews(news: NewsItem[]): NewsItem[] {
  return [...news].filter((item) => item.featured).sort(byDateDesc);
}

export function selectRecentNews(news: NewsItem[]): NewsItem[] {
  return [...news].filter((item) => !item.featured).sort(byDateDesc);
}
