'use client';
import { useState } from 'react';
import Link from 'next/link';


export default function GymHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuItems = [
    { href: '/layout', label: 'Inicio' },
    { href: '/layout/#quienes-somos', label: 'Quiénes Somos'},
    { href: '/pages/tienda-gym', label: 'Tienda' },
    { href: '/pages/fotos', label: 'Galeria' },
    { href: '/pages/Blog', label: 'Blog' },
    { href: '/pages/horarios', label: 'Contacto' }
  ];

  return (
    <>
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/70 shadow-2xl border-b border-red-500/20">
        {/* Patrón geométrico de fondo */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ff4444' fill-opacity='0.3'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px'
          }}></div>
        </div>

        <div className="relative z-10">
          {/* Layout principal */}
          <div className="flex items-center justify-between px-4 sm:px-6 lg:px-8 xl:px-12 py-3 lg:py-5">
        {/* Logo y marca */}
        <Link href="/" className="flex items-center group flex-shrink-0">
          <div className="relative">
            {/* Logo placeholder - reemplaza con tu logo */}
            <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-red-500 to-red-700 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-red-500/25 transition-all duration-300">
              <span className="text-white font-black text-lg sm:text-xl lg:text-2xl">R</span>
            </div>

            {/* Efecto de brillo al hover */}
            <div className="absolute -inset-1 bg-gradient-to-r from-red-500 via-red-600 to-red-700 rounded-xl opacity-0 group-hover:opacity-20 blur transition-opacity duration-300"></div>
          </div>

          <div className="ml-3">
            <h1 className="text-white font-black text-xl sm:text-2xl lg:text-3xl xl:text-4xl tracking-tight drop-shadow-lg cursor-pointer hover:text-red-400 transition-colors duration-300">
              ealLeader
              <span className="block text-xs sm:text-sm lg:text-base font-medium text-gray-400 tracking-wider">FITNESS CLUB</span>
            </h1>
          </div>
        </Link>

            {/* Navegación central - solo desktop */}
            <nav className="hidden lg:flex flex-1 justify-center">
              <div className="bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 shadow-2xl 
              inline-flex items-center px-2 xl:px-8 py-2 mx-auto">
                {menuItems.map((item, index) => (
                  <div key={item.href} className="flex items-center">
                    <a 
                      href={item.href} 
                      className="flex items-center gap-2 xl:gap-3 text-gray-300 hover:text-white transition-all duration-300 font-semibold text-sm xl:text-base group px-3 xl:px-4 py-2 hover:bg-white/5 rounded-xl"
                    >
                      <span className="text-lg xl:text-xl group-hover:scale-110 transition-transform duration-300">{item.icon}</span>
                      <span className="group-hover:tracking-wide transition-all duration-300 whitespace-nowrap hidden xl:inline">{item.label}</span>
                      <span className="group-hover:tracking-wide transition-all duration-300 whitespace-nowrap xl:hidden">
                        {item.label}
                      </span>
                    </a>
                    {index < menuItems.length - 1 && (
                      <div className="w-px h-4 xl:h-5 bg-white/20 mx-1 xl:mx-2"></div>
                    )}
                  </div>
                ))}
              </div>
            </nav>


            {/* Controles de la derecha */}
            <div className="flex items-center gap-3 flex-shrink-0">


              {/* Botón hamburguesa - Solo móvil */}
              <button 
                className="lg:hidden flex flex-col items-center justify-center w-11 h-11 space-y-1 group"
                onClick={toggleMenu}
                aria-label="Toggle menu"
              >
                <div className="w-11 h-11 bg-white/10 backdrop-blur-sm rounded-xl flex flex-col items-center justify-center space-y-1 group-hover:bg-white/20 transition-all duration-300 border border-white/10">
                  <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1' : ''}`}></span>
                  <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                  <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1' : ''}`}></span>
                </div>
              </button>
            </div>
          </div>

          {/* Menú móvil */}
          <nav
            className={`lg:hidden transition-all duration-500 ease-in-out ${
              isMenuOpen ? 'max-h-[80vh] opacity-100' : 'max-h-0 opacity-0'
            } overflow-hidden`}
          >
            <div className="mx-4 sm:mx-6 pb-4 max-h-[70vh] overflow-y-auto">
              <div className="bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 shadow-2xl">
                {menuItems.map((item, index) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className={`flex items-center justify-center text-gray-300 hover:text-white hover:bg-white/5 transition-all duration-300 py-4 px-6 font-semibold text-base uppercase tracking-wide ${
                      index < menuItems.length - 1 ? 'border-b border-white/10' : ''
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}

                {/* Botón CTA en móvil */}
                <div className="p-4 border-t border-white/10">
                  <button className="w-full bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white py-3 rounded-lg font-bold text-base shadow-lg transition-all duration-300 uppercase tracking-wide">
                    ÚNETE AHORA
                  </button>
                </div>
              </div>
            </div>
          </nav>

        </div>

        {/* Barra de progreso sutil */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-500/50 to-transparent"></div>
      </header>

      {/* Spacer para el contenido */}
      <div className="h-20 lg:h-24"></div>
    </>
  );
}