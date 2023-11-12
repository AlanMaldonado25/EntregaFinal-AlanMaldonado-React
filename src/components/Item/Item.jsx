import React from 'react'
import './Item.css'
import { Link } from 'react-router-dom'
const Item = ({ item }) => {
    return (
        <div className='container ItemContainer'>
            <div className='card'>
                <img src={item.img} alt={item.name} className='img-card' />
                <div className='card-body text-center'>
                    <p className='cardNombre'>{item.name}</p>
                    <p className='cardPrecio'>${item.precio_actual}</p>
                    <Link to={'/item/' + item.id}className='btnCointainer'>
                        <button className='btn btnCard'>Ver mas</button>
                    </Link>
                </div>

            </div>
        </div>
    )
}

export default Item
