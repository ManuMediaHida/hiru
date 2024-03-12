import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../contexts/ShoppingCartContext';

const Navbar = () => {
  
  const [cart] = useContext(CartContext);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const quantity = cart.reduce((acc, curr) => acc + curr.quantity, 0);

  return (
    <nav className="bg-teal-500 p-6 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-gray-800 font-semibold text-xl tracking-tight">Hiru</Link>
        <div className="md:hidden">
          <button onClick={toggleMenu} aria-label="Toggle navigation" aria-expanded={isOpen ? 'true' : 'false'}>
            <svg className={`${isOpen ? 'hidden' : 'block'} w-6 h-6`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7"></path></svg>
            <svg className={`${isOpen ? 'block' : 'hidden'} w-6 h-6`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"></path></svg>
          </button>
        </div>
        <div className={`md:flex flex-col md:flex-row md:items-center md:justify-end ${isOpen ? 'flex' : 'hidden'}`}>
          <Link to="/" className="text-gray-800 hover:text-gray-600 transition duration-150 ease-in-out mt-4 md:mt-0 md:ml-4">Inicio</Link>
          <Link to="/products" className="text-gray-800 hover:text-gray-600 transition duration-150 ease-in-out mt-4 md:mt-0 md:ml-4">Productos</Link>
          <Link to="/blog" className="text-gray-800 hover:text-gray-600 transition duration-150 ease-in-out mt-4 md:mt-0 md:ml-4">Blog</Link>
          <Link to="/contact" className="text-gray-800 hover:text-gray-600 transition duration-150 ease-in-out mt-4 md:mt-0 md:ml-4">Contáctanos</Link>
          <Link to={"/cart"} className="text-gray-800 hover:text-gray-600 transition duration-150 ease-in-out mt-4 md:mt-0 md:ml-4">
          Carrito<span className="ml-2 bg-gray-200 rounded-full px-2 py-1 text-xs">{quantity}</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
