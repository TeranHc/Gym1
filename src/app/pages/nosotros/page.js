"use client";
import Link from 'next/link';
import Image from 'next/image';

export default function QuienesSomosPage() {
  return (
    // Se usa `overflow-x-hidden` para prevenir cualquier desbordamiento horizontal
    // que puedan causar las transformaciones (rotaciones) en la imagen.
    <div className="bg-gray-50 text-gray-800 overflow-x-hidden">
      
      {/* --- SECCIÓN HERO --- */}
      <section className="relative min-h-[350px] md:min-h-[350px] flex items-center justify-center text-center text-white">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1975&q=80"
            alt="Interior de un gimnasio moderno"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
        </div>
        <div className="relative z-10 px-4">
          {/* Tipografía responsiva: Más pequeña en móviles, más grande en escritorio */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black leading-tight">Nuestra Pasión es <span className="text-red-500">tu Gimnasio</span></h1>
          <p className="mt-4 text-md sm:text-lg md:text-xl max-w-3xl mx-auto text-gray-200">
            Más que proveedores, somos tus socios estratégicos en el camino hacia el éxito.
          </p>
        </div>
      </section>

      {/* --- SECCIÓN DE CONTENIDO PRINCIPAL --- */}
      {/* Padding responsivo: Menos padding vertical en móviles, más en pantallas grandes */}
      <section className="py-16 md:py-20">
<div className="mx-auto px-4 sm:px-6 lg:px-8" style={{ maxWidth: '90rem' }}>
          {/* Gap responsivo: Menor separación en móviles, mayor en pantallas grandes */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            
            {/* --- Columna de Texto --- */}
            <div className="order-2 lg:order-1">
              <div className="mb-8 text-center lg:text-left">
                <span className="inline-block bg-red-100 text-red-700 text-sm font-semibold px-4 py-1 rounded-full uppercase tracking-wider">
                  Nuestra Trayectoria Global
                </span>
                {/* Tipografía responsiva para el título */}
                <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
                  Una Marca Consolidada en la Industria del Fitness
                </h2>
              </div>

              {/* Contenedor del texto con borde y padding responsivo */}
              <div className="prose prose-lg max-w-none text-gray-600 border-l-4 border-red-500 pl-6 md:pl-8 space-y-6 md:space-y-8">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Experiencia y Alcance Global</h3>
  <p className="text-justify">
                    
                    Realleader USA, es una marca global consolidada con más de 30 años de experiencia en la industria del fitness. Conocida por sus equipos profesionales, Realleader ofrece más de 350 productos y opera a través de cinco importantes filiales en todo el mundo. Con una red de distribuidores en más de 60 países y más de 10,000 instalaciones exitosas, nuestros productos son reconocidos por su biomecánica, estética y fiabilidad superiores.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Alianzas de Prestigio</h3>
  <p className="text-justify">
En los últimos tres años, fisicoculturistas internacionales de renombre como Chris Cormier, Kevin Levrone, Mark Anthony y Steve Cook se han asociado con la marca Realleader USA, utilizando sus máquinas en sus gimnasios. Estos fisicoculturistas son figuras célebres en la comunidad del fitness, conocidos por sus impresionantes físicos y su contribución al deporte.

                  </p>
                    <p className="text-justify">

Realleader USA cuenta con instalaciones de renombre, como Benoius Gym en Dubái, Fit Club by Andy Velich en Las Vegas, Fitness Culture by Steve Cook en St. George, One Gen (OG) by Larry Wheels y muchas más. La empresa ha establecido una sólida red de distribución no solo en Norteamérica, sino también en Alemania, Corea del Sur, Japón, Uzbekistán, Egipto, Rusia y otras regiones.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Innovación y Calidad en Diseño</h3>
  <p className="text-justify">
                    Con instalaciones de 30,000 metros cuadrados y un equipo de 25 ingenieros senior, aplicamos principios de kinesiología y ergonomía en cada producto. Mantenemos colaboraciones técnicas con especialistas de EE. UU. y los Países Bajos, asegurando un diseño de vanguardia apoyado por profesionales del fitness.
                  </p>
                </div>
              </div>
            </div>
            
            {/* --- Columna de Imagen --- */}
            <div className="order-1 lg:order-2">
              {/* Contenedor responsivo para la imagen. Se ajusta la altura en diferentes breakpoints */}
              <div className="h-[350px] sm:h-[450px] lg:h-[550px] w-full relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-red-600 to-gray-900 rounded-2xl shadow-2xl transform -rotate-3 group-hover:rotate-2 transition-transform duration-500 ease-in-out"></div>
                <Image
                  src="/galeriafoto/19g.jpg"
                  alt="Equipamiento de gimnasio RealLeader"
                  fill
                  className="rounded-2xl shadow-2xl object-cover relative transform rotate-1 group-hover:scale-105 transition-transform duration-500 ease-in-out"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- SECCIÓN CTA FINAL --- */}
      {/* Padding responsivo */}
      <section className="py-16 md:py-24 bg-gray-800 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          {/* Tipografía responsiva */}
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-6">
            ¿Listo para llevar tu gimnasio al siguiente nivel?
          </h2>
          <p className="text-base sm:text-lg text-gray-300 mb-10 max-w-2xl mx-auto">
            Nuestro equipo está listo para asesorarte. Contáctanos hoy mismo y recibe una cotización personalizada sin compromiso.
          </p>
          <Link
            href="/pages/horarios"
            // Se ajusta el padding y tamaño del texto para móviles
            className="inline-block bg-red-600 text-white py-3 px-8 md:py-4 md:px-10 rounded-lg font-bold text-base md:text-lg hover:bg-red-700 transform transition-all duration-300 shadow-lg hover:shadow-red-500/50 hover:scale-105"
          >
            Solicitar Cotización Ahora
          </Link>
        </div>
      </section>
    </div>
  );
}