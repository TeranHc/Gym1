"use client";

import { useState, useEffect, use } from 'react';
import { useRouter } from 'next/navigation';
import { allProducts } from '../../products';
import Link from 'next/link';

export default function ProductDetailPage({ params }) {
  const router = useRouter();
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [infoView, setInfoView] = useState('descripcion');

  const resolvedParams = use(params);

  useEffect(() => {
    const productId = resolvedParams?.id;
    
    if (productId) {
      const foundProduct = allProducts.find(p => p.id === parseInt(productId));
      
      if (foundProduct) {
        setProduct(foundProduct);
        const related = allProducts
          .filter(p => p.primaryCategory === foundProduct.primaryCategory && p.id !== foundProduct.id)
          .slice(0, 4);
        setRelatedProducts(related);
      }
    }
    
    setIsLoading(false);
  }, [resolvedParams]);

  const handleGoBack = () => {
    router.push('/pages/tienda-gym');
  };

  const handleCategoryClick = (category) => {
    router.push(`/pages/tienda-gym?category=${encodeURIComponent(category)}`);
  };

  const handleProductClick = (productId) => {
    router.push(`/pages/tienda-gym/productos/${productId}`);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-600 mx-auto mb-4"></div>
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
            className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg"
          >
            Volver a la tienda
          </button>
        </div>
      </div>
    );
  }

  const renderProductInfoTabs = () => (
    <div className="mt-4">
      <div className="border-b border-gray-200">
        <nav className="flex -mb-px space-x-6">
          <button
            onClick={() => setInfoView('descripcion')}
            className={`py-3 px-1 border-b-2 font-medium text-sm ${infoView === 'descripcion' ? 'border-red-500 text-red-600' : 'border-transparent text-gray-500 hover:text-gray-700'}`}
          >
            Descripción
          </button>
          <button
            onClick={() => setInfoView('especificaciones')}
            className={`py-3 px-1 border-b-2 font-medium text-sm ${infoView === 'especificaciones' ? 'border-red-500 text-red-600' : 'border-transparent text-gray-500 hover:text-gray-700'}`}
          >
            Especificaciones
          </button>
          <button
            onClick={() => setInfoView('caracteristicas')}
            className={`py-3 px-1 border-b-2 font-medium text-sm ${infoView === 'caracteristicas' ? 'border-red-500 text-red-600' : 'border-transparent text-gray-500 hover:text-gray-700'}`}
          >
            Características
          </button>
        </nav>
      </div>
      <div className="py-6">
        {infoView === 'descripcion' && (
          <p className="text-gray-600 leading-relaxed text-sm md:text-base animate-fade-in">{product.description}</p>
        )}
        {infoView === 'especificaciones' && (
          <div className="animate-fade-in">
            {product.specifications ? (
              <div className="grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-4">
                {Object.entries(product.specifications).map(([key, value]) => value && (
                  <div key={key} className="border-b pb-2">
                    <span className="font-bold text-gray-700 capitalize text-sm md:text-base">{key}:</span>
                    <span className="text-gray-600 ml-2 text-sm md:text-base">{value}</span>
                  </div>
                ))}
              </div>
            ) : <p className="text-sm text-gray-500">No hay especificaciones disponibles.</p>}
          </div>
        )}
        {infoView === 'caracteristicas' && (
          <div className="animate-fade-in">
            {product.features ? (
              <ul className="space-y-2 md:space-y-3">
                {product.features.map((feature, index) => feature && (
                  <li key={index} className="flex items-start">
                    <svg className="w-4 h-4 md:w-5 md:h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    <span className="text-gray-600 text-sm md:text-base">{feature}</span>
                  </li>
                ))}
              </ul>
            ) : <p className="text-sm text-gray-500">No hay características disponibles.</p>}
          </div>
        )}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-100 pt-8 md:pt-1">
      <div className="bg-white shadow-md border-b mb-6">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <button onClick={handleGoBack} className="flex items-center text-gray-600 hover:text-red-600 transition-colors self-start bg-gray-50 hover:bg-gray-100 px-3 py-2 rounded-lg">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
              <span className="font-medium">Volver a la tienda</span>
            </button>
            <div className="flex items-center bg-gray-50 px-4 py-2 rounded-lg border text-sm overflow-x-auto">
              <Link href="/pages/tienda-gym" className="text-gray-600 hover:text-red-800 font-medium transition-colors whitespace-nowrap">Tienda</Link>
              <svg className="w-4 h-4 mx-2 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              <button onClick={() => handleCategoryClick(product.primaryCategory)} className="text-gray-600 hover:text-red-800 font-medium transition-colors whitespace-nowrap">
                {product.primaryCategory}
              </button>
              <svg className="w-4 h-4 mx-2 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              <span className="text-gray-700 font-medium truncate whitespace-nowrap">{product.name}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-8">
          <div className="md:grid md:grid-cols-2 md:gap-8">
            <div className="p-6 flex items-center justify-center">
              <div className="aspect-square bg-gray-100 rounded-lg w-full flex items-center justify-center">
                <img src={product.image} alt={product.alt} className="max-w-full max-h-full object-contain" />
              </div>
            </div>
            <div className="p-6 flex flex-col">
              <div className="mb-4 flex flex-wrap gap-2">
                {product.subCategories.map(sc => (
                  <span key={sc} className="inline-block bg-gray-100 text-gray-700 px-3 py-1 text-sm font-medium rounded-full">{sc}</span>
                ))}
              </div>
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 leading-tight">{product.name}</h1>
              
              {renderProductInfoTabs()}
              
              <div className="mt-auto pt-6 border-t">
                <Link
                  href="/pages/horarios"
                  className="w-full md:w-auto group/btn bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-6 py-3 rounded-xl font-semibold transition-all transform hover:scale-105 shadow-md hover:shadow-lg flex items-center justify-center gap-2"
                >
                  Contáctanos
                </Link>
              </div>
            </div>
          </div>
        </div>
        
        {relatedProducts.length > 0 && (
          // <-- CAMBIO: Se añadieron clases de estilo a este contenedor
          <div className="mt-12 bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Productos relacionados</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {relatedProducts.map((relatedProduct) => (
                <div key={relatedProduct.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer border" onClick={() => handleProductClick(relatedProduct.id)}>
                  <div className="aspect-square bg-white flex items-center justify-center p-4">
                    <img src={relatedProduct.image} alt={relatedProduct.alt} className="max-w-full max-h-full object-contain" />
                  </div>
                  <div className="p-4">
                    <span className="inline-block bg-gray-200 text-gray-700 px-2 py-1 text-xs font-semibold rounded-full mb-2">{relatedProduct.primaryCategory}</span>
                    <h3 className="text-base font-semibold text-gray-900 line-clamp-2 h-12">{relatedProduct.name}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}