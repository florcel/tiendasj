import React from 'react';
import {Link} from 'react-router-dom';

function Item(item) {

    return(
    
    <div className="ItemList">
                <p className="text-center"><b>Precio: ${item.price}</b></p>
                <img alt="img-item" style={{width:300, height: 300}} src={item.img} />
                <Link to={`/item/${item.id}`}> 
                <button className="btn btn-info detalle">Ver detalle</button>
                </Link> 
            </div>
    )

}

export default Item;


