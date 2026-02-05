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
    <section id="skills" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-4"
        >
          Habilidades
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto"
        >
          Tecnologías y herramientas con las que trabajo
        </motion.p>
        <div className="space-y-8">
          {Object.entries(groupedSkills).map(([category, categorySkills], categoryIndex) => (
            <motion.div 
              key={category} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.15, ease: "easeOut" }}
              className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
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
                    className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg hover:shadow-md transition-all cursor-default"
                  >
                    {skill.icon && (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img 
                        src={skill.icon} 
                        alt={skill.name}
                        className="w-6 h-6 object-contain"
                      />
                    )}
                    <span className="text-gray-800 dark:text-gray-200 font-medium text-sm">
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
