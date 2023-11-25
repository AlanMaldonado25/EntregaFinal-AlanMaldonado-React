import { createContext, useContext, useEffect, useState } from "react";

export const cartContext = createContext('');
export const useCartContext = () => useContext(cartContext);

function CartContextProvider({ children }) {
    const [cart, setCart] = useState([]);
    const [totalStock, setTotalStock] = useState(0);

    useEffect(() => {
        const storedCart = localStorage.getItem('cart');
        const storedTotalStock = localStorage.getItem('totalStock');

        try {
            // Verificar si los datos son válidos antes de parsear
            if (storedCart !== null) {
                const parsedCart = JSON.parse(storedCart);
                if (Array.isArray(parsedCart)) {
                    setCart(parsedCart);
                }
            }

            if (storedTotalStock !== null) {
                // Verificar si el totalStock es un número válido antes de parsear
                const parsedTotalStock = parseInt(storedTotalStock, 10);
                if (!isNaN(parsedTotalStock)) {
                    setTotalStock(parsedTotalStock);
                }
            }
        } catch (error) {
            console.error('Error al cargar datos del localStorage:', error);
        }
    }, []);
    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart])
    useEffect(() => {
        localStorage.setItem('totalStock', totalStock.toString())
    }, [totalStock])

    const addToCart = (product, quantity) => {
        if (isInCart(product.id)) {
            const updatedCart = cart.map((item) => (
                item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item
            ));
            setCart(updatedCart);
            setTotalStock((prevTotalStock) => prevTotalStock - quantity);
        } else {
            setCart([...cart, { ...product, quantity }]);
            setTotalStock((prevTotalStock) => prevTotalStock - quantity);
        }
    }

    const totalMonto = () => {
        return cart.reduce((prev, act) => prev + act.quantity * act.price, 0);
    }

    const totalProd = () => {
        return cart.reduce((accum, prodAct) => accum + prodAct.quantity, 0);
    }

    const resetCart = () => {
        setCart([]);
        setTotalStock(0);
    }

    const isInCart = (id) => cart.find((prod) => prod.id === id) !== undefined;

    const removeProduct = (id) =>
    setCart(cart.filter((product) => product.id !== id));

    return (
        <cartContext.Provider
            value={{
                cart,
                totalStock,
                addToCart,
                totalMonto,
                totalProd,
                resetCart,
                isInCart,
                removeProduct
            }}
        >
            {children}
        </cartContext.Provider>
    )
}

export default CartContextProvider;