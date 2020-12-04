import React, {useContext} from 'react';
import '../App.css';
import carrito from '../img/shopping-cart.png';
import {CartContext} from '../context/CartContext';


function CartIcon(children) {

    const {getCantidadItems} = useContext(CartContext);


        return(
            <div>
            <img alt="hola" className="navbar-brand"  src={carrito}   />
                 <span className="num-cart">{getCantidadItems()}</span>
            </div>

        )
    }


export default CartIcon;