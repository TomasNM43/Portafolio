export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  images?: string[]; // Galería de imágenes del proyecto
  detailedDescription?: string; // Descripción detallada para el modal
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
}

export interface Skill {
  name: string;
  category: 'frontend' | 'backend' | 'database' | 'tools' | 'other';
  level?: number;
  icon?: string; // URL del logo de la tecnología
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  period: string;
  description: string;
  technologies?: string[];
}

export interface ContactInfo {
  email: string;
  phone?: string;
  location?: string;
  social: {
    github?: string;
    linkedin?: string;
    twitter?: string;
  };
}
