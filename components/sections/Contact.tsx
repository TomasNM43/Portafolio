'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { contactInfo } from '@/data/portfolio';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí puedes implementar el envío del formulario
    console.log('Form submitted:', formData);
    alert('¡Gracias por tu mensaje! Te responderé pronto.');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center text-white mb-4"
        >
          Contáctame
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center text-white mb-12"
        >
          ¿Tienes un proyecto en mente? ¡Hablemos!
        </motion.p>
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-black/40 backdrop-blur-md p-6 rounded-lg border border-white/20"
          >
            <h3 className="text-2xl font-semibold text-white mb-6">
              Información de Contacto
            </h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-2xl">📧</span>
                <a href={`mailto:${contactInfo.email}`} className="text-blue-400 hover:text-blue-300 hover:underline">
                  {contactInfo.email}
                </a>
              </div>
              {contactInfo.phone && (
                <div className="flex items-center gap-3">
                  <span className="text-2xl">📱</span>
                  <span className="text-white">{contactInfo.phone}</span>
                </div>
              )}
              {contactInfo.location && (
                <div className="flex items-center gap-3">
                  <span className="text-2xl">📍</span>
                  <span className="text-white">{contactInfo.location}</span>
                </div>
              )}
            </div>
            <div className="mt-8">
              <h4 className="text-lg font-semibold text-white mb-4">
                Redes Sociales
              </h4>
              <div className="flex gap-4">
                {contactInfo.social.github && (
                  <a
                    href={contactInfo.social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-blue-400"
                  >
                    GitHub
                  </a>
                )}
                {contactInfo.social.linkedin && (
                  <a
                    href={contactInfo.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-blue-400"
                  >
                    LinkedIn
                  </a>
                )}
                {contactInfo.social.twitter && (
                  <a
                    href={contactInfo.social.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-blue-400"
                  >
                    Twitter
                  </a>
                )}
              </div>
            </div>
          </motion.div>
          <motion.form 
            onSubmit={handleSubmit} 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-4"
          >
            <div>
              <label htmlFor="name" className="block text-white mb-2">
                Nombre
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-white/30 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent bg-black/40 backdrop-blur-sm text-white placeholder-white/50"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-white mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-white/30 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent bg-black/40 backdrop-blur-sm text-white placeholder-white/50"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-white mb-2">
                Mensaje
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-2 border border-white/30 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent bg-black/40 backdrop-blur-sm text-white placeholder-white/50"
              />
            </div>
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              Enviar Mensaje
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
