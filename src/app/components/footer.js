'use client';
import React from 'react';
export default function Footer() {
  return (
    <>
      {/* CDN de Font Awesome y Tailwind */}
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      <script src="https://cdn.tailwindcss.com"></script>
      
      <footer className="text-white relative overflow-hidden" style={{
        background: 'linear-gradient(135deg, #000000 0%, #1a1a1a 50%, #2a2a2a 100%)'
      }}>
        
        <div className="max-w-6xl mx-auto px-6 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Logo y nombre */}
            <div className="flex flex-col items-center md:items-start">
              <div className="w-14 h-14 bg-red-600 rounded-xl flex items-center justify-center shadow-none mb-2">
                <span className="text-white font-black text-xl">E</span>
              </div>
              <h2 className="text-2xl font-bold text-white mb-2">
                realLeader <span className="text-red-400">FITNESS CLUB</span>
              </h2>            
            </div>

            {/* Sección MENÚ */}
            <div className="text-center md:text-left">
              <h3 className="text-xl font-bold mb-4 text-white">MENÚ</h3>
              <div className="space-y-2 text-sm">
                <div>
                  <a href="/" className="hover:text-red-500 transition-colors">
                    Inicio
                  </a>
                </div>
                <div>
                  <a href="/clases" className="hover:text-red-500 transition-colors">
                    Quiénes Somos
                  </a>
                </div>
                <div>
                  <a href="/membresias" className="hover:text-red-500 transition-colors">
                    Membresías
                  </a>
                </div>
                <div>
                  <a href="/tienda" className="hover:text-red-500 transition-colors">
                    Tienda
                  </a>
                </div>
                <div>
                  <a href="/contacto" className="hover:text-red-500 transition-colors">
                    Contacto
                  </a>
                </div>
              </div>
            </div>

            {/* Sección SERVICIOS */}
            <div className="text-center md:text-left">
              <h3 className="text-xl font-bold mb-4 text-white">SERVICIOS</h3>
              <div className="space-y-2 text-sm">
                <div>
                  <a href="/membresias" className="hover:text-red-500 transition-colors">
                    Membresías
                  </a>
                </div>

                <div>
                  <a href="/tienda" className="hover:text-red-500 transition-colors">
                    Tienda de Equipamiento
                  </a>
                </div>
     
              </div>
            </div>

            {/* Información de contacto */}
            <div className="text-center md:text-left">
              <h3 className="text-xl font-bold mb-4">Contáctanos</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-center md:justify-start gap-2">
                  <i className="fas fa-phone"></i>
                  <span>+99 99 999 9999</span>
                </div>
                <div className="flex items-center justify-center md:justify-start gap-2">
                  <i className="fas fa-envelope"></i>
                  <span>contacto@aaaaaaaa.com</span>
                </div>
                <div className="flex items-center justify-center md:justify-start gap-2">
                  <i className="fas fa-map-marker-alt"></i>
                  <span>Guayaquil, Ecuador</span>
                </div>
              </div>
              
              {/* Redes sociales */}
            <div className="flex justify-center md:justify-start gap-4 mt-6">
              <button
                onClick={() => window.open("https://facebook.com/tu-pagina", "_blank")}
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
                title="Síguenos en Facebook"
              >
                <i className="fab fa-facebook-f text-white"></i>
              </button>

              <button
                onClick={() => window.open("https://instagram.com/tu-perfil", "_blank")}
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-pink-500 transition-colors"
                title="Síguenos en Instagram"
              >
                <i className="fab fa-instagram text-white"></i>
              </button>

              <button
                onClick={() => window.open("https://tiktok.com/@tu-perfil", "_blank")}
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-black transition-colors"
                title="Síguenos en TikTok"
              >
                <i className="fab fa-tiktok text-white"></i>
              </button>
            </div>
              

            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="bg-black text-white text-center py-6 border-t border-gray-800">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} <span className="text-red-500 font-semibold">realLeader FITNESS CLUB</span> | Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </>
  );
}