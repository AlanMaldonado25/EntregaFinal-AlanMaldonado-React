import React, { useEffect, useState } from 'react'
import productos from '../Json/Products.json'
import Spinner from '../Spinner/Spinner'
import ItemDetail from './ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
const ItemDetailContainer = () => {
    const [item,setItem] = useState([]);
    const [loading,setLoading] = useState(true);
    const {id}= useParams();
    useEffect(()=>{
        const promesa = new Promise((resolve)=>{
            setTimeout(() => {
                resolve(productos.find(item => item.id === parseInt(id)))
            }, 2000);
        })
        promesa.then((data)=>{
            setItem(data);
            setLoading(false);
        })
    },[id])
    return (
        <div>
            {loading ? <Spinner/> : <ItemDetail item={item}/>};
        </div>
    )
}

export default ItemDetailContainer
