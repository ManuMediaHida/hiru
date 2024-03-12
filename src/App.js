import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import Footer from './components/Footer';
import {ShoppingCart} from './components/ShoppingCart';
import { ShoppingCartProvider } from './contexts/ShoppingCartContext';
import BlogPage from './pages/BlogPage';
import ExampleBlog from './pages/ExampleBlog'; 
import ContactUs from './pages/ContacUs';



function App() {
  return (
    <ShoppingCartProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/blog/example-blog" element={<ExampleBlog/>} /> 
          <Route path="/contact" element={<ContactUs/>} /> 
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/cart" element={<ShoppingCart />} />
        </Routes>
          <Footer/>
      </Router>
    </ShoppingCartProvider>

  );
}

export default App;

