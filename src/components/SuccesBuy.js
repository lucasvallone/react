import React from 'react'
import { GoCheck } from "react-icons/go"
import { NavLink } from "react-router-dom"
import { useContext } from "react"
import { contexto } from "./CartContext"

const SuccesBuy = ({ name, phone, email, total, items }) => {

    const cartContext = useContext(contexto)
    const { currency } = cartContext

    return (
        <>
            <div className="succesBuy">
                <div>
                    <GoCheck />
                </div>
                <div className="succesBuy__rightSide">
                    <div className="succesBuy__rightSide--message">
                        <p>Felicidades <span className="succesBuy__rightSide--titleColor">{name}</span>, su compra se realizó con éxito!</p>
                    </div>
                    <div className="succesBuy__rightSide--details">
                        <h3>Detalles de la compra</h3>
                        <p><span className="succesBuy__rightSide--titleColor">Nombre:</span> {name}</p>
                        <p><span className="succesBuy__rightSide--titleColor">Teléfono:</span> {phone}</p>
                        <p><span className="succesBuy__rightSide--titleColor">Mail:</span> {email}</p>
                        <p><span className="succesBuy__rightSide--titleColor">Total:</span> {currency.format(total)}</p>
                    </div>
                    <div className="succesBuy__rightSide--button">
                        <NavLink to="/"><button className="btnGoIndex">Ver mas productos</button></NavLink>
                    </div>
                </div>
                <div className="succesBuy__productDetail">
                    <p className="succesBuy__productDetail--title">{items.length > 1 ? "Detalle de los productos" : "Detalle del producto"}</p>
                    <div className="succesBuy__productDetail--detail">
                        {items.map((product, index) => {
                            return (
                                <p key={index}><span>({product.stock})</span> {product.item} - <span>{currency.format(product.precio)}</span></p>
                            )
                        })}
                    </div>
                </div>
            </div >
        </>
    )
}

export default SuccesBuy

