import React, {useState, useEffect} from 'react';
import ItemDetail from '../components/ItemDetail';
import {useParams} from 'react-router-dom';

function ItemDetailContainer(item) {

    const [itemDetail,setItemDetail] = useState();

    const miPromesa = new Promise((res) => {

        res([
            {id: 122, name: "Calza Azul", price: 1500,  description: "Talle 1", img:"https://i.ibb.co/M734SFf/foto1.jpg"},        
            {id: 123, name: "Calza Animal Print",  price: 1900,  description: "Talle 2", img:"https://i.ibb.co/H4kp7pv/foto2.jpg"},
            {id: 124, name: "Calza Gris", price: 1250,  description: "Talle 3", img:"https://i.ibb.co/TWkSh3b/foto3.jpg"},
            {id: 125, name: "Conjunto Batik",price: 2600,  description: "Talle 1", img:"https://i.ibb.co/khzZDvy/foto4.jpg"},        
            {id: 126, name: "Short Palmeras", price: 1400,  description: "Talle 2", img:"https://i.ibb.co/s15jvg6/foto5.jpg"},
            {id: 128, name: "Calza Reptil",  price: 1550,  description: "Talle 3", img:"https://i.ibb.co/gVqfhC6/IMG-7774.jpg"},
            {id: 129, name: "Conjunto Batik Violeta",  price: 2350,  description: "Talle 3", img:"https://i.ibb.co/nMnTknc/IMG-7651.jpg"},
            {id: 130, name: "Short Gris",  price: 1450,  description: "Talle 3", img:"https://i.ibb.co/0XSJzvW/IMG-8414.png"},
            {id: 131, name: "Conjunto Total Black",  price: 2650,  description: "Talle 3", img:"https://i.ibb.co/4j684wv/IMG-5747.jpg"},
            {id: 132, name: "Biker Leopardo",  price: 1750,  description: "Talle 3", img:"https://i.ibb.co/DtTdcx5/IMG-7725.jpg"},
            {id: 133, name: "Biker Tiger",  price: 1450,  description: "Talle 3", img:"https://i.ibb.co/2nQ7ddw/IMG-7525.jpg"},
            {id: 134, name: "Top Roxy",  price: 1350,  description: "Talle 3", img:"https://i.ibb.co/kK8cdtF/IMG-20201113-WA0017.jpg"},
            {id: 135, name: "Top Reptil",  price: 1250,  description: "Talle 3", img:"https://i.ibb.co/gzrVRZW/IMG-7615.jpg"},
            {id: 136, name: "Top Black",  price: 1350,  description: "Talle 3", img:"https://i.ibb.co/VmmcntB/IMG-8260.jpg"},
            {id: 137, name: "Conjunto Tropical Summer",  price: 2450,  description: "Talle 3", img:"https://i.ibb.co/pdZwYcG/IMG-5324.jpg"}
            ]) 
    } );

    const  itemId  = useParams().id;
        

    useEffect(() => {
        setTimeout(()=> {
            miPromesa.then(items => {
               const found = items.find(element => element.id == itemId);
                      setItemDetail(found);
        })
        },3000)
        
        
        
        setTimeout(() => {
        document.getElementsByClassName('loader')[0].style.display = "none";
        document.getElementsByClassName('itemDetail')[0].style.display = "inline";
        }, 3000)
       
        },[]);

            return(
            <div style={{marginTop:10}}>
                <div className="spinner-border loader"></div>
                <div className="itemDetail" style={{display:'none'}}>
                <ItemDetail item={itemDetail}/>
                </div>
                </div>
            ) 

}

export default ItemDetailContainer;

