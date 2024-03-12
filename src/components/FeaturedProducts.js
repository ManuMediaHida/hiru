import React from 'react';
import ProductCard from './ProductCard';

const products = [
    { 
        id: 1, 
        name: 'Lámpara de Interiores', 
        description: 'Elegante lámpara de diseño minimalista, perfecta para añadir un toque de luz cálida a cualquier habitación.', 
        imageUrl: 'lampInterior.webp', 
        price: '99.99' 
    },
    { 
        id: 2, 
        name: 'Silla de Estilo Moderno', 
        description: 'Silla contemporánea con un diseño ergonómico para máximo confort. Ideal para tu oficina en casa o comedor.', 
        imageUrl: 'silla.jpg', 
        price: '199.99' 
    },
    { 
        id: 3, 
        name: 'Sofá Espacioso y Cómodo', 
        description: 'Amplio sofá con tapizado premium, perfecto para tu sala de estar. Diseño moderno y funcional que se adapta a cualquier decoración.', 
        imageUrl: 'sofa.jpg', 
        price: '299.99' 
    },
];

const FeaturedProducts = () => {
    return (
        <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center my-8">Productos Destacados</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.map(product => (
                    <ProductCard key={product.id} name={product.name} description={product.description} imageUrl={product.imageUrl} price={product.price} />
                ))}
            </div>
        </div>
    );
};

export default FeaturedProducts;
