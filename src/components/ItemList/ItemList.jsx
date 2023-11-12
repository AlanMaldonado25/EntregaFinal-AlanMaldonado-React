import React from 'react'
import Item from '../Item/Item'
import './ItemList.css'
const ItemList = ({item}) => {
    return (
        <div className='itemList'>
            {item.map(item =>
                <div className="itemElemento" key={item.id}>
                <Item item={item}/>
            </div>
            )}
        </div>
    )
}

export default ItemList
