import type { PortfolioData } from '../../src/data/types';

export const portfolioFixture: PortfolioData = {
  profile: {
    name: 'Josefa Roca Liberón',
    role: 'Estudiante de Ingeniería Informática',
    tagline: 'Desarrolladora en formación.',
    bio: 'Bio de prueba del portafolio.',
    skills: ['React', 'TypeScript'],
    location: 'Santiago, Chile',
    institution: 'Duoc UC',
    availability: 'Disponible para prácticas',
  },
  education: [
    {
      id: 'edu-1',
      title: 'Ingeniería Informática',
      institution: 'Duoc UC',
      period: '2025 - Presente',
    },
  ],
  projects: [
    {
      id: 'proj-1',
      title: 'Proyecto Demo',
      description: 'Descripción del proyecto demo.',
      tech: ['React', 'TypeScript'],
      demoUrl: 'https://example.com/demo',
    },
  ],
  certifications: [
    {
      id: 'cert-1',
      title: 'Scrum Product Owner',
      institution: 'Duoc UC',
      year: '2026',
      status: 'En proceso',
    },
  ],
  contact: {
    email: 'josefa@example.com',
    phone: '+56 9 1234 5678',
    location: 'Santiago, Chile',
    github: 'https://github.com/jocfapaz',
  },
  news: [
    {
      id: 'news-1',
      title: 'Noticia destacada',
      date: '2026-10-20',
      content: 'Contenido de la noticia destacada.',
      featured: true,
    },
    {
      id: 'news-2',
      title: 'Noticia reciente',
      date: '2026-08-18',
      content: 'Contenido de la noticia reciente.',
      featured: false,
    },
  ],
};
