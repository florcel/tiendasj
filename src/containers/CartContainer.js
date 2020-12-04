import React, {useContext, useState, useEffect} from 'react';
import {CartContext} from '../context/CartContext';
import {Link} from 'react-router-dom';

function CartContainer() {
    
    const {getCantidadItems, cart} = useContext(CartContext);

    const [total, setTotal] = useState();

    useEffect(()=> {
        if (cart.length > 0){
        const reducer = (accumulator, currentValue) => accumulator + currentValue;
        setTotal((cart.map(p => p.price * p.cantidad)).reduce(reducer));}
    },[]);

    
   if (getCantidadItems() > 0) {
   return(
    <div>
    <h1 className="text-center">Items agregados al carrito: {getCantidadItems()} </h1> 
        
         {cart.map(p => 
         <div className="container text-center">
            <p className="cart">Nombre:  <b>{p.name}</b> </p> 
            <p className="cart">Precio: <b>${p.price}</b> </p>
            <p className="cart">Cantidad: <b>{p.cantidad}</b></p>
            <p className="cart">Valor Total: <b>${p.price * p.cantidad}</b></p>
            <img className="img-cart" alt="IMG-Producto"style={ {width:100, height:100, float:"right"}} src={p.img} /> 
         </div>
        )}
        <h3 className="text-right total">Total compra: ${total}</h3>
        <button className="btn btn-info count continue"> Continuar </button>
         </div>
    ) 
    } else {
        return(
            <div>
            <p className="text-center">No agregaste nada al carrito</p>
            <Link  to={`/`}>
            <button className="btn btn-info count home">Volver al Home</button>
            </Link>
            </div>
        )
    } 
}



export default CartContainer;