import { getJson, type RequestOptions } from './http';
import type {
  Certification,
  ContactInfo,
  EducationItem,
  NewsItem,
  PortfolioData,
  Profile,
  Project,
} from '../data/types';

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
}

function assertRecord<T>(value: unknown, label: string): T {
  if (!isRecord(value)) {
    throw new Error(`La API devolvió un objeto inválido de ${label}.`);
  }

  return value as T;
}

function assertArray<T>(value: unknown, label: string): T[] {
  if (!Array.isArray(value)) {
    throw new Error(`La API devolvió una lista inválida de ${label}.`);
  }

  return value as T[];
}

function assertPortfolio(value: unknown): PortfolioData {
  if (
    !isRecord(value) ||
    !isRecord(value.profile) ||
    !isRecord(value.contact) ||
    !Array.isArray(value.education) ||
    !Array.isArray(value.projects) ||
    !Array.isArray(value.certifications) ||
    !Array.isArray(value.news)
  ) {
    throw new Error('La API devolvió el portafolio con un formato inesperado.');
  }

  return value as unknown as PortfolioData;
}

export function loadProfile(options: RequestOptions = {}): Promise<Profile> {
  return getJson<unknown>('/profile.json', options).then((value) =>
    assertRecord<Profile>(value, 'perfil'),
  );
}

export function loadEducation(options: RequestOptions = {}): Promise<EducationItem[]> {
  return getJson<unknown>('/education.json', options).then((value) =>
    assertArray<EducationItem>(value, 'educación'),
  );
}

export function loadProjects(options: RequestOptions = {}): Promise<Project[]> {
  return getJson<unknown>('/projects.json', options).then((value) =>
    assertArray<Project>(value, 'proyectos'),
  );
}

export function loadCertifications(options: RequestOptions = {}): Promise<Certification[]> {
  return getJson<unknown>('/certifications.json', options).then((value) =>
    assertArray<Certification>(value, 'certificaciones'),
  );
}

export function loadContact(options: RequestOptions = {}): Promise<ContactInfo> {
  return getJson<unknown>('/contact.json', options).then((value) =>
    assertRecord<ContactInfo>(value, 'contacto'),
  );
}

export function loadNews(options: RequestOptions = {}): Promise<NewsItem[]> {
  return getJson<unknown>('/news.json', options).then((value) =>
    assertArray<NewsItem>(value, 'noticias'),
  );
}

export function loadPortfolio(options: RequestOptions = {}): Promise<PortfolioData> {
  return getJson<unknown>('/portfolio.json', options).then(assertPortfolio);
}
