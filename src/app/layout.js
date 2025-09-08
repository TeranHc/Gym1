import { CartProvider } from './pages/carrito/CartContext';
import './globals.css';
import Header from './components/header';
import Footer from './components/footer';
import Script from 'next/script';

export const metadata = {
  title: 'Gym RealLeader',
  description: 'Veterinaria especializada en el cuidado de mascotas',
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        {/* Google Analytics Script - Solo se ejecuta si las cookies están aceptadas */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-LTR1CZ4WQY"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            // Verificar si las cookies están aceptadas antes de inicializar GA
            if (typeof Storage !== 'undefined' && localStorage.getItem('cookiesAccepted') === 'true') {
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-LTR1CZ4WQY');
            }
          `}
        </Script>
        
      </head>
      <body className="flex flex-col min-h-screen">
        <CartProvider>
          <Header className="py-10 lg:py-20">
            
          </Header>
          <main className=" lg:pt-2 bg-main ">{children}</main>
          <Footer>
              <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />

          </Footer>
        </CartProvider>
      </body>
    </html>
  );
}