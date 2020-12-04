import React from 'react';
import '../App.css';
import {Link} from 'react-router-dom';


    function BuyButton({itemCount, onAdd}) {

        

        return(
            <Link to={`/cart/`}>
            <button onClick={()=> onAdd()} className="btn btn-info buyButton"> Comprar {itemCount} </button>
            </Link>
        )
    }

    export default BuyButton;



