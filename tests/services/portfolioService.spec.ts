import { ApiError } from '../../src/services/http';
import {
  loadCertifications,
  loadContact,
  loadEducation,
  loadNews,
  loadPortfolio,
  loadProfile,
  loadProjects,
} from '../../src/services/portfolioService';
import { portfolioFixture } from '../fixtures/portfolio';

function jsonResponse(body: unknown, status = 200): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json' },
  });
}

describe('portfolioService', () => {
  let fetchSpy: jasmine.Spy;

  beforeEach(() => {
    fetchSpy = spyOn(globalThis, 'fetch');
  });

  it('carga el perfil desde /api/profile.json', async () => {
    fetchSpy.and.resolveTo(jsonResponse(portfolioFixture.profile));

    const profile = await loadProfile();

    expect(profile).toEqual(portfolioFixture.profile);
    expect(fetchSpy).toHaveBeenCalledTimes(1);
    expect(String(fetchSpy.calls.mostRecent().args[0])).toMatch(/\/api\/profile\.json$/);
  });

  it('carga cada colección desde su endpoint', async () => {
    fetchSpy.and.callFake(async (input: RequestInfo | URL) => {
      const url = String(input);

      if (url.endsWith('/api/education.json')) {
        return jsonResponse(portfolioFixture.education);
      }
      if (url.endsWith('/api/projects.json')) {
        return jsonResponse(portfolioFixture.projects);
      }
      if (url.endsWith('/api/certifications.json')) {
        return jsonResponse(portfolioFixture.certifications);
      }
      if (url.endsWith('/api/contact.json')) {
        return jsonResponse(portfolioFixture.contact);
      }
      if (url.endsWith('/api/news.json')) {
        return jsonResponse(portfolioFixture.news);
      }

      throw new Error(`URL inesperada: ${url}`);
    });

    const [education, projects, certifications, contact, news] = await Promise.all([
      loadEducation(),
      loadProjects(),
      loadCertifications(),
      loadContact(),
      loadNews(),
    ]);

    expect(education).toEqual(portfolioFixture.education);
    expect(projects).toEqual(portfolioFixture.projects);
    expect(certifications).toEqual(portfolioFixture.certifications);
    expect(contact).toEqual(portfolioFixture.contact);
    expect(news).toEqual(portfolioFixture.news);
    expect(fetchSpy).toHaveBeenCalledTimes(5);
  });

  it('compone el portafolio con una sola petición a /api/portfolio.json', async () => {
    fetchSpy.and.resolveTo(jsonResponse(portfolioFixture));

    const portfolio = await loadPortfolio();

    expect(portfolio).toEqual(portfolioFixture);
    expect(fetchSpy).toHaveBeenCalledTimes(1);
    expect(String(fetchSpy.calls.mostRecent().args[0])).toMatch(/\/api\/portfolio\.json$/);
  });

  it('lanza ApiError cuando la API responde con un error HTTP', async () => {
    fetchSpy.and.resolveTo(jsonResponse({ error: 'fallo' }, 500));

    try {
      await loadPortfolio();
      fail('La carga debió fallar');
    } catch (error) {
      expect(error instanceof ApiError).toBeTrue();
      expect((error as ApiError).status).toBe(500);
      expect((error as Error).message).toContain('500');
    }
  });

  it('lanza ApiError cuando hay un error de red', async () => {
    fetchSpy.and.rejectWith(new TypeError('Failed to fetch'));

    await expectAsync(loadNews()).toBeRejectedWithError(ApiError, /No se pudo conectar/);
  });

  it('lanza ApiError cuando la respuesta no contiene JSON válido', async () => {
    fetchSpy.and.resolveTo(new Response('no es json', { status: 200 }));

    await expectAsync(loadProfile()).toBeRejectedWithError(ApiError, /JSON inválida/);
  });

  it('rechaza respuestas con un formato inesperado', async () => {
    fetchSpy.and.resolveTo(jsonResponse({ profile: null }));

    await expectAsync(loadPortfolio()).toBeRejectedWithError(/formato inesperado/);
  });
});
