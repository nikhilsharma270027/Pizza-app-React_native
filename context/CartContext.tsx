import React, { createContext, useState, useContext, ReactNode } from 'react';

// Define types for the cart item and the context state
type CartItem = {
  id: number;
  name: string;
  price: number;
  quantity: number;
};

type CartContextType = {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (itemId: number) => void;
  clearCart: () => void;
  getTotalPrice: () => number;
};

// Create the Cart Context
const CartContext = createContext<CartContextType | undefined>(undefined);

// CartProvider to wrap the app and provide cart state
interface CartProviderProps {
  children: ReactNode;
}

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  // Add item to the cart
  const addToCart = (item: CartItem) => {
    setCart((prevCart) => [...prevCart, item]);
  };

  // Remove item from the cart
  const removeFromCart = (itemId: number) => {
    setCart((prevCart) => prevCart.filter(item => item.id !== itemId));
  };

  // Clear the entire cart
  const clearCart = () => {
    setCart([]);
  };

  // Get total price of the items in the cart
  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart, getTotalPrice }}>
      {children}
    </CartContext.Provider>
  );
};

// Custom hook to use the CartContext
export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
