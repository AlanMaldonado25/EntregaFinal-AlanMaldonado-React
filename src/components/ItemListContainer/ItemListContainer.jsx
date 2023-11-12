import React from 'react'
import { useState,useEffect } from 'react'
import arrayProductos from '../Json/Products.json'
import ItemList from '../ItemList/ItemList'
import './ItemListContainer.css'
import Spinner from '../Spinner/Spinner'
import { useParams } from 'react-router-dom'


const ItemListContainer = () => {
    const [item,setItem] = useState([]);
    const [isLoading,setIsLoading] = useState(true);
    const {id} = useParams();
    useEffect(()=>{
        const fetchData = async()=>{
            try{
                setIsLoading(true);
                const data = await new Promise((resolve)=>{
                    setTimeout(()=>{
                        resolve( id ? arrayProductos.filter((item) => item.categoria === id) : arrayProductos)
                        },2000);
                });
                setItem(data);
            }catch(error){
                console.log('error',error)
            }finally{
                setIsLoading(false);
            }
        };
        fetchData();
    },[id])
    if(isLoading) return <Spinner/>;

    return (
        <div className='ItemListContainer'>
            <div className="row">

            <ItemList item={item}/>

            </div>
        </div>
    )
}

export default ItemListContainer
