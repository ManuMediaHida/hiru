import React, { useState, useEffect  } from 'react';
import ProductCard from '../components/ProductCard'; 

const allProducts = [
    { id: 1, name: 'Tapiz', description: 'Tapiz tejido con diseño moderno, perfecto para añadir textura a tus paredes.', imageUrl: 'tapizDisenio.jpg', price: '29.99' },
    { id: 2, name: 'Alfombra', description: 'Alfombra de lana suave, ideal para dar calidez a cualquier espacio.', imageUrl: 'alfombra.jpg', price: '89.99' },
    { id: 3, name: 'Cojín', description: 'Cojín decorativo con la imagen de un galgo, cómodo y estiloso.', imageUrl: 'cojin.jpg', price: '19.99' },
    { id: 4, name: 'Lámpara de Mesa', description: 'Lámpara de mesa con base de cerámica, proporciona una luz suave y ambiental.', imageUrl: 'lamparaMesa.jpg', price: '49.99' },
    { id: 5, name: 'Figura de Decoración', description: 'Figura decorativa minimalista, un detalle sutil para cualquier estantería.', imageUrl: 'figura.webp', price: '15.99' },
    { id: 6, name: 'Vajilla Vintage', description: 'Set de vajilla vintage, añade un toque clásico a tus comidas.', imageUrl: 'vajilla.webp', price: '99.99' },
    { id: 7, name: 'Lámpara de Interiores', description: 'Elegante lámpara de diseño minimalista, perfecta para añadir un toque de luz cálida a cualquier habitación.', imageUrl: 'lampInterior.webp', price: '99.99' },
    { id: 8, name: 'Silla de Estilo Moderno', description: 'Silla contemporánea con un diseño ergonómico para máximo confort. Ideal para tu oficina en casa o comedor.', imageUrl: 'silla.jpg', price: '199.99' },
    { id: 9, name: 'Sofá Espacioso y Cómodo', description: 'Amplio sofá con tapizado premium, perfecto para tu sala de estar. Diseño moderno y funcional que se adapta a cualquier decoración.', imageUrl: 'sofa.jpg', price: '299.99' },

];

const ProductsPage = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [sortType, setSortType] = useState('');
    const [priceRange, setPriceRange] = useState({ min: 0, max: Infinity });
    const [products, setProducts] = useState(allProducts);

    useEffect(() => {
        filterAndSortProducts(searchTerm, sortType, priceRange);
    }, [searchTerm, sortType, priceRange]); // Este efecto se ejecutará cada vez que searchTerm, sortType o priceRange cambien

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleSortChange = (event) => {
        setSortType(event.target.value);
    };

    const handlePriceChange = (event) => {
        const { name, value } = event.target;
        setPriceRange(prevRange => ({
            ...prevRange,
            [name]: value ? value : name === 'min' ? 0 : Infinity // Ajusta para manejar strings vacíos correctamente
        }));
    };

    const filterAndSortProducts = (searchTerm, sortType, { min, max }) => {
        let updatedProducts = allProducts.filter(product =>
            (product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            product.description.toLowerCase().includes(searchTerm.toLowerCase())) &&
            parseFloat(product.price) >= parseFloat(min) &&
            parseFloat(product.price) <= parseFloat(max)
        );

        switch (sortType) {
            case 'priceAsc':
                updatedProducts.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
                break;
            case 'priceDesc':
                updatedProducts.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
                break;
            case 'alpha':
                updatedProducts.sort((a, b) => a.name.localeCompare(b.name));
                break;
            default:
                break;
        }

        setProducts(updatedProducts);
    };

    return (
        <div>
            <h1 className="text-3xl text-center my-8">Nuestros Productos</h1>
            <div className="mb-8 flex flex-col items-center justify-center space-y-4 md:flex-row md:space-y-0 md:space-x-4">
                <input
                    type="text"
                    placeholder="Buscar productos..."
                    value={searchTerm}
                    onChange={handleSearchChange}
                    className="px-4 py-2 w-full max-w-md border rounded-md shadow-sm"
                />
                <select
                    value={sortType}
                    onChange={handleSortChange}
                    className="px-4 py-2 w-full max-w-md border rounded-md shadow-sm"
                >
                    <option value="">Ordenar por</option>
                    <option value="priceAsc">Precio: Menor a Mayor</option>
                    <option value="priceDesc">Precio: Mayor a Menor</option>
                    <option value="alpha">Alfabéticamente</option>
                </select>
                <input
                    type="number"
                    name="min"
                    placeholder="Precio Mínimo"
                    value={priceRange.min}
                    onChange={handlePriceChange}
                    className="px-4 py-2 w-full max-w-md border rounded-md shadow-sm"
                />
                <input
                    type="number"
                    name="max"
                    placeholder="Precio Máximo"
                    value={priceRange.max === Infinity ? '' : priceRange.max}
                    onChange={handlePriceChange}
                    className="px-4 py-2 w-full max-w-md border rounded-md shadow-sm"
                />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
                {products.map((product) => (
                    <ProductCard
                        key={product.id}
                        name={product.name}
                        description={product.description}
                        imageUrl={product.imageUrl}
                        price={product.price}
                    />
                ))}
            </div>
        </div>
    );
};

export default ProductsPage;