import React from 'react';
import { useCart } from './CartContext'; 

const CartDropdown = () => {
    const { isCartVisible, items } = useCart();
  
    if (!isCartVisible) return null;

    return (
        <div className="cart-dropdown">
            <h2>Carrito de Compras</h2>
            {items.length > 0 ? (
                <ul>
                    {items.map(item => (
                        <li key={item.id}>
                            {item.name} - ${item.price} x {item.quantity}
                        </li>
                    ))}
                </ul>
            ) : (
                <p>Tu carrito está vacío.</p>
            )}
        </div>
    );
};

export default CartDropdown;
