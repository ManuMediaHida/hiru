import React, { useContext } from "react";
import { CartContext } from "../contexts/ShoppingCartContext";

export const ShoppingCart = () => {
  const [cart, setCart] = useContext(CartContext);

  const handleRemoveItem = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const quantity = cart.reduce((acc, curr) => acc + curr.quantity, 0);
  const totalPrice = cart.reduce((acc, curr) => acc + curr.quantity * curr.price, 0);

  return (
    <div className="bg-gray-100 p-8 rounded-lg shadow-md min-h-screen">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Carrito de Compras</h2>
      {cart.length > 0 ? (
        cart.map((item) => (
          <div key={item.id} className="flex justify-between items-center bg-white p-4 rounded-lg mb-4 shadow">
            <div>
              <h3 className="text-xl font-semibold">{item.name}</h3>
              <p className="text-gray-600">Precio: ${item.price}</p>
              <p className="text-gray-600">Cantidad: {item.quantity}</p>
              <button
                className="mt-2 bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
                onClick={() => handleRemoveItem(item.id)}
              >
                Eliminar
              </button>
            </div>
          </div>
        ))
      ) : (
        <p className="text-gray-700">Tu carrito está vacío.</p>
      )}
      <div className="mt-6 bg-white p-4 rounded-lg shadow">
        <div className="text-lg font-semibold">Total de Artículos: {quantity}</div>
        <div className="text-lg font-semibold">Precio Total: ${totalPrice.toFixed(2)}</div>
        <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Pagar
        </button>
      </div>
      <div className="text-center mt-12">
        <p className="text-gray-700 mb-2">Explora más productos y ofertas especiales.</p>
        <p className="text-gray-700">¡Gracias por elegirnos!</p>
      </div>
      <div className="my-8 p-4 bg-gray-100 rounded-lg">
        <h3 className="text-xl font-semibold mb-4">¿Sabías que?</h3>
        <ul className="list-disc list-inside text-gray-700">
          <li>Todas las compras realizadas esta semana tienen un 10% de descuento en tu próxima compra.</li>
          <li>Nuestra política de devolución es flexible, ofreciéndote hasta 30 días para devoluciones sin complicaciones.</li>
          <li>Considera complementar tu compra con accesorios exclusivos disponibles en nuestra sección de ofertas especiales.</li>
          <li>Lee los testimonios de nuestros clientes satisfechos y descubre por qué aman nuestros productos.</li>
          <li>Estamos comprometidos con el medio ambiente, utilizando embalajes reciclables para todas nuestras entregas.</li>
        </ul>
      </div>
    </div>
  );
};
