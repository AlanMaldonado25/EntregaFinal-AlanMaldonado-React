import React from 'react'
import { FiTrash2 } from "react-icons/fi";
import './BtnEliminar.css'
const BtnEliminar = ({handleRemove}) => {
    
    return (
        <div>
            <button type="button" className="button" onClick={handleRemove}>
                <span className="button__text">Eliminar</span>
                <span className="button__icon"><FiTrash2 /></span>
            </button>
        </div>
    )
}

export default BtnEliminar
