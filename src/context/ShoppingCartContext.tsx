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

const ShoppingCartContext = createContext({} as ShoppingCartContext);
{/* contains values of ShoppingCartContext type */}

export function useShoppingCart() {
  return useContext(ShoppingCartContext);
  {/* custom hook to access context */}
}

export function ShoppingCartProvider( { children }: ShoppingCartProviderProps) {
    const [cartItems, setCartItems] = useState<CartItem[]>([]);
    {/* store cart items in useState, useState is of type CartItem array */}

    function getItemQuantity(id: number){
        return cartItems.find(item => item.id === id)?.quantity || 0 
    }

    function increaseCartQuantity(id: number){
        setCartItems(currItems => {
            if (currItems.find(item => item.id === id) == null) {
                return[...currItems, { id, quantity: 1 }];
                {/* if item is not in cart, add in new item and assign quantity of 1 */}
            } else {
                return currItems.map(item => {
                    if (item.id === id) {
                        return { ...item, quantity: item.quantity + 1 };
                    {/* if item is in cart increase quantity */}
                    } else {
                        return item;
                    }
                })
            }
        })
    }

    function decreaseCartQuantity(id: number){
        setCartItems(currItems => {
            if (currItems.find(item => item.id === id)?.quantity === 1) {
                return currItems.filter(item => item.id !== id);
                {/* if item is in cart with quantity of 1, item will be removed */}
            } else {
                return currItems.map(item => {
                    if (item.id === id) {
                        return { ...item, quantity: item.quantity - 1 };
                    {/* if item is in cart increase quantity */}
                    } else {
                        return item;
                    }
                })
            }
        })
    }

    function removeFromCart(id: number){
        setCartItems(currItems => {
            return currItems.filter(item => item.id !== id);
        })
    }

    return (
        <ShoppingCartContext.Provider value={{ getItemQuantity, increaseCartQuantity, decreaseCartQuantity, removeFromCart }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}