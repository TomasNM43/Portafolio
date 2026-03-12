'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { education, certifications, languages, personalInfo } from '@/data/portfolio';

export default function About() {
  return (
    <section id="about" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center text-white mb-12"
        >
          Sobre Mí
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Educación */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-2xl font-semibold mb-6 text-white">📚 Educación</h3>
            {education.map((edu) => (
              <div key={edu.id} className="mb-6 p-6 rounded-lg border border-white/20 bg-black/40 backdrop-blur-md">
                <h4 className="text-xl font-medium text-blue-400 mb-2">{edu.degree}</h4>
                <p className="text-lg text-white mb-1">{edu.institution}</p>
                <p className="text-gray-300">{edu.location}</p>
                <p className="text-gray-400 text-sm mt-1">{edu.period}</p>
              </div>
            ))}
            
            <h3 className="text-2xl font-semibold mb-4 mt-8 text-white">🌐 Idiomas</h3>
            <div className="space-y-3 p-6 rounded-lg border border-white/20 bg-black/40 backdrop-blur-md">
              {languages.map((lang, index) => (
                <div key={index} className="flex justify-between items-center">
                  <span className="text-lg text-white">{lang.language}</span>
                  <span className="text-blue-400 font-medium">{lang.level}</span>
                </div>
              ))}
            </div>
            
            {/* Botón Descargar CV */}
            <motion.a
              href="/cv.pdf"
              download="CV_Tomas_Ninan_Melo.pdf"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-8 flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Descargar CV Completo
            </motion.a>
          </motion.div>

          {/* Certificaciones */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-2xl font-semibold mb-6 text-white">🏆 Certificaciones</h3>
            <div className="p-6 rounded-lg border border-white/20 bg-black/40 backdrop-blur-md">
              <ul className="space-y-3">
                {certifications.map((cert, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-blue-400 mt-1">✓</span>
                    <span className="text-white">{cert}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
