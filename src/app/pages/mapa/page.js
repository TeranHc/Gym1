"use client";
import React, { useState, useEffect, useMemo } from 'react';
import dynamic from 'next/dynamic';

// --- CAMBIO: Se añadieron nuevos países a la lista ---
const mapData = [
  // Países existentes
  { country: "us", name: "Estados Unidos", value: 1, region: "América del Norte", description: "Sede principal - Equipos de fitness premium" },
  { country: "ca", name: "Canadá", value: 1, region: "América del Norte", description: "Distribuidor en Norteamérica" },
  { country: "mx", name: "México", value: 1, region: "América del Norte", description: "Presencia en Latinoamérica" },
  { country: "cl", name: "Chile", value: 1, region: "América del Sur", description: "Distribuidor oficial - Let's Go Fitness" },
  { country: "es", name: "España", value: 1, region: "Europa", description: "Hub europeo - Distribución continental" },
  { country: "gb", name: "Reino Unido", value: 1, region: "Europa", description: "Mercado británico - Equipos profesionales" },
  { country: "it", name: "Italia", value: 1, region: "Europa", description: "Distribuidor en el Mediterráneo" },
  { country: "fr", name: "Francia", value: 1, region: "Europa", description: "Presencia en Europa Occidental" },
  { country: "in", name: "India", value: 1, region: "Asia", description: "Into Wellness - Expansión asiática" },
  { country: "id", name: "Indonesia", value: 1, region: "Asia Pacífico", description: "Mercado del sudeste asiático" },
  { country: "vn", name: "Vietnam", value: 1, region: "Asia Pacífico", description: "Live Pro Fitness - Distribuidor local" },
  { country: "jp", name: "Japón", value: 1, region: "Asia", description: "Distribuidor en Asia Oriental" },
  { country: "au", name: "Australia", value: 1, region: "Oceanía", description: "Mercado australiano - Fitness profesional" },

  // --- Nuevos países añadidos ---
  { country: "ru", name: "Rusia", value: 1, region: "Europa/Asia", description: "Presencia en Eurasia" },
  { country: "br", name: "Brasil", value: 1, region: "América del Sur", description: "Mercado en Sudamérica" },
  { country: "cn", name: "China", value: 1, region: "Asia", description: "Centro de manufactura y distribución" },
  { country: "za", name: "Sudáfrica", value: 1, region: "África", description: "Acceso al mercado africano" },
  { country: "de", name: "Alemania", value: 1, region: "Europa", description: "Distribuidor en Europa Central" },
  { country: "sa", name: "Arabia Saudita", value: 1, region: "Medio Oriente", description: "Presencia en el Golfo" },
  { country: "ae", name: "Emiratos Árabes Unidos", value: 1, region: "Medio Oriente", description: "Hub en Dubai" },
  { country: "eg", name: "Egipto", value: 1, region: "África/Medio Oriente", description: "Conexión Norte de África" },
  { country: "tr", name: "Turquía", value: 1, region: "Europa/Asia", description: "Puente entre continentes" },
];

// --- CAMBIO: Se añadieron colores para los nuevos países ---
const countryColors = {
  // Colores existentes
  "Estados Unidos": "#E11D48", "Canadá": "#F97316", "México": "#FBBF24", "Chile": "#84CC16", 
  "España": "#3B82F6", "Reino Unido": "#0EA5E9", "Italia": "#6366F1", "Francia": "#8B5CF6", 
  "India": "#D946EF", "Indonesia": "#10B981", "Vietnam": "#22C55E", "Japón": "#A855F7", 
  "Australia": "#06B6D4",
  
  // Nuevos colores
  "Rusia": "#F87171", "Brasil": "#34D399", "China": "#F472B6", "Sudáfrica": "#FB923C", 
  "Alemania": "#60A5FA", "Arabia Saudita": "#A78BFA", "Emiratos Árabes Unidos": "#FACC15", "Egipto": "#4ADE80", 
  "Turquía": "#93C5FD"
};

export default function WorldMapPage() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  
  const WorldMapWithNoSSR = useMemo(() => dynamic(
    () => import('react-svg-worldmap').then(mod => mod.WorldMap),
    { 
      ssr: false,
      loading: () => <div className="w-full h-96 flex justify-center items-center"><p>Cargando Mapa...</p></div>
    }
  ), []);

  return (
    <div className="bg-gradient-to-br from-gray-50 to-blue-50 min-h-screen text-gray-800">
      <section className="bg-gray-200  text-gray-800 py-12 text-center">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-black bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
            Nuestra <span className="text-red-500">Red Global</span>
          </h1>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Descubre nuestros distribuidores oficiales alrededor del mundo.
          </p>
        </div>
      </section>

      <div className="max-w-screen-xl mx-auto p-4 md:p-8">
        <div className="w-full bg-white p-4 md:p-6 rounded-2xl shadow-xl border border-gray-300">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Presencia Internacional</h2>
          <div className="flex justify-center w-full">
            {isClient && (
              <WorldMapWithNoSSR
                size="responsive"
                data={mapData}
                styleFunction={(country) => ({
                  fill: mapData.find(c => c.country === country.countryCode.toLowerCase()) 
                        ? countryColors[mapData.find(c => c.country === country.countryCode.toLowerCase()).name] 
                        : '#D1D5DB',
                  stroke: "black",
                  strokeWidth: 1,
                  cursor: "default",
                })}
              />
            )}
          </div>
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 border-t border-gray-200 pt-6">
            {mapData.map((country) => (
              <div key={country.name} className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full border border-gray-300" style={{backgroundColor: countryColors[country.name]}}></div>
                <span className="text-sm text-gray-700 font-medium">{country.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}