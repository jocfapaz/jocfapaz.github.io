import {
  loadCertifications,
  loadContact,
  loadEducation,
  loadNews,
  loadPortfolio,
  loadProfile,
  loadProjects,
} from '../../src/services/portfolioService';

describe('portfolioService', () => {
  it('carga cada colección del portafolio', async () => {
    const [profile, education, projects, certifications, contact, news] = await Promise.all([
      loadProfile(),
      loadEducation(),
      loadProjects(),
      loadCertifications(),
      loadContact(),
      loadNews(),
    ]);

    expect(profile.name).toBeTruthy();
    expect(education.length).toBeGreaterThan(0);
    expect(projects.length).toBeGreaterThan(0);
    expect(certifications.length).toBeGreaterThan(0);
    expect(contact.email).toBeTruthy();
    expect(news.length).toBeGreaterThan(0);
  });

  it('compone el portafolio completo con todas las colecciones', async () => {
    const portfolio = await loadPortfolio();

    expect(portfolio.profile.name).toBeTruthy();
    expect(portfolio.education.length).toBeGreaterThan(0);
    expect(portfolio.projects.length).toBeGreaterThan(0);
    expect(portfolio.certifications.length).toBeGreaterThan(0);
    expect(portfolio.contact.email).toBeTruthy();
    expect(portfolio.news.length).toBeGreaterThan(0);
  });
});
