import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const useCart = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    const existItem = cartItems.find((x) => x._id === item._id);
    if (existItem) {
      setCartItems(
        cartItems.map((x) =>
          x._id === item._id ? { ...existItem, qty: existItem.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...item, qty: 1 }]);
    }
  };

  const removeFromCart = (id) => {
    setCartItems(cartItems.filter((x) => x._id !== id));
  };

  const updateQty = (id, qty) => {
    setCartItems(
      cartItems.map((x) => (x._id === id ? { ...x, qty: Number(qty) } : x))
    );
  };

  const clearCart = React.useCallback(() => {
    setCartItems([]);
  }, []);

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, updateQty, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};
