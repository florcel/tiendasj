import React from 'react';
import Item from './Item';



function ItemList({miListaItems}) {

    const ItemsAMostrar = miListaItems.miLista;

    return (
        miListaItems.map(item => (
        <div className="">
        <div className="">
        <Item key={item.id} className="item" name={item.name} id={item.id} price={item.price} img={item.img} description={item.description} />
        </div>
        </div> 
    )));
    
}


export default ItemList;

