'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { skills } from '@/data/portfolio';

export default function Skills() {
  const categories = {
    frontend: 'Frontend',
    backend: 'Backend',
    database: 'Bases de Datos',
    tools: 'Herramientas & DevOps',
    other: 'Otros',
  };

  const groupedSkills = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, typeof skills>);

  return (
    <section id="skills" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
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
          className="text-center text-white mb-12 max-w-2xl mx-auto"
        >
          Tecnologías y herramientas con las que trabajo
        </motion.p>
        <div className="space-y-8">
          {Object.entries(groupedSkills).map(([category, categorySkills], categoryIndex) => (
            <motion.div 
              key={category} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="rounded-lg p-6 border border-white/20 bg-black/40 backdrop-blur-md"
            >
              <h3 className="text-xl font-semibold text-white mb-4">
                {categories[category as keyof typeof categories]}
              </h3>
              <div className="flex flex-wrap gap-3">
                {categorySkills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center gap-2 px-4 py-2 border border-white/30 rounded-lg hover:shadow-md hover:border-white/50 transition-all cursor-default bg-black/30 backdrop-blur-sm"
                  >
                    {skill.icon && (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img 
                        src={skill.icon} 
                        alt={skill.name}
                        className="w-6 h-6 object-contain"
                      />
                    )}
                    <span className="text-white font-medium text-sm">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
