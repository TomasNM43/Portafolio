'use client';

import { motion } from 'framer-motion';

const services = [
  {
    image: '/servicios/web-corporativo.png',
    title: 'Desarrollo Web Corporativo',
    description: 'Desde landing pages hasta portales autogestionables con panel CMS. Diseño responsive, SEO optimizado y alta velocidad de carga.',
    features: ['Hasta 8 secciones + animaciones', 'Core Web Vitals optimizado', 'Integraciones CRM', 'Panel de administración'],
    priceRange: 'Desde S/ 2,000',
    badge: 'Web',
  },
  {
    image: '/servicios/E-Learning.png',
    title: 'E-Learning & E-Commerce',
    description: 'Plataformas para venta de cursos y educación online. Pasarelas de pago (Niubiz, Yape) y facturación SUNAT integradas.',
    features: ['Aula virtual con certificados', 'Carrito de compras', 'Gestión de alumnos', 'Facturación SUNAT'],
    priceRange: 'Desde S/ 6,800',
    badge: 'E-Commerce',
  },
  {
    image: '/servicios/sector-inmobiliario.png',
    title: 'Sector Inmobiliario',
    description: 'Plataformas para captación de leads y exhibición de propiedades con mapas interactivos, filtros avanzados y panel a medida.',
    features: ['Mapas interactivos', 'Filtros avanzados', 'Panel 100% a medida', 'Carga < 1 seg'],
    priceRange: 'Desde S/ 3,800',
    badge: 'Inmobiliario',
  },
  {
    image: '/servicios/gestion-pos.png',
    title: 'Sistemas de Gestión POS',
    description: 'Control total de operaciones para restaurantes, tiendas y retail. Inventario en tiempo real, caja diaria y facturación SUNAT.',
    features: ['Inventario en tiempo real', 'Facturación SUNAT', 'Gestión de mesas', 'Reportes de ganancias'],
    priceRange: 'Desde S/ 3,500',
    badge: 'Gestión',
  },
  {
    image: '/servicios/SaaS.png',
    title: 'Software a Medida (SaaS)',
    description: 'Sistemas complejos con lógica única: ERPs, citas clínicas, inventarios. Backend Spring Boot + Frontend React/Next.js.',
    features: ['Backend seguro Spring Boot', 'Frontend React / Next.js', 'Integraciones API', 'Consultoría freelance senior'],
    priceRange: 'Desde $15 USD/hora',
    badge: 'SaaS',
  },
  {
    image: '/servicios/chatbot.png',
    title: 'Automatización & Chatbots IA',
    description: 'Asistentes virtuales para WhatsApp, web y redes sociales. Atención 24/7, calificación de leads y ventas automatizadas.',
    features: ['IA conversacional (tipo ChatGPT)', 'WhatsApp / Web / RRSS', 'Entrenado con tus datos', 'Chatbot estructurado o con IA'],
    priceRange: 'Desde S/ 900',
    badge: 'IA',
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function Services() {
  return (
    <section id="services" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center text-white mb-4"
        >
          Servicios
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center text-white mb-12 max-w-2xl mx-auto"
        >
          Soluciones digitales a medida para impulsar tu negocio. Calidad de código, SEO y seguridad como estándar — no como extra.
        </motion.p>

        {/* Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={item}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow h-full flex flex-col border border-white/20 bg-black/50 backdrop-blur-md"
            >
              {/* Header con imagen — igual que ProjectCard */}
              <div className="h-48 bg-gradient-to-br from-blue-400 to-indigo-600 flex items-center justify-center relative overflow-hidden flex-shrink-0">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  className="w-full h-full"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                <span className="absolute top-3 right-3 text-xs font-medium text-white/90 bg-black/40 border border-white/20 rounded-full px-3 py-0.5 backdrop-blur-sm">
                  {service.badge}
                </span>
              </div>

              {/* Contenido */}
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-white mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-200 mb-4 text-lg leading-relaxed flex-1">
                  {service.description}
                </p>

                {/* Features como tags — igual que technologies en ProjectCard */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {service.features.map((feature) => (
                    <span
                      key={feature}
                      className="px-3 py-1 bg-blue-500/30 text-blue-200 rounded-full text-xs border border-blue-400/30"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* Precio */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <span className="text-blue-400 font-bold text-base">
                    {service.priceRange}
                  </span>
                  <span className="text-gray-400 text-xs">Precio referencial</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Botón catálogo PDF */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex justify-center mt-10"
        >
          <motion.a
            href="/Catálogo de Servicios.pdf"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
            Ver Catálogo Completo de Servicios
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
