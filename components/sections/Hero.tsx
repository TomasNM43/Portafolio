'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { contactInfo, personalInfo } from '@/data/portfolio';

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Overlay oscuro para mejorar legibilidad */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 via-indigo-900/30 to-purple-900/40 dark:from-gray-900/50 dark:via-blue-900/40 dark:to-indigo-900/50 z-0" />
      
      {/* Contenido */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.h1 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-5xl md:text-7xl font-bold text-white mb-6"
        >
          Hola, soy{' '}
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-300"
          >
            {personalInfo.name}
          </motion.span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="text-xl md:text-2xl text-gray-100 mb-6"
        >
          {personalInfo.title}
        </motion.p>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-base text-gray-300 mb-8"
        >
          📍 {contactInfo.location}
        </motion.p>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-lg text-gray-200 mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          {personalInfo.shortBio}
        </motion.p>
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
          >
            Ver Proyectos
          </motion.a>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-white text-blue-600 border-2 border-white rounded-lg hover:bg-gray-100 transition-colors font-medium"
          >
            Contáctame
          </motion.a>
          <motion.a
            href="/cv.pdf"
            download="CV_Tomas_Ninan_Melo.pdf"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors font-medium flex items-center gap-2 justify-center"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Descargar CV
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
