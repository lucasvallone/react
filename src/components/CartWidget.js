import { AiOutlineShoppingCart } from "react-icons/ai"
import { BsCartX } from "react-icons/bs"
import { useContext } from "react"
import { contexto } from "./CartContext"

function CartWidget() {

    const cartContext = useContext(contexto)
    const { quantity, total, currency } = cartContext

    return (
        <>
            <div className="cartWidget">
                {quantity > 0 ? <><AiOutlineShoppingCart /><p>{quantity} - {currency.format(total)}</p></> : <BsCartX />}
            </div>
        </>
    )
}

export default CartWidget