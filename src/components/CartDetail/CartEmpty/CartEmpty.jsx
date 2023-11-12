import React from 'react'
import './CartEmpty.css'
import { Link } from 'react-router-dom'
const CartEmpty = () => {
    return (
        <div className='msjContainer'>
            <h2 className='msj'>Tu carrito esta vacio!</h2>
            <Link to='/'>
            <button className='btn btn-primary btnVolver'>Ve a comprar!</button>
            </Link>
        </div>
    )
}

export default CartEmpty
