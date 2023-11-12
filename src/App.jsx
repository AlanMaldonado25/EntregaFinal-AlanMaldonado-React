import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import NavBar from "./components/NavBar/NavBar"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"
import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import CartContextProvider from "./context/CartContext"
import CartDetail from "./components/CartDetail/CartDetail"


function App() {

  return (
    <div className="app">
      <BrowserRouter>
        <CartContextProvider>
          <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/categoria/:id" element={<ItemListContainer />} />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<CartDetail/>}/>
            <Route path="*" element={<h1>Error</h1>} />
          </Routes>
        </CartContextProvider>
      </BrowserRouter>
    </div>
  )
}

export default App
