import React, { useContext } from 'react'
import { cartContext } from '../../context/CartContext'
import './CartDetail.css'
import CartItem from './CartItem/CartItem';
import CartEmpty from './CartEmpty/CartEmpty';
import { Link } from 'react-router-dom';

const CartDetail = () => {
    const { cart, totalMonto} = useContext(cartContext);
    if (cart.length === 0) {
        return <CartEmpty />;
    }
    return (
        <div className='cartDetail'>
            {cart.map((item) => (
                <CartItem item={item} key={item.id} />
            ))}
            <div>
                <p className='montoTotal'>Total: $ {totalMonto()}</p>
                <Link to='/checkout'>
                    <button className='btn btn-success'>Terminar Compra</button>
                </Link>
            </div>

        </div >
    )
}

export default CartDetail
