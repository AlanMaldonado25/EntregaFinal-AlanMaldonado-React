import React, { useEffect, useState } from 'react';
import '../ItemDetail.css';
import { BsDashSquare, BsPlusSquare } from "react-icons/bs";

const ItemCount = ({ initial, stock, onAdd }) => {
    const [count, setCount] = useState(parseInt(initial));

    const restar = () => {
        setCount(count - 1);
    };

    const sumar = () => {
        setCount(count + 1);
    };

    useEffect(() => {
        setCount(parseInt(initial));
    }, [initial]);

    return (
        <div>
            <div className='contador text-center'>
                <button disabled={count <= 1} onClick={restar} className='btnContador'><BsDashSquare /></button>
                <p className='numero'>{count}</p>
                <button disabled={count >= stock} onClick={sumar} className='btnContador'><BsPlusSquare /></button>
            </div>
            <div className='text-center'>
                <button className='btnAdd text-center' disabled={stock <= 0} onClick={() => onAdd(count)}>Agregar al carrito</button>
            </div>
        </div>
    );
};

export default ItemCount;