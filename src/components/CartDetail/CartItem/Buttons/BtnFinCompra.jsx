import React from 'react'
import './BtnFinCompra.css'
import { GiCoinflip } from "react-icons/gi";

const BtnFinCompra = () => {
    return (
        <div>
            <button type="button" className="button">
                <span className="button__text">Comprar</span>
                <span className="button__icon"><GiCoinflip /></span>
            </button>
        </div>
    )
}

export default BtnFinCompra
