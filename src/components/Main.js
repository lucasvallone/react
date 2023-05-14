import ItemListContainer from "../components/ItemListContainer"
import ItemDetailContainer from "./ItemDetailContainer"
import { Routes, Route } from "react-router-dom"
import Cart from "./Cart"

function Main() {
    return (
        <main>
            <Routes>
                <Route path="/" element={<ItemListContainer />} />
                <Route path="/categoria/:categoria" element={<ItemListContainer />} />
                <Route path="/:favorito" element={<ItemListContainer />} />
                <Route path="/item/:id" element={<ItemDetailContainer />} />
                <Route path="/carrito" element={<Cart />} />
            </Routes>
        </main>
    )
}

export default Main