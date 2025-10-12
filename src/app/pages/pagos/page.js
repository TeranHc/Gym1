'use client';

import React from 'react';
import { CreditCard, Banknote, HandCoins, Info, ShoppingBag } from 'lucide-react';

const PaymentMethods = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      {/* Encabezado decorativo */}
      <div className="bg-gradient-to-r from-teal-500 to-cyan-600 py-16 text-white text-center py-16 text-white text-center">
        <div className="flex justify-center mb-4">
          <CreditCard className="h-14 w-14 text-white" />
        </div>
        <h1 className="text-4xl font-bold uppercase">Métodos de Pago</h1>
        <p className="text-lg opacity-90 mt-2">
          Realiza tus compras con seguridad y comodidad usando nuestras opciones de pago.
        </p>
      </div>


            {/* --- SECCIÓN DE PRODUCTOS DESTACADOS CON CARRUSEL --- 
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
      </section>*/}

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        {/* Métodos disponibles */}
        <div className="grid gap-6">
          <div className="bg-white shadow-lg rounded-xl p-6 flex items-start gap-4 hover:shadow-xl transition-shadow duration-300">
            <ShoppingBag className="h-5 w-5 text-teal-600 mt-1" />
            <div>
              <h2 className="font-semibold text-lg text-gray-800">Club Pycca</h2>
              <p className="text-sm text-gray-700 mt-1">
                Paga de forma segura con tu cuenta Club Pycca. Los pagos se procesan rápidamente, garantizando una experiencia sin complicaciones para tus compras o servicios veterinarios.
              </p>
            </div>
          </div>

          <div className="bg-white shadow-lg rounded-xl p-6 flex items-start gap-4 hover:shadow-xl transition-shadow duration-300">
            <CreditCard className="h-5 w-5 text-teal-600 mt-1" />
            <div>
              <h2 className="font-semibold text-lg text-gray-800">Tarjetas Bancarias</h2>
              <p className="text-sm text-gray-700 mt-1">
                Aceptamos tarjetas de crédito y débito de las principales entidades bancarias. Todas las transacciones cumplen con los estándares PCI DSS para proteger tus datos personales y financieros.
              </p>
            </div>
          </div>

          <div className="bg-white shadow-lg rounded-xl p-6 flex items-start gap-4 hover:shadow-xl transition-shadow duration-300">
            <Banknote className="h-5 w-5 text-teal-600 mt-1" />
            <div>
              <h2 className="font-semibold text-lg text-gray-800">Transferencias Bancarias</h2>
              <p className="text-sm text-gray-700 mt-1">
                Realiza pagos mediante transferencia bancaria directa. Los detalles de la cuenta se proporcionan al confirmar tu pedido. Procesamos el envío o servicio tras verificar el pago.
              </p>
            </div>
          </div>

          <div className="bg-white shadow-lg rounded-xl p-6 flex items-start gap-4 hover:shadow-xl transition-shadow duration-300">
            <HandCoins className="h-5 w-5 text-teal-600 mt-1" />
            <div>
              <h2 className="font-semibold text-lg text-gray-800">Efectivo</h2>
              <p className="text-sm text-gray-700 mt-1">
                Paga en efectivo al recoger tu pedido en tienda o al recibirlo en tu domicilio (disponible solo para entregas locales directas). Garantizamos un proceso confiable y seguro.
              </p>
            </div>
          </div>

          <div className="bg-white shadow-lg rounded-xl p-6 flex items-start gap-4 hover:shadow-xl transition-shadow duration-300">
            <Info className="h-5 w-5 text-yellow-500 mt-1" />
            <div>
              <h2 className="font-semibold text-lg text-yellow-600">Información Importante</h2>
              <ul className="list-disc pl-5 text-sm text-gray-700 mt-2 space-y-2">
                <li>No aceptamos billeteras digitales como PayPhone o DLocal.</li>
                <li>No ofrecemos financiamiento, planes de pago especiales ni seguros para mascotas.</li>
                <li>Todos los pagos deben completarse para confirmar pedidos o citas veterinarias.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Pie de contacto */}
        <div className="text-center text-sm text-gray-600 mt-12">
          ¿Dudas sobre los pagos? Escríbenos a{' '}
          <a href="mailto:pagos@petvetcare.com" className="font-medium text-teal-700 hover:underline">
            pagos@saludpet.com
          </a>{' '}
          o llámanos al{' '}
          <a href="tel:+1234567890" className="font-medium text-teal-700 hover:underline">
            +593 4 123-4567
          </a>.
        </div>
      </div>
    </div>
  );
};

export default PaymentMethods;