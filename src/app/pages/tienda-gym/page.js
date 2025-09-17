// src/app/pages/tienda-gym/page.js
"use client";

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { useCart } from '../carrito/CartContext';
import { allProducts } from './products';

// Componente interno que usa useSearchParams
function TiendaCaninaContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { addToCart, formatPrice } = useCart();
  
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [selectedSubFilters, setSelectedSubFilters] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState(allProducts);
  const [isLoading, setIsLoading] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [viewMode, setViewMode] = useState('grid'); // 'grid' o 'list'
  const [sortBy, setSortBy] = useState('');

  // Categorías principales con subcategorías
  const categories = [
    { 
      name: 'Todos', 
      icon: '', 
      count: allProducts.length,
      subFilters: []
    },
    { 
      name: 'Máquinas de Fuerza', 
      icon: '', 
      count: allProducts.filter(p => p.category === 'Máquinas de Fuerza').length,
      subFilters: ['Serie FM', 'Serie PW', 'Serie M2', 'Serie M3']
    },
    { 
      name: 'Máquinas de Pecho', 
      icon: '', 
      count: allProducts.filter(p => p.category === 'Máquinas de Pecho').length,
      subFilters: ['Banco Inclinado', 'Banco Plano', 'Press de Pecho', 'Fondos']
    },
    { 
      name: 'Máquinas de Cadera', 
      icon: '', 
      count: allProducts.filter(p => p.category === 'Máquinas de Cadera').length,
      subFilters: ['Prensa', 'Extensión', 'Flexión', 'Abducción']
    },
  ];

  // Filtros adicionales removidos - solo categorías

  // Efecto para manejar el parámetro de categoría de la URL
  useEffect(() => {
    const categoryFromUrl = searchParams.get('category');
    if (categoryFromUrl && categories.some(cat => cat.name === categoryFromUrl)) {
      setSelectedCategory(categoryFromUrl);
    }
  }, [searchParams]);

  // Efecto para filtrar productos con delay para mejor UX
useEffect(() => {
  setIsLoading(true);

  const timeoutId = setTimeout(() => {
    // Siempre partimos de allProducts original
    let filtered = [...allProducts];

    // Filtrar por categoría principal
    if (selectedCategory !== 'Todos') {
      filtered = filtered.filter(product => product.category === selectedCategory);
    }

    // Filtrar por búsqueda
    if (searchTerm) {
      filtered = filtered.filter(product =>
        (product.name && product.name.toLowerCase().includes(searchTerm.toLowerCase())) ||
        (product.description && product.description.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    // Ordenar productos según sortBy
    if (sortBy === 'name-asc') {
      filtered.sort((a, b) => (a.name || '').localeCompare(b.name || ''));
    } else if (sortBy === 'name-desc') {
      filtered.sort((a, b) => (b.name || '').localeCompare(a.name || ''));
    }
    // Si sortBy === '', mantiene el orden original

    setFilteredProducts(filtered);
    setIsLoading(false);
  }, 300);

  return () => clearTimeout(timeoutId);
}, [selectedCategory, searchTerm, sortBy]);


  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setSelectedSubFilters([]); // Resetear subfiltros al cambiar categoría
    setIsSidebarOpen(false);
    if (category === 'Todos') {
      router.push('/pages/tienda-gym', { scroll: false });
    } else {
      router.push(`/pages/tienda-gym?category=${encodeURIComponent(category)}`, { scroll: false });
    }
  };

  const handleSubFilterToggle = (filter) => {
    setSelectedSubFilters(prev => 
      prev.includes(filter) 
        ? prev.filter(f => f !== filter)
        : [...prev, filter]
    );
  };

  const clearAllFilters = () => {
    setSelectedCategory('Todos');
    setSelectedSubFilters([]);
    setSearchTerm('');
    router.push('/pages/tienda-gym', { scroll: false });
  };

  const handleProductClick = (productId) => {
    router.push(`/pages/tienda-gym/productos/${productId}`);
  };

  const getActiveFiltersCount = () => {
    let count = 0;
    if (selectedCategory !== 'Todos') count++;
    count += selectedSubFilters.length;
    if (searchTerm) count++;
    return count;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <div className="relative overflow-hidden bg-white shadow-sm mb-6">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-red-600/5"></div>
        <div className="relative max-w-7xl mx-auto px-4 py-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent mb-3">
              Productos
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Equipa tu gimnasio con nuestras máquinas de alta calidad y accesorios profesionales
            </p>
          </div>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 mb-6">
        <nav className="flex items-center space-x-2 text-sm text-gray-600">
          <a href="/" className="text-gray-900 font-medium hover:underline">Inicio</a>
          <span>&gt;</span>
          <a href="/pages/tienda-gym" className="text-gray-900 font-medium hover:underline">Productos</a>
        </nav>
      </div>

      <div className="max-w-7xl mx-auto px-4 pb-12">
        {/* Filtros superiores móviles */}
        <div className="lg:hidden mb-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-gray-900">Productos</h2>
            <button
              onClick={() => setViewMode(viewMode === 'grid' ? 'list' : 'grid')}
              className="p-2 bg-black rounded-lg shadow-md hover:shadow-lg transition-all"
            >
              {viewMode === 'grid' ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                </svg>
              )}
            </button>
          </div>

          <div className="flex items-center gap-3 mb-4">
            <button
              onClick={() => setIsSidebarOpen(true)}
              className="flex items-center gap-2 bg-white border-2 border-gray-300 text-gray-700 px-4 py-2.5 rounded-lg font-medium hover:bg-gray-50 transition-all"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
              </svg>
              <span>Filtros</span>
              {getActiveFiltersCount() > 0 && (
                <span className="bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {getActiveFiltersCount()}
                </span>
              )}
            </button>

            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-white border-2 border-gray-300 text-gray-700 px-4 py-2.5 rounded-lg font-medium hover:bg-gray-50 transition-all"
            >
              <option value="name">Ordenar por</option>
                  <option value="name-asc">Nombres de A-Z</option>
                  <option value="name-desc">Nombres Z-A</option>
            </select>
          </div>

          {/* Filtros activos móvil */}
          {getActiveFiltersCount() > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {selectedCategory !== 'Todos' && (
                <span className="inline-flex items-center gap-2 bg-red-100 text-red-800 px-3 py-1.5 rounded-full text-sm font-medium">
                  {selectedCategory}
                  <button onClick={() => handleCategoryChange('Todos')}>
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </span>
              )}
              <button
                onClick={clearAllFilters}
                className="px-2 py-1 text-xs font-medium text-gray-600 border border-gray-300 rounded-md hover:bg-gray-100 hover:text-gray-800 transition-colors"
              >
                Limpiar filtros
              </button>
            </div>
          )}
        </div>

        <div className="flex gap-8">
          {/* Sidebar Desktop */}
          <div className="hidden lg:block w-64 flex-shrink-0">
            <div className="bg-white rounded-xl shadow-lg p-6 sticky top-6">
              {/* Título y controles desktop */}
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-gray-900">Filtros</h3>
              <button
                onClick={clearAllFilters}
                className="px-2 py-1 text-xs font-medium text-gray-600 border border-gray-300 rounded-md hover:bg-gray-100 hover:text-gray-800 transition-colors"
              >
                Limpiar filtros
              </button>

              </div>

              {/* Barra de búsqueda */}
              <div className="mb-6">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                  <input
                    type="text"
                    placeholder="¿Qué estás buscando?"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="block w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-red-500 focus:border-transparent placeholder-gray-500"
                  />
                </div>
              </div>

              {/* Filtros por categoría */}
              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-3">Categoría</h4>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <div key={category.name}>
                      <label className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg cursor-pointer transition-colors">
                        <div className="flex items-center gap-3">
                          <input
                            type="radio"
                            name="category"
                            checked={selectedCategory === category.name}
                            onChange={() => handleCategoryChange(category.name)}
                            className="w-4 h-4 text-red-600 border-2 border-gray-300 focus:ring-red-500"
                          />
                        <span className="font-medium text-gray-900 text-[15px]">{category.name}</span>
                        </div>
                        <span className="text-sm text-gray-500">({category.count})</span>
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Ordenar desktop */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Ordenar por</h4>
                    <select
                      value={sortBy} // debe coincidir con ''
                      onChange={(e) => setSortBy(e.target.value)}
                      className="w-full p-3 border-2 border-gray-200 text-black rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    >
                      <option value="">Sin ordenar</option>
                      <option value="name-asc">Name A-Z</option>
                      <option value="name-desc">Name Z-A</option>
                    </select>

                </div>


            </div>
          </div>

          {/* Modal de filtros móvil */}
          {isSidebarOpen && (
            <>
              <div 
                className="lg:hidden fixed inset-0 bg-opacity-50 z-40"
                onClick={() => setIsSidebarOpen(false)}
              ></div>
              <div className="lg:hidden fixed right-0 top-0 h-full w-96 max-w-[90vw] bg-white shadow-xl z-50 overflow-y-auto">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-bold text-gray-900">Filtros</h3>
                    <button
                      onClick={() => setIsSidebarOpen(false)}
                      className="p-2 hover:bg-gray-100 rounded-lg"
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>

                  {/* Búsqueda móvil */}
                  <div className="mb-6">
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                      </div>
                      <input
                        type="text"
                        placeholder="¿Qué estás buscando?"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="block w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-red-500 focus:border-transparent placeholder-black"
                      />
                    </div>
                  </div>

                  {/* Categorías móvil */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">Categoría</label>
                    <div className="space-y-2">
                      {categories.map((category) => (
                        <label key={category.name} className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg cursor-pointer">
                          <div className="flex items-center gap-3">
                            <input
                              type="radio"
                              name="category-mobile"
                              checked={selectedCategory === category.name}
                              onChange={() => handleCategoryChange(category.name)}
                              className="w-4 h-4 text-red-600 border-2 border-gray-300 focus:ring-red-500"
                            />
                            <span className="font-medium text-black">{category.name}</span>
                          </div>
                          <span className="text-sm text-gray-500">({category.count})</span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}

          {/* Contenido principal */}
          <div className="flex-1">
            {/* Controles superiores desktop */}
            <div className="hidden lg:flex items-center justify-between mb-6">
              <div className="flex items-center gap-4">
                <h2 className="text-2xl font-bold text-gray-900">PRODUCTOS</h2>
                <span className="text-gray-500">
                  ({filteredProducts.length} productos)
                </span>
              </div>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-lg transition-all ${viewMode === 'grid' ? 'bg-gray-900 text-white' : 'bg-gray-200 text-gray-600 hover:bg-gray-300'}`}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                  </svg>
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-lg transition-all ${viewMode === 'list' ? 'bg-gray-900 text-white' : 'bg-gray-200 text-gray-600 hover:bg-gray-300'}`}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Grid de productos */}
            {isLoading ? (
              <div className={`grid gap-6 ${viewMode === 'grid' ? 'grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' : 'grid-cols-1'}`}>
                {[...Array(8)].map((_, i) => (
                  <div key={i} className="bg-white rounded-xl shadow-md overflow-hidden animate-pulse">
                    <div className="aspect-square bg-gray-200"></div>
                    <div className="p-6">
                      <div className="h-4 bg-gray-200 rounded mb-2"></div>
                      <div className="h-6 bg-gray-200 rounded mb-4"></div>
                      <div className="flex justify-between items-center">
                        <div className="h-6 w-20 bg-gray-200 rounded"></div>
                        <div className="h-10 w-32 bg-red-200 rounded"></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : filteredProducts.length === 0 ? (
              <div className="text-center py-16">
                <div className="inline-block p-6 rounded-full bg-gray-100 mb-6">
                  <svg className="mx-auto h-16 w-16 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.29-1.009-5.824-2.562M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">No se encontraron productos</h3>
                <p className="text-gray-500 text-lg mb-6">
                  Intente ajustar sus filtros o términos de búsqueda
                </p>
                <button
                  onClick={clearAllFilters}
                  className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                >
                  Borrar todos los filtros
                </button>
              </div>
            ) : (
              <div className={`grid gap-6 ${viewMode === 'grid' ? 'grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' : 'grid-cols-1'}`}>
                {filteredProducts.map((product) => (
                  <div
                    key={product.id}
                    className={`group bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer ${viewMode === 'list' ? 'flex' : ''}`}
                    onClick={() => handleProductClick(product.id)}
                  >
                    <div className={`bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-6 relative overflow-hidden ${viewMode === 'list' ? 'w-48 flex-shrink-0' : 'aspect-square'}`}>
                      <img
                        src={product.image || '/placeholder-image.jpg'}
                        alt={product.alt || product.name || 'Producto'}
                        className="max-w-full max-h-full object-contain transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    
                    <div className="p-6 flex-1">

                      <h3 className="font-bold text-gray-900 mb-2 text-[15px] line-clamp-2 group-hover:text-red-600 transition-colors">
                        {product.name || 'Producto sin nombre'}
                      </h3>

                        {viewMode === 'list' && (
                          <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                            {product.description || 'Sin descripción'}
                          </p>
                        )}


                      <div className="mb-3">
                        <span className={`inline-flex items-center gap-2 px-3 py-1 text-xs font-semibold rounded-full ${
                          product.category === 'Máquinas de Fuerza' ? 'bg-red-100 text-red-700' :
                          product.category === 'Máquinas de Pecho' ? 'bg-green-100 text-green-700' :
                          product.category === 'Máquinas de Cadera' ? 'bg-purple-100 text-purple-700' :
                          'bg-gray-100 text-gray-700'
                        }`}>
                          {product.category}
                        </span>
                      </div>
                      


                      <div className={`flex items-center gap-4 ${viewMode === 'list' ? 'justify-between' : 'justify-between'}`}>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            const productUrl = `https://gym1-nine.vercel.app/pages/tienda-gym/productos/${product.id}`;
                            const message = encodeURIComponent(
                              `Hola, estoy interesado en este producto:\n` +
                              `- *Producto:* ${product.name}\n` +
                              `- *Precio:* ${product.price}\n` +
                              `- *Categoría:* ${product.category}\n\n` +
                              `- *Ver producto:* ${productUrl}`
                            );
                            window.open(`https://wa.me/5212213683565?text=${message}`, "_blank");
                          }}
                          className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-medium transition-all transform hover:scale-105 shadow-md hover:shadow-lg text-sm"
                        >
                          Más Información
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

// Componente principal que envuelve con Suspense
export default function TiendaCanina() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center px-4">
        <div className="text-center">
          <div className="relative">
            <div className="animate-spin rounded-full h-16 w-16 border-4 border-red-200 border-t-red-600 mx-auto mb-6"></div>
            <div className="absolute inset-0 rounded-full bg-red-100 opacity-20 animate-ping"></div>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Cargando productos...</h3>
          <p className="text-gray-600">Preparando el mejor equipo para ti</p>
        </div>
      </div>
    }>
      <TiendaCaninaContent />
    </Suspense>
  );
}