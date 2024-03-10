import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <nav className="bg-teal-500 p-6 shadow-md">
            <div className="container mx-auto flex justify-between items-center">
                <Link to="/" className="text-gray-800 font-semibold text-xl tracking-tight">Hiru</Link>
                <div className="md:hidden">
                    <button onClick={toggleMenu} aria-label="Toggle navigation" aria-expanded={isOpen ? "true" : "false"}>
                        {/* Icono de Hamburguesa */}
                        <svg className={`${isOpen ? 'hidden' : 'block'} w-6 h-6`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7"></path></svg>
                        {/* Icono de Cerrar */}
                        <svg className={`${isOpen ? 'block' : 'hidden'} w-6 h-6`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"></path></svg>
                    </button>
                </div>
                <div className={`md:flex flex-col md:flex-row md:items-center ${isOpen ? 'flex' : 'hidden'}`}>
                    <Link to="/" className="text-gray-800 hover:text-gray-600 transition duration-150 ease-in-out mt-4 md:mt-0 md:ml-4">Inicio</Link>
                    <Link to="/products" className="text-gray-800 hover:text-gray-600 transition duration-150 ease-in-out mt-4 md:mt-0 md:ml-4">Productos</Link>
                    {/* Otros elementos del menú */}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

