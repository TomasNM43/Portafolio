'use client';

import { motion } from 'framer-motion';

const brands = [
  { name: 'Vangerista', logo: '/marcas/vangerista.png' },
  { name: 'Topsell', logo: '/marcas/topsell.png' },
  { name: 'Grupo Olivares', logo: '/marcas/grupo-olivares.png' },
  { name: 'Ginnet', logo: '/marcas/ginnet.png' },
  { name: 'Yobel', logo: '/marcas/yobel.png' },
];

// Duplicamos 4 veces para garantizar cobertura visual completa sin cortes
const loopedBrands = [...brands, ...brands, ...brands, ...brands];

export default function Brands() {
  return (
    <section className="py-20 overflow-hidden">
      <style>{`
        @keyframes brands-marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .brands-track {
          animation: brands-marquee 22s linear infinite;
          will-change: transform;
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-14">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center text-white mb-3"
        >
          Marcas que confiaron
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center text-white/50 text-base max-w-xl mx-auto"
        >
          Empresas y clientes con quienes he tenido el placer de colaborar
        </motion.p>
      </div>

      {/* Contenedor con fondo negro como las cards */}
      <div className="mx-4 sm:mx-6 lg:mx-8 rounded-xl bg-black/50 backdrop-blur-md border border-white/20 py-10 relative overflow-hidden">
        {/* Máscaras de fade en los bordes */}
        <div
          className="pointer-events-none absolute left-0 top-0 bottom-0 w-32 z-10"
          style={{ background: 'linear-gradient(to right, rgba(0,0,0,0.6), transparent)' }}
        />
        <div
          className="pointer-events-none absolute right-0 top-0 bottom-0 w-32 z-10"
          style={{ background: 'linear-gradient(to left, rgba(0,0,0,0.6), transparent)' }}
        />

        {/* Track animado con CSS puro — infinito y sin cortes */}
        <div
          className="brands-track flex items-center gap-16"
          style={{ width: 'max-content' }}
        >
          {loopedBrands.map((brand, index) => (
            <div
              key={index}
              className="flex-shrink-0 flex items-center justify-center px-6"
            >
              <img
                src={brand.logo}
                alt={brand.name}
                className="h-20 w-auto max-w-[160px] object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
