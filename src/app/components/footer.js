'use client';
import React from 'react';
import Link from "next/link";

export default function Footer() {
  return (
    <>
      {/* CDN de Font Awesome y Tailwind */}
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      
      <footer className="text-white relative overflow-hidden" style={{
        background: 'linear-gradient(135deg, #000000 0%, #1a1a1a 50%, #2a2a2a 100%)'
      }}>
        
        <div className="max-w-6xl mx-auto px-6 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* Logo y nombre - SECCIÓN CORREGIDA */}
            <div className="flex items-center gap-3">
                 <img
                    src="/images/LogoRealleader2026PaginaWebwhite.png" // Asegúrate de tener una versión del logo que se vea bien en fondo blanco
                    alt="RealLeader Fitness Club"
                    className="w-32 sm:w-40 lg:w-48 xl:w-56 object-contain cursor-pointer hover:opacity-80 transition-opacity duration-300"
                  />           
            </div>

            {/* Sección MENÚ */}
            <div className="text-center md:text-left">
              <h3 className="text-xl font-bold mb-4 text-white">MENÚ</h3>
              <div className="space-y-2 text-sm">
                <div>
                  <Link  href="/" className="hover:text-red-500 transition-colors">
                    Inicio
                  </Link >
                </div>
                <div>
                  <Link  href="/clases" className="hover:text-red-500 transition-colors">
                    Quiénes Somos
                  </Link >
                </div>
                <div>
                  <Link  href="/pages/tienda-gym" className="hover:text-red-500 transition-colors">
                    Tienda
                  </Link >
                </div>
                <div>
                  <Link  href="/pages/fotos" className="hover:text-red-500 transition-colors">
                    Galeria
                  </Link >
                </div>
                <div>
                  <Link  href="/pages/mapa" className="hover:text-red-500 transition-colors">
                    Red Global
                  </Link >
                </div>

                <div>
                  <Link  href="/pages/horarios" className="hover:text-red-500 transition-colors">
                    Contacto
                  </Link >
                </div>
              </div>
            </div>

            {/* Sección SERVICIOS */}
            <div className="text-center md:text-left">
              <h3 className="text-xl font-bold mb-4 text-white">SERVICIOS</h3>
              <div className="space-y-2 text-sm">
                <div>
                  <a href="/pages/horarios" className="hover:text-red-500 transition-colors">
                    Solicitud de Cotización Personalizada
                  </a>
                </div>
                <div>
                  <a href="/pages/tienda-gym" className="hover:text-red-500 transition-colors">
                    Nuestras máquinas
                  </a>
                </div>
                <div>
                  <a href="/pages/stock" className="hover:text-red-500 transition-colors">
                    Nuestro Stock
                  </a>
                </div>
              </div>
            </div>

            {/* Información de contacto */}
            <div className="text-center md:text-left">
              <h3 className="text-xl font-bold mb-4">Contáctanos</h3>
              <div className="space-y-3">

                <div className="flex items-center justify-center md:justify-start gap-2">
                  <i className="fas fa-map-marker-alt"></i>
                  <span>Puebla, Mexico</span>
                </div>
              </div>
              
              {/* Redes sociales */}
            <div className="flex justify-center md:justify-start gap-4 mt-6">
              <button
                onClick={() => window.open("https://www.facebook.com/Realleadermx", "_blank")}
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
                title="Síguenos en Facebook"
              >
                <i className="fab fa-facebook-f text-white"></i>
              </button>

              <button
                onClick={() => window.open("https://www.instagram.com/realleader_mexico/", "_blank")}
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-pink-500 transition-colors"
                title="Síguenos en Instagram"
              >
                <i className="fab fa-instagram text-white"></i>
              </button>

              <button
                onClick={() => window.open("https://www.tiktok.com/@realleader.mexico?_t=ZS-8zprbDCSPi4&_r=1", "_blank")}
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