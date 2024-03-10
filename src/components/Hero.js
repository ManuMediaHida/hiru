// src/components/Hero.js
import React from 'react';

const Hero = () => (
    <div className="text-gray-800 text-center p-12 shadow-md"
         style={{
            backgroundImage: `url(ideas.jpg)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            color: 'white',
         }}>
        <h1 className="text-5xl font-bold mb-4 text-black">Bienvenidos a Hiru</h1>
        <p className="text-xl text-black">Transformamos tus sueños en diseños</p>
    </div>
);
export default Hero;
