// src/app/pages/tienda-billar/productos/[id]/page.js
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
    router.push('/pages/tienda-billar');
  };

  const handleCategoryClick = (category) => {
    // Redirigir a la tienda con el filtro de categoría
    router.push(`/pages/tienda-billar?category=${encodeURIComponent(category)}`);
  };

  const handleProductClick = (productId) => {
    router.push(`/pages/tienda-billar/productos/${productId}`);
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
            onClick={handleGoBack}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium transition-colors"
          >
            Volver a la tienda
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 pt-8 md:pt-5">
      {/* Header con navegación - Mejorado para móvil */}
      <div className="bg-gray-200 shadow-sm border-b mb-6">
        <div className="max-w-7xl mx-auto px-4 py-3 md:py-4">
          <div className="flex flex-col space-y-3 md:space-y-0 md:flex-row md:items-center md:justify-between">
            <button
              onClick={handleGoBack}
              className="flex items-center text-gray-600 hover:text-gray-800 transition-colors self-start"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Volver a la tienda
            </button>
            
            {/* Breadcrumb navegable - Mejorado para móvil */}
            <div className="text-sm text-gray-500">
              <button 
                onClick={handleGoBack}
                className="hover:text-gray-700 cursor-pointer transition-colors"
              >
                Tienda
              </button>
              <span className="mx-2">/</span>
              <button
                onClick={() => handleCategoryClick(product.category)}
                className="hover:text-gray-700 cursor-pointer transition-colors"
              >
                {product.category}
              </button>
              <span className="mx-2">/</span>
              <span className="text-gray-800 truncate max-w-32 inline-block md:max-w-none">{product.name}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-4 md:py-8">
        {/* Información principal del producto - Espaciado mejorado */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-6 md:mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8">
            {/* Sección de imagen - Padding ajustado para móvil */}
            <div className="p-4 md:p-6">
              <div className="aspect-square bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
                <img
                  src={product.image}
                  alt={product.alt}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            </div>

            {/* Información del producto - Padding y espacios mejorados */}
            <div className="p-4 md:p-6">
              {/* Categoría */}
              <div className="mb-3 md:mb-4">
                <button
                  onClick={() => handleCategoryClick(product.category)}
                  className={`inline-block px-3 py-1 text-sm font-medium rounded-full transition-colors hover:opacity-80 ${
                    product.category === 'Comida' ? 'bg-green-100 text-green-800 hover:bg-green-200' :
                    product.category === 'Limpieza' ? 'bg-blue-100 text-blue-800 hover:bg-blue-200' :
                    product.category === 'Medicina' ? 'bg-red-100 text-red-800 hover:bg-red-200' :
                    product.category === 'Ropa' ? 'bg-purple-100 text-purple-800 hover:bg-purple-200' :
                    'bg-yellow-100 text-yellow-800 hover:bg-yellow-200'
                  }`}
                >
                  {product.category}
                </button>
              </div>

              {/* Nombre del producto - Tamaño responsivo */}
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 md:mb-4 leading-tight">
                {product.name}
              </h1>

              {/* Precio - Tamaño responsivo */}
              <div className="mb-4 md:mb-6">
                <span className="text-3xl md:text-4xl font-bold text-blue-600">
                  {formatPrice(product.price)}
                </span>
              </div>

              {/* Descripción corta */}
              <div className="mb-4 md:mb-6">
                <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                  {product.description}
                </p>
                {product.category === "Billar" && (
                <p className="text-sm mt-2 text-gray-600">
                  En cada mesa vienen incluidos, dos tacos, un juego de bolas, un triángulo y 10 tizas.
                </p> )}

              </div>

              {/* Selector de cantidad - Mejorado para móvil */}
              <div className="mb-4 md:mb-6">


                <h3 className="text-base md:text-lg font-semibold text-gray-800 mb-3">Cantidad</h3>
                <div className="flex items-center space-x-3 md:space-x-4">
                  <button
                    onClick={() => handleQuantityChange(-1)}
                    disabled={quantity <= 1}
                    className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-gray-300 flex items-center justify-center hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed text-lg md:text-xl font-bold"
                  >
                    -
                  </button>
                  <span className="text-xl md:text-2xl font-semibold w-12 md:w-16 text-center">{quantity}</span>
                  <button
                    onClick={() => handleQuantityChange(1)}
                    disabled={quantity >= 10}
                    className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-gray-300 flex items-center justify-center hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed text-lg md:text-xl font-bold"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Botón de contacto - Mejorado para móvil */}
              <div className="mb-4 md:mb-6">
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
                  className="w-full md:w-auto group/btn bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 py-3 rounded-xl font-semibold transition-all transform hover:scale-105 shadow-md hover:shadow-lg flex items-center justify-center gap-2"
                >
                  <svg className="w-4 h-4 transition-transform group-hover/btn:rotate-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6 0v6a2 2 0 11-4 0v-6m6 0a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  Contactar por WhatsApp
                </button>
              </div>

              {/* Información adicional - Texto más pequeño en móvil */}
              <div className="border-t pt-3 md:pt-4">
                <div className="flex flex-col space-y-2 md:space-y-0 md:flex-row md:items-center md:space-x-4 text-xs md:text-sm text-gray-500">
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

        {/* Tabs de información detallada - Espacios mejorados para móvil */}
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
                <h3 className="text-base md:text-lg font-semibold mb-3 md:mb-4">Descripción del producto</h3>
                <p className="text-gray-600 leading-relaxed mb-3 md:mb-4 text-sm md:text-base">{product.description}</p>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                  Este producto ha sido cuidadosamente seleccionado para ofrecer la mejor calidad y 
                  satisfacer las necesidades de tu mascota. Confía en nuestra experiencia y brinda 
                  lo mejor para tu compañero peludo.
                </p>
              </div>
            )}

            {activeTab === 'especificaciones' && (
              <div>
                <h3 className="text-base md:text-lg font-semibold mb-3 md:mb-4">Especificaciones técnicas</h3>
                {product.specifications && (
                  <div className="grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-4">
                    {Object.entries(product.specifications).map(([key, value]) => (
                      <div key={key} className="flex flex-col md:flex-row md:justify-between border-b pb-2">
                        <span className="font-medium text-gray-700 capitalize mb-1 md:mb-0 text-sm md:text-base">{key}:</span>
                        <span className="text-gray-600 md:text-right text-sm md:text-base">{value}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {activeTab === 'caracteristicas' && (
              <div>
                <h3 className="text-base md:text-lg font-semibold mb-3 md:mb-4">Características principales</h3>
                {product.features && (
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
                )}
              </div>
            )}
          </div>
        </div>

        {/* Productos relacionados - Espaciado mejorado */}
        {relatedProducts.length > 0 && (
          <div className="bg-white rounded-lg shadow-lg p-4 md:p-6">
            <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4 md:mb-6">Productos relacionados</h2>
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
              {relatedProducts.map((relatedProduct) => (
                <div
                  key={relatedProduct.id}
                  className="bg-gray-50 rounded-lg overflow-hidden hover:shadow-md transition-shadow cursor-pointer"
                  onClick={() => handleProductClick(relatedProduct.id)}
                >
                  <div className="aspect-square bg-white flex items-center justify-center p-3 md:p-4">
                    <img
                      src={relatedProduct.image}
                      alt={relatedProduct.alt}
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                  <div className="p-3 md:p-4">
                    <h3 className="font-medium text-gray-800 mb-2 text-xs md:text-sm line-clamp-2">
                      {relatedProduct.name}
                    </h3>
                    <p className="text-sm md:text-lg font-bold text-blue-600">
                      {formatPrice(relatedProduct.price)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Espaciado adicional al final para evitar que el contenido se pegue al borde */}
      <div className="h-6 md:h-8"></div>
    </div>
  );
}