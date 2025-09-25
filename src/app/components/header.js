'use client';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

// --- Iconos para el nuevo menú (componentes SVG) ---
const IconGeneral = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path></svg>
);
const IconFuerza = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
);
const IconCardio = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
);

export default function GymHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isTiendaOpen, setIsTiendaOpen] = useState(false);
  const timerRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuItems = [
    { href: '/layout', label: 'Inicio' },
    { href: '/pages/nosotros', label: 'Quiénes Somos'},
    { 
      href: '/pages/tienda-gym', 
      label: 'Tienda',
      isDropdown: true
    },
    { href: '/pages/fotos', label: 'Galeria' },
    { href: '/pages/Blog', label: 'Blog' },
    { href: '/pages/horarios', label: 'Contacto' }
  ];

  const tiendaCategories = [
    { href: '/pages/tienda-gym', label: 'Todos', icon: <IconGeneral /> },
    { href: '/pages/tienda-gym?category=LD', label: 'LD', icon: <IconFuerza /> },
    { href: '/pages/tienda-gym?category=M2', label: 'M2', icon: <IconFuerza /> },
    { href: '/pages/tienda-gym?category=M3', label: 'M3', icon: <IconFuerza /> },
    { href: '/pages/tienda-gym?category=M7', label: 'M7', icon: <IconFuerza /> },
    { href: '/pages/tienda-gym?category=RS', label: 'RS', icon: <IconFuerza /> },
    { href: '/pages/tienda-gym?category=FM', label: 'FM', icon: <IconFuerza /> },
    { href: '/pages/tienda-gym?category=FW', label: 'FW', icon: <IconFuerza /> },
    { href: '/pages/tienda-gym?category=PF', label: 'PF', icon: <IconFuerza /> },
    { href: '/pages/tienda-gym?category=Cardio', label: 'Cardio', icon: <IconCardio /> },
  ];
  
  const handleMouseEnter = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    setIsTiendaOpen(true);
  };

  const handleMouseLeave = () => {
    timerRef.current = setTimeout(() => {
      setIsTiendaOpen(false);
    }, 300);
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/70 shadow-2xl border-b border-red-500/20">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ff4444' fill-opacity='0.3'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px'
          }}></div>
        </div>

        <div className="relative z-10">
          <div className="flex items-center justify-between px-4 sm:px-6 lg:px-8 xl:px-12 py-3 lg:py-5">
            <Link href="/" className="flex items-center group flex-shrink-0">
              <div className="relative">
                <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-red-500 to-red-700 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-red-500/25 transition-all duration-300">
                  <span className="text-white font-black text-lg sm:text-xl lg:text-2xl">R</span>
                </div>
                <div className="absolute -inset-1 bg-gradient-to-r from-red-500 via-red-600 to-red-700 rounded-xl opacity-0 group-hover:opacity-20 blur transition-opacity duration-300"></div>
              </div>
              <div className="ml-3">
                <h1 className="text-white font-black text-xl sm:text-2xl lg:text-3xl xl:text-4xl tracking-tight drop-shadow-lg cursor-pointer hover:text-red-400 transition-colors duration-300">
                  ealLeader
                  <span className="block text-xs sm:text-sm lg:text-base font-medium text-gray-400 tracking-wider">FITNESS CLUB</span>
                </h1>
              </div>
            </Link>

            <nav className="hidden lg:flex flex-1 justify-center">
                <div className="bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 shadow-2xl 
                inline-flex items-center px-2 xl:px-8 py-2">
                  {menuItems.map((item, index) => (
                    <div key={item.href} className="flex items-center">
                      {item.isDropdown ? (
                        <div 
                          className="relative"
                          onMouseEnter={handleMouseEnter}
                          onMouseLeave={handleMouseLeave}
                        >
                           <Link
                             href={item.href}
                             className="flex items-center gap-2 text-gray-300 hover:text-white transition-all duration-300 font-semibold text-sm xl:text-base group px-3 xl:px-4 py-2 hover:bg-white/5 rounded-xl"
                           >
                              <span className="group-hover:tracking-wide transition-all duration-300 whitespace-nowrap">{item.label}</span>
                              <svg className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${isTiendaOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                              </svg>
                           </Link>
                           {isTiendaOpen && (
                              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-56 bg-white/95 backdrop-blur-lg border border-gray-200/50 rounded-xl shadow-2xl p-2 z-20">
                                {tiendaCategories.map(subItem => (
                                  <div key={subItem.href}>
                                    {subItem.label === 'Todos' && (
                                      <Link
                                        href={subItem.href}
                                        onClick={() => setIsTiendaOpen(false)}
                                        className="flex items-center gap-3 text-left rounded-lg px-3 py-2 text-sm whitespace-nowrap transition-colors duration-200 font-semibold bg-gray-100 text-gray-800 hover:bg-red-500 hover:text-white"
                                      >
                                        {subItem.icon}
                                        <span>{subItem.label}</span>
                                      </Link>
                                    )}
                                    {subItem.label === 'Todos' && <div className="my-2 h-px bg-gray-200"></div>}
                                    {subItem.label !== 'Todos' && (
                                      <Link
                                        href={subItem.href}
                                        onClick={() => setIsTiendaOpen(false)}
                                        className="flex items-center gap-3 text-left rounded-lg px-3 py-2 text-sm whitespace-nowrap transition-colors duration-200 text-gray-600 hover:bg-red-500 hover:text-white"
                                      >
                                        {subItem.icon}
                                        <span>{subItem.label}</span>
                                      </Link>
                                    )}
                                  </div>
                                ))}
                              </div>
                           )}
                        </div>
                      ) : (
                        <a href={item.href} className="flex items-center gap-2 xl:gap-3 text-gray-300 hover:text-white transition-all duration-300 font-semibold text-sm xl:text-base group px-3 xl:px-4 py-2 hover:bg-white/5 rounded-xl">
                            <span className="text-lg xl:text-xl group-hover:scale-110 transition-transform duration-300">{item.icon}</span>
                            <span className="group-hover:tracking-wide transition-all duration-300 whitespace-nowrap hidden xl:inline">{item.label}</span>
                            <span className="group-hover:tracking-wide transition-all duration-300 whitespace-nowrap xl:hidden">{item.label}</span>
                        </a>
                      )}
                      {index < menuItems.length - 1 && (
                        <div className="w-px h-4 xl:h-5 bg-white/20 mx-1 xl:mx-2"></div>
                      )}
                    </div>
                  ))}
                </div>
            </nav>

            <div className="flex items-center gap-3 flex-shrink-0">
              <button 
                className="lg:hidden"
                onClick={toggleMenu}
                aria-label="Toggle menu"
              >
                <div className="w-11 h-11 bg-white/10 backdrop-blur-sm rounded-xl flex flex-col items-center justify-center space-y-1 group-hover:bg-white/20 transition-all duration-300 border border-white/10">
                  <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
                  <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                  <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
                </div>
              </button>
            </div>
          </div>
          
          <nav className={`lg:hidden transition-all duration-500 ease-in-out ${isMenuOpen ? 'max-h-[80vh] opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
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
                <div className="p-4 border-t border-white/10">
                  <button className="w-full bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white py-3 rounded-lg font-bold text-base shadow-lg transition-all duration-300 uppercase tracking-wide">
                    ÚNETE AHORA
                  </button>
                </div>
              </div>
            </div>
          </nav>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-500/50 to-transparent"></div>
      </header>
      <div className="h-20 lg:h-24"></div>
    </>
  );
}