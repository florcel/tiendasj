import React, { useState } from 'react';

export const CartContext = React.createContext([]);

export default function CartContextProvider({children}) {

     const [cart, setCart] = useState([]);
     const [cantidadItems, setCantidadItems] = useState(0);

        function getCantidadItems() {
            return cantidadItems;
        }

        function getCart() {
            return cart;
        }

        function agregarItemCarrito(unaCantidad, unItem) {
            unItem = {cantidad: unaCantidad, ...unItem};
            setCantidadItems(cantidadItems + unaCantidad);
            setCart([...cart,unItem]);
        }
     
    return <CartContext.Provider value={{getCantidadItems, getCart, agregarItemCarrito, cart}}>
        {children}
    </CartContext.Provider>





}