import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Asegúrate de tener este archivo para los estilos globales
import App from './App';
import reportWebVitals from './reportWebVitals';
import { CartProvider } from './context/CartContext'; // Asegúrate de que la ruta sea correcta

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CartProvider> {/* Envuelve tu aplicación con CartProvider */}
      <App />
    </CartProvider>
  </React.StrictMode>
);

// Si deseas comenzar a medir el rendimiento en tu aplicación, pasa una función
// para registrar los resultados (por ejemplo: reportWebVitals(console.log))
// o envía a un punto final de análisis. Aprende más: https://bit.ly/CRA-vitals
reportWebVitals();
