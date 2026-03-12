import React from 'react';

export default function Footer() {
  return (
    <footer className="py-8 text-white border-t border-white/20 bg-black/30 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Tomás Stack. Todos los derechos reservados.
          </p>
          <p className="text-gray-500 mt-2 text-sm">
            Hecho con ❤️ usando Next.js y Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
