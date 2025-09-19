"use client";
import { useState } from 'react';

export default function Contact() {
  const [isHovered, setIsHovered] = useState(null);

  return (
    <section className="bg-gradient-to-br from-gray-50 to-blue-50 py-6 sm:py-8 lg:py-12 px-3 sm:px-4 lg:px-6">
      {/* Hero Section */}
      <div className="text-center mb-8 sm:mb-10 lg:mb-12">
        <div className="flex items-center justify-center mb-3 sm:mb-4">
          <div className="h-px bg-red-600 w-8 sm:w-12 lg:w-16"></div>
          <span className="mx-2 sm:mx-3 lg:mx-4 text-gray-700 text-sm sm:text-base lg:text-lg font-medium">Conecta con nosotros</span>
          <div className="h-px bg-red-600 w-8 sm:w-12 lg:w-16"></div>
        </div>
        
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4 sm:mb-5 lg:mb-6 tracking-wide px-2">
          CONÉCTATE CON REALLEADER
        </h1>
        
        <p className="text-gray-700 text-base sm:text-lg leading-relaxed max-w-xl lg:max-w-2xl mx-auto mb-8 sm:mb-10 lg:mb-12 px-4">
          Visita nuestro showroom, conoce nuestros expertos y descubre cómo podemos 
          transformar tu espacio fitness
        </p>
      </div>
      {/* Quick Contact Bar */}
      <div className="max-w-6xl mx-auto mb-8 sm:mb-10 lg:mb-12">
        <div className="bg-white rounded-xl lg:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-xl grid lg:grid-cols-3 gap-4">
          {[
            {
              icon: "📧",
              title: "Email Comercial",
              desc: "ventas@realleadermex.com",
              action: () => window.location.href = `mailto:ventas@realleadermex.com?subject=Consulta%20sobre%20máquinas&body=Hola,%20me%20gustaría%20más%20información%20sobre%20el%20costo%20de%20las%20máquinas%20y%20si%20podría%20agendar%20una%20cita.`
            },
            {
              icon: "ℹ️",
              title: "Información General", 
              desc: "info@realleadermex.com",
              action: () => window.location.href = `mailto:info@realleadermex.com?subject=Consulta%20informativa&body=Hola,%20quisiera%20recibir%20más%20información%20sobre%20sus%20productos%20y%20servicios.%20También%20me%20gustaría%20saber%20cómo%20puedo%20contactarlos%20directamente%20o%20agendar%20una%20cita%20para%20visitar%20sus%20instalaciones.`
            },
            {
              icon: "💰",
              title: "Cotizaciones",
              desc: "Solicita tu propuesta",
              action: () => window.location.href = `mailto:ventas@realleadermex.com?subject=Solicitud%20de%20Cotización%20para%20Gimnasio&body=Hola,%20me%20interesa%20recibir%20una%20cotización%20de%20sus%20máquinas%20para%20mi%20gimnasio.%20Por%20favor%20indíquenme%20las%20opciones%20disponibles%20y%20los%20detalles%20de%20precios.%20Gracias.`
            }
          ].map((item, idx) => (
            <div 
              key={idx}
              onClick={item.action}
              onMouseEnter={() => setIsHovered(idx)}
              onMouseLeave={() => setIsHovered(null)}
              className={`mx-auto flex items-center gap-3 sm:gap-4 p-4 rounded-lg lg:rounded-xl cursor-pointer transition-all duration-300 border-2 border-gray-400 shadow-md hover:shadow-xl
                ${isHovered === idx ? 'bg-gray-50 transform -translate-y-1 shadow-xl' : 'hover:bg-gray-50'} 
                active:scale-95`}
            >
              <div className="text-2xl sm:text-3xl lg:text-4xl bg-gradient-to-br from-red-500 to-red-600 text-white w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-xl lg:rounded-2xl flex items-center justify-center shadow-lg flex-shrink-0">
                {item.icon}
              </div>
              <div className="min-w-0 flex-1">
                <h4 className="font-bold text-gray-800 text-sm sm:text-base truncate">{item.title}</h4>
                <p className="text-gray-600 text-xs sm:text-sm truncate">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>



      {/* Showroom Section */}
      <div id="showroom" className="max-w-7xl mx-auto mb-10 sm:mb-12 lg:mb-16">
        <div className="bg-white rounded-2xl lg:rounded-3xl overflow-hidden shadow-2xl">
          {/* Header */}
          <div className="bg-gradient-to-r from-gray-800 to-gray-600 text-white p-6 sm:p-8 lg:p-10 text-center">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4">
              Visita Nuestro Local Especializado
            </h2>
            <p className="text-lg sm:text-xl opacity-90 max-w-2xl mx-auto px-2">
              Conoce de cerca nuestro equipamiento. Prueba las máquinas y recibe 
              asesoramiento personalizado de nuestros expertos.
            </p>
          </div>

          {/* Content Grid - Reorganizado para eliminar el espacio en blanco */}
          <div className="p-6 sm:p-8 lg:p-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
              
              {/* Location Card - Lado izquierdo */}
              <div className="bg-gray-50 p-4 sm:p-6 lg:p-8 rounded-xl lg:rounded-2xl border-l-4 border-red-500">
                <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-5 lg:mb-6">
                  <div className="w-10 h-10 sm:w-11 sm:h-11 lg:w-12 lg:h-12 bg-red-500 rounded-lg lg:rounded-xl flex items-center justify-center text-white text-lg sm:text-xl flex-shrink-0">
                    🏢
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-800">Local Principal</h3>
                </div>
                
                {[
                  { icon: "🌃", label: "Lugar", value: "Puebla, México" },
                  { icon: "📧", label: "Email Ventas", value: "ventas@realleadermex.com" },
                  { icon: "📧", label: "Email Info", value: "info@realleadermex.com" },
                  { icon: "⏰", label: "Atención", value: "Lunes a Viernes: 9:00 AM - 6:00 PM" },
                  { icon: "🚚", label: "Cobertura", value: "Servicio a toda la República Mexicana" }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2 sm:gap-3 mb-2 sm:mb-3 text-gray-700 text-sm sm:text-base">
                    <span className="text-base sm:text-lg lg:text-xl flex-shrink-0 mt-0.5">{item.icon}</span>
                    <span className="font-semibold min-w-16 sm:min-w-20 flex-shrink-0">{item.label}:</span>
                    <span className="break-words">{item.value}</span>
                  </div>
                ))}
              </div>

              {/* Services Grid - Lado derecho */}
              <div className="grid grid-cols-1  sm:grid-cols-2 gap-3 sm:gap-4">
                {[
                  { icon: "🏋️", title: "Prueba de Equipos", desc: "Experimenta nuestras máquinas antes de comprar" },
                  { icon: "👨‍💼", title: "Asesoría Experta", desc: "Consulta con nuestros especialistas" },
                  { icon: "📋", title: "Cotización Inmediata", desc: "Recibe tu propuesta detallada" },
                  { icon: "🎯", title: "Diseño Personalizado", desc: "Planificamos tu gimnasio ideal" }
                ].map((service, idx) => (
                  <div key={idx} className="bg-white p-4 sm:p-5 rounded-xl lg:rounded-2xl shadow-md text-center hover:shadow-lg transition-shadow duration-300 border border-gray-100">
                    <div className="text-2xl sm:text-3xl mb-2">{service.icon}</div>
                    <h4 className="font-bold text-gray-800 mb-2 text-[20px] ">{service.title}</h4>
                    <p className="text-gray-600 text-[17px] leading-tight">{service.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            {/* CTA Buttons - Ahora centrados debajo */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-6 sm:mt-8 lg:mt-10">
            <button 
                onClick={() => window.location.href = 
                `mailto:info@realleadermex.com?subject=Solicitud%20de%20Visita%20al%20Showroom&body=Hola,%20quisiera%20agendar%20una%20visita%20a%20su%20showroom%20para%20conocer%20las%20máquinas%20y%20productos%20disponibles.%20Por%20favor%20indíquenme%20las%20fechas%20y%20horarios%20disponibles.%20Gracias.`}
                className="flex-1 bg-red-500 text-white py-3 sm:py-4 px-4 sm:px-6 rounded-lg lg:rounded-xl font-bold hover:bg-red-600 transition-colors duration-300 flex items-center justify-center gap-2 text-sm sm:text-base active:scale-95"
            >
                📧 Agendar Visita
            </button>
            <button 
                onClick={() => window.location.href = 
                `mailto:ventas@realleadermex.com?subject=Solicitud%20de%20Cotización%20para%20Gimnasio&body=Hola,%20me%20interesa%20recibir%20una%20cotización%20de%20sus%20máquinas%20para%20mi%20gimnasio.%20Por%20favor%20indíquenme%20las%20opciones%20disponibles%20y%20los%20detalles%20de%20precios.%20Gracias.`}
                className="flex-1 bg-gray-100 text-gray-800 py-3 sm:py-4 px-4 sm:px-6 rounded-lg lg:rounded-xl font-bold hover:bg-gray-200 border-2 border-gray-200 hover:border-red-500 transition-all duration-300 flex items-center justify-center gap-2 text-sm sm:text-base active:scale-95"
            >
                💰 Cotizar
            </button>
            </div>

          </div>
        </div>
      </div>

      {/* Why Visit Section */}
      <div className="max-w-6xl mx-auto mb-10 sm:mb-12 lg:mb-16">
        <div className="bg-white rounded-2xl lg:rounded-3xl p-6 sm:p-8 lg:p-10 shadow-2xl">
          <div className="text-center mb-8 sm:mb-10 lg:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-3 sm:mb-4">
              ¿Por qué visitarnos?
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto px-2">
              Más de 15 años de experiencia nos avalan. Descubre por qué somos la mejor 
              opción para tu proyecto fitness.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 lg:gap-8">
            {[
              {
                icon: "👁️",
                title: "Experiencia Real",
                desc: "Prueba personalmente cada máquina, siente la calidad de los materiales y comprueba la suavidad de los movimientos antes de decidir."
              },
              {
                icon: "🎓", 
                title: "Asesoría Especializada",
                desc: "Nuestros expertos te guiarán en la selección perfecta según tu espacio, presupuesto y objetivos específicos."
              },
              {
                icon: "🛠️",
                title: "Servicio Integral",
                desc: "Desde la entrega hasta la instalación y mantenimiento. Un solo contacto para todo tu proyecto fitness."
              }
            ].map((benefit, idx) => (
              <div 
                key={idx}
                className="text-center p-6 sm:p-7 lg:p-8 rounded-xl lg:rounded-2xl bg-gray-50 hover:bg-white hover:shadow-lg transition-all duration-300 hover:-translate-y-1 sm:hover:-translate-y-2"
              >
                <div className="w-16 h-16 sm:w-18 sm:h-18 lg:w-20 lg:h-20 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-5 lg:mb-6 text-white text-2xl sm:text-3xl">
                  {benefit.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 sm:mb-4">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Social Media Section */}
      <div className="max-w-4xl mx-auto text-center">
        <h3 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8 text-gray-800 px-4">Síguenos en nuestras redes</h3>
        
        <div className="flex justify-center gap-4 sm:gap-6 mb-6 sm:mb-8 px-4">
          {/* Facebook */}
          <button 
            onClick={() => window.open('https://www.facebook.com/Realleadermx', '_blank')}
            className="bg-blue-600 text-white p-3 sm:p-4 rounded-full hover:bg-blue-700 transform hover:scale-110 active:scale-95 transition-all duration-300 shadow-lg hover:shadow-xl"
            title="Síguenos en Facebook"
          >
            <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
          </button>

          {/* Instagram */}
          <button 
            onClick={() => window.open('https://www.instagram.com/realleader_mexico/', '_blank')} 
            className="bg-gradient-to-br from-purple-600 to-pink-500 text-white p-3 sm:p-4 rounded-full hover:from-purple-700 hover:to-pink-600 transform hover:scale-110 active:scale-95 transition-all duration-300 shadow-lg hover:shadow-xl" 
            title="Síguenos en Instagram"
          >
            <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.40s-.644-1.44-1.439-1.44z"/>
            </svg>
          </button>

          {/* TikTok */}
          <button 
            onClick={() => window.open('https://www.tiktok.com/@realleader.mexico?_t=ZS-8zprbDCSPi4&_r=1', '_blank')}
            className="bg-black text-white p-3 sm:p-4 rounded-full hover:bg-gray-800 transform hover:scale-110 active:scale-95 transition-all duration-300 shadow-lg hover:shadow-xl"
            title="Síguenos en TikTok"
          >
            <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
            </svg>
          </button>
        </div>

        <p className="text-gray-600 text-sm sm:text-base px-4">
          Mantente al día con nuestras últimas ofertas y novedades del mundo fitness.
        </p>
      </div>

      {/* Email Float Button */}
      <button
        onClick={() => window.location.href='mailto:ventas@realleadermex.com?subject=Consulta desde la web'}
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 lg:bottom-8 lg:right-8 w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-red-500 to-red-600 text-white rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 z-50 flex items-center justify-center text-lg sm:text-xl lg:text-2xl animate-bounce"
        title="Contactar por Email"
      >
        📧
      </button>
    </section>
  );
}