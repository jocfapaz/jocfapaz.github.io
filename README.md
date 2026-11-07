# Portafolio personal · Josefa Roca Liberón

Portafolio profesional desarrollado con React, TypeScript y Vite. El contenido se expone mediante una API REST y se consume desde una capa de servicios separada de la interfaz, incluye navegación entre secciones, vista de contacto y una suite de pruebas con Karma + Jasmine.

- **Demo:** [https://jocfapaz.github.io/](https://jocfapaz.github.io/)
- **Repositorio:** [https://github.com/jocfapaz/jocfapaz.github.io](https://github.com/jocfapaz/jocfapaz.github.io)

> La demo se publica automáticamente con GitHub Actions. En **Settings → Pages**, la fuente debe estar configurada como **GitHub Actions**.

## Capturas de pantalla

### Página principal

![Página principal del portafolio](docs/screenshots/home.png)

### Proyectos y noticias

| Proyectos | Noticias destacadas |
| --- | --- |
| ![Sección de proyectos](docs/screenshots/proyectos.png) | ![Sección de noticias](docs/screenshots/noticias.png) |

### Contacto y vista móvil

| Contacto | Móvil |
| --- | --- |
| ![Página de contacto](docs/screenshots/contacto.png) | ![Portafolio en móvil](docs/screenshots/mobile.png) |

## Características

- API REST con Express: perfil, educación, proyectos, certificaciones, contacto y noticias.
- Consumo HTTP mediante `fetch` desde `src/services/http.ts` y `src/services/portfolioService.ts`.
- Estado de carga, mensaje de error y acción de reintento en la interfaz.
- En GitHub Pages se publica una API estática generada en `/api`, sin necesidad de servidor.
- Contenido centralizado en JSON: perfil, educación, proyectos, certificaciones, contacto y noticias.
- Carga de datos mediante `usePortfolioData` y loaders asíncronos.
- Navegación con React Router: `/` y `/contact`.
- Secciones de inicio con anclas: `#sobre-mi`, `#proyectos`, `#noticias-destacadas`, `#noticias-recientes`, `#cv`, `#certificaciones` y `#contacto`.
- Noticias separadas en **Destacadas** y **Recientes**, ordenadas por fecha.
- Diseño responsive con Tailwind CSS.
- Modo claro/oscuro persistente y navegación accesible entre rutas y anclas.
- Enlace de salto al contenido, foco visible y soporte para `prefers-reduced-motion`.
- Fallback `404.html` para conservar las rutas SPA al publicar en GitHub Pages.
- Imagen de perfil optimizada y carga diferida de imágenes de proyectos.
- Pruebas unitarias, de integración y de componentes con Karma + Jasmine.
- Cobertura de código con `karma-coverage` e `istanbul`.

## Tecnologías

- React 19
- TypeScript
- Vite 8
- Express
- React Router
- Tailwind CSS 4
- Karma
- Jasmine
- Testing Library
- ESLint

## Accesibilidad

- Documento con `lang="es"`, título descriptivo y metadatos de autor/descripción.
- Enlace “Saltar al contenido”, `<main id="contenido">` y navegación con `aria-label`.
- Estado activo de las rutas con `NavLink` y `aria-current`.
- Selector de tema con `aria-pressed`, persistencia en `localStorage` y respeto por `prefers-color-scheme`.
- Estilos de foco visibles y reducción de animaciones con `prefers-reduced-motion`.
- Contrastes corregidos en etiquetas, enlaces, fechas y estados.
- Estados de carga y error anunciados con `role="status"` y `role="alert"`.
- Emojis e iconos decorativos ocultos para lectores de pantalla.

## Rendimiento

- Imagen de perfil optimizada a 256×256 px y ~12 KB.
- Imágenes de proyectos con `loading="lazy"` y `decoding="async"`.
- Eliminación de recursos sin usar (`hero.png`, `react.svg`, `vite.svg`, `icons.svg`).
- Build de producción minificado con Vite.

## Requisitos

- Node.js 20.19+ (recomendado 22 o 24)
- npm
- Google Chrome y/o Microsoft Edge para ejecutar las pruebas

## Instalación

```bash
git clone https://github.com/jocfapaz/jocfapaz.github.io.git
cd jocfapaz.github.io
npm install
```

Opcionalmente, copia la configuración de ejemplo:

```powershell
Copy-Item .env.example .env
```

## Ejecución

Inicia la API y el frontend en un solo comando:

```bash
npm run dev
```

- API REST: `http://localhost:3001/api`
- Frontend: `http://localhost:5173`
- Vite redirige las peticiones `/api` al backend Express.

Comandos disponibles:

| Comando | Descripción |
| --- | --- |
| `npm run dev` | Ejecuta la API Express y Vite juntos. |
| `npm run dev:api` | Ejecuta solo la API Express. |
| `npm run dev:web` | Ejecuta solo Vite con la API estática generada. |
| `npm run api:static` | Genera la API estática en `public/api/`. |

Para generar la versión de producción:

```bash
npm run build
```

Para previsualizar el resultado de producción:

```bash
npm run preview
```

## API REST

El frontend consume la API desde `src/services/portfolioService.ts`. Todas las funciones reciben una señal opcional para cancelar la petición y usan un cliente HTTP común con timeout y errores tipados.

### Endpoints

| Método | Ruta | Descripción |
| --- | --- | --- |
| `GET` | `/api/health` | Estado del servicio. |
| `GET` | `/api/profile` | Perfil profesional. |
| `GET` | `/api/education` | Formación académica. |
| `GET` | `/api/projects` | Proyectos. |
| `GET` | `/api/certifications` | Certificaciones. |
| `GET` | `/api/contact` | Información de contacto. |
| `GET` | `/api/news` | Noticias. |
| `GET` | `/api/portfolio` | Objeto agregado con todas las colecciones. |

`loadPortfolio()` realiza una sola petición a `/api/portfolio.json`; los loaders individuales permiten consultar cada recurso por separado.

Express acepta tanto `/api/profile` como `/api/profile.json` (y equivalentes). El frontend solicita la variante `.json` para que el mismo código funcione contra la API estática de GitHub Pages.

### Configuración

| Variable | Valor por defecto | Descripción |
| --- | --- | --- |
| `VITE_API_URL` | `/api` | URL base del API REST. |
| `API_PORT` | `3001` | Puerto del backend Express. |
| `CORS_ORIGIN` | cualquiera | Origen permitido por CORS. |
| `API_DELAY_MS` | `0` | Retardo artificial para probar el estado de carga. |

### API estática para GitHub Pages

GitHub Pages solo publica archivos estáticos. Para mantener la demo funcionando sin backend, `npm run build` ejecuta `scripts/generate-static-api.mjs`, que genera `public/api/*.json` y `public/api/portfolio.json`. Vite los copia a `dist/api`, de modo que el mismo `fetch('/api/profile.json')` funciona igual en local con Express y en producción con archivos JSON.

## Despliegue en GitHub Pages

El despliegue se realiza con el workflow `.github/workflows/deploy.yml`:

1. Cada push a `main` ejecuta lint, typecheck, pruebas y build.
2. El build genera la API estática en `dist/api/` y el contenido de `dist/` se publica como artefacto de GitHub Pages.
3. `public/404.html` redirige las rutas SPA a `index.html` para que `/contact` funcione al recargar.
4. No se despliega Express: en producción el frontend consulta los JSON estáticos de `/api`.

Configuración necesaria en GitHub:

- Ir a **Settings → Pages**.
- En **Build and deployment → Source**, seleccionar **GitHub Actions**.
- Ejecutar el workflow manualmente con **Actions → Deploy to GitHub Pages → Run workflow** si es la primera publicación.

La URL esperada es [https://jocfapaz.github.io/](https://jocfapaz.github.io/).

## Pruebas

| Comando | Descripción |
| --- | --- |
| `npm test` | Ejecuta todas las pruebas una vez en Chrome headless. |
| `npm run test:chrome` | Ejecuta las pruebas en Chrome headless. |
| `npm run test:edge` | Ejecuta las pruebas en Microsoft Edge headless. |
| `npm run test:all` | Ejecuta la suite en Chrome y Edge. |
| `npm run test:watch` | Ejecuta las pruebas en modo watch. |
| `npm run typecheck:test` | Verifica los tipos de `src` y `tests`. |
| `npm run lint` | Ejecuta ESLint. |
| `npm run test:coverage` | Ejecuta las pruebas y genera el informe de cobertura. |

Ejemplo de ejecución completa:

```bash
npm run lint
npm run typecheck:test
npm run test:all
npm run build
```

### Cobertura

El informe se genera en:

```text
coverage/index.html
```

Los umbrales configurados son:

- Sentencias: 80%
- Ramas: 70%
- Funciones: 80%
- Líneas: 80%

Si Chrome o Edge no se detectan automáticamente, define la ruta del ejecutable:

```powershell
$env:CHROME_BIN = "C:\ruta\a\chrome.exe"
$env:EDGE_BIN = "C:\ruta\a\msedge.exe"
```

En Windows, `karma.edge.cjs` busca Edge en las rutas habituales de instalación.

## Estructura del proyecto

```text
.
├── .github/
│   └── workflows/
│       └── deploy.yml          # Publicación automática en GitHub Pages
├── docs/
│   ├── legacy/                 # Versión anterior del sitio
│   └── screenshots/            # Capturas usadas en este README
├── public/
│   ├── api/                    # API estática generada para GitHub Pages
│   ├── 404.html                # Fallback para rutas SPA
│   └── favicon.svg
├── scripts/
│   └── generate-static-api.mjs # Genera public/api desde src/data
├── server/
│   └── index.mjs               # API REST con Express
├── src/
│   ├── assets/                 # Imágenes y recursos
│   ├── components/
│   │   ├── about/              # Sobre mí y educación
│   │   ├── certifications/     # Certificaciones
│   │   ├── contact/            # Información de contacto
│   │   ├── news/               # Noticias destacadas y recientes
│   │   ├── projects/           # Proyectos
│   │   └── ui/                 # Componentes reutilizables
│   ├── core/                   # Root, Header, Navegación y Footer
│   ├── data/                   # JSON, tipos y selectores
│   ├── hooks/                  # usePortfolioData y useTheme
│   ├── pages/                  # Home y Contact
│   ├── services/               # Cliente HTTP y loaders del portafolio
│   ├── index.css
│   └── main.tsx
├── tests/
│   ├── components/
│   ├── core/
│   ├── data/
│   ├── fixtures/
│   ├── hooks/
│   ├── integration/
│   ├── pages/
│   ├── services/
│   └── setup.ts
├── eslint.config.js
├── karma.conf.cjs
├── karma.coverage.cjs
├── karma.edge.cjs
├── package.json
└── vite.config.ts
```

## Cómo actualizar el contenido

Todo el contenido del portafolio vive en `src/data/`. La API Express lee esos archivos directamente; para regenerar la copia estática que usan `dev:web` y GitHub Pages ejecuta `npm run api:static` (el build también lo hace automáticamente).

### Agregar un proyecto

Edita `src/data/projects.json`:

```json
[
  {
    "id": "mi-nuevo-proyecto",
    "title": "Mi nuevo proyecto",
    "description": "Descripción breve del proyecto.",
    "tech": ["React", "TypeScript"],
    "image": "/mi-proyecto.png",
    "demoUrl": "https://example.com/demo",
    "repoUrl": "https://github.com/usuario/mi-proyecto"
  }
]
```

Los campos `image`, `demoUrl` y `repoUrl` son opcionales.

### Agregar una noticia

Edita `src/data/news.json`:

```json
[
  {
    "id": "nueva-noticia",
    "title": "Nueva noticia",
    "date": "2026-10-29",
    "content": "Contenido de la noticia.",
    "featured": true
  }
]
```

- `featured: true` muestra la noticia en **Destacadas**.
- `featured: false` o ausente la muestra en **Recientes**.
- Las noticias se ordenan por fecha descendente.

### Actualizar perfil y contacto

- Perfil: `src/data/profile.json`
- Educación: `src/data/education.json`
- Certificaciones: `src/data/certifications.json`
- Contacto: `src/data/contact.json`

Los tipos esperados están definidos en `src/data/types.ts`.

## Ejemplos de uso

### Navegar por el portafolio

- Inicio: `http://localhost:5173/`
- Contacto: `http://localhost:5173/contact`
- Proyectos: `http://localhost:5173/#proyectos`
- Noticias: `http://localhost:5173/#noticias-destacadas`

### Ejecutar una prueba específica

Karma carga todos los archivos `tests/**/*.spec.tsx`. Para trabajar en una prueba concreta, usa el modo watch:

```bash
npm run test:watch
```

### Verificar la cobertura antes de publicar

```bash
npm run test:coverage
```

Luego abre `coverage/index.html` en el navegador.

## Autor

Josefa Roca Liberón

- GitHub: [@jocfapaz](https://github.com/jocfapaz)
- Portafolio: [https://jocfapaz.github.io/](https://jocfapaz.github.io/)
