// src/app/pages/tienda-gym/productos/[id]/page.js
"use client";

import { useState, useEffect, use } from 'react';
import { useRouter } from 'next/navigation';
import { useCart } from '../../../carrito/CartContext';
import { allProducts } from '../../products';

export default function ProductDetailPage({ params }) {
  const router = useRouter();
  const { addToCart, formatPrice } = useCart();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [activeTab, setActiveTab] = useState('descripcion');

  // Unwrap params using React.use()
  const resolvedParams = use(params);

  useEffect(() => {
    // Obtener el producto por ID desde la URL
    const productId = resolvedParams?.id;
    
    if (productId) {
      const foundProduct = allProducts.find(p => p.id === parseInt(productId));
      
      if (foundProduct) {
        setProduct(foundProduct);
        // Buscar productos relacionados de la misma categoría
        const related = allProducts
          .filter(p => p.category === foundProduct.category && p.id !== foundProduct.id)
          .slice(0, 4);
        setRelatedProducts(related);
      }
    }
    
    setIsLoading(false);
  }, [resolvedParams]);

  const handleAddToCart = () => {
    if (product) {
      for (let i = 0; i < quantity; i++) {
        addToCart(product);
      }
      // Mostrar mensaje de éxito
      alert(`${quantity} ${product.name} agregado${quantity > 1 ? 's' : ''} al carrito`);
    }
  };

  const handleQuantityChange = (change) => {
    const newQuantity = quantity + change;
    if (newQuantity >= 1 && newQuantity <= 10) {
      setQuantity(newQuantity);
    }
  };

  const handleGoBack = () => {
    router.push('/pages/tienda-gym');
  };

  const handleCategoryClick = (category) => {
    // Redirigir a la tienda con el filtro de categoría
    router.push(`/pages/tienda-gym?category=${encodeURIComponent(category)}`);
  };

  const handleProductClick = (productId) => {
    router.push(`/pages/tienda-gym/productos/${productId}`);
  };

const getCategoryColor = (category) => {
  switch (category) {
    case 'Pecho':
    case 'Hombros':
    case 'Cadera':
    case 'Piernas':
    case 'Abdominales':
    case 'Espalda':
    case 'Glúteos':
    case 'Bíceps':
    case 'Tríceps':
    case 'Pecho y Hombros':
      return 'bg-gray-100 text-gray-700';
    default:
      return 'bg-gray-100 text-gray-700';
  }
};


  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Cargando producto...</p>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Producto no encontrado</h1>
          <p className="text-gray-600 mb-6">El producto que buscas no existe o ha sido eliminado.</p>
          <button 
            onClick={() => router.push('/pages/tienda-gym')}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg"
          >
            Volver a la tienda
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 pt-8 md:pt-1">
      {/* Header con navegación mejorado */}
      <div className="bg-white shadow-md border-b mb-6">
        <div className="max-w-7xl mx-auto px-4 py-4 md:py-6">
          <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row md:items-center md:justify-between">
            <button
              onClick={handleGoBack}
              className="flex items-center text-gray-600 hover:text-blue-600 transition-colors self-start bg-gray-50 hover:bg-gray-100 px-3 py-2 rounded-lg"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              <span className="font-medium">Volver a la tienda</span>
            </button>
            
            {/* Breadcrumb navegable mejorado */}
            <div className="flex items-center bg-gray-50 px-4 py-2 rounded-lg border">
              <button 
                onClick={handleGoBack}
                className="text-gray-600 hover:text-blue-800 font-medium transition-colors"
              >
                Tienda
              </button>
              <svg className="w-4 h-4 mx-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              <button
                onClick={() => handleCategoryClick(product.category)}
                className="text-gray-600 hover:text-blue-800 font-medium transition-colors"
              >
                {product.category}
              </button>
              <svg className="w-4 h-4 mx-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              <span className="text-gray-700 font-medium truncate max-w-32 md:max-w-none">
                {product.name}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-4 md:py-8">
        {/* Información principal del producto - Responsive mejorado */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-6 md:mb-8">
          {/* Layout móvil - Imagen más pequeña */}
          <div className="md:hidden">
            <div className="p-4">
              <div className="w-full max-w-sm mx-auto aspect-square bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
                <img
                  src={product.image}
                  alt={product.alt}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            </div>
            <div className="p-4 pt-0">
              {/* Categoría */}
              <div className="mb-3">
                <button
                  onClick={() => handleCategoryClick(product.category)}
                  className={`inline-block px-3 py-1 text-sm font-medium rounded-full transition-colors hover:opacity-80 ${getCategoryColor(product.category)}`}
                >
                  {product.category}
                </button>
              </div>

              {/* Nombre del producto */}
              <h1 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
                {product.name}
              </h1>

              {/* Descripción corta */}
              <div className="mb-4">
                <p className="text-gray-600 leading-relaxed text-sm">
                  {product.description}
                </p>
                {product.category === "Billar" && (
                  <p className="text-sm mt-2 text-gray-600">
                    En cada mesa vienen incluidos, dos tacos, un juego de bolas, un triángulo y 10 tizas.
                  </p>
                )}
              </div>

              {/* Selector de cantidad */}
              <div className="mb-4">
                <h3 className="text-base font-semibold text-gray-800 mb-3">Cantidad</h3>
                <div className="flex items-center space-x-3">
                  <button
                    onClick={() => handleQuantityChange(-1)}
                    disabled={quantity <= 1}
                    className="w-10 h-10 rounded-full border-2 border-gray-400 text-black flex items-center justify-center hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed text-lg font-bold"
                  >
                    -
                  </button>
                  <span className="text-xl font-semibold w-12 text-center text-black">{quantity}</span>
                  <button
                    onClick={() => handleQuantityChange(1)}
                    disabled={quantity >= 10}
                    className="w-10 h-10 rounded-full border-2 border-gray-500 flex text-black items-center justify-center hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed text-lg font-bold"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Botón de contacto */}
              <div className="mb-4">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    const productUrl = `https://gym1-nine.vercel.app/pages/tienda-gym/productos/${product.id}`;
                    const message = encodeURIComponent(
                      `Hola, estoy interesado en este producto:\n` +
                      `- *Producto:* ${product.name}\n` +
                      `- *Categoría:* ${product.category}\n\n` +
                      `- *Ver producto:* ${productUrl}`
                    );
                    window.open(`https://wa.me/5212213683565?text=${message}`, "_blank");
                  }}
                  className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-6 py-3 rounded-xl font-semibold transition-all transform hover:scale-105 shadow-md hover:shadow-lg flex items-center justify-center gap-2"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6 0v6a2 2 0 11-4 0v-6m6 0a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  Más Información
                </button>
              </div>

              {/* Información adicional */}
              <div className="border-t pt-3">
                <div className="flex flex-col space-y-2 text-xs text-gray-500">
                  <div className="flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Garantía de calidad
                  </div>
                  <div className="flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3a2 2 0 012-2h4a2 2 0 012 2v4m-6 4v10a2 2 0 002 2h4a2 2 0 002-2V11" />
                    </svg>
                    Envío seguro
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Layout desktop - Dos columnas */}
          <div className="hidden md:grid md:grid-cols-2 md:gap-8">
            <div className="p-6">
              <div className="aspect-square bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
                <img
                  src={product.image}
                  alt={product.alt}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            </div>

            <div className="p-6">
              {/* Categoría */}
              <div className="mb-4">
                <button
                  onClick={() => handleCategoryClick(product.category)}
                  className={`inline-block px-3 py-1 text-sm font-medium rounded-full transition-colors hover:opacity-80 ${getCategoryColor(product.category)}`}
                >
                  {product.category}
                </button>
              </div>

              {/* Nombre del producto */}
              <h1 className="text-3xl font-bold text-gray-900 mb-4 leading-tight">
                {product.name}
              </h1>

              {/* Descripción corta */}
              <div className="mb-6">
                <p className="text-gray-600 leading-relaxed">
                  {product.description}
                </p>
                {product.category === "Billar" && (
                  <p className="text-sm mt-2 text-gray-600">
                    En cada mesa vienen incluidos, dos tacos, un juego de bolas, un triángulo y 10 tizas.
                  </p>
                )}
              </div>

              {/* Selector de cantidad */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Cantidad</h3>
                <div className="flex items-center space-x-4">
                  <button
                    onClick={() => handleQuantityChange(-1)}
                    disabled={quantity <= 1}
                    className="w-12 h-12 rounded-full border-2 border-gray-400 text-black flex items-center justify-center hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed text-xl font-bold"
                  >
                    -
                  </button>
                  <span className="text-2xl font-semibold w-16 text-center text-black">{quantity}</span>
                  <button
                    onClick={() => handleQuantityChange(1)}
                    disabled={quantity >= 10}
                    className="w-12 h-12 rounded-full border-2 border-gray-500 flex text-black items-center justify-center hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed text-xl font-bold"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Botón de contacto */}
              <div className="mb-6">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    const productUrl = `https://gym1-nine.vercel.app/pages/tienda-gym/productos/${product.id}`;
                    const message = encodeURIComponent(
                      `Hola, estoy interesado en este producto:\n` +
                      `- *Producto:* ${product.name}\n` +
                      `- *Categoría:* ${product.category}\n\n` +
                      `- *Ver producto:* ${productUrl}`
                    );
                    window.open(`https://wa.me/5212213683565?text=${message}`, "_blank");
                  }}
                  className="w-auto group/btn bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-6 py-3 rounded-xl font-semibold transition-all transform hover:scale-105 shadow-md hover:shadow-lg flex items-center justify-center gap-2"
                >
                  <svg className="w-4 h-4 transition-transform group-hover/btn:rotate-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6 0v6a2 2 0 11-4 0v-6m6 0a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  Más Información
                </button>
              </div>

              {/* Información adicional */}
              <div className="border-t pt-4">
                <div className="flex items-center space-x-4 text-sm text-gray-500">
                  <div className="flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Garantía de calidad
                  </div>
                  <div className="flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3a2 2 0 012-2h4a2 2 0 012 2v4m-6 4v10a2 2 0 002 2h4a2 2 0 002-2V11" />
                    </svg>
                    Envío seguro
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs de información detallada */}
        <div className="bg-white rounded-lg shadow-lg mb-6 md:mb-8">
          <div className="border-b">
            <nav className="flex px-3 md:px-6 overflow-x-auto scrollbar-hide">
              <button
                onClick={() => setActiveTab('descripcion')}
                className={`py-3 md:py-4 px-3 md:px-4 border-b-2 font-medium text-sm whitespace-nowrap flex-shrink-0 ${
                  activeTab === 'descripcion'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                Descripción
              </button>
              <button
                onClick={() => setActiveTab('especificaciones')}
                className={`py-3 md:py-4 px-3 md:px-4 border-b-2 font-medium text-sm whitespace-nowrap flex-shrink-0 ml-4 md:ml-8 ${
                  activeTab === 'especificaciones'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                Especificaciones
              </button>
              <button
                onClick={() => setActiveTab('caracteristicas')}
                className={`py-3 md:py-4 px-3 md:px-4 border-b-2 font-medium text-sm whitespace-nowrap flex-shrink-0 ml-4 md:ml-8 ${
                  activeTab === 'caracteristicas'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                Características
              </button>
            </nav>
          </div>

          <div className="p-4 md:p-6">
            {activeTab === 'descripcion' && (
              <div>
                <h3 className="text-black md:text-lg font-semibold mb-3 md:mb-4">Descripción del producto</h3>
                <p className="text-gray-600 leading-relaxed mb-3 md:mb-4 text-sm md:text-base">{product.description}</p>

              </div>
            )}

            {activeTab === 'especificaciones' && (
              <div>
                <h3 className="text-black md:text-lg font-semibold mb-3 md:mb-4">Especificaciones técnicas</h3>
                {product.specifications ? (
                  <div className="grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-4">
                    {Object.entries(product.specifications).map(([key, value]) => (
                      <div key={key} className="flex flex-col md:flex-row md:justify-between border-b pb-2">
                        <span className="font-bold text-gray-700 capitalize mb-1 md:mb-0 text-sm md:text-base">
                          {key}:
                        </span>
                        <span className="text-gray-600 md:text-right text-sm md:text-base">{value}</span>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-gray-600">No hay especificaciones disponibles para este producto.</p>
                )}
              </div>
            )}

            {activeTab === 'caracteristicas' && (
              <div>
                <h3 className="text-black md:text-lg font-semibold mb-3 md:mb-4">Características principales</h3>
                {product.features ? (
                  <ul className="space-y-2 md:space-y-3">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <svg className="w-4 h-4 md:w-5 md:h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-600 text-sm md:text-base">{feature}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-gray-600">No hay características disponibles para este producto.</p>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Productos relacionados */}
        {relatedProducts.length > 0 && (
          <div className="bg-white rounded-lg shadow-lg p-4 md:p-6">
            <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4 md:mb-6">Productos relacionados</h2>
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
              {relatedProducts.map((relatedProduct) => (
                <div
                  key={relatedProduct.id}
                  className="bg-gray-50 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-gray-200"
                >
                  <div className="aspect-square bg-white flex items-center justify-center p-3 md:p-4">
                    <img
                      src={relatedProduct.image}
                      alt={relatedProduct.alt}
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                  
                  <div className="p-3 md:p-4">
                    <div className="mb-2">
                      <span className={`inline-block px-2 py-1 text-xs font-medium rounded-full ${getCategoryColor(relatedProduct.category)}`}>
                        {relatedProduct.category}
                      </span>
                    </div>
                    
                    <h3 className="text-sm md:text-base font-semibold text-gray-900 mb-3 line-clamp-2 leading-tight">
                      {relatedProduct.name}
                    </h3>
                    
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        const productUrl = `https://gym1-nine.vercel.app/pages/tienda-gym/productos/${relatedProduct.id}`;
                        const message = encodeURIComponent(
                          `Hola, estoy interesado en este producto:\n` +
                          `- *Producto:* ${relatedProduct.name}\n` +
                          `- *Categoría:* ${relatedProduct.category}\n\n` +
                          `- *Ver producto:* ${productUrl}`
                        );
                        window.open(`https://wa.me/5212213683565?text=${message}`, "_blank");
                      }}
                      className="w-full bg-red-600 hover:bg-red-700 text-white px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200 flex items-center justify-center gap-2 mb-2"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Más Información
                    </button>
                    
                    <button
                      onClick={() => handleProductClick(relatedProduct.id)}
                      className="w-full border border-gray-300 hover:border-gray-400 text-gray-700 hover:text-gray-900 px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200"
                    >
                      Ver Detalles
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="h-6 md:h-8"></div>
    </div>
  );
}