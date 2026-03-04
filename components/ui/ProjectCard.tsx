'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Project } from '@/types';

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}

export default function ProjectCard({ project, onClick }: ProjectCardProps) {
  return (
    <motion.div 
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      className="rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow cursor-pointer h-full flex flex-col border border-white/20 bg-black/50 backdrop-blur-md"
      onClick={onClick}
    >
      <div className="h-48 bg-gradient-to-br from-blue-400 to-indigo-600 flex items-center justify-center text-white text-6xl relative overflow-hidden flex-shrink-0">
        {project.image ? (
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="w-full h-full"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </motion.div>
        ) : (
          <span>🚀</span>
        )}
        <motion.div 
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center"
        >
          <span className="text-white font-semibold text-lg">
            Ver detalles
          </span>
        </motion.div>
      </div>
      <div className="p-6 flex-1 flex flex-col">
        <h3 className="text-xl font-bold text-white mb-2">
          {project.title}
        </h3>
        <p className="text-gray-200 mb-4 line-clamp-3 flex-1">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-blue-500/30 text-blue-200 rounded-full text-sm border border-blue-400/30"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="px-3 py-1 bg-white/20 text-gray-200 rounded-full text-sm border border-white/30">
              +{project.technologies.length - 3}
            </span>
          )}
        </div>
        <motion.button
          whileHover={{ x: 5 }}
          className="text-blue-400 hover:text-blue-300 font-medium flex items-center gap-2 group"
        >
          <span>Ver más detalles</span>
          <motion.svg 
            animate={{ x: [0, 3, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-4 h-4" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </motion.svg>
        </motion.button>
      </div>
    </motion.div>
  );
}
