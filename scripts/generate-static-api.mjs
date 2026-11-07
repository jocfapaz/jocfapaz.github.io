import { mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dataDirectory = path.join(projectRoot, 'src', 'data');
const outputDirectory = path.join(projectRoot, 'public', 'api');

const COLLECTIONS = [
  'profile',
  'education',
  'projects',
  'certifications',
  'contact',
  'news',
];

async function readCollection(name) {
  const raw = await readFile(path.join(dataDirectory, `${name}.json`), 'utf8');
  return JSON.parse(raw);
}

async function writeJson(name, value) {
  const target = path.join(outputDirectory, `${name}.json`);
  await writeFile(target, `${JSON.stringify(value, null, 2)}\n`, 'utf8');
}

await mkdir(outputDirectory, { recursive: true });

const portfolio = {};

for (const name of COLLECTIONS) {
  const data = await readCollection(name);
  portfolio[name] = data;
  await writeJson(name, data);
}

await writeJson('portfolio', portfolio);

console.log(`API estática generada en ${path.relative(projectRoot, outputDirectory)}`);
