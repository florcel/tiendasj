import React, {useState} from 'react';
import '../App.css';


function ItemCount ({initial, min, max, handleClick}) { 
    const [cantidad, setCantidadItem] = useState(initial);

    function sumarItems() {
        if(cantidad<max){
        setCantidadItem(cantidad + 1);
        handleClick(cantidad + 1);
        }
      }

      function restarItems() {
        if(cantidad>min){
        setCantidadItem(cantidad - 1);
        handleClick(cantidad - 1);
    }
      }

    return (

    <div className="itemCount text-center">
    <button className="btn btn-info count" onClick={restarItems}> -1  </button>
    <button className="btn btn-info count"> {cantidad} </button>
    <button className="btn btn-info count" onClick={sumarItems}> +1   </button>
    </div>
     );
   }

   export default ItemCount;