import { Link } from "react-router-dom"
import { IoEyeSharp } from "react-icons/io5";
import { useContext } from "react"
import { contexto } from "./CartContext"


function Item({ producto }) {

    const cartContext = useContext(contexto)
    const { currency } = cartContext

    return (
        <Link to={`/item/${producto.id}`}>
            <div className='itemListStyle__item'>
                {producto.favorito === true ? <img src={"/assets/fav.png"} className="gameFav" alt="favoriteGame"></img> : null}
                <img src={producto.imagen} alt={producto.nombre}></img>
                <h3 className="itemListStyle__item--title">{producto.nombre}</h3>
                <div className="itemListStyle__item--price">{currency.format(producto.precio)}</div>
                <div className="itemListStyle__item--btnBuy"><IoEyeSharp />Mostrar detalles</div>
            </div>
        </Link>
    )
}

export default Item