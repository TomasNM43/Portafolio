# CLAUDE.md — Portafolio de Tomás Ninán

Guía de referencia para Claude Code en este proyecto. Sin backend — todo es frontend estático desplegado en Vercel.

---

## Proyecto

Portafolio personal de **Tomás Edgar Ninán Melo** (Analista Programador Full Stack, Lima, Perú).
Single-page application con secciones: Hero, About, Projects, Skills, Contact.

---

## Stack Tecnológico

| Capa | Tecnología |
|---|---|
| Framework | Next.js 16 (App Router) |
| UI | React 19, TypeScript |
| Estilos | Tailwind CSS v4 |
| Animaciones | Framer Motion |
| 3D / Shader | Three.js, @react-three/fiber, @shadergradient/react |
| Tipografías | Nohemi (headings) · Satoshi (body) — fuentes locales en `/public/fonts/` |
| Linting | ESLint con `eslint-config-next` |
| Deploy | Vercel (sin backend, sin servidor propio) |

---

## Estructura del Proyecto

```
app/
  layout.tsx          # Root layout: fuentes, metadata, BackgroundShader
  page.tsx            # Página principal: spotlight de mouse + secciones
  globals.css         # Estilos globales (Tailwind v4 + custom)

components/
  sections/
    Hero.tsx          # Sección de presentación principal
    About.tsx         # Perfil, experiencia y formación
    Projects.tsx      # Grid de proyectos + estado del modal
    Skills.tsx        # Tecnologías y competencias
    Contact.tsx       # Formulario / links de contacto
  ui/
    Navbar.tsx        # Navegación fija con scroll
    Footer.tsx        # Footer del portafolio
    BackgroundShader.tsx  # Fondo 3D animado (ShaderGradient)
    ProjectCard.tsx   # Tarjeta de proyecto clickeable
    ProjectModal.tsx  # Modal con galería de imágenes

data/
  portfolio.ts        # Toda la data del portafolio (proyectos, skills, etc.)

types/
  index.ts            # Interfaces: Project, Skill, Experience, ContactInfo

lib/
  utils.ts            # Utilidad cn() (clsx + tailwind-merge)

public/
  cv.pdf              # CV para descarga
  fonts/              # Nohemi (.woff) y Satoshi (.otf)
  isotipo.png         # Favicon / logo
  imagenes-proyectos/ # Screenshots de proyectos (por carpeta por proyecto)
```

---

## Datos del Portafolio

**El único lugar para modificar contenido es `data/portfolio.ts`.**

- Proyectos: `images[]` (galería) + `detailedDescription` (modal) + `technologies[]`
- Imágenes de proyectos: van en `public/imagenes-proyectos/<nombre-proyecto>/`
- CV descargable: reemplazar `public/cv.pdf`

Información personal del propietario en `CV_INFO.md` (referencia, no se renderiza).

---

## Comandos de Desarrollo

```bash
npm run dev      # Servidor local (http://localhost:3000)
npm run build    # Build de producción
npm run start    # Servidor de producción local
npm run lint     # ESLint
```

**No hay variables de entorno requeridas.** No hay base de datos ni API propia.

---

## Despliegue (Vercel)

- El proyecto se despliega en Vercel conectado al repositorio GitHub (`main` branch).
- Cada push a `main` dispara un deploy automático.
- No requiere configuración especial en Vercel (Next.js se detecta automáticamente).
- El `next.config.ts` tiene `reactCompiler: true` — no desactivar sin motivo.
- No hay rutas de API (`/api/`) ni Server Actions. Todo es estático o Client Components.

---

## Convenciones de Diseño

- **Tema:** Oscuro como base (dark-first). No hay toggle de tema claro.
- **Fondo:** `BackgroundShader` ocupa toda la pantalla con `position: fixed`, z-index bajo. El contenido va encima con `z-10`.
- **Spotlight:** Efecto radial que sigue el mouse, implementado en `page.tsx` con `useState` + `useEffect`.
- **Animaciones:** Usar `framer-motion` para entradas y transiciones. No mezclar con CSS animations salvo casos triviales.
- **Colores de acento:** Azul (`blue-500`, `rgba(59,130,246,...)`) es el color principal del diseño.
- **Tipografía:**
  - Headings → `font-nohemi` (variable CSS `--font-nohemi`)
  - Cuerpo / UI → `font-satoshi` (variable CSS `--font-satoshi`)
- **Utilidad de clases:** Siempre usar `cn()` de `lib/utils.ts` para combinar clases condicionales.

---

## Convenciones de Código

- Todos los componentes son **Client Components** (`'use client'`) por el uso de hooks y animaciones.
  - Excepción: `layout.tsx` es Server Component (exporta `metadata`).
- TypeScript estricto. Usar los tipos de `types/index.ts` antes de crear interfaces nuevas.
- No crear helpers o abstracciones para uso único.
- Imágenes de proyectos: usar `<img>` nativo o `next/image`. Si se usa `next/image`, verificar que las dimensiones sean correctas para no romper el layout del modal.
- No hay `pages/` — usar exclusivamente App Router.

---

## Restricciones Importantes

- **Sin backend.** No añadir rutas `/api/`, Server Actions con efectos secundarios, ni dependencias de servidor.
- **Sin base de datos.** Los datos viven en `data/portfolio.ts`.
- **Formulario de contacto:** Si se implementa envío real, usar un servicio externo (Resend, Formspree, EmailJS) — integración solo desde el cliente.
- **No romper el `reactCompiler: true`** en `next.config.ts`; evitar patrones que el React Compiler no soporte (mutación de props, refs incorrectos).
- No agregar dependencias pesadas sin evaluar el impacto en el bundle (Three.js ya es grande).

---

## Archivos de Referencia del Propietario

- `CV_INFO.md` — CV completo de Tomás (experiencia, stack, certificaciones)
- `GALERIA_PROYECTOS.md` — Documentación del sistema de galería/modal
- `README.md` — Readme estándar del proyecto

---

## Roles de Agentes

El trabajo en este proyecto se divide en tres agentes especializados. Cada agente opera dentro de su scope y **no toca archivos fuera de él** salvo que se indique explícitamente.

Cuando se spawne un agente, se le debe pasar su sección correspondiente como contexto adicional junto con el `CLAUDE.md` completo.

---

### Agente 1 — DISEÑO

**Responsabilidad:** Sistema visual, identidad, tokens de diseño y consistencia estética.

**Archivos que puede modificar:**
- `app/globals.css` — variables CSS, tokens de color, tipografía, utilidades globales
- `public/` — assets visuales (imágenes, íconos, fuentes, logo, isotipo)
- `data/portfolio.ts` — solo el campo `image` / `images[]` de proyectos

**Archivos de solo lectura (referencia):**
- `components/**/*.tsx` — para auditar clases y detectar inconsistencias visuales
- `app/layout.tsx` — para verificar variables de fuente y metadata

**Prohibido:**
- Modificar lógica de componentes (`.tsx` fuera de lo visual)
- Tocar `next.config.ts`, `tsconfig.json`, `package.json`
- Crear nuevos componentes

**Guía de decisiones de diseño:**
- Dark-first. Fondo: negro/gris oscuro. Sin tema claro.
- Acento principal: `blue-500` (#3B82F6). Acento secundario: `blue-400`.
- Headings: `font-nohemi`. Cuerpo: `font-satoshi`.
- Espaciados y bordes deben ser consistentes con Tailwind (escala 4px).
- Animaciones: definir solo durations/easings en CSS; la implementación la hace el agente Frontend.
- Preguntar antes de cambiar paleta de colores o tipografías.

**Plugin — Frontend Design (estética distintiva):**
- Antes de implementar cualquier interfaz, definir una **dirección estética intencional**: considerar propósito, tono, restricciones técnicas y diferenciación.
- Elegir una postura estética clara (ej. "brutalismo minimalista", "caos controlado", "elegancia técnica") en lugar de caer en la convención genérica.
- **Tipografía:** Nohemi y Satoshi ya son elecciones distintivas — mantenerlas. Evitar reemplazarlas por fuentes genéricas (Arial, Inter, system-ui).
- **Composición visual:** Favorecer layouts con asimetría, solapamiento, flujo diagonal o elementos que rompan la grilla cuando el contexto lo justifique.
- **Qué evitar:** Esquemas de color genéricos (especialmente gradientes morados/violetas), layouts predecibles sin carácter contextual, paletas que parezcan salidas de una plantilla.
- El código visual debe ser de calidad de producción y visualmente destacado — no son objetivos en conflicto.

---

### Agente 2 — FRONTEND

**Responsabilidad:** Lógica de componentes, interacciones, animaciones, estructura HTML/JSX y datos de contenido.

**Archivos que puede modificar:**
- `components/sections/*.tsx` — secciones de la página
- `components/ui/*.tsx` — componentes reutilizables
- `app/page.tsx` — composición de secciones y efectos de página
- `app/layout.tsx` — metadata, fuentes (no el CSS global)
- `data/portfolio.ts` — toda la data de contenido
- `types/index.ts` — interfaces TypeScript
- `lib/utils.ts` — utilidades

**Archivos de solo lectura:**
- `app/globals.css` — para respetar variables y tokens definidos por Diseño
- `next.config.ts` — no modificar sin coordinación

**Prohibido:**
- Modificar `app/globals.css` (responsabilidad de Diseño)
- Tocar `package.json` sin aprobación explícita del usuario
- Añadir rutas `/api/` o Server Actions con efectos secundarios
- Romper el patrón `'use client'` en componentes con hooks/animaciones

**Guía de implementación:**
- Usar `framer-motion` para todas las animaciones de entrada/salida.
- Usar `cn()` de `lib/utils.ts` para clases condicionales. Nunca concatenar strings de clases.
- Respetar los tipos de `types/index.ts` antes de crear interfaces nuevas.
- Todo componente nuevo va en `components/ui/` (genérico) o `components/sections/` (sección de página).
- Verificar `npm run build` sin errores antes de considerar una tarea terminada.

**Plugin — Frontend Design (implementación de calidad de producción):**
- Antes de codear un componente nuevo, establecer la **dirección estética** del mismo: ¿qué sensación debe transmitir? ¿cómo se diferencia del resto?
- El movimiento (Framer Motion), el espaciado y los detalles atmosféricos deben **servir a la visión estética**, no ser decoración aleatoria.
- Ajustar la complejidad del código a la visión: diseños maximalistas justifican código elaborado; diseños minimalistas requieren precisión y contención.
- Evitar componentes que parezcan "generados por IA": fondos con gradiente azul-morado, cards con sombra genérica, layouts de 3 columnas sin intención.
- El resultado final debe ser **visualmente llamativo Y funcionalmente correcto** — ambos son requisitos, no opcionales.

---

### Agente 3 — DESPLIEGUE

**Responsabilidad:** Build, configuración de Next.js, optimización de producción y proceso de deploy en Vercel.

**Archivos que puede modificar:**
- `next.config.ts` — configuración de Next.js
- `tsconfig.json` — configuración de TypeScript
- `eslint.config.mjs` — reglas de linting
- `postcss.config.mjs` — configuración de PostCSS/Tailwind
- `.gitignore` — archivos ignorados por git

**Archivos de solo lectura:**
- Todo el resto del proyecto — para auditar problemas de build

**Prohibido:**
- Modificar componentes o lógica de UI
- Modificar `data/portfolio.ts` o `types/index.ts`
- Hacer `git push --force` o modificar la rama `main` directamente sin confirmación del usuario
- Añadir variables de entorno sin documentarlas aquí

**Flujo de deploy:**
1. Ejecutar `npm run lint` — corregir errores antes de continuar.
2. Ejecutar `npm run build` — verificar que el build sea exitoso.
3. Commit a `main` → Vercel detecta el push y despliega automáticamente.
4. Verificar el deploy en el dashboard de Vercel o con `vercel --prod` si la CLI está instalada.

**Checks de producción:**
- No hay variables de entorno requeridas actualmente.
- `reactCompiler: true` debe mantenerse en `next.config.ts`.
- El bundle de Three.js es grande — no agregar más dependencias 3D sin evaluación.
- Confirmar que `public/cv.pdf` esté actualizado antes de cada deploy importante.

---

### Protocolo de Coordinación entre Agentes

Cuando un agente necesita un cambio fuera de su scope:

1. **Documenta el cambio requerido** como un comentario `// TODO [AGENTE-DESTINO]:` en el archivo relevante.
2. **No modifica** el archivo fuera de su scope.
3. El agente orquestador (sesión principal de Claude Code) lee los TODOs y los delega al agente correcto.

Ejemplo:
```tsx
// TODO [DISEÑO]: definir variable CSS --color-accent-secondary en globals.css
// TODO [FRONTEND]: agregar animación de entrada a este componente
// TODO [DESPLIEGUE]: verificar que esta imagen esté optimizada para producción
```
