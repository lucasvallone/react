import { React, createContext, useState } from "react"
export const contexto = createContext()
const { Provider } = contexto

const CartContext = ({ children }) => {

    const [Cart, setCart] = useState([])
    const [Total, setTotal] = useState(0)
    const [Quantity, setQuantity] = useState(0)

    const addItem = (id, item, precio, imagen, stock) => {

        const index = Cart.findIndex(e => e.id === id);

        if (index > -1) {
            const oldStock = Cart[index].stock;
            Cart.splice(index, 1);
            setCart([...Cart, { id, item, imagen, stock: stock + oldStock, precio: precio * (stock + oldStock) }]);
            setQuantity(Quantity + stock)
            setTotal(Total + (precio * stock))
        } else {
            setCart([...Cart, { id, item, precio: precio * stock, imagen, stock }])
            setQuantity(Quantity + stock)
            setTotal(Total + (precio * stock))
        };
    }

    const removeItem = (id, stock, precio) => {
        const items = Cart.filter((i) => i.id !== id);
        setCart(items);
        setQuantity(Quantity - stock)
        setTotal(Total - precio)
    }

    const emptyCart = () => {
        setCart([])
        setQuantity(0)
        setTotal(0)
    }

    const currency = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 2 })

    const contextValue = {
        cart: Cart,
        total: Total,
        setTotal: setTotal,
        quantity: Quantity,
        addItem: addItem,
        removeItem: removeItem,
        emptyCart: emptyCart,
        currency: currency
    }

    return (
        <Provider value={contextValue}>
            {children}
        </Provider>
    )
}

export default CartContext