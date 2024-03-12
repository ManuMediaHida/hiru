import React, { createContext, useContext, useReducer, useState } from 'react';

const CartContext = createContext();

const initialCartState = {
  items: [],
  totalAmount: 0,
};

function cartReducer(state, action) {
  switch (action.type) {
    case 'ADD_ITEM': {
      const updatedTotalAmount = state.totalAmount + action.item.price * action.item.quantity;
      const existingCartItemIndex = state.items.findIndex(item => item.id === action.item.id);
      const existingCartItem = state.items[existingCartItemIndex];
      let updatedItems;

      if (existingCartItem) {
        const updatedItem = {
          ...existingCartItem,
          quantity: existingCartItem.quantity + action.item.quantity,
        };
        updatedItems = [...state.items];
        updatedItems[existingCartItemIndex] = updatedItem;
      } else {
        updatedItems = state.items.concat(action.item);
      }

      return {
        ...state,
        items: updatedItems,
        totalAmount: updatedTotalAmount,
      };
    }
    case 'REMOVE_ITEM': {
      return state;
    }
    default:
      return state;
  }
}

export function CartProvider({ children }) {
  const [cartState, dispatch] = useReducer(cartReducer, initialCartState);
  const [isCartVisible, setIsCartVisible] = useState(false);
  
  const addItemToCart = (item) => {
    dispatch({ type: 'ADD_ITEM', item });
    setIsCartVisible(true); 
    console.log("Carrito visible: ", isCartVisible); 
};

  const removeItemFromCart = (id) => {
    dispatch({ type: 'REMOVE_ITEM', id });
  };

  const toggleCartVisibility = () => {
    setIsCartVisible(!isCartVisible);
  };

  return (
    <CartContext.Provider value={{
      items: cartState.items,
      totalAmount: cartState.totalAmount,
      isCartVisible,
      addItemToCart,
      removeItemFromCart,
      toggleCartVisibility,
    }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
