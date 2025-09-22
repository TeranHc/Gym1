"use client";
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

// --- Datos de Ejemplo para el Blog ---
const blogPosts = [
  {
    id: 1,
    title: "5 Máquinas Esenciales para Empezar tu Gimnasio Comercial",
    author: "Carlos Estrada",
    date: "15 de Septiembre, 2025",
    image: "https://images.unsplash.com/photo-1599058917212-d750089bc07e?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    excerpt: "Si estás por abrir tu primer gimnasio, la selección inicial de equipo es crucial. Te guiamos a través de las 5 máquinas que no pueden faltar...",
    content: [
      { type: 'paragraph', text: "Abrir un gimnasio es una empresa emocionante, pero la elección del equipamiento adecuado puede ser abrumadora. Una selección inteligente no solo atrae a más miembros, sino que también garantiza su seguridad y satisfacción. A continuación, desglosamos las cinco máquinas fundamentales que forman la columna vertebral de cualquier gimnasio comercial exitoso." },
      { type: 'heading', text: "1. Jaula de Potencia (Power Rack)" },
      { type: 'paragraph', text: "La seguridad es lo primero. Una jaula de potencia es indispensable para ejercicios de peso libre como sentadillas y press de banca. Permite a los usuarios entrenar al límite de forma segura, incluso sin un compañero. Busca modelos con barras de seguridad ajustables y una barra de dominadas multi-agarre. Considera nuestro modelo <span class='font-semibold text-red-600'>RS-1043 Olympic Power Rack</span> para una solución completa." },
      { type: 'heading', text: "2. Prensa de Piernas (Leg Press)" },
      { type: 'paragraph', text: "No todos se sienten cómodos con las sentadillas libres. La prensa de piernas es una alternativa fantástica y segura para desarrollar la fuerza del tren inferior. Una máquina de leg press a 45 grados es un estándar de la industria. Nuestra <span class='font-semibold text-red-600'>RS-1023 Leg Press</span> es una opción premium para tu centro." },
       { type: 'heading', text: "3. Máquina de Poleas Ajustable (Functional Trainer)" },
      { type: 'paragraph', text: "La versatilidad es clave. Un entrenador funcional con dos poleas ajustables abre un universo de posibilidades. Es una de las piezas más utilizadas en cualquier gimnasio por su capacidad para adaptarse a todos los niveles de condición física. Echa un vistazo a nuestro <span class='font-semibold text-red-600'>FM-1001 Dual Adjustable Pulley</span>." },
      { type: 'heading', text: "4. Jalón al Pecho / Remo Bajo (Lat Pulldown / Low Row)" },
      { type: 'paragraph', text: "Para un desarrollo completo de la espalda, una máquina dual es inmejorable. El jalón al pecho (lat pulldown) es fundamental para la amplitud de la espalda y el remo bajo (low row) trabaja el grosor. Descubre nuestra máquina dual <span class='font-semibold text-red-600'>PF-1004 Lat Pull Down - Low Row</span>." },
       { type: 'heading', text: "5. Cinta de Correr Comercial (Treadmill)" },
      { type: 'paragraph', text: "Ningún gimnasio está completo sin una sólida sección de cardio. La cinta de correr sigue siendo la máquina más popular. Invierte en modelos comerciales con motor potente y buena amortiguación. Nuestras cintas <span class='font-semibold text-red-600'>RTC-900A Commercial Treadmill Touch Screen</span> son la elección perfecta." },
    ]
  },
  {
    id: 2,
    title: "Cardio: ¿Cuál es la Mejor Máquina para Quemar Grasa?",
    author: "Ana García",
    date: "10 de Septiembre, 2025",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    excerpt: "Analizamos la cinta de correr, la elíptica y la bicicleta estática para determinar cuál se adapta mejor a tus objetivos de pérdida de peso.",
    content: [
      { type: 'paragraph', text: "El debate es eterno en los gimnasios: ¿qué máquina de cardio es la reina indiscutible para quemar calorías y perder grasa? La verdad es que la 'mejor' máquina a menudo depende de tus objetivos, nivel de condición física y preferencias personales. Aquí comparamos tres de las más populares." },
      { type: 'heading', text: "La Cinta de Correr: El Rey de las Calorías" },
      { type: 'paragraph', text: "Si tu único objetivo es quemar la mayor cantidad de calorías en el menor tiempo posible, la cinta de correr es tu mejor aliada. Correr, especialmente con inclinación, es una actividad de alto impacto que demanda una gran cantidad de energía. Nuestros modelos como la <span class='font-semibold text-red-600'>RCT-900M Commercial Treadmill</span> ofrecen la intensidad y durabilidad que necesitas." },
      { type: 'heading', text: "La Elíptica: Entrenamiento Completo de Bajo Impacto" },
      { type: 'paragraph', text: "Para aquellos que necesitan cuidar sus articulaciones, la elíptica es una opción excepcional. Ofrece un entrenamiento de bajo impacto que simula el movimiento de correr sin el golpeteo en rodillas y tobillos. Además, sus manillares móviles involucran al tren superior. Consulta nuestras opciones como la <span class='font-semibold text-red-600'>RS-6600E Elliptical</span>." },
      { type: 'heading', text: "La Bicicleta Estática: Ideal para todos los Niveles" },
      { type: 'paragraph', text: "Ya sea en su versión vertical o reclinada, la bicicleta es perfecta para principiantes y para entrenamientos de intervalos de alta intensidad (HIIT). Es segura, fácil de usar y permite un control preciso sobre la resistencia. Explora nuestra gama, incluyendo la <span class='font-semibold text-red-600'>RE-6600U Upright Bike</span> y la <span class='font-semibold text-red-600'>RE-6600R Recumbent Bike</span>." },
    ]
  },
  {
    id: 3,
    title: "Mantenimiento Preventivo: 3 Tips para Alargar la Vida de tu Equipo",
    author: "Equipo RealLeader",
    date: "05 de Septiembre, 2025",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    excerpt: "El equipamiento de gimnasio es una gran inversión. Con estos sencillos consejos de mantenimiento, puedes asegurar que tus máquinas funcionen...",
    content: [
      { type: 'paragraph', text: "Un programa de mantenimiento preventivo es la forma más efectiva de proteger tu inversión y garantizar la seguridad de tus usuarios. Máquinas bien cuidadas no solo duran más, sino que también ofrecen una mejor experiencia. Aquí tienes tres áreas clave en las que centrarte." },
      { type: 'heading', text: "1. Limpieza Diaria y Desinfección" },
      { type: 'paragraph', text: "Es lo más básico pero a menudo lo más olvidado. El sudor es corrosivo y puede dañar la tapicería y la pintura con el tiempo. Establece un protocolo para que el personal limpie todas las superficies de contacto, almohadillas y marcos con un desinfectante apropiado varias veces al día. Esto no solo protege el equipo, sino que también es crucial para la higiene del gimnasio." },
      { type: 'heading', text: "2. Inspección y Ajuste de Cables y Correas" },
      { type: 'paragraph', text: "En las máquinas de fuerza con poleas, los cables son el componente que sufre más desgaste. Semanalmente, realiza una inspección visual en busca de signos de deshilachado o daño. Asegúrate de que la tensión sea la correcta y que las poleas giren suavemente. Un cable dañado es un riesgo de seguridad que debe ser reemplazado de inmediato." },
      { type: 'heading', text: "3. Lubricación de Puntos Móviles" },
      { type: 'paragraph', text: "Las máquinas guiadas, las cintas de correr y las bicicletas necesitan lubricación periódica para funcionar sin problemas. Consulta el manual de cada máquina para identificar los puntos de lubricación y el tipo de lubricante recomendado. Un mantenimiento adecuado en esta área previene el desgaste prematuro de piezas clave y asegura un movimiento fluido y silencioso." },
    ]
  },
];


export default function BlogPage() {
  const [selectedPost, setSelectedPost] = useState(blogPosts[0]);

  return (
    <div className="bg-white min-h-screen">
      {/* Encabezado de la página */}
      <section className="bg-gray-100 py-12 md:py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-black text-gray-900">Nuestro Blog</h1>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Consejos de expertos, guías de equipamiento y las últimas tendencias del mundo fitness para potenciar tu gimnasio.
          </p>
        </div>
      </section>

      {/* Contenido principal del blog */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">

          {/* Columna de la Lista de Artículos */}
          <aside className="lg:col-span-1">
            <div className="sticky top-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Artículos Recientes</h2>
              <div className="space-y-2">
                {blogPosts.map(post => (
                  <button
                    key={post.id}
                    onClick={() => setSelectedPost(post)}
                    className={`w-full text-left p-4 rounded-lg transition-all duration-200 border-l-4 ${
                      selectedPost.id === post.id 
                        ? 'bg-red-50 border-red-500 shadow-md' 
                        : 'border-transparent hover:bg-gray-100'
                    }`}
                  >
                    <h3 className="font-bold text-gray-800">{post.title}</h3>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-2">{post.excerpt}</p>
                  </button>
                ))}
              </div>
            </div>
          </aside>

          {/* Columna del Contenido del Artículo Seleccionado */}
          <main className="lg:col-span-3">
            <article className="bg-gray-50 rounded-xl shadow-lg overflow-hidden">
              <div className="relative w-full h-64 md:h-96">
                <Image 
                  src={selectedPost.image} 
                  alt={selectedPost.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 md:p-8">
                <div className="mb-4 text-sm text-gray-500">
                  <span>Por {selectedPost.author}</span>
                  <span className="mx-2">•</span>
                  <span>{selectedPost.date}</span>
                </div>
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  {selectedPost.title}
                </h1>
                <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                  {selectedPost.content.map((block, index) => {
                    switch (block.type) {
                      case 'heading':
                        return <h2 key={index} className="text-2xl font-bold text-gray-800 mt-8 mb-3">{block.text}</h2>;
                      case 'paragraph':
                        return <p key={index} className="mb-4" dangerouslySetInnerHTML={{ __html: block.text }} />;
                      default:
                        return null;
                    }
                  })}
                </div>
              </div>
            </article>
          </main>
          
        </div>
      </div>
    </div>
  );
}