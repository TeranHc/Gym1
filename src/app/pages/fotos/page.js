"use client";
import { useState, useEffect } from 'react';
import Image from 'next/image';

// --- Datos organizados (sin cambios aquí) ---
const galleryImages = [
  { id: 'img-1', src: "/galeriafoto/1g.jpg", alt: "Imagen de galería 1", category: "General" },
  { id: 'img-2', src: "/galeriafoto/2g.jpg", alt: "Imagen de galería 2", category: "General" },
  { id: 'img-3', src: "/galeriafoto/3g.jpg", alt: "Imagen de galería 3", category: "General" },
  { id: 'img-4', src: "/galeriafoto/4g.jpg", alt: "Imagen de galería 4", category: "General" },
  { id: 'img-5', src: "/galeriafoto/5g.jpg", alt: "Imagen de galería 5", category: "General" },
  { id: 'img-6', src: "/galeriafoto/6g.png", alt: "Imagen de galería 6", category: "General" },
  { id: 'img-7', src: "/galeriafoto/7g.jpg", alt: "Imagen de galería 7", category: "General" },
  { id: 'img-8', src: "/galeriafoto/8g.jpg", alt: "Imagen de galería 8", category: "General" },
  { id: 'img-9', src: "/galeriafoto/9g.jpg", alt: "Imagen de galería 9", category: "General" },
  { id: 'img-10', src: "/galeriafoto/10g.jpg", alt: "Imagen de galería 10", category: "General" },
  { id: 'img-11', src: "/galeriafoto/11g.jpg", alt: "Imagen de galería 10", category: "General" },
  { id: 'img-12', src: "/galeriafoto/12g.jpg", alt: "Imagen de galería 10", category: "General" },
  { id: 'img-13', src: "/galeriafoto/13g.jpg", alt: "Imagen de galería 10", category: "General" },
  { id: 'img-14', src: "/galeriafoto/14g.jpg", alt: "Imagen de galería 10", category: "General" },
  { id: 'img-15', src: "/galeriafoto/15g.jpg", alt: "Imagen de galería 10", category: "General" },
  { id: 'img-16', src: "/galeriafoto/16g.jpg", alt: "Imagen de galería 10", category: "General" },
  { id: 'img-17', src: "/galeriafoto/17g.jpg", alt: "Imagen de galería 10", category: "General" },
  { id: 'img-18', src: "/galeriafoto/18g.jpg", alt: "Imagen de galería 10", category: "General" },
  { id: 'img-19', src: "/galeriafoto/19g.jpg", alt: "Imagen de galería 10", category: "General" },
  { id: 'img-20', src: "/galeriafoto/20g.jpg", alt: "Imagen de galería 20", category: "General" },
];

const galleryVideos = [
  // Usamos la propiedad 'featured' para identificar los videos horizontales grandes
  { id: 'vid-uso-1', src: "/galeriavideo/1uso.mp4", title: "Uso Correcto de Equipo", category: "Uso de Máquinas", featured: true },
  { id: 'vid-uso-2', src: "/galeriavideo/2uso.mp4", title: "Técnica de Máquina", category: "Uso de Máquinas" },
  { id: 'vid-uso-3', src: "/galeriavideo/3uso.mp4", title: "Guía de Uso", category: "Uso de Máquinas", featured: true },
  
  // Videos generales
  { id: 'vid-demo-1', src: "/galeriavideo/1entrenando.mp4", title: "Demostración de Entrenamiento", category: "Demostración" },
{ id: 'vid-demo-2', src: "/galeriavideo/1presentacion.mp4", title: "Presentación del Gimnasio", category: "Uso de Máquinas" },
  { id: 'vid-demo-3', src: "/galeriavideo/2entrenando.mp4", title: "Rutina Avanzada", category: "Demostración" },
  { id: 'vid-demo-4', src: "/galeriavideo/3entrenando.mp4", title: "Entrenamiento Funcional", category: "Demostración" },
  { id: 'vid-demo-5', src: "/galeriavideo/4entrenando.mp4", title: "Sesión de Cardio", category: "Demostración" },
  { id: 'vid-demo-6', src: "/galeriavideo/5entrenando.mp4", title: "Fuerza y Resistencia", category: "Demostración" },
  { id: 'vid-demo-7', src: "/galeriavideo/6entrenando.mp4", title: "Entrenamiento de Alta Intensidad", category: "Demostración" },
];

const allMedia = [
  ...galleryImages.map(img => ({ ...img, type: 'image' })),
  ...galleryVideos.map(vid => ({ ...vid, type: 'video' }))
].sort(() => Math.random() - 0.5); 


export default function GalleryPage() {
  const [filter, setFilter] = useState('all');
  const [media, setMedia] = useState([]);

  useEffect(() => {
    if (filter === 'all') {
      setMedia(allMedia);
    } else {
      const filtered = allMedia.filter(item => item.category === filter);
      setMedia(filtered);
    }
  }, [filter]);

  // --> CAMBIO: Separamos los videos para el diseño personalizado
  const featuredVideos = media.filter(item => item.type === 'video' && item.featured);
  const normalVideo = media.find(item => item.type === 'video' && !item.featured);


  return (
    <div className="bg-white min-h-screen">
      <section className="bg-gray-100 py-12 md:py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-black text-gray-900">Realleader in the World</h1>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Explora nuestros proyectos y videos demostrativos de uso de equipo.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-wrap justify-center gap-3 md:gap-4">
            <button 
              onClick={() => setFilter('all')} 
              className={`py-2 px-5 rounded-full text-sm font-medium transition-all duration-200 ${filter === 'all' ? 'bg-red-600 text-white shadow-md' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}>
              Todo
            </button>
            <button 
              onClick={() => setFilter('Uso de Máquinas')} 
              className={`py-2 px-5 rounded-full text-sm font-medium transition-all duration-200 ${filter === 'Uso de Máquinas' ? 'bg-red-600 text-white shadow-md' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}>
            Nuestras Máquinas
            </button>
        </div>
      </div>

    <div className="mx-auto px-4 sm:px-6 lg:px-8 py-8 mb-12">
        {media.length > 0 ? (
          <div>
            {/* --> CAMBIO: Lógica de renderizado condicional */}
            {filter === 'Uso de Máquinas' ? (
// --> VISTA PERSONALIZADA PARA "USO DE MÁQUINAS"
<div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto">
  {/* Columna izquierda para videos horizontales */}
  <div className="md:col-span-2 flex flex-col gap-4">
    {media.filter(v => v.featured).map(item => (
      <div key={item.id} className="shadow-lg rounded-lg overflow-hidden">
        <video className="w-full h-auto" src={item.src} controls playsInline>
          Tu navegador no soporta la etiqueta de video.
        </video>
      </div>
    ))}
  </div>
  {/* Columna derecha para videos verticales (ahora acepta varios) */}
  <div className="md:col-span-1 flex flex-col gap-4">
    {media.filter(v => !v.featured).map(item => (
      <div key={item.id} className="shadow-lg rounded-lg overflow-hidden">
        <video className="w-full h-auto object-cover" src={item.src} controls playsInline>
          Tu navegador no soporta la etiqueta de video.
        </video>
      </div>
    ))}
  </div>
</div>

            ) : (
              // --> VISTA GENERAL PARA "TODO" Y OTROS FILTROS
            <div className="columns-2 md:columns-3 lg:columns-4 xl:columns-5 gap-4 space-y-4">
                {media.map(item => (
                  <div key={item.id} className="break-inside-avoid shadow-lg rounded-lg overflow-hidden group">
                    {item.type === 'image' ? (
                       <Image src={item.src} alt={item.alt} width={500} height={500} className="object-cover w-full h-auto"/>
                    ) : (
                       <video className="w-full h-auto" src={item.src} autoPlay muted loop playsInline>
                        Tu navegador no soporta la etiqueta de video.
                       </video>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        ) : (
          <p className="text-center text-gray-500 text-lg">No hay contenido disponible para esta categoría.</p>
        )}
      </div>
    </div>
  );
}