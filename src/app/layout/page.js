'use client';
import { useState, useEffect } from 'react';
import { allProducts } from '../pages/tienda-gym/products';
import Link from "next/link";
import Image from 'next/image';

export default function EalLeaderHomePage() {
  const [currentSlideDesktop, setCurrentSlideDesktop] = useState(0);
  const [currentSlideMobile, setCurrentSlideMobile] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  
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
          {/* <-- CAMBIO: Ahora muestra las subcategorías en lugar de la categoría principal --> */}
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
                <div className="text-xl md:text-3xl font-black text-white mb-1">5</div>
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

      {/* <-- SECCIÓN RESTAURADA: Equipamiento Premium --> */}
      <section className="py-8 md:py-12 bg-gray-100 text-black">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div className="relative">
              <div className="rounded-2xl md:rounded-3xl overflow-hidden h-64 md:h-96">
                <Image  
                  src="https://www.hola.com/horizon/landscape/8f63637f78d5-maquinasgimnasio-t.jpg?im=Resize=(640),type=downsize" 
                  alt="Equipamiento profesional de gimnasio"
                  fill
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="space-y-6 md:space-y-8">
              <div className="text-sm font-bold text-red-500 tracking-wider uppercase">
                Equipamiento Premium
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight">
                La mejor calidad en
                <br />
                equipamiento fitness.
              </h2>
              <p className="text-lg md:text-xl text-gray-600">
                Ofrecemos equipamiento de las mejores marcas internacionales con garantía extendida y servicio técnico especializado.
              </p>
              <div className="space-y-4 md:space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <h3 className="text-lg md:text-xl font-bold mb-2">Máquinas cardiovasculares de última tecnología.</h3>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <h3 className="text-lg md:text-xl font-bold mb-2">Equipos de fuerza y musculación profesional.</h3>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <h3 className="text-lg md:text-xl font-bold mb-2">Accesorios y equipos de entrenamiento funcional.</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 bg-gray-100 text-black bg-gray-200">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="text-center mb-6 md:mb-8">
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-2">
                Nuestros productos
              </h3>
              <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto px-4">
                Conoce nuestra variedad de productos diseñados para llevar tu gimnasio al siguiente nivel.
              </p>
            </div>
            <div className="relative">
              <div className="flex justify-center gap-4 mb-6">
                <button
                  onClick={prevSlide}
                  className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 md:px-8 md:py-4 rounded-xl font-semibold text-sm md:text-base transition-all duration-300 hover:scale-105 shadow-lg flex items-center justify-center gap-2 min-w-[120px] md:min-w-[140px]"
                  disabled={isMobile ? totalSlidesMobile <= 1 : totalSlidesDesktop <= 1}
                >
                  <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                  <span className="hidden sm:inline">Anterior</span>
                </button>
                <button
                  onClick={nextSlide}
                  className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 md:px-8 md:py-4 rounded-xl font-semibold text-sm md:text-base transition-all duration-300 hover:scale-105 shadow-lg flex items-center justify-center gap-2 min-w-[120px] md:min-w-[140px]"
                  disabled={isMobile ? totalSlidesMobile <= 1 : totalSlidesDesktop <= 1}
                >
                  <span className="hidden sm:inline">Siguiente</span>
                  <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                </button>
              </div>
              <div className="overflow-hidden">
                <div className="hidden md:block">
                  <div 
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{ transform: `translateX(-${currentSlideDesktop * 100}%)` }}
                  >
                    {Array.from({ length: totalSlidesDesktop }).map((_, slideIndex) => (
                      <div key={slideIndex} className="w-full flex-shrink-0">
                        <div className="grid grid-cols-3 gap-6">
                          {allProducts.slice(slideIndex * productsPerSlideDesktop, (slideIndex + 1) * productsPerSlideDesktop).map((product) => (
                            <ProductCard key={product.id} product={product} />
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="block md:hidden">
                  <div 
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{ transform: `translateX(-${currentSlideMobile * 100}%)` }}
                  >
                    {Array.from({ length: totalSlidesMobile }).map((_, slideIndex) => (
                      <div key={slideIndex} className="w-full flex-shrink-0 px-2">
                        <div className="grid grid-cols-2 gap-4">
                          {allProducts.slice(slideIndex * productsPerSlideMobile, (slideIndex + 1) * productsPerSlideMobile).map(product => <ProductCard key={product.id} product={product} />)}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex justify-center mt-6 space-x-2">
                <div className="hidden md:flex space-x-2">
                  {renderDots(currentSlideDesktop, totalSlidesDesktop, setCurrentSlideDesktop)}
                </div>
                <div className="flex md:hidden space-x-2">
                  {renderDots(currentSlideMobile, totalSlidesMobile, setCurrentSlideMobile)}
                </div>
              </div>
            </div>
          <div className="flex justify-center pt-8">
            <Link href="/pages/tienda-gym" className="bg-black text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-gray-800 transition-all duration-300">
              Ver Catálogo
            </Link>
          </div>
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
                  src="https://poolsecuritysolution.com/wp-content/uploads/servicio-tecnico-para-equipos-y-maquinas-de-gimnasio.jpg" 
                  alt="Instalación profesional de equipamiento de gimnasio"
                  fill
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 md:py-12 bg-neutral-700" id="quienes-somos">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-2">
              <div className="rounded-2xl md:rounded-3xl overflow-hidden h-64 md:h-96 relative shadow-2xl">
                <Image  
                  src="https://www.gymtek.com.ec/wp-content/uploads/2019/08/como-elegir-equipos-de-gimnasio-gymtek.jpg" 
                  alt="Gimnasio con equipamiento profesional"
                  fill  
                  className="object-cover" 
                />
              </div>
            </div>
            <div className="lg:col-span-3 space-y-4 md:space-y-6">
              <div className="text-xs font-bold text-red-500 tracking-wider uppercase">
                Quiénes Somos
              </div>
              <h2 className="text-2xl md:text-3xl font-black leading-snug text-white">
                Pasión por el <span className="text-red-500">Fitness</span>,<br />
                compromiso con tu gimnasio.
              </h2>
              <p className="text-sm text-gray-400 leading-relaxed">
                Somos una empresa dedicada a la venta de máquinas y equipamiento profesional
                para gimnasios. Nuestro objetivo es ayudarte a crear espacios de entrenamiento 
                modernos, seguros y funcionales, con productos de la más alta calidad.
              </p>
              <ul className="space-y-3 pt-2">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-sm text-white font-semibold">+10 años de experiencia en el sector fitness.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-sm text-white font-semibold">Equipamiento importado y nacional de alta durabilidad.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-sm text-white font-semibold">Asesoría personalizada para gimnasios y deportistas.</span>
                </li>
              </ul>
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
      
      <section className="py-15 bg-zinc-800 from-red-500 to-orange-500">
        <div className="max-w-4xl mx-auto text-center px-8">
          <h2 className="text-5xl lg:text-6xl font-black mb-8">
            Construye el Gimnasio de tus Sueños
          </h2>
          <p className="text-2xl text-white/90 mb-12 font-light">
            Únete a cientos de gimnasios que confían en nuestro equipamiento
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              href="/pages/horarios"
              className="bg-white text-red-500 px-12 py-6 rounded-2xl font-bold text-xl hover:bg-gray-100 transition-all duration-300 shadow-2xl text-center"
            >
              Solicitar Cotización
            </Link>
            <Link 
              href="/pages/tienda-gym"
              className="border-2 border-white text-white px-12 py-6 rounded-2xl font-bold text-xl hover:bg-white hover:text-red-500 transition-all duration-300 text-center"
            >
              Ver catálogo
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}