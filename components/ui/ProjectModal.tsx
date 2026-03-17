'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Project } from '@/types';
import { cn } from '@/lib/utils';

interface ProjectModalProps {
  project: Project;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);
  const images = project?.images || [project?.image];
  const thumbnailsRef = useRef<HTMLDivElement>(null);

  // Manejar scroll del body y resetear índice al abrir
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('modal-open');
      if (currentImageIndex !== 0) {
        setCurrentImageIndex(0);
      }
    } else {
      document.body.classList.remove('modal-open');
    }

    return () => {
      document.body.classList.remove('modal-open');
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen, project?.id]);

  // Navegación por teclado
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') {
        goToImage((currentImageIndex + 1) % images.length, 1);
      } else if (e.key === 'ArrowLeft') {
        goToImage((currentImageIndex - 1 + images.length) % images.length, -1);
      } else if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, currentImageIndex, images.length, onClose]);

  // Scroll la miniatura activa al centro del strip
  useEffect(() => {
    if (!thumbnailsRef.current) return;
    const container = thumbnailsRef.current;
    const activeThumbnail = container.children[currentImageIndex] as HTMLElement;
    if (activeThumbnail) {
      activeThumbnail.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'nearest' });
    }
  }, [currentImageIndex]);

  if (!isOpen || !project) return null;

  const goToImage = (index: number, dir: 1 | -1) => {
    setDirection(dir);
    setCurrentImageIndex(index);
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const imageVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 40 : -40,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -40 : 40,
      opacity: 0,
    }),
  };

  return (
    <AnimatePresence>
      {isOpen && project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 p-4 overflow-y-auto"
          onClick={handleBackdropClick}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="relative rounded-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-white/30 bg-black/70 backdrop-blur-xl"
          >
            {/* Botón Cerrar */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 rounded-full p-2 hover:bg-white/20 transition-colors border border-white/30"
              aria-label="Cerrar"
            >
              <svg
                className="w-6 h-6 text-gray-700 dark:text-gray-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* ─── Galería de Imágenes ─── */}

            {/* DESKTOP: layout 2 columnas — filmstrip lateral */}
            <div className="hidden lg:flex h-[420px] border-b border-white/10">
              {/* Columna izquierda: thumbnails verticales */}
              {images.length > 1 && (
                <div
                  ref={thumbnailsRef}
                  className="w-[20%] flex-shrink-0 flex flex-col gap-2 overflow-y-auto p-2 bg-black/40 border-r border-white/10"
                  style={{ scrollbarWidth: 'thin', scrollbarColor: 'rgba(255,255,255,0.15) transparent' }}
                >
                  {images.map((img, index) => (
                    <button
                      key={index}
                      onClick={() => goToImage(index, index > currentImageIndex ? 1 : -1)}
                      className={cn(
                        'flex-shrink-0 w-full aspect-video rounded-md overflow-hidden border-2 transition-all duration-200',
                        index === currentImageIndex
                          ? 'border-blue-500 opacity-100 ring-1 ring-blue-400/50'
                          : 'border-white/10 opacity-50 hover:opacity-80 hover:border-white/30'
                      )}
                      aria-label={`Ver imagen ${index + 1}`}
                    >
                      {img ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                          src={img}
                          alt={`Miniatura ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-blue-500/20 to-indigo-600/20" />
                      )}
                    </button>
                  ))}
                </div>
              )}

              {/* Columna derecha: imagen principal */}
              <div className="relative flex-1 bg-black flex items-center justify-center overflow-hidden">
                <AnimatePresence mode="wait" custom={direction}>
                  <motion.div
                    key={currentImageIndex}
                    custom={direction}
                    variants={imageVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.25, ease: 'easeInOut' }}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    {images[currentImageIndex] ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={images[currentImageIndex]}
                        alt={`${project.title} - Imagen ${currentImageIndex + 1}`}
                        className="w-full h-full object-contain"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-blue-500/10 to-indigo-600/10 flex items-center justify-center">
                        <span className="text-white/20 text-6xl font-nohemi">{project.title[0]}</span>
                      </div>
                    )}
                  </motion.div>
                </AnimatePresence>

                {/* Indicador de posición */}
                {images.length > 1 && (
                  <span className="absolute bottom-3 right-4 text-white/60 text-sm font-satoshi select-none pointer-events-none z-10">
                    {currentImageIndex + 1} / {images.length}
                  </span>
                )}
              </div>
            </div>

            {/* MOBILE: layout vertical — imagen arriba, thumbnails horizontales abajo */}
            <div className="flex lg:hidden flex-col border-b border-white/10">
              {/* Imagen principal */}
              <div className="relative bg-black flex items-center justify-center overflow-hidden" style={{ height: '220px' }}>
                <AnimatePresence mode="wait" custom={direction}>
                  <motion.div
                    key={currentImageIndex}
                    custom={direction}
                    variants={imageVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.25, ease: 'easeInOut' }}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    {images[currentImageIndex] ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={images[currentImageIndex]}
                        alt={`${project.title} - Imagen ${currentImageIndex + 1}`}
                        className="w-full h-full object-contain"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-blue-500/10 to-indigo-600/10 flex items-center justify-center">
                        <span className="text-white/20 text-4xl font-nohemi">{project.title[0]}</span>
                      </div>
                    )}
                  </motion.div>
                </AnimatePresence>

                {/* Indicador de posición */}
                {images.length > 1 && (
                  <span className="absolute bottom-2 right-3 text-white/60 text-xs font-satoshi select-none pointer-events-none z-10">
                    {currentImageIndex + 1} / {images.length}
                  </span>
                )}
              </div>

              {/* Thumbnails horizontales */}
              {images.length > 1 && (
                <div className="flex gap-2 overflow-x-auto p-2 bg-black/40 border-t border-white/10"
                  style={{ scrollbarWidth: 'thin', scrollbarColor: 'rgba(255,255,255,0.15) transparent' }}
                >
                  {images.map((img, index) => (
                    <button
                      key={index}
                      onClick={() => goToImage(index, index > currentImageIndex ? 1 : -1)}
                      className={cn(
                        'flex-shrink-0 w-20 h-14 rounded-md overflow-hidden border-2 transition-all duration-200',
                        index === currentImageIndex
                          ? 'border-blue-500 opacity-100 ring-1 ring-blue-400/50'
                          : 'border-white/10 opacity-50 hover:opacity-80 hover:border-white/30'
                      )}
                      aria-label={`Ver imagen ${index + 1}`}
                    >
                      {img ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                          src={img}
                          alt={`Miniatura ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-blue-500/20 to-indigo-600/20" />
                      )}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Contenido del proyecto */}
            <div className="p-8">
              <h2 className="text-3xl font-bold text-white mb-4">
                {project.title}
              </h2>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 bg-blue-500/30 text-blue-200 rounded-full text-sm font-medium border border-blue-400/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="prose dark:prose-invert max-w-none mb-6">
                <p className="text-white text-lg leading-relaxed">
                  {project.detailedDescription || project.description}
                </p>
              </div>

              {/* Enlaces */}
              <div className="flex gap-4 pt-6 border-t border-gray-200 dark:border-gray-700">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 bg-gray-900 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors font-medium"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    Ver en GitHub
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    Ver Demo en Vivo
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
