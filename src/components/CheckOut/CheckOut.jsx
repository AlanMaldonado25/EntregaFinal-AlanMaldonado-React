import React, { useContext, useState } from 'react';
import { cartContext, useCartContext } from '../../context/CartContext';
import { getFirestore, collection, addDoc, updateDoc, doc, getDoc } from 'firebase/firestore';
import './CheckOut.css';
import { Link } from 'react-router-dom';

const CheckOut = () => {
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [telefono, setTelefono] = useState('');
    const [email, setEmail] = useState('');
    const [emailConfirmacion, setEmailConfirmacion] = useState('');
    const [error, setError] = useState('');
    const [ordenId, setOrdenId] = useState('');
    const { cart, removeProduct, totalMonto } = useCartContext(cartContext);

    const manejadorFormulario = (event) => {
        event.preventDefault();
        if (!nombre || !apellido || !telefono || !email || !emailConfirmacion) {
            setError('Todos los campos son obligatorios');
            return;
        }
        if (email !== emailConfirmacion) {
            setError('Los campos de email no coinciden!');
            return;
        }

        const total = totalMonto();
        const orden = {
            items: cart.map((producto) => ({
                id: producto.id,
                nombre: producto.name,
                cantidad: producto.quantity,
            })),
            total: total,
            fecha: new Date(),
            nombre,
            apellido,
            telefono,
            email,
        };

        Promise.all(
            orden.items.map(async (productoOrden) => {
                const db = getFirestore();
                const docRef = doc(db, 'Item', productoOrden.id);
                const productDoc = await getDoc(docRef);
                const stockActual = productDoc.data().stock;

                await updateDoc(docRef, {
                    stock: stockActual - productoOrden.cantidad,
                });
            })
        )
            .then(() => {
                const db = getFirestore();
                addDoc(collection(db, 'orders'), orden)
                    .then((orderRef) => {
                        setOrdenId(orderRef.id);
                        removeProduct(id);
                    })
                    .catch((orderError) => {
                        console.error('Error en creación de orden', orderError);
                        setError('Error en orden');
                    });
            })
            .catch((stockError) => {
                console.error('No se puede actualizar el stock', stockError);
                setError('No se actualizó el stock');
            })

        setNombre('');
        setApellido('');
        setTelefono('');
        setEmail('');
        setEmailConfirmacion('');
    };

    return (
        <div className='text-center formularioContainer'>
            <div className="row">
                <h2 className='titleCheckout'>Llena el formulario para contactarnos</h2>
            </div>
            {cart.map((item) => (
                <div className="itemCheck text-center" key={item.id}>
                    <p>
                        {''}
                        {item.name}{item.quantity}
                    </p>
                    <p>Cantidad: {item.quantity}</p>
                    <p>Precio unitario: ${item.price}</p>
                    <p>Total a Pagar: ${item.price * item.quantity}</p>
                </div>
            ))}
            <div className="formu">

                <form onSubmit={manejadorFormulario}>
                    <div className="formGroup">
                        <label className="labCheck">Nombre</label>
                        <input
                            className='inputCheck'
                            type="text"
                            value={nombre}
                            onChange={(e) => setNombre(e.target.value)} />
                    </div>
                    <div className="formGroup">
                        <label className="labCheck">Apellido</label>
                        <input
                            className='inputCheck'
                            type="text"
                            value={apellido}
                            onChange={(e) => setApellido(e.target.value)} />
                    </div>
                    <div className="formGroup">
                        <label className="labCheck">Telefono</label>
                        <input
                            className='inputCheck'
                            type="number"
                            value={telefono}
                            onChange={(e) => setTelefono(e.target.value)} />
                    </div>
                    <div className="formGroup">
                        <label className="labCheck">Email</label>
                        <input
                            className='inputCheck'
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="formGroup">
                        <label className="labCheck">Email confirmación</label>
                        <input
                            className='inputCheck'
                            type="email"
                            value={emailConfirmacion}
                            onChange={(e) => setEmailConfirmacion(e.target.value)} />
                    </div>
                    <div className="checking">
                        <button type='submit' className='enviarForm'>
                            Finalizar compra
                        </button>
                    </div>
                </form>
                <div>
                    <Link to='/'>
                        <button className='btnVolver'>Volver a home</button>
                    </Link>
                </div>
            </div>
        </div>


    );
};

export default CheckOut;