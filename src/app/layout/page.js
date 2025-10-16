'use client';
import { useState, useEffect } from 'react';
import { allProducts } from '../pages/tienda-gym/products';
import Link from "next/link";
import Image from 'next/image';

// --- NUEVO: Datos para las tarjetas de gamas de productos ---
const gamasDeProductos = [
  {
    title: "PIN LOAD SERIES",
    description: "Conoce las diferentes gamas en peso integrado. Calidad inigualable, ergonomía y biomecánica, durabilidad y diseño. ",
    details: "M2, M3 y M7 Series Peso Integrado",
    images: [
      { src: "/maquinas/M2-1001 Chest Press.png", alt: "Máquina Pin Load 1", className: "w-1/3" },
      { src: "/m3/M3-1008 Abdominal Crunch.png", alt: "Máquina Pin Load 2", className: "w-1/3" },
      { src: "/m7/M7-2005 Seated Leg Press.png", alt: "Máquina Pin Load 3", className: "w-1/3" },
    ]
  },
  {
    title: "PLATE LOAD SERIES",
    description: "Conoce las diferentes gamas en peso integrado. Calidad inigualable, ergonomía y biomecánica, durabilidad y diseño.",
    details: "",
    images: [
      { src: "/inicioM7/3.jpg", alt: "Máquina Plate Load 1", className: "w-1/2" },
      { src: "/galeriafoto/17g.jpg", alt: "Máquina Plate Load 2", className: "w-1/2" },
    ]
  },
    {
    title: "PLATE LOAD PROFESIONAL",
    description: "Conoce las diferentes gamas en peso integrado. Calidad inigualable, ergonomía y biomecánica, durabilidad y diseño.",
    details: "",
    images: [
      { src: "/inicioLD/1.jpg", alt: "Máquina Profesional 1", className: "w-1/3" },
      { src: "/inicioRS/5.jpg", alt: "Máquina Profesional 2", className: "w-1/3" },
      { src: "/galeriafoto/18g.jpg", alt: "Máquina Profesional 3", className: "w-1/3" },
    ]
  },
];

// ...justo después de la constante gamasDeProductos
const seriesDestacadas = [
  {
    id: "PF",
    title: "PF SERIES",
    image: "/iniciosesion/pf.jpg",
    description: "La Serie PF es una gama compacta de máquinas de entrenamiento de fuerza con dos estaciones, diseñadas para instalaciones que ahorran espacio. Estas máquinas combinan dos ejercicios en una sola unidad, lo que las hace ideales para gimnasios, hoteles y complejos residenciales. Su durabilidad, facilidad de uso y amplio rango de movimiento son características clave, mientras que su diseño robusto y elegante apariencia las convierten en una excelente opción para entornos con mucho tráfico."
  },
  {
    id: "LD",
    title: "LD SERIES",
    image: "/iniciosesion/ld.jpg",
    description: "La Serie HS Pro está diseñada para un entrenamiento de fuerza de alto rendimiento con un diseño avanzado. Esta serie incluye una gama de máquinas con selectores para atletas exigentes y entusiastas del fitness, proporcionando una biomecánica óptima para entrenamientos efectivos. Diseñada para soportar un uso intensivo, la Serie HS Pro garantiza estabilidad y seguridad, lo que la convierte en una excelente opción para gimnasios comerciales, estudios de fitness e instalaciones de bienestar corporativas."
  },
  {
    id: "M2",
    title: "M2 SERIES",
    image: "/iniciosesion/m2.jpg",
    description: "La Serie M2 es una gama robusta y de alto rendimiento de 23 máquinas de entrenamiento de fuerza diseñadas para la activación muscular específica y movimientos anatómicamente correctos. Fabricada con acero de grado comercial y características avanzadas como CAM, poleas y un amplio rango de movimiento, esta serie ofrece durabilidad y facilidad de uso, lo que la hace ideal para gimnasios, hoteles, empresas y hogares."
  },
    {
    id: "FM",
    title: "FM SERIES",
    image: "/iniciosesion/fm.png",
    description: "La Serie M2 es una gama robusta y de alto rendimiento de 23 máquinas de entrenamiento de fuerza diseñadas para la activación muscular específica y movimientos anatómicamente correctos. Fabricada con acero de grado comercial y características avanzadas como CAM, poleas y un amplio rango de movimiento, esta serie ofrece durabilidad y facilidad de uso, lo que la hace ideal para gimnasios, hoteles, empresas y hogares."
  }
];


export default function EalLeaderHomePage() {
  const [currentSlideDesktop, setCurrentSlideDesktop] = useState(0);
  const [currentSlideMobile, setCurrentSlideMobile] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
    const [openAccordion, setOpenAccordion] = useState('PF'); // <-- AÑADE ESTA LÍNEA (iniciamos con 'PF' abierto)

  
  const productsPerSlideDesktop = 3;
  const productsPerSlideMobile = 2;
  const totalSlidesDesktop = Math.ceil(allProducts.length / productsPerSlideDesktop);
  const totalSlidesMobile = Math.ceil(allProducts.length / productsPerSlideMobile);

  useEffect(() => {
    const checkIsMobile = () => setIsMobile(window.innerWidth < 768);
    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  const nextSlide = () => {
    if (isMobile) {
      setCurrentSlideMobile((prev) => (prev + 1) % totalSlidesMobile);
    } else {
      setCurrentSlideDesktop((prev) => (prev + 1) % totalSlidesDesktop);
    }
  };

  const prevSlide = () => {
    if (isMobile) {
      setCurrentSlideMobile((prev) => (prev - 1 + totalSlidesMobile) % totalSlidesMobile);
    } else {
      setCurrentSlideDesktop((prev) => (prev - 1 + totalSlidesDesktop) % totalSlidesDesktop);
    }
  };

  const ProductCard = ({ product }) => (
    <Link href={`/pages/tienda-gym/productos/${product.id}`} className="block">
      <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 group h-full flex flex-col">
        <div className="aspect-square bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-4 relative overflow-hidden">
          <Image
            src={product.image}
            alt={product.alt}
            width={300}
            height={300}
            className="max-w-full max-h-full object-contain transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div className="p-4 flex-1 flex flex-col">
          <div className="mb-2 flex flex-wrap gap-1 justify-center min-h-[22px]">
            {product.subCategories && product.subCategories.map(sc => (
              <span key={sc} className="inline-flex items-center gap-1 px-2 py-1 text-xs font-semibold rounded-full bg-gray-100 text-gray-700">
                {sc}
              </span>
            ))}
          </div>
          <h3 className="font-bold text-gray-900 text-base line-clamp-2 group-hover:text-red-600 transition-colors flex-grow mt-1">
            {product.name}
          </h3>
        </div>
      </div>
    </Link>
  );
  
  const MAX_DOTS = 5;
  const renderDots = (currentSlide, totalSlides, setCurrentSlide) => {
    if (totalSlides <= 1) return null;
    if (totalSlides <= MAX_DOTS) {
      return Array.from({ length: totalSlides }, (_, index) => (
        <button key={index} onClick={() => setCurrentSlide(index)} className={`w-2 h-2 rounded-full transition-all duration-300 ${currentSlide === index ? 'bg-red-500' : 'bg-gray-300 hover:bg-gray-400'}`} />
      ));
    }

    let start = Math.max(0, currentSlide - Math.floor(MAX_DOTS / 2));
    let end = start + MAX_DOTS;
    if (end > totalSlides) {
        end = totalSlides;
        start = end - MAX_DOTS;
    }
    
    return Array.from({ length: end - start }, (_, i) => start + i).map(index => (
        <button key={index} onClick={() => setCurrentSlide(index)} className={`w-2 h-2 rounded-full transition-all duration-300 ${currentSlide === index ? 'bg-red-500' : 'bg-gray-300 hover:bg-gray-400'}`} />
    ));
  };

  return (
    <div className="min-h-screen bg-white text-white overflow-x-hidden">
      <section className="min-h-[60vh] md:min-h-[70vh] flex items-center relative overflow-hidden">
        <div className="absolute inset-0">
          <Image  
            src="https://www.salter.es/modules/ph_simpleblog/covers/271.png" 
            alt="Equipamiento de gimnasio profesional"
            fill
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-16 relative z-10">
          <div className="max-w-2xl space-y-6 md:space-y-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight text-white">
              Tu Gimnasio.
              <br />
              <span className="text-red-400">Nuestro Equipamiento.</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-white/90 leading-relaxed font-light max-w-xl">
              RealLeader distribuye equipamiento de gimnasio de la más alta calidad. Desde máquinas profesionales hasta accesorios especializados para crear el gimnasio perfecto.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 pt-6 md:pt-8">
              <div className="bg-black/10 backdrop-blur-md rounded-xl md:rounded-2xl px-3 py-3 md:px-6 md:py-4 border border-red-500/30 hover:border-red-500/60 transition-all duration-300 hover:scale-105">
                <div className="text-xl md:text-3xl font-black text-white mb-1">150+</div>
                <div className="text-xs md:text-sm text-white/80 font-semibold uppercase tracking-wider">Productos</div>
              </div>
              <div className="bg-black/10 backdrop-blur-md rounded-xl md:rounded-2xl px-3 py-3 md:px-6 md:py-4 border border-red-500/30 hover:border-red-500/60 transition-all duration-300 hover:scale-105">
                <div className="text-xl md:text-3xl font-black text-white mb-1">2</div>
                <div className="text-xs md:text-sm text-white/80 font-semibold uppercase tracking-wider">Años Garantía</div>
              </div>
              <div className="bg-black/10 backdrop-blur-md rounded-xl md:rounded-2xl px-3 py-3 md:px-6 md:py-4 border border-red-500/30 hover:border-red-500/60 transition-all duration-300 hover:scale-105">
                <div className="text-xl md:text-3xl font-black text-white mb-1">10+</div>
                <div className="text-xs md:text-sm text-white/80 font-semibold uppercase tracking-wider">Años Experiencia</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      
{/* ========================================
   PROPUESTA 1: FRESH & CLEAN
   Fondo blanco con acentos de color vibrantes
   ======================================== */}
<section className="py-20 md:py-15 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    
    {/* Header con badge */}
    <div className="text-center mb-5">

      <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
        Productos Profesionales
      </h2>
      <p className="max-w-2xl mx-auto text-xl text-gray-600">
        Diseñadas para máximo rendimiento, durabilidad y biomecánica superior.
      </p>
    </div>

    {/* Grid de gamas */}
    <div className="space-y-15">
      {gamasDeProductos.map((gama, index) => (
        <div
          key={gama.title}
          className="group"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Contenido de texto */}
            <div className={`space-y-6 ${index % 2 !== 0 ? 'lg:order-2' : ''}`}>
              {/* Numeración decorativa */}
              <div className="flex items-center gap-4">

                <div className="h-1 flex-1 bg-gradient-to-r from-red-600 to-transparent" />
              </div>
              <div>
                <h3 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
                  {gama.title}
                </h3>
                <p className="text-gray-700 text-lg leading-relaxed mb-4">
                  {gama.description}
                </p>
                {gama.details && (
                  <p className="text-gray-500 text-base">
                    {gama.details}
                  </p>
                )}
              </div>
            </div>

            {/* Imágenes con efecto */}
            <div className={`relative ${index % 2 !== 0 ? 'lg:order-1' : ''}`}>
              <div className="flex gap-4 items-center justify-center">
                {gama.images.map((image, imgIndex) => (
                  <div 
                    key={imgIndex} 
                    className={`${image.className} relative group/img`}
                  >
                    <div className="absolute -inset-4 bg-gradient-to-r from-red-100 to-red-100 rounded-2xl opacity-0 group-hover/img:opacity-100  transition-opacity duration-500" />
                    <Image
                      src={image.src}
                      alt={image.alt}
                      width={380}
                      height={380}
                      className="relative object-cover rounded-2xl shadow-xl group-hover/img:scale-105 transition-transform duration-500"
                    />
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      ))}
    </div>
  </div>
</section>

<section className="bg-gray-50 py-20 md:py-24">
  {/* Header (sin cambios) */}
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
    <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-gray-900 mb-4">
      Series Destacadas
    </h2>
    <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-600">
      Colecciones curadas para proyectos que demandan un carácter único y un rendimiento superior.
    </p>
  </div>

  {/* Layout de Series */}
  {/* CAMBIO 1: AÑADIMOS 'space-y-4' o similar para un espacio consistente */}
  <div className="max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-8 space-y-4"> 
    {seriesDestacadas.map((serie, index) => (
      <div
        key={serie.id}
        // CAMBIO 2: La tarjeta ahora tiene un ancho menor (11/12) y un margen automático condicional
        // Esto es lo que mueve TODA LA TARJETA a la izquierda o derecha
        className={`
          group relative rounded-2xl overflow-hidden shadow-2xl transition-shadow duration-500 hover:shadow-red-200/50 
          lg:w-8/12 ${index % 2 !== 0 ? 'ml-auto' : 'mr-auto'}`
        }
      >
        <Image 
          src={serie.image} 
          alt={serie.title} 
          fill 
          className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-105" 
        />
        
        {/* El degradado alterna su dirección para seguir al texto */}
        <div className={`
          absolute inset-0 bg-gradient-to-t from-black/80 to-transparent 
          ${index % 2 === 0 ? 'md:bg-gradient-to-r' : 'md:bg-gradient-to-l'} 
          md:from-black/80 md:via-black/60 md:to-transparent transition-all duration-500 
          group-hover:from-black/90 group-hover:via-black/70`} 
        />
        
        {/* La alineación del texto dentro del contenedor también alterna */}
        <div className={`
          relative z-10 grid grid-cols-1 md:grid-cols-12 gap-8 items-center 
          p-8 md:p-12 min-h-[450px] md:min-h-[400px] text-center 
          ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}
        >
          
          {/* El número decorativo cambia de orden en los impares */}
          <div className={`md:col-span-4 ${index % 2 !== 0 ? 'md:order-last' : ''}`}>
            <span className="text-8xl lg:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white/50 to-white/20 group-hover:from-red-500 group-hover:to-red-600 transition-all duration-500">
              {String(index + 1).padStart(2, '0')}
            </span>
          </div>

          {/* El bloque de texto también cambia de orden */}
          <div className={`md:col-span-8 space-y-6 text-white ${index % 2 !== 0 ? 'md:order-first' : ''}`}>
            <div>
              <span className="text-sm font-bold uppercase tracking-widest text-red-400">
                {serie.id}
              </span>
              <h3 className="mt-2 text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-tight text-white">
                {serie.title}
              </h3>
            </div>
            
            <p className="text-gray-300 text-lg leading-relaxed max-w-xl mx-auto md:mx-0">
              {serie.description}
            </p>
            
            <Link href={`/pages/tienda-gym?category=${serie.id}`} className="group/btn inline-flex items-center gap-3 text-white font-bold uppercase text-sm tracking-wider">
              <span>Descubrir Serie</span>
              <div className="w-12 h-12 rounded-full border-2 border-white/50 group-hover/btn:border-red-500 group-hover/btn:bg-red-500 flex items-center justify-center transition-all duration-300">
                <svg className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </Link>
          </div>
        </div>
      </div>
    ))}
  </div>
</section>


      <section className="py-8 md:py-12 bg-zinc-800">
        <div className="max-w-7xl mx-auto px-4 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center mb-1">
            <div className="space-y-6 md:space-y-8 order-2 lg:order-1">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight text-white">
                Servicios <span className="text-red-500">Integrales</span>
                <br />
                para tu proyecto.
              </h2>
              <p className="text-lg md:text-xl text-gray-400">
                Desde la consultoría hasta la instalación completa, te acompañamos en cada paso para crear el gimnasio ideal.
              </p>
              <div className="space-y-4 md:space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <h3 className="text-lg md:text-xl font-bold mb-2 text-white">Diseño y consultoría personalizada</h3>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <h3 className="text-lg md:text-xl font-bold mb-2 text-white">Instalación y montaje profesional</h3>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <h3 className="text-lg md:text-xl font-bold mb-2 text-white">Mantenimiento y soporte técnico</h3>
                  </div>
                </div>
              </div>
              <Link 
                href="/pages/horarios"
                className="inline-block bg-red-500 text-white px-6 md:px-8 py-3 md:py-4 rounded-2xl font-bold text-base md:text-lg hover:bg-red-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl text-center"
              >
                Solicitar Cotización
              </Link>
            </div>
            <div className="relative order-1 lg:order-2">
              <div className="rounded-2xl md:rounded-3xl overflow-hidden h-64 md:h-96">
                  <Image
                    src="/images/ServiciosIntegrales.jpg"
                    alt="Instalación profesional de equipamiento de gimnasio"
                    fill
                    className="w-full h-full object-cover"
                  />
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="py-12 bg-gray-50 text-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            Contáctanos
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 mb-10">
            ¿Tienes dudas o quieres más información sobre nuestras máquinas? <br />
            Inicia tu solicitud y te atenderemos con gusto.
          </p>
          <div className="flex justify-center mb-10">
            <Link
              href="/pages/horarios"
              className="bg-red-600 text-white py-4 px-8 rounded-xl font-bold text-lg hover:bg-red-700 hover:scale-105 transform transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-3"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
              </svg>
              <span>Solicita una Cotización Personalizada</span>
            </Link>
          </div>
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8 text-gray-800 px-4">Síguenos en nuestras redes</h3>
            <div className="flex justify-center gap-4 sm:gap-6 mb-6 sm:mb-8 px-4">
              <button onClick={() => window.open('https://www.facebook.com/Realleadermx', '_blank')} className="bg-blue-600 text-white p-3 sm:p-4 rounded-full hover:bg-blue-700 transform hover:scale-110 active:scale-95 transition-all duration-300 shadow-lg hover:shadow-xl" title="Síguenos en Facebook">
                <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </button>
              <button onClick={() => window.open('https://www.instagram.com/realleader_mexico/', '_blank')} className="bg-gradient-to-br from-purple-600 to-pink-500 text-white p-3 sm:p-4 rounded-full hover:from-purple-700 hover:to-pink-600 transform hover:scale-110 active:scale-95 transition-all duration-300 shadow-lg hover:shadow-xl" title="Síguenos en Instagram">
                <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.40s-.644-1.44-1.439-1.44z"/></svg>
              </button>
              <button onClick={() => window.open('https://www.tiktok.com/@realleader.mexico?_t=ZS-8zprbDCSPi4&_r=1', '_blank')} className="bg-black text-white p-3 sm:p-4 rounded-full hover:bg-gray-800 transform hover:scale-110 active:scale-95 transition-all duration-300 shadow-lg hover:shadow-xl" title="Síguenos en TikTok">
                <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="currentColor" viewBox="0 0 24 24"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/></svg>
              </button>
            </div>
            <p className="text-gray-600 text-sm sm:text-base px-4">
              Mantente al día con nuestras últimas ofertas y novedades del mundo fitness.
            </p>
          </div>
        </div>
      </section>
      
    </div>
  );
}