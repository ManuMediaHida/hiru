import React from 'react';

const AboutUs = () => (
    <div className="bg-gray-100 py-12">
        <div className="container mx-auto px-4 flex flex-wrap items-center justify-between">
            <div className="w-full md:w-1/2 text-center md:text-left mb-6 md:mb-0">
                <h2 className="text-3xl font-bold mb-4">Sobre Nosotros</h2>
                <p className="text-gray-700">
                    En Hiru, creemos en el poder del diseño para transformar espacios y mejorar vidas.
                    Nuestro equipo de diseñadores selecciona cuidadosamente cada producto, asegurándose de que
                    no solo sea hermoso y moderno, sino también funcional y sostenible. Únete a nosotros en
                    este viaje y haz que tu espacio hable de ti.
                </p>
            </div>
            <div className="w-full md:w-1/2 flex justify-center md:justify-end">
                <img src="teamWork.png" alt="Sobre Nosotros" className="max-w-md h-auto rounded-lg shadow-md"/>
            </div>
        </div>
    </div>
);

export default AboutUs;