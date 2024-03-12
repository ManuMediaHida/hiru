import React, { useContext } from "react";
import { CartContext } from '../contexts/ShoppingCartContext';

const ProductCard = ({ id, name, description, imageUrl, price }) => {
    const [cart, setCart] = useContext(CartContext);

    const addToCart = () => {
        setCart((currItems) => {
            const isItemsFound = currItems.find((item) => item.id === id);
            if (isItemsFound) {
                return currItems.map((item) => item.id === id ? { ...item, quantity: item.quantity + 1 } : item);
            } else {
                return [...currItems, { id, name, description, imageUrl, price, quantity: 1 }];
            }
        });
    };

    const removeItem = (id) => {
        setCart((currItems) => {
            return currItems.reduce((acc, item) => {
                if (item.id === id) {
                    if (item.quantity > 1) {
                        acc.push({ ...item, quantity: item.quantity - 1 });
                    }
                } else {
                    acc.push(item);
                }
                return acc;
            }, []);
        });
    };

    const getQuantityById = (id) => {
        return cart.find((item) => item.id === id)?.quantity || 0;
    };

    const quantityPerItem = getQuantityById(id);

    return (
        <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center">
            <img src={imageUrl} alt={name} className="w-full md:w-1/2 lg:w-1/3 h-64 object-contain rounded-md mb-6"/>
            <h3 className="text-xl font-semibold mb-3 text-center">{name}</h3>
            <p className="text-gray-700 mb-4 text-center">{description}</p>
            <p className="text-gray-900 mb-4">${price}</p>
            <div className="flex items-center space-x-2">
                {quantityPerItem > 0 && (
                    <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-4 rounded" onClick={() => removeItem(id)}>
                    -
                    </button>
                )}

                {quantityPerItem > 0 && (
                    <div className="bg-gray-200 text-gray-800 font-bold py-1 px-2 rounded-md">
                    {quantityPerItem}
                    </div>
                )}

                <button className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded ${quantityPerItem === 0 ? 'w-full' : ''}`} onClick={() => addToCart()}>
                    {quantityPerItem === 0 ? '+ Añadir al carrito' : '+ '}
                </button>
            </div>
        </div>
    );
};

export default ProductCard;
