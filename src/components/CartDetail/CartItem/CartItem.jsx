import React, { useContext } from 'react'
import './CartItem.css'
import BtnEliminar from './BtnEliminar'
import { cartContext } from '../../../context/CartContext';

const CartItem = ({ item }) => {
    const { removeProduct} = useContext(cartContext);
    const handleRemove = () =>{
        removeProduct(item.id)
    }
    return (
        <>
            <div key={item.id} className='cartItemCard'>
                <img src={item.img} alt={item.name} className='cartCardImg' />
                <div>
                    <h2 className='cartTitle'>{item.name}</h2>
                    <div>
                        <p className='cartCantidad'>Cantidad: {item.quantity}</p>
                        <p className='cartPrice'>Precio: ${item.price}</p>
                        <p className='cartTotal'>Total: ${item.price * item.quantity}</p>
                    </div>
                </div>
                <div>
                    <BtnEliminar handleRemove={handleRemove}/>
                </div>
            </div>
        </>
    )
}

export default CartItem
