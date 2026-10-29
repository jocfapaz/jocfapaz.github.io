import profileData from '../data/profile.json';
import educationData from '../data/education.json';
import projectsData from '../data/projects.json';
import certificationsData from '../data/certifications.json';
import contactData from '../data/contact.json';
import newsData from '../data/news.json';
import type {
  Certification,
  ContactInfo,
  EducationItem,
  NewsItem,
  PortfolioData,
  Profile,
  Project,
} from '../data/types';

function readJson<T>(data: T): Promise<T> {
  return Promise.resolve(data);
}

export function loadProfile(): Promise<Profile> {
  return readJson(profileData as Profile);
}

export function loadEducation(): Promise<EducationItem[]> {
  return readJson(educationData as EducationItem[]);
}

export function loadProjects(): Promise<Project[]> {
  return readJson(projectsData as Project[]);
}

export function loadCertifications(): Promise<Certification[]> {
  return readJson(certificationsData as Certification[]);
}

export function loadContact(): Promise<ContactInfo> {
  return readJson(contactData as ContactInfo);
}

export function loadNews(): Promise<NewsItem[]> {
  return readJson(newsData as NewsItem[]);
}

export async function loadPortfolio(): Promise<PortfolioData> {
  const [profile, education, projects, certifications, contact, news] = await Promise.all([
    loadProfile(),
    loadEducation(),
    loadProjects(),
    loadCertifications(),
    loadContact(),
    loadNews(),
  ]);

  return { profile, education, projects, certifications, contact, news };
}
