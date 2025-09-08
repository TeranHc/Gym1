// src/app/pages/tienda-canina/page.js
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
  const [filteredProducts, setFilteredProducts] = useState(allProducts);
  const [isLoading, setIsLoading] = useState(false);

  // Categorías disponibles
const categories = ['Todos', 'Billar', 'Futbolito', 'Poker', 'Otros'];

  // Efecto para manejar el parámetro de categoría de la URL
  useEffect(() => {
    const categoryFromUrl = searchParams.get('category');
    if (categoryFromUrl && categories.includes(categoryFromUrl)) {
      setSelectedCategory(categoryFromUrl);
    }
  }, [searchParams]);

  // Efecto para filtrar productos con delay para mejor UX
  useEffect(() => {
    setIsLoading(true);
    const timeoutId = setTimeout(() => {
      let filtered = allProducts;

      // Filtrar por categoría
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

      setFilteredProducts(filtered);
      setIsLoading(false);
    }, 300);

    return () => clearTimeout(timeoutId);
  }, [selectedCategory, searchTerm]);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    if (category === 'Todos') {
      router.push('/pages/tienda-billar', { scroll: false });
    } else {
      router.push(`/pages/tienda-billar?category=${encodeURIComponent(category)}`, { scroll: false });
    }
  };

  const handleProductClick = (productId) => {
    router.push(`/pages/tienda-billar/productos/${productId}`);
  };

  const getCategoryIcon = (category) => {
    const icons = {
      'Billar': '🎱',
      'Futbolito': '⚽',
      'Poker': '♠️',
      'Todos': '🎯',
      'Otros': '📦' // o cualquier otro emoji que prefieras para "Otros"
    };
    return icons[category] || '🎯';
  };


  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-200 to-gray-100 ">
      {/* Header compacto - Mejorado para móvil */}
      <div className="relative overflow-hidden bg-gray-100 shadow-sm mb-4 md:mb-0">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-green-600/5"></div>
        <div className="relative max-w-7xl mx-auto px-4 py-6 md:py-8">
          <div className="text-center">
            <h1 className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent mb-2 md:mb-3">
              NUESTRO CATÁLOGO
            </h1>
            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
              Descubre nuestra selección premium de mesas de billar, futbolitos y juegos de poker
            </p>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 py-4 md:py-6">
        {/* Barra de búsqueda compacta - Mejorada para móvil */}
        <div className="max-w-xl mx-auto mb-4 md:mb-6">
          <div className="relative group">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg className="h-4 w-4 md:h-5 md:w-5 text-gray-400 group-focus-within:text-blue-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <input
              type="text"
              placeholder="Buscar productos..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="block w-full pl-9 md:pl-10 pr-4 py-2.5 md:py-3 border-2 border-gray-200 rounded-xl leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all shadow-md hover:shadow-lg text-sm md:text-base"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600 transition-colors"
              >
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            )}
          </div>
        </div>

        {/* Filtros de categorías y contador - Mejorado para móvil */}
        <div className="flex flex-col gap-4 mb-4 md:mb-6">
          {/* Filtros de categorías */}
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryChange(category)}
                className={`group flex items-center gap-2 px-3 py-2 md:px-4 md:py-2 rounded-lg font-medium transition-all transform hover:scale-105 shadow-sm hover:shadow-md text-sm md:text-base ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-blue-200'
                    : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
                }`}
              >
                <span className="text-sm">{getCategoryIcon(category)}</span>
                <span>{category}</span>
                {selectedCategory === category && (
                  <span className="ml-1 bg-white/20 px-2 py-0.5 rounded-full text-xs">
                    {filteredProducts.length}
                  </span>
                )}
              </button>
            ))}
          </div>

          {/* Contador de productos - Centrado en móvil */}
          <div className="flex justify-center">
            <div className="inline-flex items-center gap-2 bg-white px-3 py-2 md:px-4 md:py-2 rounded-lg shadow-sm border border-gray-100">
              <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
              </svg>
              <span className="text-gray-700 font-medium text-sm">
                {isLoading ? 'Buscando...' : `${filteredProducts.length} productos`}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Productos con mejor espaciado móvil */}
      <div className="max-w-7xl mx-auto px-4 pb-8 md:pb-12">
        {isLoading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="bg-white rounded-2xl shadow-md overflow-hidden animate-pulse">
                <div className="aspect-square bg-gray-200"></div>
                <div className="p-4 md:p-6">
                  <div className="h-3 md:h-4 bg-gray-200 rounded mb-2"></div>
                  <div className="h-5 md:h-6 bg-gray-200 rounded mb-2"></div>
                  <div className="h-3 md:h-4 bg-gray-200 rounded mb-4"></div>
                  <div className="flex justify-between">
                    <div className="h-5 md:h-6 w-16 md:w-20 bg-gray-200 rounded"></div>
                    <div className="h-7 md:h-8 w-16 md:w-20 bg-gray-200 rounded"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : filteredProducts.length === 0 ? (
          <div className="text-center py-12 md:py-16 px-4">
            <div className="inline-block p-4 md:p-6 rounded-full bg-gray-100 mb-4 md:mb-6">
              <svg className="mx-auto h-12 w-12 md:h-16 md:w-16 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.29-1.009-5.824-2.562M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2 md:mb-3">No se encontraron productos</h3>
            <p className="text-gray-500 text-base md:text-lg mb-4 md:mb-6">
              {searchTerm 
                ? `No hay productos que coincidan con "${searchTerm}"`
                : `No hay productos en la categoría "${selectedCategory}"`
              }
            </p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('Todos');
              }}
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2.5 md:px-6 md:py-3 rounded-xl font-medium transition-colors text-sm md:text-base"
            >
              <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              Ver todos los productos
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-8">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="group bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer border border-gray-100 hover:shadow-black/10"
                onClick={() => handleProductClick(product.id)}
                style={{
                  filter: 'drop-shadow(0 0 0 transparent)',
                  transition: 'all 0.3s ease, filter 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.filter = 'drop-shadow(0 8px 25px rgba(0, 0, 0, 0.15))';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.filter = 'drop-shadow(0 0 0 transparent)';
                }}
              >
                <div className="aspect-square bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-4 md:p-6 relative overflow-hidden">
                  <img
                    src={product.image || '/placeholder-image.jpg'}
                    alt={product.alt || product.name || 'Producto'}
                    className="max-w-full max-h-full object-contain transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute top-3 right-3 md:top-4 md:right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="bg-white/90 backdrop-blur-sm rounded-full p-1.5 md:p-2 shadow-lg">
                      <svg className="w-4 h-4 md:w-5 md:h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    </div>
                  </div>
                </div>
                
                <div className="p-4 md:p-6">
                  <div className="mb-2 md:mb-3">
                    <span className={`inline-flex items-center gap-1 px-2 py-1 md:px-3 md:py-1 text-xs font-semibold rounded-full ${
                      product.category === 'Billar' ? 'bg-red-100 text-red-700' :
                      product.category === 'Futbolito' ? 'bg-green-100 text-green-700' :
                      product.category === 'Poker' ? 'bg-purple-100 text-purple-700' :
                      product.category === 'Otros' ? 'bg-yellow-100 text-yellow-700' :
                      'bg-gray-100 text-gray-700'
                    }`}>
                      <span className="text-xs">{getCategoryIcon(product.category)}</span>
                      {product.category}
                    </span>

                  </div>
                  
                  <h3 className="font-bold text-gray-900 mb-2 text-base md:text-lg line-clamp-2 group-hover:text-blue-600 transition-colors leading-tight">
                    {product.name || 'Producto sin nombre'}
                  </h3>
                  
                  <p className="text-gray-600 text-sm mb-3 md:mb-4 line-clamp-2 leading-relaxed">
                    {product.description || 'Sin descripción'}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex flex-col">
                      <span className="text-base md:text-lg font-bold text-blue-600">
                        {formatPrice(product.price)}
                      </span>
                      {product.originalPrice && (
                        <span className="text-xs md:text-sm text-gray-400 line-through">
                          {formatPrice(product.originalPrice)}
                        </span>
                      )}
                    </div>
                    
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        const productUrl = `https://billar1.vercel.app/pages/tienda-billar/productos/${product.id}`;
                        const message = encodeURIComponent(
                          `Hola, estoy interesado en este producto:\n` +
                          `- *Producto:* ${product.name}\n` +
                          `- *Precio:* $${product.price}\n` +
                          `- *Categoría:* ${product.category}\n\n` +
                          `- *Ver producto:* ${productUrl}`
                        );
                        window.open(`https://wa.me/5212213683565?text=${message}`, "_blank");
                      }}
                      className="group/btn bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-3 py-2 md:px-5 md:py-2.5 rounded-xl font-semibold transition-all transform hover:scale-105 shadow-md hover:shadow-lg flex items-center gap-1.5 md:gap-2 text-xs md:text-sm"
                    >
                      <svg className="w-3.5 h-3.5 md:w-4 md:h-4 transition-transform group-hover/btn:rotate-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6 0v6a2 2 0 11-4 0v-6m6 0a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                      <span className="hidden sm:inline">Contactar</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Espaciado adicional al final */}
      <div className="h-4 md:h-6"></div>
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
            <div className="animate-spin rounded-full h-12 w-12 md:h-16 md:w-16 border-4 border-blue-200 border-t-blue-600 mx-auto mb-4 md:mb-6"></div>
            <div className="absolute inset-0 rounded-full bg-blue-100 opacity-20 animate-ping"></div>
          </div>
          <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2">Cargando catálogo...</h3>
          <p className="text-gray-600 text-sm md:text-base">Preparando los mejores productos para ti</p>
        </div>
      </div>
    }>
      <TiendaCaninaContent />
    </Suspense>
  );
}