import React, {useState, useContext} from 'react';
import ItemCount from './ItemCount';
import BuyButton from './BuyButton';
import { CartContext } from '../context/CartContext';

function ItemDetail({item}) {

    const {agregarItemCarrito} = useContext(CartContext);

    const [itemCount,setItemCount] = useState(0);

    function onAdd () {
        agregarItemCarrito(itemCount, item);
    }

    function handleButtonClick (e)  {
        setItemCount(e);    
    }

        return(     
            <div>
                <p className="text-center"><b>Nombre:</b> {item && item.name}</p>
                <p className="text-center"><b>Su precio es: </b>${item && item.price}</p>
                <select className="selected" name="Talle">
                <option value="value1" selected>Talle 1</option> 
                <option value="value2" >Talle 2</option>
                <option value="value3">Talle 3</option>
                </select>
                <img className="imgDetail" alt="IMG-Producto" src={item && item.img} />
                <ItemCount handleClick={handleButtonClick} initial={0} min={0} max={5} />
                <BuyButton  itemCount = {itemCount} onAdd = {onAdd}/>
            </div> 
            )
   
    
}




export default ItemDetail;