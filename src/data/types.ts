export interface Profile {
  name: string;
  role: string;
  tagline: string;
  bio: string;
  skills: string[];
  location: string;
  institution: string;
  availability: string;
}

export interface EducationItem {
  id: string;
  title: string;
  institution: string;
  period: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  image?: string;
  demoUrl?: string;
  repoUrl?: string;
}

export interface Certification {
  id: string;
  title: string;
  institution: string;
  year: string;
  status: string;
}

export interface ContactInfo {
  email: string;
  phone: string;
  location: string;
  github: string;
}

export interface NewsItem {
  id: string;
  title: string;
  date: string;
  content: string;
  featured?: boolean;
}

export interface PortfolioData {
  profile: Profile;
  education: EducationItem[];
  projects: Project[];
  certifications: Certification[];
  contact: ContactInfo;
  news: NewsItem[];
}
