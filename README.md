# 🚀 Mi Portafolio Personal

Portafolio profesional desarrollado con Next.js 15, TypeScript y Tailwind CSS.

## ✨ Características

- ⚡ Next.js 15 con App Router
- 💎 TypeScript para type safety
- 🎨 Tailwind CSS para estilos
- 📱 Diseño totalmente responsive
- 🌙 Modo oscuro compatible
- ⚡ Optimizado para rendimiento
- 🎯 SEO optimizado

## 📂 Estructura del Proyecto

```
portfolio/
├── app/                    # App Router de Next.js
│   ├── layout.tsx         # Layout principal
│   ├── page.tsx           # Página principal
│   └── globals.css        # Estilos globales
├── components/            # Componentes React
│   ├── sections/         # Secciones del portafolio
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Projects.tsx
│   │   ├── Skills.tsx
│   │   └── Contact.tsx
│   └── ui/               # Componentes de UI
│       ├── Navbar.tsx
│       ├── Footer.tsx
│       └── ProjectCard.tsx
├── data/                  # Datos del portafolio
│   └── portfolio.ts       # Proyectos, habilidades, experiencia
├── types/                 # Tipos de TypeScript
│   └── index.ts
├── lib/                   # Utilidades
│   └── utils.ts
└── public/               # Archivos estáticos
```

## 🚀 Inicio Rápido

### Instalación

Las dependencias ya están instaladas. Si necesitas reinstalar:

```bash
npm install
```

### Desarrollo

Ejecuta el servidor de desarrollo:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## 📝 Personalización

### 1. Actualiza tu información personal

Edita `data/portfolio.ts` para agregar:
- Tus proyectos
- Habilidades
- Experiencia laboral
- Información de contacto

### 2. Personaliza los componentes

Modifica los componentes en `components/sections/` para:
- Cambiar textos y descripciones
- Ajustar colores y estilos
- Agregar nuevas secciones

### 3. Actualiza metadatos

Edita `app/layout.tsx` para:
- Cambiar el título y descripción
- Agregar tu nombre
- Configurar SEO

### 4. Agrega tus imágenes

Coloca tus imágenes en la carpeta `public/`:
- Foto de perfil
- Imágenes de proyectos
- Logos, etc.

## 🎨 Tecnologías Utilizadas

- **Next.js 15** - Framework de React
- **TypeScript** - Type safety
- **Tailwind CSS** - Estilos utility-first
- **React** - Biblioteca de UI
- **ESLint** - Linting de código

## 📱 Secciones Incluidas

1. **Hero** - Presentación inicial con call-to-action
2. **About** - Información sobre ti
3. **Projects** - Muestra de proyectos destacados
4. **Skills** - Habilidades técnicas con barras de progreso
5. **Contact** - Formulario de contacto y redes sociales

## 🔧 Scripts Disponibles

- `npm run dev` - Inicia servidor de desarrollo
- `npm run build` - Crea build de producción
- `npm start` - Inicia servidor de producción
- `npm run lint` - Ejecuta ESLint

## 📦 Próximos Pasos

- [ ] Agregar tu información personal en `data/portfolio.ts`
- [ ] Personalizar colores y estilos
- [ ] Agregar tus proyectos reales
- [ ] Subir imágenes a la carpeta `public/`
- [ ] Configurar formulario de contacto (email)
- [ ] Agregar animaciones (Framer Motion)
- [ ] Implementar sistema de blog (opcional)
- [ ] Agregar analytics (Google Analytics, Vercel Analytics)

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

---

Hecho con ❤️ usando Next.js y Tailwind CSS

