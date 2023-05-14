import React from 'react'
import Item from './Item'

const ItemList = ({ productos }) => {
    return (
        <>
            <div className="itemListStyle"> {
                productos.map((producto, index) => {
                    return <Item key={index} producto={producto} />
                })}</div>
        </>
    )
}

export default ItemList