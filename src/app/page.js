'use client';
import { useState, useEffect } from 'react';
import { allProducts } from './pages/tienda-billar/products';
import Link from "next/link";
import Image from 'next/image';

export default function EalLeaderHomePage() {
  const [activeTab, setActiveTab] = useState(0);
  const [currentProduct, setCurrentProduct] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const products = [
    { name: "Mancuernas Profesionales", price: "$299", image: "🏋️" },
    { name: "Máquina Multifuerza", price: "$1,599", image: "💪" },
    { name: "Cinta de Correr Premium", price: "$2,299", image: "🏃" }
  ];

  // Configuración del carousel
  const productsPerSlide = 3;
  const totalSlides = Math.ceil(allProducts.length / productsPerSlide);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentProduct((prev) => (prev + 1) % products.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [products.length]); // ✅ Agregar dependencia

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const getCurrentProducts = () => {
    const start = currentSlide * productsPerSlide;
    return allProducts.slice(start, start + productsPerSlide);
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat('es-MX', {
      style: 'currency',
      currency: 'MXN',
      minimumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Hero Section - With Background Image */}
      <section className="min-h-[70vh] flex items-center relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image  
          src="https://www.salter.es/modules/ph_simpleblog/covers/271.png" 
          alt="Equipamiento de gimnasio profesional"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="max-w-2xl space-y-8">
          {/* Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight text-white">
            Tu Gimnasio.
            <br />
            <span className="text-red-400">Nuestro Equipamiento.</span>
          </h1>

          {/* Description */}
          <p className="text-lg sm:text-xl text-white/90 leading-relaxed font-light max-w-xl">
            RealLeader distribuye equipamiento de gimnasio de la más alta calidad. Desde máquinas profesionales hasta accesorios especializados para crear el gimnasio perfecto.
          </p>

          {/* Enhanced Stats */}
          <div className="flex  gap-6 pt-8">
            {/* Productos */}
            <div className="bg-black/10 backdrop-blur-md rounded-2xl px-6 py-4 border border-red-500/30 hover:border-red-500/60 transition-all duration-300 hover:scale-105">
              <div className="text-3xl font-black text-white mb-1">500+</div>
              <div className="text-sm text-white/80 font-semibold uppercase tracking-wider">Productos</div>
            </div>

            {/* Garantía */}
            <div className="bg-black/10 backdrop-blur-md rounded-2xl px-6 py-4 border border-red-500/30 hover:border-red-500/60 transition-all duration-300 hover:scale-105">
              <div className="text-3xl font-black text-white mb-1">5</div>
              <div className="text-sm text-white/80 font-semibold uppercase tracking-wider">Años Garantía</div>
            </div>

            {/* Años de Experiencia */}
            <div className="bg-black/10 backdrop-blur-md rounded-2xl px-6 py-4 border border-red-500/30 hover:border-red-500/60 transition-all duration-300 hover:scale-105">
              <div className="text-3xl font-black text-white mb-1">15+</div>
              <div className="text-sm text-white/80 font-semibold uppercase tracking-wider">Años Experiencia</div>
            </div>

            {/* Marcas */}
            <div className="bg-black/10 backdrop-blur-md rounded-2xl px-6 py-4 border border-red-500/30 hover:border-red-500/60 transition-all duration-300 hover:scale-105">
              <div className="text-3xl font-black text-white mb-1">50+</div>
              <div className="text-sm text-white/80 font-semibold uppercase tracking-wider">Marcas Premium</div>
            </div>
          </div>
        </div>
      </div>
    </section>

      {/* Equipment Benefits */}
      <section className="py-12 bg-gray-100 text-black">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-9">
            {/* Image */}
            <div className="relative">
              <div className="rounded-3xl overflow-hidden h-96">
                <Image  
                  src="https://www.hola.com/horizon/landscape/8f63637f78d5-maquinasgimnasio-t.jpg?im=Resize=(640),type=downsize" 
                  alt="Equipamiento profesional de gimnasio"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 to-orange-500/20"></div>
              </div>
            </div>

            {/* Content */}
            <div className="space-y-8">
              <div className="text-sm font-bold text-red-500 tracking-wider uppercase">
                Equipamiento Premium
              </div>
              
              <h2 className="text-5xl font-black leading-tight">
                La mejor calidad en
                <br />
                equipamiento fitness.
              </h2>
              
              <p className="text-xl text-gray-600">
                Ofrecemos equipamiento de las mejores marcas internacionales con garantía extendida y servicio técnico especializado.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-3"></div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Máquinas cardiovasculares de última tecnología.</h3>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-3"></div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Equipos de fuerza y musculación profesional.</h3>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-3"></div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Accesorios y equipos de entrenamiento funcional.</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Products Showcase Section - AQUÍ ESTÁ EL CAROUSEL */}
          <div className="border-t border-gray-200 pt-10">
            <div className="text-center mb-5">

              <h3 className="text-3xl md:text-4xl font-black text-gray-900 mb-2">
                Nuestros produtos
              </h3>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Conoce nuestra variedad de productos diseñados para llevar tu gimnasio al siguiente nivel.

              </p>
            </div>

            {/* Carousel Container */}
            <div className="relative ">
              {/* Navigation Buttons */}
              <button
                onClick={prevSlide}
                className="absolute left-40 top-1/2 transform -translate-y-1/2 z-10 bg-white hover:bg-gray-50 text-gray-800 p-2 rounded-full shadow-lg border hover:border-red-300 transition-all duration-300 hover:scale-105"
                disabled={totalSlides <= 1}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <button
                onClick={nextSlide}
                className="absolute right-40 top-1/2 transform -translate-y-1/2 z-10 bg-white hover:bg-gray-50 text-gray-800 p-2 rounded-full shadow-lg border hover:border-red-300 transition-all duration-300 hover:scale-105"
                disabled={totalSlides <= 1}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>

              {/* Products Grid - SECCIÓN AJUSTADA */}
              <div className="overflow-hidden mx-4">
                <div 
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                  {Array.from({ length: totalSlides }, (_, slideIndex) => (
                    <div key={slideIndex} className="w-full flex-shrink-0">
                      {/* Contenedor más pequeño: max-w-3xl en lugar de 4xl */}
                      <div className="max-w-3xl mx-auto">
                        {/* Grid con 3 columnas */}
                        <div className="grid grid-cols-3 gap-6">
                          {allProducts.slice(slideIndex * productsPerSlide, (slideIndex + 1) * productsPerSlide).map((product) => (
                            <div
                              key={product.id}
                              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 group"
                            >
                              {/* Product Image */}
                              <div className="aspect-square bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-4 relative overflow-hidden">
                                <img
                                  src={product.image}
                                  alt={product.alt}
                                  className="max-w-full max-h-full object-contain transition-transform duration-300 group-hover:scale-105"
                                />
                                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                                  <div className="bg-white/90 backdrop-blur-sm rounded-full p-1.5 shadow-md">
                                    <svg className="w-4 h-4 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                    </svg>
                                  </div>
                                </div>
                              </div>

                              {/* Product Info */}
                              <div className="p-4">
                                {/* Category Badge */}
                                <div className="mb-2">
                                  <span className={`inline-flex items-center gap-1 px-2 py-1 text-xs font-semibold rounded-full ${
                                    product.category === 'Billar' ? 'bg-red-100 text-red-700' :
                                    product.category === 'Futbolito' ? 'bg-green-100 text-green-700' :
                                    product.category === 'Poker' ? 'bg-purple-100 text-purple-700' :
                                    'bg-gray-100 text-gray-700'
                                  }`}>
                                    {product.category === 'Billar' && '🎱'}
                                    {product.category === 'Futbolito' && '⚽'}
                                    {product.category === 'Poker' && '♠️'}
                                    {product.category}
                                  </span>
                                </div>

                                {/* Product Name */}
                                <h3 className="font-bold text-gray-900 mb-2 text-base line-clamp-2 group-hover:text-red-600 transition-colors">
                                  {product.name}
                                </h3>

                                {/* Product Description */}
                                <p className="text-gray-600 text-xs mb-3 line-clamp-2">
                                  {product.description}
                                </p>

                                {/* Price */}
                                <div className="mb-3">
                                  <span className="text-lg font-bold text-red-600">
                                    {formatPrice(product.price)}
                                  </span>
                                </div>

                                {/* Action Button */}
                                <button 
                                  onClick={() => {
                                    const message = encodeURIComponent(
                                      `Hola, estoy interesado en este producto:\n` +
                                      `- Producto: ${product.name}\n` +
                                      `- Precio: ${formatPrice(product.price)}\n` +
                                      `- Categoría: ${product.category}\n\n` +
                                      `¿Podrían proporcionarme más información?`
                                    );
                                    window.open(`https://wa.me/5212213683565?text=${message}`, "_blank");
                                  }}
                                  className="w-full bg-red-500 hover:bg-red-600 text-white px-3 py-2 rounded-lg font-semibold transition-all text-xs flex items-center justify-center gap-2"
                                >
                                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                                  </svg>
                                  Preguntar
                                </button>
                              </div>
                            </div>
                          ))}
                        </div>
                        
                      </div>
                    </div>
                  ))}
                </div>
                
              </div>



              {/* Slide Indicators */}
              {totalSlides > 1 && (
                <div className="flex justify-center mt-6 space-x-2">
                  {Array.from({ length: totalSlides }, (_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        currentSlide === index ? 'bg-red-500' : 'bg-gray-300 hover:bg-gray-400'
                      }`}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
          <div className="flex justify-center pt-4">
          <Link href="/pages/tienda-billar">
    <button className="bg-black text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-gray-800 transition-all duration-300">
      Ver Catálogo
    </button>
  </Link>
</div>

        </div>
        
      </section>

      {/* Services Grid */}
      <section className="py-12 bg-zinc-800">
        <div className="max-w-7xl mx-auto px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-1">
            {/* Content */}
            <div className="space-y-8">

              <h2 className="text-5xl font-black leading-tight text-white">
                Servicios <span className="text-red-500">Integrales</span>
                <br />
                para tu proyecto.
              </h2>
              
              <p className="text-xl text-gray-400">
                Desde la consultoría hasta la instalación completa, te acompañamos en cada paso para crear el gimnasio ideal.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-3"></div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-white">Diseño y consultoría personalizada</h3>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-3"></div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-white">Instalación y montaje profesional</h3>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-3"></div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-white">Mantenimiento y soporte técnico</h3>
                  </div>
                </div>
              </div>

              {/* O si prefieres con onClick para más control */}
              <button 
                onClick={() => {
                  document.getElementById('formulario-cotizacion').scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'center' 
                  });
                }}
                className="bg-red-500 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-red-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Solicitar Cotización
              </button>
            </div>

            {/* Image */}
            <div className="relative">
              <div className="rounded-3xl overflow-hidden h-96">
                <Image  
                  src="https://poolsecuritysolution.com/wp-content/uploads/servicio-tecnico-para-equipos-y-maquinas-de-gimnasio.jpg" 
                  alt="Instalación profesional de equipamiento de gimnasio"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 to-orange-500/20"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección Quiénes Somos con Formulario */}
      <section className="py-12 bg-neutral-700" id="quienes-somos">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-12 items-start">
            
            {/* Imagen representativa - Más compacta */}
            <div className="xl:col-span-1 py-10">
              <div className="rounded-3xl overflow-hidden h-80">
                <Image  
                  src="https://www.gymtek.com.ec/wp-content/uploads/2019/08/como-elegir-equipos-de-gimnasio-gymtek.jpg" 
                  alt="Gimnasio con equipamiento profesional"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 to-black/30"></div>
              </div>
            </div>
            
            {/* Información */}
            <div className="xl:col-span-1 space-y-6">
              <div className="text-xs font-bold text-red-500 tracking-wider uppercase">
                Quiénes Somos
              </div>
              
              <h2 className="text-3xl font-black leading-snug text-white">
                Pasión por el <span className="text-red-500">Fitness</span>,<br />
                compromiso con tu gimnasio.
              </h2>
              
              <p className="text-sm text-gray-400 leading-relaxed">
                Somos una empresa dedicada a la venta de máquinas y equipamiento profesional
                para gimnasios. Nuestro objetivo es ayudarte a crear espacios de entrenamiento 
                modernos, seguros y funcionales, con productos de la más alta calidad.
              </p>
              
              <ul className="space-y-3">
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
            
            {/* Formulario - Ahora con fondo blanco y borde rojo */}
            <div className="xl:col-span-1" id="formulario-cotizacion">
              <div className="bg-white p-8 rounded-2xl shadow-xl border-2 border-red-500">
                <h3 className="text-xl font-bold text-gray-800 mb-6 text-center">
                  Solicita tu Cotización
                </h3>
                
                <form className="space-y-4">
                  <div>
                    <input 
                      type="text" 
                      placeholder="Nombre completo" 
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-800 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                    />
                  </div>
                  
                  <div>
                    <input 
                      type="email" 
                      placeholder="Correo electrónico" 
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-800 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                    />
                  </div>
                  
                  <div>
                    <input 
                      type="tel" 
                      placeholder="Número de teléfono" 
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-800 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                    />
                  </div>
        
                  <div>
                    <input 
                      type="text" 
                      placeholder="Indica tu presupuesto" 
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-800 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                    />
                  </div>
                  
                  <button 
                    type="submit" 
                    className="w-full bg-red-500 text-white py-3 rounded-xl font-bold hover:bg-red-600 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
                  >
                    Enviar Cotización
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Location Section */}
<section className="py-10 bg-gray-100 text-black">
  <div className="max-w-7xl mx-auto px-8">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      {/* Content */}
      <div className="space-y-8">
        <h2 className="text-5xl font-black leading-tight">
          Visita nuestro
          <br />
          Local especializado.
        </h2>
        
        <p className="text-xl text-gray-600">
          Conoce de cerca nuestro equipamiento. Prueba las máquinas y recibe asesoramiento personalizado de nuestros expertos.
        </p>

        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <div className="text-2xl">📍</div>
            <div>
              <h3 className="text-xl font-bold mb-2">Local Principal</h3>
              <p className="text-gray-600">Av. 9 de Octubre 1234, Puebla, Mexico</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="text-2xl">🕒</div>
            <div>
              <h3 className="text-xl font-bold mb-2">Horarios de Atención</h3>
              <p className="text-gray-600">Lunes a Viernes: 9:00 AM - 6:00 PM</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="text-2xl">🚚</div>
            <div>
              <h3 className="text-xl font-bold mb-2">Entrega e Instalación</h3>
              <p className="text-gray-600">Servicio a toda la República Mexicana</p>
            </div>
          </div>
        </div>

        {/* Botones de acción */}
        <div className="flex flex-col sm:flex-row gap-4">
          <button 
            onClick={() => {
              document.getElementById('formulario-cotizacion').scrollIntoView({ 
                behavior: 'smooth',
                block: 'center' 
              });
            }}
            className="bg-red-500 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-red-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Agendar Visita
          </button>
        </div>
      </div>

      {/* Real Google Map */}
      <div className="relative">
        <div className="rounded-3xl overflow-hidden shadow-2xl h-96">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.6168089282453!2d-99.14370368507614!3d19.43682928689048!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1f92b8c8b5555%3A0x5555555555555555!2sCalle%20Col%C3%B3n%20Balderas%2C%20Colonia%20Centro%2C%20Cuauht%C3%A9moc%2C%2006040%20Ciudad%20de%20M%C3%A9xico%2C%20CDMX%2C%20M%C3%A9xico!5e0!3m2!1ses-419!2smx!4v1699999999999!5m2!1ses-419!2smx"
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            className="filter brightness-90 hover:brightness-100 transition-all duration-300"
          ></iframe>
        </div>

        {/* Redes Sociales debajo del mapa */}
        <div className="mt-8 text-center">
          <h3 className="text-lg font-bold mb-4 text-gray-800">Síguenos en nuestras redes</h3>
          
          <div className="flex justify-center gap-6">
            {/* Facebook */}
            <button 
              onClick={() => window.open('https://facebook.com/tu-pagina', '_blank')}
              className="bg-blue-600 text-white p-4 rounded-full hover:bg-blue-700 transform hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl"
              title="Síguenos en Facebook"
            >
              <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </button>


            <button
              onClick={() => window.open('https://instagram.com/tu-perfil', '_blank')}
              className="bg-gradient-to-br from-purple-600 to-pink-500 p-4 rounded-full border-2 border-black hover:from-purple-700 hover:to-pink-600 transform hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl"
              title="Síguenos en Instagram"
            >
              <svg
                className="w-7 h-7"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <linearGradient id="igGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#8b5cf6" />
                    <stop offset="100%" stopColor="#ec4899" />
                  </linearGradient>
                </defs>
                <path
                  fill="url(#igGradient)"
                  d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
                />
              </svg>
            </button>

            {/* TikTok */}
            <button 
              onClick={() => window.open('https://tiktok.com/@tu-perfil', '_blank')}
              className="bg-black text-white p-4 rounded-full hover:bg-gray-800 transform hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl"
              title="Síguenos en TikTok"
            >
              <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24" >
                <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
              </svg>
            </button>
          </div>

          {/* Texto adicional */}
          <p className="text-sm text-gray-600 mt-4">
            Mantente al día con nuestras últimas ofertas y novedades del mundo fitness.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* CTA Final */}
      <section className="py-15 bg-zinc-800 from-red-500 to-orange-500">
        <div className="max-w-4xl mx-auto text-center px-8">
          <h2 className="text-5xl lg:text-6xl font-black mb-8">
            Construye el Gimnasio de tus Sueños
          </h2>
          <p className="text-2xl text-white/90 mb-12 font-light">
            Únete a cientos de gimnasios que confían en nuestro equipamiento
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button 
              onClick={() => {
    document.getElementById('formulario-cotizacion').scrollIntoView({ 
      behavior: 'smooth',
      block: 'center' 
    });
  }}
            className="bg-white text-red-500 px-12 py-6 rounded-2xl font-bold text-xl hover:bg-gray-100 transition-all duration-300 shadow-2xl">
              Solicitar Cotización
            </button>
              <Link href="/pages/tienda-billar">

                <button className="border-2 border-white text-white px-12 py-6 rounded-2xl font-bold text-xl hover:bg-white hover:text-red-500 transition-all duration-300">
                Ver catalogo
              </button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    );
  }