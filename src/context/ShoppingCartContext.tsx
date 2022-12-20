import { createContext, ReactNode, useContext, useState } from "react";

type ShoppingCartProviderProps = {
    children: ReactNode;
}

type CartItem = {
    id: number;
    quantity: number;
}

type ShoppingCartContext = {
    getItemQuantity: (id: number) => number;
    increaseCartQuantity: (id: number) => void;
    decreaseCartQuantity: (id: number) => void;
    removeFromCart: (id: number) => void;
}

const ShoppingCartContext = createContext({} as ShoppingCartContext)
{/* contains ShoppingCartContext values as it's type */}

export function useShoppingCart() {
  return useContext(ShoppingCartContext)
}

export function ShoppingCartProvider( { children }: ShoppingCartProviderProps) {
    const [cartItems, setCartItems] = useState<CartItem[]>([]);
    {/* store cart info in useState, move this to custom hook for local storage as well*/}

    function getItemQuantity(id: number){
        return cartItems.find(item => item.id === id)?.quantity || 0 
    }

    return (
        <ShoppingCartContext.Provider value={{}}>
            {children}
        </ShoppingCartContext.Provider>
    )
}