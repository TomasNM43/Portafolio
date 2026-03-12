'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { skills } from '@/data/portfolio';

const categories = {
  frontend: 'Frontend',
  backend: 'Backend',
  database: 'Bases de Datos',
  tools: 'Herramientas & DevOps',
  other: 'Otros',
};

export default function Skills() {
  const groupedSkills = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) acc[skill.category] = [];
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, typeof skills>);

  const categoryKeys = Object.keys(groupedSkills);
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const [paused, setPaused] = useState(false);

  const goTo = useCallback((index: number, dir: number) => {
    setDirection(dir);
    setCurrent(index);
  }, []);

  const prev = () => {
    const index = (current - 1 + categoryKeys.length) % categoryKeys.length;
    goTo(index, -1);
  };

  const next = useCallback(() => {
    const index = (current + 1) % categoryKeys.length;
    goTo(index, 1);
  }, [current, categoryKeys.length, goTo]);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(next, 3500);
    return () => clearInterval(timer);
  }, [paused, next]);

  const variants = {
    enter: (dir: number) => ({ opacity: 0, x: dir > 0 ? 60 : -60 }),
    center: { opacity: 1, x: 0, transition: { duration: 0.35, ease: 'easeOut' as const } },
    exit: (dir: number) => ({ opacity: 0, x: dir > 0 ? -60 : 60, transition: { duration: 0.25 } }),
  };

  const activeKey = categoryKeys[current];
  const activeSkills = groupedSkills[activeKey];

  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center text-white mb-4"
        >
          Habilidades
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center text-white mb-10 max-w-2xl mx-auto"
        >
          Tecnologías y herramientas con las que trabajo
        </motion.p>

        {/* Tabs de categoría */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categoryKeys.map((key, i) => (
            <button
              key={key}
              onClick={() => goTo(i, i > current ? 1 : -1)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 border ${
                i === current
                  ? 'bg-blue-600 border-blue-500 text-white'
                  : 'bg-black/30 border-white/20 text-gray-400 hover:border-white/40 hover:text-white'
              }`}
            >
              {categories[key as keyof typeof categories]}
            </button>
          ))}
        </div>

        {/* Carrusel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          className="relative"
        >
          <div className="rounded-lg border border-white/20 bg-black/40 backdrop-blur-md overflow-hidden">

            {/* Flechas */}
            <button
              onClick={prev}
              className="absolute left-3 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-black/50 border border-white/20 text-white hover:bg-blue-600/60 transition-colors"
              aria-label="Anterior"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={next}
              className="absolute right-3 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-black/50 border border-white/20 text-white hover:bg-blue-600/60 transition-colors"
              aria-label="Siguiente"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Panel animado */}
            <div className="px-14 py-8 min-h-[200px]">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={activeKey}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                >
                  <h3 className="text-xl font-semibold text-white mb-6">
                    {categories[activeKey as keyof typeof categories]}
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {activeSkills.map((skill) => (
                      <motion.div
                        key={skill.name}
                        whileHover={{ scale: 1.05 }}
                        className="flex items-center gap-2 px-4 py-2 border border-white/30 rounded-lg hover:border-white/50 transition-all cursor-default bg-black/30 backdrop-blur-sm"
                      >
                        {skill.icon && (
                          // eslint-disable-next-line @next/next/no-img-element
                          <img src={skill.icon} alt={skill.name} className="w-6 h-6 object-contain" />
                        )}
                        <span className="text-white font-medium text-sm">{skill.name}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Indicadores de punto */}
          <div className="flex justify-center gap-2 mt-5">
            {categoryKeys.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i, i > current ? 1 : -1)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === current ? 'w-6 bg-blue-500' : 'w-1.5 bg-white/30'
                }`}
                aria-label={`Ir a categoría ${i + 1}`}
              />
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
