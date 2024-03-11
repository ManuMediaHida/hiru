import React, { useContext } from "react";
import { CartContext } from '../contexts/ShoppingCartContext';

const ProductCard = ({ id, name, description, imageUrl, price }) => {

    const [cart, setCart] = useContext(CartContext);

  const addToCart = () => {
    setCart((currItems) => {
      const isItemsFound = currItems.find((item) => item.id === id);
      if (isItemsFound) {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      } else {
        return [...currItems, { id, quantity: 1, price }];
      }
    });
  };

  const removeItem = (id) => {
    setCart((currItems) => {
      if (currItems.find((item) => item.id === id)?.quantity === 1) {
        return currItems.filter((item) => item.id !== id);
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  };

  const getQuantityById = (id) => {
    return cart.find((item) => item.id === id)?.quantity || 0;
  };

  const quantityPerItem = getQuantityById(id);
    return (
        <div className="bg-white shadow-lg rounded-lg p-6">
            <img src={imageUrl} alt={name} className="w-full h-64 object-contain object-center rounded-md mb-6"/>
            <h3 className="text-xl font-semibold mb-3">{name}</h3>
            <p className="text-gray-700 mb-4">{description}</p>
            <p className="text-gray-900 mb-4">${price}</p>
            
            <div>
                {quantityPerItem === 0 ? (
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded item-add-button" onClick={() => addToCart()}>
                    + Añadir al carrito
                    </button>
                ) : (
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded item-plus-button" onClick={() => addToCart()}>
                    + Añadir una unidad
                    </button>
                )}

                {quantityPerItem > 0 && (
                    <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded item-minus-button" onClick={() => removeItem(id)}>
                    - Eliminar una unidad
                    </button>
                )}

                {quantityPerItem > 0 && (
                    <div className="bg-gray-200 text-gray-800 font-bold py-1 px-2 rounded-md item-quantity">
                    {quantityPerItem}
                    </div>
                )}

            </div>  

        </div>
    );
};

export default ProductCard;
