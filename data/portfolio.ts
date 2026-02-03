import { Project, Skill, Experience, ContactInfo } from '@/types';

export const projects: Project[] = [
  {
    id: '1',
    title: 'Topsell - Plataforma E-commerce',
    description: 'Desarrollo integral de plataforma de E-commerce con panel administrativo de contenidos (CMS). Implementación completa con gestión de bases de datos y contenedorización.',
    detailedDescription: 'Proyecto freelance de desarrollo completo de una plataforma de comercio electrónico moderna. Incluye un sistema de gestión de contenidos (CMS) personalizado, gestión de inventario, procesamiento de pedidos, y panel de análisis en tiempo real. La aplicación fue containerizada usando Docker para facilitar el despliegue y escalabilidad. Se implementó PostgreSQL para la gestión de datos con PgAdmin como herramienta de administración.',
    image: '/imagenes-proyectos/topsell/screencapture-localhost-3000-2026-02-03-17_14_30.png',
    images: [
      '/imagenes-proyectos/topsell/screencapture-localhost-3000-2026-02-03-17_14_30.png',
      '/imagenes-proyectos/topsell/screencapture-localhost-3000-tienda-2026-02-03-17_14_40.png',
      '/imagenes-proyectos/topsell/screencapture-localhost-3000-nosotros-2026-02-03-17_14_52.png',
      '/imagenes-proyectos/topsell/screencapture-localhost-3000-login-2026-02-03-17_15_02.png',
      '/imagenes-proyectos/topsell/screencapture-localhost-3000-carrito-2026-02-03-17_15_14.png',
      '/imagenes-proyectos/topsell/screencapture-localhost-3001-dashboard-2026-02-03-17_18_58.png',
    ],
    technologies: ['React', 'Next.js', 'PostgreSQL', 'Docker', 'PgAdmin', 'Tailwind CSS', 'TypeScript'],
    githubUrl: '',
    liveUrl: '',
    featured: true,
  },
  {
    id: '2',
    title: 'Vangerista - E-commerce Completo',
    description: 'Desarrollo integral de plataforma E-commerce con diseño UI/UX mediante wireframes y prototipos en Figma. Implementación de pasarelas de pago y API Rest en Java Spring Boot.',
    detailedDescription: 'Plataforma de comercio electrónico desarrollada desde cero, comenzando con el diseño UI/UX en Figma. Incluye wireframes detallados, prototipos interactivos y diseño final de interfaz. Se implementó una arquitectura de microservicios con backend en Java Spring Boot proporcionando APIs REST, frontend en Angular 12, y base de datos MySQL. Integración completa con múltiples pasarelas de pago para transacciones seguras.',
    image: '/imagenes-proyectos/vangerista/screencapture-localhost-4200-2026-02-03-17_08_23.png',
    images: [
      '/imagenes-proyectos/vangerista/screencapture-localhost-4200-2026-02-03-17_08_23.png',
      '/imagenes-proyectos/vangerista/screencapture-localhost-4200-ecommerce-store-1-2-2026-02-03-17_08_38.png',
      '/imagenes-proyectos/vangerista/screencapture-localhost-4200-conoceme-2026-02-03-17_08_56.png',
      '/imagenes-proyectos/vangerista/screencapture-localhost-4200-musica-2026-02-03-17_09_22.png',
      '/imagenes-proyectos/vangerista/screencapture-localhost-4200-products-list-2026-02-03-17_10_51.png',
    ],
    technologies: ['Angular 12', 'Laravel', 'MySQL', 'Java Spring Boot', 'Git', 'Figma', 'REST API'],
    githubUrl: '',
    liveUrl: '',
    featured: true,
  },
  {
    id: '3',
    title: 'Grupo Olivares - Portal Web Corporativo',
    description: 'Desarrollo de portal web corporativo con diseño y programación de página informativa enfocada en la presentación de la marca. Optimización de componentes de interfaz de usuario.',
    detailedDescription: 'Portal corporativo diseñado para presentar la marca Grupo Olivares de manera profesional y atractiva. Se desarrollaron componentes React reutilizables y optimizados para garantizar un rendimiento excepcional. El sitio incluye secciones de servicios, equipo, casos de éxito y contacto, con animaciones suaves y diseño responsive.',
    image: '/imagenes-proyectos/olivares/screencapture-127-0-0-1-5500-index-html-2026-02-03-17_11_48.png',
    images: [
      '/imagenes-proyectos/olivares/screencapture-127-0-0-1-5500-index-html-2026-02-03-17_11_48.png',
      '/imagenes-proyectos/olivares/screencapture-127-0-0-1-5500-nosotros-html-2026-02-03-17_12_06.png',
      '/imagenes-proyectos/olivares/screencapture-127-0-0-1-5500-contacto-html-2026-02-03-17_12_15.png',
      '/imagenes-proyectos/olivares/screencapture-127-0-0-1-5500-catalogo-html-2026-02-03-17_12_31.png',
    ],
    technologies: ['React.js', 'CSS3', 'JavaScript', 'Responsive Design'],
    githubUrl: '',
    liveUrl: '',
    featured: false,
  },
  {
    id: '4',
    title: 'Optimus - Sistema Logístico',
    description: 'Migración de software logístico de AS/400 hacia Java con Spring Boot. Diseño y desarrollo de Microservicios, creación de APIs REST e integración con Oracle SQL Server.',
    detailedDescription: 'Proyecto de modernización tecnológica para YobelSCM, migrando un sistema logístico legacy de AS/400 a una arquitectura moderna basada en microservicios con Java Spring Boot. Se diseñaron e implementaron múltiples microservicios independientes, cada uno con su propia responsabilidad dentro del sistema logístico. Integración con Oracle SQL Server y desarrollo bajo metodología SCRUM con sprints de 2 semanas. Se implementaron pruebas automatizadas con JUnit y Mockito para garantizar la calidad del código.',
    image: '/imagenes-proyectos/yobel/screencapture-optimus-dev-yobel-biz-prd-page-home-2026-02-03-17_05_36.png',
    images: [
      '/imagenes-proyectos/yobel/screencapture-optimus-dev-yobel-biz-prd-page-home-2026-02-03-17_05_36.png',
    ],
    technologies: ['Java', 'Spring Boot', 'Oracle SQL', 'Microservicios', 'JUnit', 'Mockito', 'REST API', 'SCRUM'],
    githubUrl: '',
    liveUrl: '',
    featured: true,
  },
  {
    id: '5',
    title: 'CasaLinda - E-Commerce y Dashboard',
    description: 'Desarrollo y mantenimiento evolutivo del E-Commerce. Creación de aplicaciones para guías de remisión y facturación, y Dashboard para visualización de ventas y productos top.',
    detailedDescription: 'Plataforma de e-commerce completa para CasaLinda, incluyendo desarrollo y mantenimiento continuo del sistema. Se crearon módulos adicionales para la gestión de guías de remisión y facturación electrónica integrados con SUNAT. Dashboard analítico desarrollado para visualizar métricas de ventas en tiempo real, productos más vendidos, análisis de clientes y proyecciones. Stack tecnológico diverso incluyendo PHP para WordPress, Java para servicios backend, y Python para procesamiento de datos.',
    image: '/imagenes-proyectos/casalinda/home.png',
    images: [
      '/imagenes-proyectos/casalinda/home.png',
      '/imagenes-proyectos/casalinda/tiendas.png',
      '/imagenes-proyectos/casalinda/nosotros.png',
      '/imagenes-proyectos/casalinda/trabaja-nosotros.png',
      '/imagenes-proyectos/casalinda/contacto.png',
    ],
    technologies: ['PHP', 'WordPress', 'Java', 'JavaScript', 'Python', 'MySQL', 'Chart.js'],
    githubUrl: '',
    liveUrl: '',
    featured: true,
  },
  {
    id: '6',
    title: 'Ginnet - Software Forense y ML',
    description: 'Creación de API Rest para análisis forense de software y peritaje informático. Aplicación de Machine Learning para reconocimiento facial y de movimiento. Software para detección de fonemas y edición de audio.',
    detailedDescription: 'Proyecto especializado en análisis forense digital y peritaje informático. Desarrollo de APIs REST para el análisis de software supervisado por Indra/SUNAT. Implementación de modelos de Machine Learning para reconocimiento facial y detección de movimiento usando Python y bibliotecas especializadas. Desarrollo de herramientas para detección de fonemas y edición avanzada de audio. Stack tecnológico robusto que incluye Java Spring Boot para backend, .Net Core y C# para aplicaciones de escritorio, Kotlin para componentes Android, y Python para ML.',
    image: '/imagenes-proyectos/ginnet/ginnet.jpg',
    images: [
      '/imagenes-proyectos/ginnet/ginnet.jpg',
      '/imagenes-proyectos/ginnet/ginnet-ml.jpg',
      '/imagenes-proyectos/ginnet/ginnet-forensics.jpg',
      '/imagenes-proyectos/ginnet/ginnet-audio.jpg',
      '/imagenes-proyectos/ginnet/ginnet-api.jpg',
    ],
    technologies: ['Java Spring Boot', 'Python', '.Net Core', 'C#', 'Kotlin', 'SQL Server', 'PostgreSQL', 'Angular 10', 'Machine Learning', 'TensorFlow'],
    githubUrl: '',
    liveUrl: '',
    featured: true,
  },
];

export const skills: Skill[] = [
  // Lenguajes
  { name: 'Java', category: 'backend', level: 95, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
  { name: 'Python', category: 'backend', level: 90, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
  { name: 'C#', category: 'backend', level: 85, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg' },
  { name: 'JavaScript', category: 'frontend', level: 95, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { name: 'TypeScript', category: 'frontend', level: 90, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
  { name: 'PHP', category: 'backend', level: 80, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg' },
  { name: 'Kotlin', category: 'backend', level: 75, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg' },
  
  // Frameworks Frontend
  { name: 'React', category: 'frontend', level: 95, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'Next.js', category: 'frontend', level: 90, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
  { name: 'Angular', category: 'frontend', level: 90, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angular/angular-original.svg' },
  
  // Frameworks Backend
  { name: 'Spring Boot', category: 'backend', level: 95, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg' },
  { name: '.Net Core', category: 'backend', level: 85, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg' },
  { name: 'Django', category: 'backend', level: 80, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg' },
  { name: 'Laravel', category: 'backend', level: 85, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg' },
  
  // Bases de Datos
  { name: 'Oracle SQL', category: 'database', level: 90, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg' },
  { name: 'SQL Server', category: 'database', level: 90, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg' },
  { name: 'MySQL', category: 'database', level: 90, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
  { name: 'PostgreSQL', category: 'database', level: 90, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
  { name: 'PgAdmin', category: 'tools', level: 85, icon: 'https://www.postgresql.org/media/img/about/press/elephant.png' },
  
  // Herramientas y Otros
  { name: 'Docker', category: 'tools', level: 90, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
  { name: 'Git/GitHub', category: 'tools', level: 95, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
  { name: 'Figma', category: 'tools', level: 85, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
  { name: 'JUnit', category: 'tools', level: 85, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/junit/junit-original.svg' },
  { name: 'Mockito', category: 'tools', level: 85, icon: 'https://raw.githubusercontent.com/mockito/mockito/main/src/javadoc/org/mockito/logo.png' },
  { name: 'Microservicios', category: 'backend', level: 90, icon: 'https://cdn-icons-png.flaticon.com/512/9850/9850876.png' },
  { name: 'REST APIs', category: 'backend', level: 95, icon: 'https://static-00.iconduck.com/assets.00/rest-api-icon-512x512-0kjkkpwo.png' },
  { name: 'SCRUM', category: 'tools', level: 90, icon: 'https://cdn-icons-png.flaticon.com/512/6577/6577289.png' },
  { name: 'Agile', category: 'tools', level: 90, icon: 'https://cdn-icons-png.flaticon.com/512/4727/4727266.png' },
];

export const experience: Experience[] = [
  {
    id: '1',
    company: 'Gestion Source (YobelSCM)',
    position: 'Analista Programador Full Stack',
    period: 'Nov 2025 - Actualidad',
    description: 'Prestación de servicios para la empresa YobelSCM, proyecto "Optimus". Migración de software logístico de AS/400 hacia Java con Spring Boot. Diseño y desarrollo de Microservicios y creación de APIs REST. Desarrollo e integración con Oracle SQL Server bajo metodología SCRUM. Pruebas automatizadas con JUnit y Mockito.',
    technologies: ['Java', 'Spring Boot', 'Oracle SQL', 'Microservicios', 'REST APIs', 'JUnit', 'Mockito', 'SCRUM'],
  },
  {
    id: '2',
    company: 'Casalinda',
    position: 'Analista Programador Full Stack',
    period: 'Nov 2022 - Jul 2023',
    description: 'Encargado del desarrollo y mantenimiento evolutivo del E-Commerce. Desarrollo de aplicaciones para guías de remisión y facturación. Creación de Dashboard para visualización de ventas y productos top.',
    technologies: ['PHP', 'WordPress', 'Java', 'JavaScript', 'Python'],
  },
  {
    id: '3',
    company: 'Topsell (Freelance)',
    position: 'Desarrollador Full Stack',
    period: 'Dic 2025 - Ene 2026',
    description: 'Desarrollo integral de plataforma de Ecommerce. Implementación del E-commerce y Panel Administrativo de contenidos (CMS). Gestión de bases de datos y contenedorización de la aplicación.',
    technologies: ['React', 'Next.js', 'PostgreSQL', 'PgAdmin', 'Docker'],
  },
  {
    id: '4',
    company: 'Grupo Olivares (Freelance)',
    position: 'Desarrollador Frontend',
    period: 'Dic 2025 - Ene 2026',
    description: 'Desarrollo de portal web corporativo. Diseño y programación de página informativa enfocada en la presentación de la marca. Optimización de componentes de interfaz de usuario.',
    technologies: ['React.js'],
  },
  {
    id: '5',
    company: 'Vangerista (Freelance)',
    position: 'Diseñador y Analista Programador Full Stack',
    period: 'May 2024 - Dic 2025',
    description: 'Desarrollo integral de plataforma E-commerce. Diseño UI/UX mediante wireframes y prototipos en Figma. Desarrollo de E-Commerce completo y pasarelas de pago. Desarrollo de API Rest en Java (Spring Boot).',
    technologies: ['Angular 12', 'Laravel', 'MySQL', 'Java Spring Boot', 'Git', 'Figma'],
  },
  {
    id: '6',
    company: 'Ginnet',
    position: 'Analista de Software y Programador Full Stack',
    period: 'Oct 2020 - Sep 2024',
    description: 'Creación de API Rest para análisis forense de software y peritaje informático. Análisis de software supervisado (Indra/SUNAT) en Angular 10 y Spring Boot. Aplicación de Machine Learning para reconocimiento facial y de movimiento. Desarrollo de software para detección de fonemas y edición de audio.',
    technologies: ['Java Spring Boot', 'Python', '.Net Core', 'C#', 'Kotlin', 'SQL Server', 'PostgreSQL', 'Angular 10', 'Machine Learning'],
  },
];

export const contactInfo: ContactInfo = {
  email: 'tomasninan2@email.com',
  phone: '',
  location: 'Lima, Perú',
  social: {
    github: 'https://github.com/TomasNM43',
    linkedin: 'https://www.linkedin.com/in/tomás-ninán-melo-872a2a244',
    twitter: '',
  },
};

export const personalInfo = {
  name: 'Tomás Edgar Ninán Melo',
  title: 'Ciencias de la Computación | Analista Programador Full Stack',
  bio: 'Analista de Software y Programador Full Stack con sólida trayectoria en el desarrollo de aplicaciones escalables. Especialista en backend con Java (Spring Boot), Python y .Net, y arquitecturas de Microservicios. En el desarrollo moderno, cuento con dominio avanzado de React, Next.js, Angular y Docker, integrando bases de datos como PostgreSQL y Oracle. Experiencia liderando proyectos de Ecommerce (CasaLinda, Topsell) y optimización de plataformas, logrando mejoras significativas en rendimiento y entrega de productos.',
  shortBio: 'Desarrollador Full Stack especializado en Java, Python y React. Creando soluciones escalables con arquitecturas modernas.',
};

export const education = [
  {
    id: '1',
    institution: 'Universidad Peruana de Ciencias Aplicadas (UPC)',
    degree: 'Ciencias de la Computación',
    period: 'Mayo 2018',
    location: 'Lima, Perú',
  },
];

export const certifications = [
  'Desarrollo Web Online (Platzi)',
  'Curso Práctico FrontEnd Developer (Platzi)',
  'Javascript Práctico (Platzi)',
  'Intro to Cybersecurity Tools (Coursera)',
  'Penetration Testing & Forensics',
  'Network Security & DB Vulnerabilities',
  'Cybersecurity Roles & Processes',
  'Cybersecurity Compliance Framework',
  'IBM Cybersecurity Analyst Assessment',
  'Principles of UX/UI Design (Coursera)',
  'UX Design Fundamentals',
  'WebDesign: Wireframes to Prototypes',
  'Google IT Support Professional Cert.',
  'Sistemas Operativos (Power User)',
];

export const languages = [
  { language: 'Español', level: 'Nativo' },
  { language: 'Inglés', level: 'Fluido (Británico)' },
];
