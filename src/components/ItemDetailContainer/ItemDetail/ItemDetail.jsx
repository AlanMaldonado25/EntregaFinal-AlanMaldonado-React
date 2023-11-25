import React, { useContext, useState } from 'react';
import './ItemDetail.css';
import { Link } from 'react-router-dom';
import { cartContext } from '../../../context/CartContext';
import ItemCount from './ItemCount/ItemCount';

const ItemDetail = ({ item }) => {
    const [goToCart, setGoToCart] = useState(false);
    const { addToCart } = useContext(cartContext);
    const [currentStock, setCurrentStock] = useState(item.stock);
    const onAdd = (quantity) => {
        const updatedStock = currentStock - quantity;
        if(updatedStock >= 0){
            const updatedItem = { ...item, stock: updatedStock };
        addToCart(updatedItem, quantity);
        setCurrentStock(updatedStock);
        setGoToCart(true);
        }else{
            setError('No hay suficiente stock disponible');
        }
    };


    return (
        <div className='itemDetail'>
            <div className='itemCard row'>
                <div className='imgCointainer col-md-7'>
                    <img src={item.img} alt={item.name} className='itemImg' />
                </div>
                <div className='col-md-5'>
                    <div>
                        <h1 className='itemName'>{item.name}</h1>
                        <p>{item.description}</p>
                    </div>
                    <div className="cardText">
                        <p className='cardPrice text-center'>${item.price}</p>
                        <p className='cardStock'>Stock Disponible: {currentStock}</p>
                    </div>
                </div>
                <div className='addCartContainer row'>
                    <div className='terminarContainer text-center'>
                        {goToCart ? (
                            <Link to='/cart' className='terminarCompra'>
                                Terminar compra
                            </Link>
                        ) : (
                            <ItemCount stock={currentStock} initial={0} onAdd={onAdd} />
                        )}
                    </div>
                    <Link to='/' className='text-center'>
                        <button className='btnVolver text-center'>volver</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ItemDetail;