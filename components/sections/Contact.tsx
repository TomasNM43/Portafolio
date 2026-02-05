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
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-4"
        >
          Contáctame
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          className="text-center text-gray-600 dark:text-gray-400 mb-12"
        >
          ¿Tienes un proyecto en mente? ¡Hablemos!
        </motion.p>
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
              Información de Contacto
            </h3>
            <div className="space-y-4">
              <motion.div 
                className="flex items-center gap-3"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <span className="text-2xl">📧</span>
                <a href={`mailto:${contactInfo.email}`} className="text-blue-600 hover:underline">
                  {contactInfo.email}
                </a>
              </motion.div>
              {contactInfo.phone && (
                <motion.div 
                  className="flex items-center gap-3"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <span className="text-2xl">📱</span>
                  <span className="text-gray-700 dark:text-gray-300">{contactInfo.phone}</span>
                </motion.div>
              )}
              {contactInfo.location && (
                <motion.div 
                  className="flex items-center gap-3"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <span className="text-2xl">📍</span>
                  <span className="text-gray-700 dark:text-gray-300">{contactInfo.location}</span>
                </motion.div>
              )}
            </div>
            <div className="mt-8">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Redes Sociales
              </h4>
              <div className="flex gap-4">
                {contactInfo.social.github && (
                  <motion.a
                    href={contactInfo.social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 font-medium"
                  >
                    GitHub
                  </motion.a>
                )}
                {contactInfo.social.linkedin && (
                  <motion.a
                    href={contactInfo.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 font-medium"
                  >
                    LinkedIn
                  </motion.a>
                )}
                {contactInfo.social.twitter && (
                  <motion.a
                    href={contactInfo.social.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 font-medium"
                  >
                    Twitter
                  </motion.a>
                )}
              </div>
            </div>
          </motion.div>
          <motion.form 
            onSubmit={handleSubmit} 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="space-y-4"
          >
            <div>
              <label htmlFor="name" className="block text-gray-700 dark:text-gray-300 mb-2 font-medium">
                Nombre
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent dark:bg-gray-700 dark:text-white transition-all hover:border-blue-400 dark:hover:border-blue-500"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 mb-2 font-medium">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent dark:bg-gray-700 dark:text-white transition-all hover:border-blue-400 dark:hover:border-blue-500"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-700 dark:text-gray-300 mb-2 font-medium">
                Mensaje
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent dark:bg-gray-700 dark:text-white transition-all hover:border-blue-400 dark:hover:border-blue-500 resize-none"
              />
            </div>
            <motion.button
              type="submit"
              whileHover={{ scale: 1.03, boxShadow: "0 10px 30px rgba(37, 99, 235, 0.3)" }}
              whileTap={{ scale: 0.98 }}
              className="w-full px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all font-medium shadow-md"
            >
              Enviar Mensaje
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
