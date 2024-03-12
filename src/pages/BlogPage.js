// src/pages/BlogPage.js
import React from 'react';
import BlogCard from '../components/BlogCard'; // Verifica que la ruta de importación sea correcta
import { Link } from 'react-router-dom';


const blogPosts = [
    {
        id: 1,
        title: '5 Tendencias de Diseño de Interiores para este Año',
        summary: 'Explora las últimas tendencias que están dando forma al mundo del diseño de interiores.',
        imageUrl: 'salon.jpg',
        blogUrl: '#' // Considera actualizar esta propiedad con una URL válida o una ruta dentro de tu aplicación
    },
    {
        id: 2,
        title: 'Cómo Crear Espacios Más Acogedores',
        summary: 'Descubre estrategias clave para hacer que cualquier espacio se sienta más acogedor y cálido.',
        imageUrl: 'acogedor.webp',
        blogUrl: '#'
    },
    {
        id: 3,
        title: 'Maximizando Pequeños Espacios: Trucos y Consejos',
        summary: 'Aprende cómo maximizar el uso de pequeños espacios con estos trucos y consejos inteligentes.',
        imageUrl: 'pequenio.webp',
        blogUrl: '#'
    },

    {
        id: 4,
        title: 'Renovación Sostenible: Transforma tu Hogar de Manera Eco-Amigable',
        summary: 'Descubre cómo las prácticas sostenibles pueden guiarte en la renovación de tu hogar, haciendo espacios más verdes.',
        imageUrl: 'renovacionEco.jpg',
        blogUrl: '#'
    },
    
    // Agrega más blogs según sea necesario
];


const BlogPage = () => {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl text-center mb-8">Nuestro Blog</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {blogPosts.map((post, index) => {
                    if (index === 0) { // Verificamos si es el primer post para aplicar estilos distintivos
                        return (
                            <div key={post.id} className="md:col-span-3 flex flex-col lg:flex-row items-center gap-4">
                                <img src={post.imageUrl} alt={post.title} className="w-full lg:w-1/2 h-64 object-cover rounded-lg"/>
                                <div className="flex-1">
                                    <h2 className="text-2xl font-bold mb-2 text-center lg:text-left">{post.title}</h2>
                                    <p className="text-gray-600 mb-4 text-center lg:text-left">{post.summary}</p>
                                    <div className="text-center lg:text-left">
                                    <Link to="/blog/example-blog" className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded inline-block mt-4 md:mt-0 md:ml-4 transition duration-150 ease-in-out">
                                      Leer más
                                    </Link>
                                    </div>
                                </div>
                            </div>
                        );
                    } else {
                        // Los posts subsecuentes usan el componente BlogCard para mantener el diseño original
                        return <BlogCard key={post.id} title={post.title} summary={post.summary} imageUrl={post.imageUrl} blogUrl={post.blogUrl} />;
                    }
                })}
            </div>
        </div>
    );
};

export default BlogPage;