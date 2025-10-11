'use client';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

// --- Iconos para el nuevo menú (componentes SVG) ---
// No se necesitan cambios en los iconos SVG en sí
const IconGeneral = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path></svg>
);
const IconFuerza = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
);
const IconCardio = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
);

export default function GymHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isTiendaOpen, setIsTiendaOpen] = useState(false);
  const [isMobileTiendaOpen, setIsMobileTiendaOpen] = useState(false);
  const timerRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (isMenuOpen) {
      setIsMobileTiendaOpen(false);
    }
  };

  const menuItems = [
    { href: '/layout', label: 'Inicio' },
    { href: '/pages/nosotros', label: 'Quiénes Somos'},
    { 
      href: '/pages/tienda-gym', 
      label: 'Productos',
      isDropdown: true
    },
    { href: '/pages/fotos', label: 'Galeria' },
    { href: '/pages/mapa', label: 'Red Global' },
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
    { href: '/pages/tienda-gym?category=Cardio', label: 'Cardio', icon: <IconFuerza /> },
  ];
  
  const handleMouseEnter = () => {
    if (timerRef.current) clearTimeout(timerRef.current);
    setIsTiendaOpen(true);
  };

  const handleMouseLeave = () => {
    timerRef.current = setTimeout(() => {
      setIsTiendaOpen(false);
    }, 300);
  };

  return (
    <>
      {/* CAMBIO: Fondo principal a blanco con transparencia y borde inferior gris */}
      <header className="fixed top-0 left-0 right-0 z-[9999] bg-white backdrop-blur-md shadow-lg border-b border-gray-200">
        <div className="relative z-10">
          <div className="flex items-center justify-between px-4 sm:px-6 lg:px-8 xl:px-12 py-3 lg:py-5">
            <Link href="/" className="flex items-center group flex-shrink-0">
              <div className="relative">
                <div className="ml-3">
                  <img
                    src="/images/LogoRealleader2026PaginaWeb.png" // Asegúrate de tener una versión del logo que se vea bien en fondo blanco
                    alt="RealLeader Fitness Club"
                    className="w-32 sm:w-40 lg:w-48 xl:w-56 object-contain cursor-pointer hover:opacity-80 transition-opacity duration-300"
                  />
                </div>
              </div>
            </Link>

            <nav className="hidden lg:flex flex-1 justify-start pl-37">
              {/* CAMBIO: Contenedor de la barra de navegación con fondo y borde claros */}
              <div className="bg-gray-100/70 backdrop-blur-md rounded-2xl border border-gray-200/80 shadow-md inline-flex items-center px-2 xl:px-8 py-2">
                {menuItems.map((item, index) => (
                  <div key={item.href} className="flex items-center">
                    {item.isDropdown ? (
                      <div className="relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                        {/* CAMBIO: Colores de texto a oscuros, hover a rojo */}
                        <Link href={item.href} className="flex items-center gap-2 text-gray-700 hover:text-red-600 transition-all duration-300 font-semibold text-sm xl:text-base group px-3 xl:px-4 py-2 hover:bg-gray-200/60 rounded-xl">
                          <span>{item.label}</span>
                          {/* CAMBIO: Color del icono de flecha */}
                          <svg className={`w-4 h-4 text-gray-500 transition-transform duration-200 ${isTiendaOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                        </Link>
                        {isTiendaOpen && (
                          // Este menú desplegable ya tenía un fondo claro, por lo que los cambios son mínimos
                          <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-56 bg-white/95 backdrop-blur-lg border border-gray-200/50 rounded-xl shadow-2xl p-2 z-20">
                            {tiendaCategories.map(subItem => (
                              <div key={subItem.href}>
                                {subItem.label === 'Todos' && (<><Link href={subItem.href} onClick={() => setIsTiendaOpen(false)} className="flex items-center gap-3 text-left rounded-lg px-3 py-2 text-sm whitespace-nowrap transition-colors duration-200 font-semibold bg-gray-100 text-gray-800 hover:bg-red-500 hover:text-white">{subItem.icon}<span>{subItem.label}</span></Link><div className="my-2 h-px bg-gray-200"></div></>)}
                                {subItem.label !== 'Todos' && (<Link href={subItem.href} onClick={() => setIsTiendaOpen(false)} className="flex items-center gap-3 text-left rounded-lg px-3 py-2 text-sm whitespace-nowrap transition-colors duration-200 text-gray-600 hover:bg-red-500 hover:text-white">{subItem.icon}<span>{subItem.label}</span></Link>)}
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    ) : (
                      // CAMBIO: Colores de texto a oscuros, hover a rojo
                      <a href={item.href} className="flex items-center gap-2 xl:gap-3 text-gray-700 hover:text-red-600 transition-all duration-300 font-semibold text-sm xl:text-base group px-3 xl:px-4 py-2 hover:bg-gray-200/60 rounded-xl">
                        <span className="text-lg xl:text-xl group-hover:scale-110 transition-transform duration-300">{item.icon}</span>
                        <span className="group-hover:tracking-wide transition-all duration-300 whitespace-nowrap hidden xl:inline">{item.label}</span>
                        <span className="group-hover:tracking-wide transition-all duration-300 whitespace-nowrap xl:hidden">{item.label}</span>
                      </a>
                    )}
                    {/* CAMBIO: Color del divisor a gris */}
                    {index < menuItems.length - 1 && (<div className="w-px h-4 xl:h-5 bg-gray-300 mx-1 xl:mx-2"></div>)}
                  </div>
                ))}
              </div>
            </nav>

            <div className="flex items-center gap-3 flex-shrink-0">
              <button className="lg:hidden" onClick={toggleMenu} aria-label="Toggle menu">
                {/* CAMBIO: Icono de hamburguesa a colores oscuros */}
                <div className="w-11 h-11 bg-gray-100 backdrop-blur-sm rounded-xl flex flex-col items-center justify-center space-y-1 group-hover:bg-gray-200 transition-all duration-300 border border-gray-200">
                  <span className={`block w-6 h-0.5 bg-gray-800 transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
                  <span className={`block w-6 h-0.5 bg-gray-800 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                  <span className={`block w-6 h-0.5 bg-gray-800 transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
                </div>
              </button>
            </div>
          </div>
          
          <nav className={`lg:hidden transition-all duration-500 ease-in-out ${isMenuOpen ? 'max-h-[80vh] opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
            <div className="mx-4 sm:mx-6 pb-4 max-h-[70vh] overflow-y-auto">
              {/* CAMBIO: Menú móvil a fondo y borde claros */}
              <div className="bg-white rounded-2xl border border-gray-200 shadow-2xl">
                {menuItems.map((item, index) => (
                  <div key={item.href}>
                    {item.isDropdown ? (
                      <div>
                        <button 
                          onClick={() => setIsMobileTiendaOpen(!isMobileTiendaOpen)}
                          // CAMBIO: Colores de texto y borde para el menú móvil
                          className={`w-full flex items-center justify-center text-gray-800 hover:text-red-600 hover:bg-gray-100 transition-all duration-300 py-4 px-6 font-semibold text-base uppercase tracking-wide relative ${index < menuItems.length - 1 ? 'border-b border-gray-200' : ''}`}
                        >
                          <span className="text-center">{item.label}</span>
                          <svg className={`w-5 h-5 absolute right-6 transition-transform duration-300 ${isMobileTiendaOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                        </button>
                        <div className={`transition-all duration-500 ease-in-out overflow-hidden ${isMobileTiendaOpen ? 'max-h-96' : 'max-h-0'}`}>
                          {/* CAMBIO: Fondo y texto del submenú móvil */}
                          <div className="bg-gray-50 border-y border-gray-200">
                            {tiendaCategories.map(subItem => (
                              <Link key={subItem.href} href={subItem.href} className="block text-gray-700 hover:text-red-600 hover:bg-gray-100 py-3 px-6 font-medium text-base text-center" onClick={() => setIsMenuOpen(false)}>
                                {subItem.label}
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                    ) : (
                      // CAMBIO: Colores de texto y borde para el menú móvil
                      <a href={item.href} className={`flex items-center justify-center text-gray-800 hover:text-red-600 hover:bg-gray-100 transition-all duration-300 py-4 px-6 font-semibold text-base uppercase tracking-wide ${index < menuItems.length - 1 ? 'border-b border-gray-200' : ''}`} onClick={() => setIsMenuOpen(false)}>
                        {item.label}
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </nav>
        </div>
        {/* Se elimina el gradiente inferior, ya que el borde simple es más limpio en un tema blanco */}
      </header>
      {/* Espaciador para que el contenido no quede debajo del header fijo */}
      <div className="h-20 lg:h-24"></div>
    </>
  );
}