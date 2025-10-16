"use client";

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { allProducts, primaryCategories, subCategories } from '../tienda-gym/products';
import Link from 'next/link';

// --- CAMBIO 1: Añadimos las imágenes y un pre-título para la serie LD ---
const categoryHeaders = {
    'Todos': { 
        preTitle: 'THE GAME-CHANGING',
        title: 'Nuestros productos', 
        images: [
          '/inicioLD/1.jpg',
      '/inicioM7/1.jpg',
      '/inicioRS/1.jpg',
          '/inicioLD/4.jpg',
      '/inicioCardio/3.jpg',
        ] 
      },
    'LD': { 
    preTitle: 'THE GAME-CHANGING',
    title: 'LD SERIES', 
    images: [
      '/inicioLD/1.jpg',
      '/inicioLD/2.jpg',
      '/inicioLD/3.jpg',
      '/inicioLD/4.jpg',
      '/inicioLD/5.jpg',
    ] 
  },
  'M2': { 
    preTitle: 'THE GAME-CHANGING',
    title: 'M2 SERIES', 
    images: [
      '/inicioM2/1.jpg',
      '/inicioM2/1.png',
      '/inicioM2/2.jpg',
      '/inicioM2/3.jpg',
      '/inicioM2/4.jpg',
    ] 
  },

  'M3': { 
    preTitle: 'THE GAME-CHANGING',
    title: 'M3 SERIES', 
    images: [
      '/inicioM3/1.jpg',
      '/inicioM3/5.png',
      '/inicioM3/6.png',
      '/inicioM3/1.jpg',
      '/inicioM3/2.jpg',
    ] 
  },
  'M7': { 
    preTitle: 'THE GAME-CHANGING',
    title: 'M7 SERIES', 
    images: [
      '/inicioM7/1.jpg',
      '/inicioM7/1.jpg',
      '/inicioM7/5.png',

    ] 
  },
  'RS': { 
    preTitle: 'THE GAME-CHANGING',
    title: 'RS SERIES', 
    images: [
      '/inicioRS/1.jpg',
      '/inicioRS/8.jpg',
      '/inicioRS/1.jpg',
      '/inicioRS/4.jpg',
      '/inicioRS/5.jpg',
    ] 
  },
  
  'FM': { 
    preTitle: 'THE GAME-CHANGING',
    title: 'FM SERIES', 
    images: [
      '/inicioFM/1.jpg',
      '/inicioFM/5.png',
      '/inicioFM/2.jpg',
      '/inicioFM/1.jpg',
      '/inicioFM/4.png',
    ] 
  },
  'FW': { 
    preTitle: 'THE GAME-CHANGING',
    title: 'FW SERIES', 
    images: [
      '/inicioFW/1.png',
      '/inicioFW/2.png',
      '/inicioFW/1.jpg',
      '/inicioFW/3.jpg',
      '/inicioFW/4.png',
    ] 
  },
  
  'PF': { 
    preTitle: 'THE GAME-CHANGING',
    title: 'PF SERIES', 
    images: [
      '/inicioPF/1.jpg',
      '/inicioPF/2.png',
      '/inicioPF/4.png',
      '/inicioPF/1.jpg',
      '/inicioPF/5.png',
    ] 
  },
  'Cardio': { 
    preTitle: 'THE GAME-CHANGING',
    title: 'CARDIO SERIES', 
    images: [
      '/inicioCardio/1.jpg',
      '/inicioCardio/2.jpg',
      '/inicioCardio/1.jpg',
      '/inicioCardio/3.jpg',
      '/inicioCardio/4.jpg',
    ] 
  },
//  'M2': { title: 'Serie M2', description: 'Explora la biomecánica avanzada de la serie M2.' },
//  'M3': { title: 'Serie M3', description: 'La serie M3: diseño innovador para resultados superiores.' },
//  'M7': { title: 'Serie M7', description: 'Rendimiento de élite con la robusta serie M7.' },
//  'RS': { title: 'Serie RS', description: 'Soluciones de fuerza para todos los niveles.' },
//  'FM': { title: 'Serie FM', description: 'Funcionalidad y versatilidad en la serie FM.' },
//  'FW': { title: 'Serie FW', description: 'Equipos de peso libre diseñados para durar.' },
//  'PF': { title: 'Serie PF', description: 'Lleva tu entrenamiento al siguiente nivel con la línea PF.' },
//  'Cardio': { title: 'Equipos de Cardio', description: 'Maximiza tu resistencia con nuestra selección de cardio.' },
};

// --- CAMBIO 2: Modificamos el componente Header para renderizar el banner con imágenes ---
const CategoryHeader = ({ category }) => {
  const headerContent = categoryHeaders[category] || categoryHeaders['Todos'];

  if (headerContent.images && headerContent.images.length > 0) {
    // Un ancho de franja pequeño (4px) se ve bien en todas las pantallas.
    const diagonalStripeWidth = 4; 

    return (
      <div 
        className="relative w-full bg-black shadow-lg mb-6 overflow-hidden 
                   h-36 sm:h-48 md:h-55 lg:h-65" // CAMBIO: Altura mucho más corta en móvil
      >
        
        {/* Contenedor de las imágenes (sin cambios) */}
        <div className="absolute inset-0 flex items-center">
          {headerContent.images.map((imgSrc, index) => (
            <div 
              key={index} 
              className="relative h-full flex-1 overflow-hidden" 
              style={{
                marginLeft: index > 0 ? `-${diagonalStripeWidth}px` : '0',
                clipPath: index > 0 
                  ? `polygon(${diagonalStripeWidth}px 0, 100% 0, 100% 100%, 0% 100%)` 
                  : 'none'
              }}
            >
            <img 
              src={imgSrc} 
              alt={`${headerContent.title} imagen ${index + 1}`} 
              className="w-full h-full object-cover transform scale-98"
              style={{ objectPosition: 'center' }}
            />

            </div>
          ))}
        </div>
        
        {/* Panel de texto superpuesto */}
        <div 
          className="absolute inset-y-0 left-0 bg-black flex items-center justify-center z-10 
                     p-2 sm:p-3 md:p-4 
                     w-[40%] sm:w-[38%] md:w-[35%] lg:w-[28%]" // CAMBIO: Panel más estrecho en móvil
          style={{ clipPath: 'polygon(0 0, 100% 0, 85% 100%, 0% 100%)' }}
        >
          <div className="text-center md:pr-4 lg:pr-10">
            {headerContent.preTitle && (
              <p className="text-gray-300 font-light tracking-widest
                          text-[8px] sm:text-[10px] md:text-xs"> {/* CAMBIO: Texto más pequeño */}
                {headerContent.preTitle}
              </p>
            )}
            <h1 className="text-white font-black leading-none mt-1
                         text-lg sm:text-2xl md:text-4xl lg:text-5xl"> {/* CAMBIO: Título más pequeño */}
              {headerContent.title}
            </h1>
          </div>
        </div>
      </div>
    );
  }

  

  // Fallback para categorías sin imágenes (sin cambios)
  return (
    <div className="relative overflow-hidden bg-white shadow-sm mb-6">
      <div className="relative max-w-7xl mx-auto px-4 py-8 text-center">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent mb-3">
            {headerContent.title}
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {headerContent.description}
          </p>
      </div>
    </div>
  );


  
};

// --- NUEVO COMPONENTE PARA EL FILTRO DE COLOR CON ESTILOS OSCUROS ---
const ColorFilterDropdown = ({ selectedColor, setSelectedColor }) => {
  const colorNames = {
    todos: 'Todos los colores',
    negroRojo: 'Negro con Rojo',
    todoNegro: 'Todo Negro',
  };

  const colorOptions = [
    { key: 'todos', name: 'Todos los colores' },
    { key: 'negroRojo', name: 'Negro con Rojo' },
    { key: 'todoNegro', name: 'Todo Negro' },
  ];

  return (
    <div className="relative group">
      {/* Botón que muestra la selección actual y activa el hover */}
      <button className="flex items-center gap-2 text-sm font-medium 
                         bg-gray-800 text-white border border-gray-700 
                         px-4 py-2 rounded-lg 
                         hover:bg-gray-700 transition-colors duration-200"> {/* ESTILO MODIFICADO */}
        <span>Color: <strong className="font-semibold">{colorNames[selectedColor]}</strong></span>
        <svg className="w-4 h-4 text-gray-300 transform transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
      </button>

      {/* Menú desplegable que aparece en hover */}
      <div className="absolute top-full right-0 mt-2 w-48 bg-gray-800 border border-gray-700 rounded-lg shadow-xl z-20
                     opacity-0 scale-95 transform transition-all duration-200 ease-in-out 
                     group-hover:opacity-100 group-hover:scale-100">
        <div className="p-1"> {/* Padding un poco más pequeño */}
          {colorOptions.map((option) => (
            <button
              key={option.key}
              onClick={() => setSelectedColor(option.key)}
              className={`w-full text-left px-3 py-2 text-sm rounded-md transition-colors duration-200 ${
                selectedColor === option.key 
                  ? 'bg-red-500 text-white font-semibold' // Color rojo intenso para la opción seleccionada
                  : 'text-gray-200 hover:bg-gray-700' // Texto claro y fondo más oscuro al pasar el mouse
              }`}
            >
              {option.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
// Componente interno para poder usar hooks de Next.js
function TiendaGymContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedPrimaryCategory, setSelectedPrimaryCategory] = useState('Todos');
  const [selectedSubCategories, setSelectedSubCategories] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState(allProducts);
  const [isLoading, setIsLoading] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [viewMode, setViewMode] = useState('grid');
  const [sortBy, setSortBy] = useState('');
  const [stockStatus, setStockStatus] = useState('in-stock'); // <-- AÑADE ESTE ESTADO
  const [selectedColor, setSelectedColor] = useState('todos'); // <-- AÑADE ESTE ESTADO
  const [currentPage, setCurrentPage] = useState(1);
  const PRODUCTS_PER_PAGE = 16;

  // Efecto para leer la categoría desde la URL al cargar la página
  useEffect(() => {
    const categoryFromUrl = searchParams.get('category');
    if (categoryFromUrl && primaryCategories.includes(categoryFromUrl)) {
      setSelectedPrimaryCategory(categoryFromUrl);
    } else {
      setSelectedPrimaryCategory('Todos');
    }
  }, [searchParams]);

  // Efecto principal para filtrar y ordenar los productos
  useEffect(() => {
    setIsLoading(true);
    const timeoutId = setTimeout(() => {
      let filtered = [...allProducts];
      // --- CAMBIO CLAVE: FILTRAR PRIMERO POR STOCK ---
      // Filtra solo los productos con el estado seleccionado.
      // Los productos 'upcoming' no se mostrarán aquí, los pondremos en su propia sección.
      if (stockStatus) {
        filtered = filtered.filter(product => product.status && product.status.includes(stockStatus));      }
      if (selectedPrimaryCategory !== 'Todos') {
        filtered = filtered.filter(product => product.primaryCategory === selectedPrimaryCategory);
      }
      if (selectedSubCategories.length > 0) {
        filtered = filtered.filter(product => 
          product.subCategories && product.subCategories.some(sub => selectedSubCategories.includes(sub))
        );
      }
        if (searchTerm) {
        const lowercasedFilter = searchTerm.toLowerCase();
        
        filtered = filtered.filter(product => {
          const nameMatch = product.name && product.name.toLowerCase().includes(lowercasedFilter);
          let descriptionMatch = false;
          if (product.description) {
            if (Array.isArray(product.description)) {
              descriptionMatch = product.description.join(' ').toLowerCase().includes(lowercasedFilter);
            } else if (typeof product.description === 'string') {
              descriptionMatch = product.description.toLowerCase().includes(lowercasedFilter);
            }
          }
          return nameMatch || descriptionMatch;
        });
      }
      if (sortBy === 'name-asc') {
        filtered.sort((a, b) => (a.name || '').localeCompare(b.name || ''));
      } else if (sortBy === 'name-desc') {
        filtered.sort((a, b) => (b.name || '').localeCompare(a.name || ''));
      }

      setFilteredProducts(filtered);
      setIsLoading(false);
    }, 300);
    return () => clearTimeout(timeoutId);
}, [selectedPrimaryCategory, selectedSubCategories, searchTerm, sortBy, stockStatus, selectedColor]); // <-- AÑADE selectedColor A LAS DEPENDENCIAS

  // Efecto para resetear la página a 1 cuando cambian los filtros
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedPrimaryCategory, selectedSubCategories, searchTerm, sortBy]);

  // --- MANEJADORES DE EVENTOS ---

  const handlePrimaryCategoryChange = (category) => {
    setSelectedPrimaryCategory(category);
    setSelectedSubCategories([]);
    setIsSidebarOpen(false);
    const params = new URLSearchParams();
    if (category !== 'Todos') params.set('category', category);
    router.push(`/pages/tienda-gym?${params.toString()}`, { scroll: false });
  };

  const handleSubCategoryToggle = (subCategory) => {
    setSelectedSubCategories(prev =>
      prev.includes(subCategory)
        ? prev.filter(s => s !== subCategory)
        : [...prev, subCategory]
    );
  };
  
  const handleSearchKeyDown = (e) => {
    if (e.key === 'Enter') {
      setIsSidebarOpen(false);
    }
  };

  const clearAllFilters = () => {
    setSelectedPrimaryCategory('Todos');
    setSelectedSubCategories([]);
    setSearchTerm('');
    setSortBy('');
    setStockStatus('in-stock'); // Reseteamos también el estado del stock
    setSelectedColor('todos'); // <-- AÑADE ESTO
    router.push('/pages/tienda-gym', { scroll: false });
  };

  const handleProductClick = (productId) => {
    router.push(`/pages/tienda-gym/productos/${productId}`);
  };

  const getActiveFiltersCount = () => {
    let count = 0;
    if (selectedPrimaryCategory !== 'Todos') count++;
    count += selectedSubCategories.length;
    if (searchTerm) count++;
    if (stockStatus !== 'in-stock') count++; // Contamos si el filtro de stock no es el por defecto
    return count;
  };

  // --- LÓGICA DE PAGINACIÓN ---
  const indexOfLastProduct = currentPage * PRODUCTS_PER_PAGE;
  const indexOfFirstProduct = indexOfLastProduct - PRODUCTS_PER_PAGE;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil(filteredProducts.length / PRODUCTS_PER_PAGE);
  

  const handleNextPage = () => {
    setCurrentPage(prev => Math.min(prev + 1, totalPages));
  };
  const handlePrevPage = () => {
    setCurrentPage(prev => Math.max(prev - 1, 1));
  };

  // --- RENDERIZADO DEL COMPONENTE DE FILTROS (REUTILIZABLE) ---
  const renderSidebarFilters = () => (
    <>
      <div className="mb-6">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
          </div>
          <input
            type="text"
            placeholder="¿Qué estás buscando?"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={handleSearchKeyDown}
            className="block w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-red-500 focus:border-transparent placeholder-gray-500 text-gray-900"
          />
        </div>
      </div>
      {/* CAMBIO 2: Añadimos una opción para filtrar por "Próximamente" */}
      <div className="mb-6">
        <h4 className="font-semibold text-gray-900 mb-3">Disponibilidad</h4>
        <div className="flex flex-col space-y-2">
          <label className="flex items-center gap-2 cursor-pointer">
            <input 
              type="radio" 
              name="stock" 
              value="in-stock"
              checked={stockStatus === 'in-stock'}
              onChange={(e) => setStockStatus(e.target.value)}
              className="w-4 h-4 text-red-600 border-2 border-gray-300 focus:ring-red-500"
            />
            <span className="font-medium text-gray-900 text-sm">En Stock</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input 
              type="radio" 
              name="stock" 
              value="out-of-stock"
              checked={stockStatus === 'out-of-stock'}
              onChange={(e) => setStockStatus(e.target.value)}
              className="w-4 h-4 text-red-600 border-2 border-gray-300 focus:ring-red-500"
            />
            <span className="font-medium text-gray-900 text-sm">Ver Agotados</span>
          </label>
          {/* Nueva opción de filtro */}
          <label className="flex items-center gap-2 cursor-pointer">
            <input 
              type="radio" 
              name="stock" 
              value="upcoming"
              checked={stockStatus === 'upcoming'}
              onChange={(e) => setStockStatus(e.target.value)}
              className="w-4 h-4 text-red-600 border-2 border-gray-300 focus:ring-red-500"
            />
            <span className="font-medium text-gray-900 text-sm">Próximamente</span>
          </label>
        </div>
      </div>

      <div className="mb-6">
        <h4 className="font-semibold text-gray-900 mb-2">Categoría Principal</h4>
        <select
          value={selectedPrimaryCategory}
          onChange={(e) => handlePrimaryCategoryChange(e.target.value)}
          className="w-full p-3 border-2 border-gray-200 text-black rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
        >
          {primaryCategories.map(cat => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
      </div>
{/* --- ¡AQUÍ ESTÁ LA PARTE QUE FALTA! --- */}
      {/* Este bloque solo aparece en pantallas pequeñas gracias a la clase lg:hidden */}
      <div className="mb-6 lg:hidden">
        <h4 className="font-semibold text-gray-900 mb-3">Color de Equipo</h4>
        <select
          value={selectedColor}
          onChange={(e) => setSelectedColor(e.target.value)}
          className="w-full p-3 border-2 border-gray-200 text-black rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
        >
          <option value="todos">Todos los colores</option>
          <option value="negroRojo">Negro con Rojo</option>
          <option value="todoNegro">Todo Negro</option>
        </select>
      </div>
      {/* --- FIN DEL CÓDIGO CLAVE --- */}
      <div className="mb-6">
        <h4 className="font-semibold text-gray-900 mb-2">Subcategorías</h4>
        <div className="space-y-1 max-h-60 overflow-y-auto pr-2">
          {subCategories.filter(sc => sc !== 'Todos').map((subCat) => (
            <label key={subCat} className="flex items-center justify-between py-1.5 px-2 hover:bg-gray-50 rounded-md cursor-pointer transition-colors">
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={selectedSubCategories.includes(subCat)}
                  onChange={() => handleSubCategoryToggle(subCat)}
                  className="w-4 h-4 text-red-600 border-2 border-gray-300 rounded focus:ring-red-500"
                />
                <span className="font-medium text-gray-900 text-sm">{subCat}</span>
              </div>
            </label>
          ))}
        </div>
      </div>

      <div>
        <h4 className="font-semibold text-gray-900 mb-3">Ordenar por</h4>
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="w-full p-3 border-2 border-gray-200 text-black rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
        >
          <option value="">Sin ordenar</option>
          <option value="name-asc">Nombre A-Z</option>
          <option value="name-desc">Nombre Z-A</option>
        </select>
      </div>
    </>
  );
  // Filtramos los productos que están marcados como 'upcoming'
const upcomingProducts = allProducts.filter(p => p.status && p.status.includes('upcoming'));  // --- NUEVA FUNCIÓN PARA EL SCROLL ---
  const scrollToUpcoming = () => {
    const section = document.getElementById('proximas-entregas');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      
      {/* --- CAMBIO 3: Usamos el nuevo componente dinámico aquí --- */}
      <CategoryHeader category={selectedPrimaryCategory} />
      
<div className="max-w-[1600px] mx-auto px-4 mb-6 flex items-center justify-between">
    {/* La navegación se queda como estaba */}
  <nav className="flex items-center space-x-2 text-sm text-gray-600">
    <Link href="/" className="text-gray-900 font-medium hover:underline">Inicio</Link>
    <span>&gt;</span>
    <Link href="/pages/tienda-gym" className="text-gray-900 font-medium hover:underline">Productos</Link>
  </nav>
  
</div>



<div className="max-w-[1600px] mx-auto px-4 pb-12">
          <div className="lg:hidden mb-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-gray-900">Productos</h2>
            <button onClick={() => setViewMode(viewMode === 'grid' ? 'list' : 'grid')} className="p-2 bg-black rounded-lg shadow-md hover:shadow-lg transition-all">
              {viewMode === 'grid' ? <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" /></svg> : <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" /></svg>}
            </button>
          </div>
          <button onClick={() => setIsSidebarOpen(true)} className="w-full flex items-center justify-center gap-2 bg-white border-2 border-gray-300 text-gray-700 px-4 py-2.5 rounded-lg font-medium hover:bg-gray-50 transition-all">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" /></svg>
            <span>Filtros</span>
            {getActiveFiltersCount() > 0 && <span className="bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">{getActiveFiltersCount()}</span>}
          </button>
        </div>

        <div className="flex gap-8">
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <div className="bg-white rounded-xl shadow-lg p-6 sticky top-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-gray-900">Filtros</h3>
                <button onClick={clearAllFilters} className="px-2 py-1 text-xs font-medium text-gray-600 border border-gray-300 rounded-md hover:bg-gray-100 hover:text-gray-800 transition-colors">Limpiar</button>
              </div>
              {renderSidebarFilters()}
            </div>
          </aside>

          {isSidebarOpen && (
            <>
              <div className="lg:hidden fixed inset-0 bg-opacity-50 z-40" onClick={() => setIsSidebarOpen(false)}></div>
              <div className="lg:hidden fixed right-0 top-0 h-full w-96 max-w-[90vw] bg-white shadow-xl z-50 overflow-y-auto">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-bold text-gray-900">Filtros</h3>
                    <button onClick={() => setIsSidebarOpen(false)} className="p-2 hover:bg-gray-100 rounded-lg"><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg></button>
                  </div>
                  {renderSidebarFilters()}
                </div>
              </div>
            </>
          )}

          <main className="flex-1">
            
<div className="hidden lg:flex items-center justify-between mb-6">
        <span className="text-gray-500">({filteredProducts.length} productos)</span>
        
        {/* Contenedor para los nuevos controles */}
        <div className="flex items-center gap-4">
            
            {/* --- AQUÍ INTEGRAMOS EL NUEVO COMPONENTE --- */}
            <ColorFilterDropdown 
              selectedColor={selectedColor}
              setSelectedColor={setSelectedColor}
            />

            {/* Divisor visual opcional */}
            <div className="h-6 w-px bg-gray-300"></div>

            {/* Botones de vista (Grid/List) */}
            <div className="flex items-center gap-3">
              <button onClick={() => setViewMode('grid')} className={`p-2 rounded-lg transition-all ${viewMode === 'grid' ? 'bg-gray-900 text-white' : 'bg-gray-200 text-gray-600 hover:bg-gray-300'}`}><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" /></svg></button>
              <button onClick={() => setViewMode('list')} className={`p-2 rounded-lg transition-all ${viewMode === 'list' ? 'bg-gray-900 text-white' : 'bg-gray-200 text-gray-600 hover:bg-gray-300'}`}><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" /></svg></button>
            </div>
        </div>
    </div>
            {isLoading ? (
              <div className={`grid gap-6 ${viewMode === 'grid' ? 'grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' : 'grid-cols-1'}`}>
                {[...Array(8)].map((_, i) => (
                  <div key={i} className="bg-white rounded-xl shadow-md overflow-hidden animate-pulse"><div className="aspect-square bg-gray-200"></div><div className="p-6"><div className="h-4 bg-gray-200 rounded mb-2 w-3/4"></div><div className="h-6 bg-gray-200 rounded mb-4"></div><div className="flex justify-end"><div className="h-10 w-32 bg-red-200 rounded"></div></div></div></div>
                ))}
              </div>
            ) : filteredProducts.length === 0 ? (
              <div className="text-center py-16"><div className="inline-block p-6 rounded-full bg-gray-100 mb-6"><svg className="mx-auto h-16 w-16 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.29-1.009-5.824-2.562M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg></div><h3 className="text-2xl font-bold text-gray-900 mb-3">No se encontraron productos</h3><p className="text-gray-500 text-lg mb-6">Intente ajustar sus filtros o términos de búsqueda</p><button onClick={clearAllFilters} className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-medium transition-colors">Borrar todos los filtros</button></div>
            ) : (
              <>

<div className={`grid gap-6 ${viewMode === 'grid' ? 'grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' : 'grid-cols-1'}`}>
    {currentProducts
      .filter(product => {
        if (stockStatus !== 'upcoming' && selectedColor !== 'todos') {
          return product.stockByColor && product.stockByColor[selectedColor] > 0;
        }
        return true;
      })
      .map((product) => {
        const isOutOfStock = product.status.includes('out-of-stock');
        const isInStock = product.status.includes('in-stock');
        const displayAsUpcoming = stockStatus === 'upcoming' && product.status.includes('upcoming');

        let stockQuantityToShow = 0;
        if (isInStock && product.stockByColor) {
            if (selectedColor === 'todos') {
                stockQuantityToShow = Object.values(product.stockByColor).reduce((sum, qty) => sum + qty, 0);
            } else {
                stockQuantityToShow = product.stockByColor[selectedColor] || 0;
            }
        }
        
        return (
            <div 
                key={product.id} 
                className={`group bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 flex flex-col ${isOutOfStock ? 'cursor-not-allowed' : 'hover:shadow-xl'}`}
                onClick={() => !isOutOfStock && handleProductClick(product.id)}
            >
                {/* --- Contenedor de la Imagen --- */}
                <div className="bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-4 relative overflow-hidden aspect-square">
                    <img 
                      src={product.image || '/placeholder-image.jpg'} 
                      alt={product.alt || product.name || 'Producto'}
                      className={`max-w-full max-h-full object-contain transition-transform duration-300 
                          ${!isOutOfStock && !displayAsUpcoming ? 'group-hover:scale-105' : ''}
                          ${isOutOfStock ? 'opacity-40' : ''} 
                          ${displayAsUpcoming ? 'opacity-70' : ''}`}
                    />
                    
                    {stockStatus !== 'upcoming' && isInStock && stockQuantityToShow > 0 && (
                        <div className="absolute bottom-2 left-2 bg-red-100 text-red-800 text-[11px] font-bold px-2.5 py-1 rounded-full shadow-md z-10">
                            {stockQuantityToShow} {stockQuantityToShow === 1 ? 'disponible' : 'disponibles'}
                        </div>
                    )}

                    {displayAsUpcoming && product.upcomingQuantity > 0 && (
                        <div className="absolute bottom-2 left-2 bg-yellow-100 text-yellow-800 text-[11px] font-bold px-2.5 py-1 rounded-full shadow-md z-10">
                            {product.upcomingQuantity} {product.upcomingQuantity === 1 ? 'por llegar' : 'por llegar'}
                        </div>
                    )}

                    {isOutOfStock && (
                        <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-20">
                            <span className="bg-black bg-opacity-70 text-white text-sm font-bold px-4 py-2 rounded-lg shadow-lg">
                                AGOTADO
                            </span>
                        </div>
                    )}

                    {displayAsUpcoming && (
                        <div className="absolute top-3 right-3 bg-gray-700 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                            PRÓXIMAMENTE
                        </div>
                    )}
                </div>
                
                {/* --- Contenedor del Contenido --- */}
                <div className="p-4 flex flex-col flex-grow">
                    <div className="flex-grow">
                        {/* TÍTULO MEJORADO: Sin límite de líneas y con altura mínima */}
                        <h3 className="font-bold text-gray-800 mb-2 text-sm min-h-[40px] group-hover:text-red-600 transition-colors">
                            {product.name || 'Producto sin nombre'}
                        </h3>
                        
                        {/* SUBCATEGORÍAS */}
                        <div className="mb-3 flex flex-wrap gap-1">
                            {product.subCategories && product.subCategories.map(sc => (
                                <span key={sc} className="bg-gray-200 text-gray-700 px-1.5 py-0.5 text-[10px] font-semibold rounded-full">{sc}</span>
                            ))}
                        </div>
                    </div>
                    
                    {/* BOTÓN AJUSTADO: Más pequeño */}
                    {!displayAsUpcoming && (
                        <div className="mt-auto pt-2">
                            <Link 
                                href="/pages/horarios" 
                                onClick={(e) => e.stopPropagation()}
                                className={`block w-full bg-red-600 text-white px-3 py-1.5 rounded-lg font-medium transition-all shadow-md text-xs text-center ${isOutOfStock ? 'opacity-50 cursor-not-allowed' : 'hover:bg-red-700 hover:shadow-lg'}`}
                            >
                                Contáctanos
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        )
    })}
</div>
                
                {totalPages > 1 && (
                  // Aumentamos el espacio entre los elementos con gap-6
                  <div className="mt-12 flex items-center justify-center gap-6"> 
                    <button 
                      onClick={handlePrevPage} 
                      disabled={currentPage === 1} 
                      // Aumentamos padding y tamaño de texto
                      className="px-5 py-3 text-base bg-white border-2 border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    >
                      Anterior
                    </button>
                    <span className="text-gray-700 font-medium text-base"> {/* Aumentamos tamaño de texto */}
                      Página {currentPage} de {totalPages}
                    </span>
                    <button 
                      onClick={handleNextPage} 
                      disabled={currentPage === totalPages} 
                      // Aumentamos padding y tamaño de texto
                      className="px-5 py-3 text-base bg-white border-2 border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    >
                      Siguiente
                    </button>
                  </div>
                )}
              </>
            )}
          </main>
        </div>
      </div>
      {/* --- NUEVA SECCIÓN DE PRÓXIMAS ENTREGAS --- */}
      {upcomingProducts.length > 0 && (
        
      <div id="proximas-entregas" className="max-w-[1600px] mx-auto px-4 pb-20">

        

      </div>
    )}
    </div>
  );
}

// --- COMPONENTE PRINCIPAL QUE ENVUELVE CON SUSPENSE ---
export default function TiendaGym() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center px-4">
        <div className="text-center">
          <div className="relative"><div className="animate-spin rounded-full h-16 w-16 border-4 border-red-200 border-t-red-600 mx-auto mb-6"></div><div className="absolute inset-0 rounded-full bg-red-100 opacity-20 animate-ping"></div></div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Cargando productos...</h3>
          <p className="text-gray-600">Preparando el mejor equipo para ti</p>
        </div>
      </div>
    }>
      <TiendaGymContent />
    </Suspense>
  );
}