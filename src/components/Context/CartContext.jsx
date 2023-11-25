import { createContext, useEffect, useState } from "react";
export const cartContext = createContext()
import { getFirestore} from "../Firebase/config";

function CartContextProvider({children}){
    const [cart,setCart] = useState([]);
    
    useEffect(()=>{
        const db = getFirestore();
        const itemCollection = db.collection('Item');
        itemCollection.get().then((querySnapshot)=> {
            if(querySnapshot.size === 0){
                console.log('Sin resultados');
            }
            setProductos(querySnapshot.docs.map(doc => ({id:doc.id,...doc.data()})));
        }).catch((error) => {
            console.log("Error getting documents: ");
        }).finally(()=>{})
    },[])
    useEffect(() => {
        setStock(productos.reduce((acc, item) => ({ ...acc, [item.id]: item.stock }), {}));
    }, [productos]);

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
    const totalPrice = () => {
        return cart.reduce((total, currentValue) => {
            return total + currentValue.price * currentValue.quantity;
            }, 0).toFixed(2);
    }
    const removeFromCart = (productId, quantity) => {
        setCart(cart.filter(item => item.id !== productId));
        setStock({...stock, [productId]: stock[productId] + quantity}); 
    }
    
    return(
        <cartContext.Provider value={{cart,addToCart,stock,removeFromCart,totalPrice}}>
            {children}
        </cartContext.Provider>
    )
}
export default CartContextProvider