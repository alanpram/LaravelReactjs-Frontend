import React, { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export function useCart() {
  return useContext(CartContext);
}

export function CartProvider({ children }) {
  const [cartItemCount, setCartItemCount] = useState(0);

  useEffect(() => {
    // Ambil data keranjang dari localStorage dan hitung cartItemCount
    const cartData = JSON.parse(localStorage.getItem("cart")) || [];
    const newCount = cartData.reduce((total, item) => total + item.qty, 0);
    setCartItemCount(newCount);
  }, []);

  const updateCartItemCount = (newCount) => {
    setCartItemCount(newCount);
  };

  return (
    <CartContext.Provider value={{ cartItemCount, updateCartItemCount }}>
      {children}
    </CartContext.Provider>
  );
}
