"use client";

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { allProducts, primaryCategories, subCategories } from './products';
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
  }, [selectedPrimaryCategory, selectedSubCategories, searchTerm, sortBy]);

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

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      
      {/* --- CAMBIO 3: Usamos el nuevo componente dinámico aquí --- */}
      <CategoryHeader category={selectedPrimaryCategory} />
      
      <div className="max-w-7xl mx-auto px-4 mb-6">
        <nav className="flex items-center space-x-2 text-sm text-gray-600">
          <Link href="/" className="text-gray-900 font-medium hover:underline">Inicio</Link>
          <span>&gt;</span>
          <Link href="/pages/tienda-gym" className="text-gray-900 font-medium hover:underline">Productos</Link>
        </nav>
      </div>

      <div className="max-w-7xl mx-auto px-4 pb-12">
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
              <div className="flex items-center gap-3">
                <button onClick={() => setViewMode('grid')} className={`p-2 rounded-lg transition-all ${viewMode === 'grid' ? 'bg-gray-900 text-white' : 'bg-gray-200 text-gray-600 hover:bg-gray-300'}`}><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" /></svg></button>
                <button onClick={() => setViewMode('list')} className={`p-2 rounded-lg transition-all ${viewMode === 'list' ? 'bg-gray-900 text-white' : 'bg-gray-200 text-gray-600 hover:bg-gray-300'}`}><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" /></svg></button>
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
                  {currentProducts.map((product) => (
                    <div 
                      key={product.id} 
                      className={`group bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer ${viewMode === 'grid' ? 'flex flex-col' : 'flex flex-row items-center'}`} 
                      onClick={() => handleProductClick(product.id)}
                    >
                      <div className={`bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-6 relative overflow-hidden ${viewMode === 'list' ? 'w-48 h-48 flex-shrink-0' : 'aspect-square'}`}><img src={product.image || '/placeholder-image.jpg'} alt={product.alt || product.name || 'Producto'} className="max-w-full max-h-full object-contain transition-transform duration-300 group-hover:scale-105" /></div>
                      <div className="p-6 flex-1 flex flex-col">
                        <div>
                          <h3 className={`font-bold text-gray-900 mb-2 text-sm line-clamp-2 group-hover:text-red-600 transition-colors ${viewMode === 'grid' ? 'text-center h-12 flex items-center justify-center' : ''}`}>{product.name || 'Producto sin nombre'}</h3>
                          {viewMode === 'list' && <p className="text-gray-600 text-sm mb-4 line-clamp-3">{Array.isArray(product.description) ? product.description[0] : product.description || 'Sin descripción disponible.'}</p>}
                          <div className={`mb-3 flex flex-wrap gap-1 ${viewMode === 'grid' ? 'justify-center' : 'justify-start'}`}>{product.subCategories && product.subCategories.map(sc => (<span key={sc} className="bg-gray-200 text-gray-700 px-2 py-1 text-xs font-semibold rounded-full">{sc}</span>))}</div>
                        </div>
                        <div className={`flex items-center gap-4 ${viewMode === 'list' ? 'justify-end' : 'justify-end'} ${viewMode === 'grid' ? 'mt-auto' : 'mt-2'}`}>
                           <Link 
                              href="/pages/horarios" 
                              onClick={(e) => e.stopPropagation()}
                              className={`bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-medium transition-all transform hover:scale-105 shadow-md hover:shadow-lg text-sm text-center ${viewMode === 'grid' ? 'w-full' : 'w-auto'}`}
                            >
                              Contáctanos
                            </Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                {totalPages > 1 && (
                  <div className="mt-12 flex items-center justify-center gap-4">
                    <button onClick={handlePrevPage} disabled={currentPage === 1} className="px-4 py-2 bg-white border-2 border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors">Anterior</button>
                    <span className="text-gray-700 font-medium">Página {currentPage} de {totalPages}</span>
                    <button onClick={handleNextPage} disabled={currentPage === totalPages} className="px-4 py-2 bg-white border-2 border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors">Siguiente</button>
                  </div>
                )}
              </>
            )}
          </main>
        </div>
      </div>
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