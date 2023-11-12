import React, { useContext, useState } from 'react'
import './ItemDetail.css'
import { Link } from 'react-router-dom';
import { BsDashSquare,BsPlusSquare } from "react-icons/bs";
import { cartContext } from '../../../context/CartContext';
const ItemDetail = ({ item }) => {
    const [contador, setContador] = useState(0);
    const {addToCart,stock} = useContext(cartContext);
    const onAdd = () => {
        if (contador <= stock[item.id]) { // Verifica el stock antes de agregar al carrito
            addToCart(item, contador);
            setContador(0);
        } else {
            alert('No puedes agregar más artículos de los que hay en stock.');
        }
    };
    
    
    return (
        <div className='itemDetail'>
            <div className='itemCard row'>
                <div className='imgCointainer col-md-7'>
                    <img src={item.img} alt={item.name} className='itemImg' />
                </div>
                <div className='col-md-5' >
                    <h1 className='itemName'>{item.name}</h1>
                    <div className="cardText">
                        <p className='cardPrice text-center'>${item.precio_actual}</p>
                        <p className='cardStock'>Stock Disponible: {stock[item.id]}</p> 
                    </div>
                </div>
                <div className='addCartContainer row'>
                    <div className='contador text-center'>
                        <button onClick={() => contador > 0 && setContador(contador - 1)}className='btnContador'><BsDashSquare/></button>
                        <p className='numero'>{contador}</p>
                        <button onClick={() => contador < stock[item.id] && setContador(contador + 1)} className='btnContador'><BsPlusSquare/></button>
                    </div>
                    <div className='text-center'>
                        <button className='btnAdd text-center' onClick={onAdd}>Agregar al carrito</button>
                    </div>
                    <Link to='/' className='text-center'>
                        <button className='btnVolver text-center'>volver</button>
                    </Link>
                </div>
            </div>

        </div>
    )
};

export default ItemDetail
