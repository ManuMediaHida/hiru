import React, { useContext } from "react";
import { CartContext } from "../contexts/ShoppingCartContext";

export const ShoppingCart = () => {
  const [cart, setCart] = useContext(CartContext);

  const handleRemoveItem = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const quantity = cart.reduce((acc, curr) => acc + curr.quantity, 0);

  const totalPrice = cart.reduce(
    (acc, curr) => acc + curr.quantity * curr.price,
    0
  );

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold mb-4">Carrito de Compras</h2>
      {cart.map((item) => (
        <div key={item.id} className="flex items-center mb-4">
          <div>
            <h3 className="text-lg font-semibold">{item.name}</h3>
            <p className="text-gray-600">Precio: ${item.price}</p>
            <p className="text-gray-600">Cantidad: {item.quantity}</p>
            <p className="text-gray-600">Descripción: {item.description}</p>
            <button
              className="text-red-500 hover:text-red-700 font-semibold"
              onClick={() => handleRemoveItem(item.id)}
            >
              Eliminar
            </button>
          </div>
        </div>
      ))}
      <div className="mt-6">
        <div className="font-semibold">Total de Artículos: {quantity}</div>
        <div className="font-semibold">Precio Total: ${totalPrice.toFixed(2)}</div>
        <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded">
          Pagar
        </button>
      </div>
    </div>
  );
};
