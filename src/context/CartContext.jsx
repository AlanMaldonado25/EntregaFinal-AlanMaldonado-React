import { createContext, useState } from "react";
import productos from '../components/Json/Products.json'
export const cartContext = createContext()

function CartContextProvider({children}){
    const [cart,setCart] = useState([])
    const [stock, setStock] = useState(
        productos.reduce((acc, item) => ({ ...acc, [item.id]: item.stock }), {})
    );
    
    const addToCart = (product, quantity) =>{
        if(quantity <= 0){
            alert('Debes agregar almenos un producto al carrito')
        }else if (stock[product.id] >= quantity) { 
            const newProduct = { ...product, quantity };
            setCart([...cart,newProduct])
            setStock({...stock, [product.id]: stock[product.id] - quantity})
        } else {
            alert('No puedes agregar más artículos de los que hay en stock.');
        }
    }
    const removeFromCart = (productId, quantity) => {
        setCart(cart.filter(item => item.id !== productId));
        setStock({...stock, [productId]: stock[productId] + quantity}); 
    }

    return(
        <cartContext.Provider value={{cart,addToCart,stock,removeFromCart}}>
            {children}
        </cartContext.Provider>
    )
}
export default CartContextProvider