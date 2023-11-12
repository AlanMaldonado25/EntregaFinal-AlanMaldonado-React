import React, { useContext } from 'react'
import './CartItem.css'
import BtnEliminar from './BtnEliminar'
import { cartContext } from '../../../context/CartContext';

const CartItem = ({ item }) => {
    const { removeFromCart } = useContext(cartContext);

    const handleRemove = () => {
        removeFromCart(item.id, item.quantity);
    };
    return (
        <div >
            <div key={item.id} className='cartItemCard'>
                <img src={item.img} alt={item.name} className='cartCardImg' />
                <div>
                    <h2 className='cartTitle'>{item.name}</h2>
                    <div>
                        <p className='cartCantidad'>Cantidad: {item.quantity}</p>
                        <p className='cartPrice'>Precio: ${item.precio_actual}</p>
                        <p className='cartTotal'>Total: ${item.precio_actual * item.quantity}</p>
                    </div>
                </div>
                <div>
                    <BtnEliminar handleRemove={handleRemove}/>
                </div>
            </div>
        </div>
    )
}

export default CartItem
