import ItemCount from "./ItemCount"
import { useContext, useState } from "react"
import { toast } from "react-toastify";
import { NavLink } from "react-router-dom"
import { contexto } from "./CartContext"

function ItemDetail({ database }) {

  const [seleccionado, setseleccionado] = useState(false);
  const cartContext = useContext(contexto)
  const { addItem, currency } = cartContext

  const onAdd = (unidadSeleccionada) => {

    if ((unidadSeleccionada !== undefined) && (unidadSeleccionada > 1)) {
      setseleccionado(unidadSeleccionada)
      toast.success(`Se agregaron ${unidadSeleccionada} copias de ${database.nombre} al carrito`)
    }
    else if (unidadSeleccionada === 1) {
      setseleccionado(unidadSeleccionada)
      toast.success(`Se agrego ${unidadSeleccionada} copia de ${database.nombre} al carrito`)
    }
  }

  return (
    <div className="itemDetail">
      <div className="itemDetail__image">
        <img src={database.imagen} alt={database.nombre}></img>
      </div>
      <div className="itemDetail__detail">
        <p className="itemDetail__detail--title">{database.nombre}</p>
        <p className="itemDetail__detail--price">{currency.format(database.precio)}</p>
        <p><span>Información:</span> {database.detalle}</p>
        <p><span>Categoría:</span> {database.categoria}</p>
        <p><span>Plataformas:</span> {database.plataforma}</p>
      </div>
      <div className="itemDetail__buttons">
        {seleccionado ? <div className="goCart">
          <NavLink to="/carrito">
            <button onClick={() => { addItem(database.id, database.nombre, database.precio, database.imagen, seleccionado) }}>
              Terminar compra
            </button>
          </NavLink>
        </div> :
          <>
            <ItemCount id={database.id} initial={1} stock={database.stock} onAdd={onAdd} />
          </>}
      </div>
    </div>
  )
}

export default ItemDetail