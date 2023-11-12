import React, { useContext } from 'react'
import { cartContext } from '../../context/CartContext'
import './CartDetail.css'
import CartItem from './CartItem/CartItem';
import CartEmpty from './CartEmpty/CartEmpty';

const CartDetail = () => {
    const {cart} = useContext(cartContext);
    if(cart.length === 0){
        return <CartEmpty/>;
    }
    return (
        <div className='cartDetail'>
            {cart.map((item) => (
                <CartItem item={item}/>
            ))}
        </div>
    )
}

export default CartDetail
