export default function UnderConstruction() {
  return (
  <div className="min-h-screen bg-white flex flex-col items-center justify-start pt-19 px-1">
      
    {/* Logo simple */}
    <div className="flex items-center mb-8">
      <div className="w-25 h-25">
        <img 
          src="/images/logoRe.png"   // <-- aquí pones la ruta de tu logo
          alt="Logo RealLeader" 
          className="w-full h-full object-contain"
        />
      </div>
      <div>
        <h1 className="text-black font-black text-3xl">ealleader</h1>
      </div>
    </div>

      {/* Imagen de máquina en construcción */}
      <div className="w-64 h-48 bg-gray-100 rounded-lg mb-8 flex items-center justify-center border border-gray-300">
        <div className="text-6xl">🏗️</div>
      </div>

      {/* Mensaje */}
      <div className="text-center max-w-md">
        <h2 className="text-black text-2xl font-bold mb-4">
          Página en Construcción
        </h2>
        <p className="text-gray-600 mb-6">
          Estamos trabajando en esta sección. Pronto estará disponible.
        </p>
        
        <a 
          href="/layout" 
          className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg transition-colors"
        >
          Volver al Inicio
        </a>
      </div>
      
    </div>
  );
}