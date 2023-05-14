import { useContext, useState, useEffect } from "react"
import { toast } from "react-toastify"
import { contexto } from "./CartContext"
import { NavLink } from "react-router-dom"

function ItemCount({ id, initial, stock, onAdd }) {
    const [Counter, setCounter] = useState(initial)
    const [StockInCart, setStockInCart] = useState()

    const cartContext = useContext(contexto)
    const { cart } = cartContext

    useEffect(() => {
        const itemFindedInCart = cart.find(e => e.id === id);

        if (itemFindedInCart !== undefined) {
            const newStockInCart = itemFindedInCart.stock
            setStockInCart(newStockInCart)
        }
        else {
            setStockInCart(0)
        }
    }, [StockInCart])

    const add = () => {
        if (Counter >= (stock - StockInCart)) {
            setCounter(Counter + 0)
        }
        else {
            setCounter(Counter + 1);
        }
    }

    const subtract = () => {
        if (Counter <= 1) {
            setCounter(Counter + 0)
        }
        else {
            setCounter(Counter - 1);
        }
    }

    const addToCart = () => {

        if (stock < StockInCart + Counter) {
            toast.error(`Ya hay ${StockInCart} copias en el carrito, solo puede llevar ${stock - StockInCart} copias mas`)
        }
        else {
            onAdd(Counter)
        }
    }

    return (
        <div className="counter">
            {stock === StockInCart ?
                <>
                    <span className="counter__stockDetail">No hay mas copias para agregar al carrito</span>
                    <NavLink to="/carrito"><button>Ir al carrito</button></NavLink>
                </> :
                <>
                    <span>Stock disponible: {StockInCart !== 0 ? `${stock - StockInCart}` : stock}</span>
                    <div className="counter__buttons">
                        <button onClick={subtract}>-</button>
                        <p>{Counter}</p>
                        <button onClick={add}>+</button>
                    </div>
                    <button onClick={addToCart}>Añadir producto</button>
                </>
            }
        </div>
    );
}

export default ItemCount