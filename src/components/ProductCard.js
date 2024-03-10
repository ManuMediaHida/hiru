import React from 'react';
import { useCart } from '../context/CartContext'; // Asegúrate de que la ruta de importación sea correcta

const ProductCard = ({ id, name, description, imageUrl, price }) => {
    const { addItemToCart } = useCart(); // Usamos el hook useCart para acceder a addItemToCart

    const handleAddToCart = () => {
        // Crear un objeto de producto para añadir al carrito
        const productToAdd = {
            id, 
            name, 
            price, 
            quantity: 1, // Puedes ajustar esto para permitir cantidades personalizadas si es necesario
        };
        addItemToCart(productToAdd); // Añade el producto al carrito
    };

    return (
        <div className="bg-white shadow-lg rounded-lg p-6">
            <img src={imageUrl} alt={name} className="w-full h-64 object-contain object-center rounded-md mb-6"/>
            <h3 className="text-xl font-semibold mb-3">{name}</h3>
            <p className="text-gray-700 mb-4">{description}</p>
            <p className="text-gray-900 mb-4">${price}</p>
            <button
                onClick={handleAddToCart} // Manejador de clic para añadir el producto al carrito
                className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded"
            >
                Comprar
            </button>
        </div>
    );
};

export default ProductCard;
