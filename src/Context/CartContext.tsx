import { createContext, useState, ReactNode, useContext } from "react";

interface CartItem {
  id: number;
  title: string;
  price: number;
  duration: number;
  img: string;
  description: string;
  popular: boolean;
}

interface CartContextType {
  cart: CartItem[];
  addToCart: (item: CartItem) => string;
  removeFromCart: (id: number) => void;
}

const initialState: CartContextType = {
  cart: [],
  addToCart: () => "",
  removeFromCart: () => {},
};

const CartContext = createContext<CartContextType>(initialState);

export const CartProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (item: CartItem): string => {
    if (cart.find((i) => i.id === item.id)) {
      return "Already in Cart";
    } else {
      setCart((prevCart) => [...prevCart, item]);
      return "Added Successfully";
    }
  };

  const removeFromCart = (id: number): void => {
    setCart((prevCart) => prevCart.filter((i) => i.id !== id));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
