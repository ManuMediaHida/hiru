// Suponiendo que este fragmento esté en src/components/FromOurBlog.js
import React from 'react';
import BlogCard from './BlogCard';

const blogPosts = [
    {
        id: 1,
        title: '5 Tendencias de Diseño de Interiores para este Año',
        summary: 'Explora las últimas tendencias que están dando forma al mundo del diseño de interiores.',
        imageUrl: 'salon.jpg',
        blogUrl: '#'
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
    // Agrega más blogs según sea necesario
];

const FromOurBlog = () => (
    <div className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-6">Desde Nuestro Blog</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {blogPosts.map((post) => (
                    <BlogCard key={post.id} title={post.title} summary={post.summary} imageUrl={post.imageUrl} blogUrl={post.blogUrl} />
                ))}
            </div>
        </div>
    </div>
);

export default FromOurBlog;
