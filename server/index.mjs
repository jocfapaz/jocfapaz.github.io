import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import cors from 'cors';
import express from 'express';

const currentFile = fileURLToPath(import.meta.url);
const projectRoot = path.resolve(path.dirname(currentFile), '..');

export const COLLECTIONS = [
  'profile',
  'education',
  'projects',
  'certifications',
  'contact',
  'news',
];

function createDataReader(dataDirectory) {
  return async function readCollection(name) {
    const raw = await readFile(path.join(dataDirectory, `${name}.json`), 'utf8');
    return JSON.parse(raw);
  };
}

function wait(ms) {
  if (ms <= 0) {
    return Promise.resolve();
  }

  return new Promise((resolve) => setTimeout(resolve, ms));
}

export function createApp({
  dataDirectory = path.join(projectRoot, 'src', 'data'),
  delayMs = Number(process.env.API_DELAY_MS ?? 0),
} = {}) {
  const readCollection = createDataReader(dataDirectory);
  const app = express();

  app.disable('x-powered-by');
  app.use(cors({ origin: process.env.CORS_ORIGIN?.split(',') ?? true }));
  app.use(express.json());

  const sendCollection = (name) => async (_request, response, next) => {
    try {
      await wait(delayMs);
      response.set('Cache-Control', 'no-store');
      response.json(await readCollection(name));
    } catch (error) {
      next(error);
    }
  };

  app.get('/api/health', (_request, response) => {
    response.json({ status: 'ok', timestamp: new Date().toISOString() });
  });

  for (const name of COLLECTIONS) {
    app.get([`/api/${name}`, `/api/${name}.json`], sendCollection(name));
  }

  app.get(['/api/portfolio', '/api/portfolio.json'], async (_request, response, next) => {
    try {
      await wait(delayMs);
      const entries = await Promise.all(
        COLLECTIONS.map(async (name) => [name, await readCollection(name)]),
      );
      response.set('Cache-Control', 'no-store');
      response.json(Object.fromEntries(entries));
    } catch (error) {
      next(error);
    }
  });

  app.use('/api', (_request, response) => {
    response.status(404).json({ error: 'Recurso no encontrado.' });
  });

  app.use((error, _request, response, _next) => {
    console.error('[api]', error);
    response.status(500).json({ error: 'Error interno del servidor.' });
  });

  return app;
}

const isMainModule = process.argv[1] && path.resolve(process.argv[1]) === currentFile;

if (isMainModule) {
  const port = Number(process.env.API_PORT ?? process.env.PORT ?? 3001);
  createApp().listen(port, () => {
    console.log(`API REST disponible en http://localhost:${port}/api`);
  });
}
