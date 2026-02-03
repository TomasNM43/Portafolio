# Sistema de Galería de Proyectos

## 🎨 Funcionalidad Implementada

Se ha implementado un sistema completo de galería de imágenes para cada proyecto con las siguientes características:

### ✨ Características Principales

1. **Modal Interactivo**
   - Cada proyecto tiene un modal que se abre al hacer clic
   - Navegación fluida entre imágenes
   - Diseño responsive y accesible

2. **Galería de Imágenes**
   - Soporte para múltiples imágenes por proyecto
   - Navegación con botones anterior/siguiente
   - Indicadores de posición (dots)
   - Miniaturas clickeables en la parte inferior

3. **Información Detallada**
   - Descripción extendida del proyecto
   - Todas las tecnologías utilizadas
   - Enlaces a GitHub y demo en vivo

4. **Experiencia de Usuario**
   - Animaciones suaves
   - Modo oscuro compatible
   - Cierre con tecla ESC o clic fuera del modal
   - Bloqueo de scroll del body cuando el modal está abierto

## 📁 Archivos Modificados

### Nuevos Componentes
- `components/ui/ProjectModal.tsx` - Modal con galería de imágenes

### Componentes Actualizados
- `components/ui/ProjectCard.tsx` - Ahora es clickeable y abre el modal
- `components/sections/Projects.tsx` - Maneja el estado del modal

### Tipos Actualizados
- `types/index.ts` - Agregados campos `images[]` y `detailedDescription`

### Datos Actualizados
- `data/portfolio.ts` - Todos los proyectos ahora tienen:
  - `images`: Array de rutas de imágenes
  - `detailedDescription`: Descripción extendida

### Estilos
- `app/globals.css` - Agregados estilos para modal y utilidades

## 🖼️ Agregar Imágenes a tus Proyectos

### 1. Preparar las Imágenes

Coloca tus imágenes en la carpeta `public/projects/`:

```
public/
└── projects/
    ├── topsell.jpg
    ├── topsell-dashboard.jpg
    ├── topsell-products.jpg
    └── ...
```

### 2. Actualizar los Datos

Edita `data/portfolio.ts` para agregar las rutas de las imágenes:

```typescript
{
  id: '1',
  title: 'Mi Proyecto',
  description: 'Descripción corta...',
  detailedDescription: 'Descripción detallada para el modal...',
  image: '/projects/proyecto-principal.jpg',
  images: [
    '/projects/proyecto-principal.jpg',
    '/projects/proyecto-dashboard.jpg',
    '/projects/proyecto-features.jpg',
    '/projects/proyecto-mobile.jpg',
  ],
  technologies: ['React', 'Next.js', ...],
}
```

## 💡 Consejos para las Imágenes

1. **Formato Recomendado**
   - JPG para fotografías
   - PNG para capturas de pantalla
   - WebP para mejor compresión

2. **Tamaño Óptimo**
   - Ancho: 1200-1920px
   - Mantén la relación de aspecto 16:9 o 4:3
   - Comprime las imágenes para web

3. **Nomenclatura**
   - Usa nombres descriptivos: `proyecto-nombre-caracteristica.jpg`
   - Ejemplo: `topsell-dashboard.jpg`, `topsell-checkout.jpg`

## 🎯 Uso

1. **Ver Proyectos**: Los visitantes ven las tarjetas de proyectos en la sección principal
2. **Abrir Modal**: Click en cualquier proyecto o en "Ver más detalles"
3. **Navegar**: Usa los botones de navegación o las miniaturas
4. **Cerrar**: Click en X, fuera del modal, o presiona ESC

## 🔧 Personalización

### Cambiar el Número de Imágenes en las Tarjetas

En `components/ui/ProjectCard.tsx`, modifica la cantidad de tecnologías mostradas:

```typescript
{project.technologies.slice(0, 3).map((tech) => (
  // Cambia 3 por el número que prefieras
```

### Ajustar el Tamaño del Modal

En `components/ui/ProjectModal.tsx`, modifica las clases:

```typescript
<div className="relative bg-white dark:bg-gray-900 rounded-2xl max-w-5xl w-full max-h-[90vh]">
  // Cambia max-w-5xl a max-w-4xl, max-w-6xl, etc.
```

### Cambiar el Alto de las Imágenes

```typescript
<div className="h-96 bg-gradient-to-br...">
  // Cambia h-96 a h-64, h-80, etc.
```

## 🚀 Mejoras Futuras Sugeridas

1. **Optimización de Imágenes**
   - Usar Next.js Image component
   - Lazy loading de imágenes
   - Diferentes tamaños para responsive

2. **Funcionalidades Adicionales**
   - Zoom de imágenes
   - Modo pantalla completa
   - Compartir en redes sociales
   - Descarga de capturas

3. **Animaciones**
   - Transiciones entre imágenes
   - Efectos de entrada/salida del modal
   - Parallax en las tarjetas

---

✅ **Sistema de galería completamente funcional e integrado en el portafolio**
