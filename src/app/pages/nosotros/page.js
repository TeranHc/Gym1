// src/app/pages/quienes-somos/page.js

"use client";
import Link from 'next/link';
import Image from 'next/image';

// --- CAMBIO: Se añadió un nuevo pilar: "Compra Segura" ---
const nuestrosPilares = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
    title: "Experiencia Comprobada",
    description: "Con más de 10 años en el sector fitness, entendemos las necesidades de cada proyecto, desde gimnasios boutique hasta grandes centros deportivos."
  },
  {
    icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-14v4m-2-2h4m5 10v4m-2-2h4M5 3a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V5a2 2 0 00-2-2H5z" />
        </svg>
    ),
    title: "Calidad y Durabilidad",
    description: "Seleccionamos y distribuimos equipamiento importado y nacional de la más alta calidad, garantizando una inversión duradera y segura."
  },
  {
    icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
    ),
    title: "Asesoría Personalizada",
    description: "Nuestro equipo de expertos te acompaña en cada paso, desde la consultoría inicial hasta la selección de equipamiento."
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547a2 2 0 00-.547 1.806l.477 2.387a6 6 0 00.517 3.86l.158.318a6 6 0 00.517 3.86l2.387.477a2 2 0 001.806-.547a2 2 0 00.547-1.806l-.477-2.387a6 6 0 00-.517-3.86l-.158-.318a6 6 0 01-.517-3.86l.477-2.387a2 2 0 00.547-1.806z" />
      </svg>
    ),
    title: "Instalación Profesional",
    description: "Contamos con un equipo técnico especializado que se encarga del montaje y la puesta a punto de todo el equipamiento en tu local."
  },

  {
    icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12.76L9 17.5a2 2 0 002 2h2a2 2 0 002-2v-4.74M15 12.76V17.5a2 2 0 01-2 2h-2a2 2 0 01-2-2v-4.74M5 12.76V17.5a2 2 0 002 2h2a2 2 0 002-2v-4.74M19 12.76V17.5a2 2 0 01-2 2h-2a2 2 0 01-2-2v-4.74M12 4.26v5.51" />
        </svg>
    ),
    title: "Catálogo Extenso",
    description: "Accede a una de las gamas de productos más completas del mercado, con opciones para cada necesidad y tipo de presupuesto."
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 20.417l5.611-2.048A11.955 11.955 0 0112 18c1.532 0 3.012-.288 4.382-.824l5.61-2.048a12.02 12.02 0 00-2.382-8.558z" />
      </svg>
    ),
    title: "Compra Segura",
    description: "Estamos convencidos de que la honestidad te llevará más lejos. Consideramos la lealtad y el comportamiento cooperativo como la base para una cooperación confiable."
  }
];

export default function QuienesSomosPage() {
  return (
    <div className="bg-white">
      {/* Sección Hero */}
      <section className="relative  min-h-[300px] flex items-center justify-center text-center text-white">
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
          <h1 className="text-4xl md:text-6xl font-black leading-tight">Nuestra Pasión es <span className="text-red-500">tu Gimnasio</span></h1>
          <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-gray-200">
            Más que proveedores, somos tus socios estratégicos en el camino hacia el éxito.
          </p>
        </div>
      </section>

      {/* --- CAMBIO: Sección actualizada con el nuevo texto --- */}
      <section className="py-16 md:py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="pr-0 lg:pr-12">
              <h2 className="text-sm font-bold text-red-600 tracking-wider uppercase">Experiencia y Desarrollo</h2>
              <p className="mt-4 text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                Más de 25 años desarrollando equipos de fitness profesionales al más alto nivel.
              </p>
              <div className="mt-6 text-gray-600 leading-relaxed space-y-4">
                <p>
                  Realleader USA se fundó en 1996 y ahora es uno de los mayores productores de equipos de fitness profesionales del mundo. Desarrollo, diseño, producción y venta al más alto nivel.
                </p>
                <p>
                  Después de más de 25 años de desarrollo, Realleader emplea ahora a 25 ingenieros superiores y 65 técnicos profesionales. Gracias a sus procesos de fabricación optimizados, podemos ofrecer equipos de alta calidad a un precio atractivo.
                </p>
                <p>
                  Además, Realleader USA mantiene colaboraciones técnicas a largo plazo con especialistas deportivos de EE. UU. y Europa para promover la calidad y el mayor desarrollo de la cartera. Distribuimos nuestros productos en más de 100 países, ayudando a proyectos como el tuyo con equipos de alta calidad al mejor precio.
                </p>
              </div>
            </div>
            <div className="h-[500px] w-full relative">
              <Image
                src="/galeriafoto/19g.jpg"
                alt="Equipamiento de gimnasio RealLeader"
                fill
                className="rounded-2xl shadow-2xl object-cover"
              />
            </div>

          </div>
        </div>
      </section>

      {/* Sección de Pilares y Servicios */}
      <section className="py-16 md:py-24 bg-neutral-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-sm font-bold text-red-500 tracking-wider uppercase">¿Por qué elegirnos?</h2>
            <p className="mt-4 text-3xl md:text-4xl font-bold leading-tight">
              Una Solución Integral para tu Proyecto
            </p>
          </div>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {nuestrosPilares.map((pilar) => (
              <div key={pilar.title} className="bg-neutral-700 p-8 rounded-xl hover:bg-neutral-600 transition-colors duration-300">
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-red-500 text-white mb-6">
                  {pilar.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{pilar.title}</h3>
                <p className="text-gray-400 leading-relaxed">{pilar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sección CTA Final */}
      <section className="py-16 md:py-24 bg-gray-100">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            ¿Listo para llevar tu gimnasio al siguiente nivel?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Nuestro equipo está listo para asesorarte. Contáctanos hoy mismo y recibe una cotización personalizada sin compromiso.
          </p>
          <Link
            href="/pages/horarios"
            className="inline-block bg-red-600 text-white py-4 px-10 rounded-xl font-bold text-lg hover:bg-red-700 hover:scale-105 transform transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Solicitar Cotización Ahora
          </Link>
        </div>
      </section>
    </div>
  );
}