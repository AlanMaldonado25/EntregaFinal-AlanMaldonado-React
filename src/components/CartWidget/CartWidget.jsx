
import { RiShoppingCartLine } from "react-icons/ri";
import React, { useContext } from 'react'
import './CartWidget.css'
import { cartContext } from "../../context/CartContext";
const CartWidget = () => {
    const {cart} =useContext(cartContext);
    const totalItems = cart.reduce((total,product) => total + product.quantity, 0);
    return (
        <div className="cartContainer">
            <div className="btn-cart">
                <RiShoppingCartLine className="cart" />
                <span className="counter">{totalItems}</span>
            </div>

        </div>
    )
}

export default CartWidget
