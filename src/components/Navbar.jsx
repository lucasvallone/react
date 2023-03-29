import Boton from "./Boton"
import Cart from "./CartWidget"

function Navbar(){
    return(
    <div className="navbar">
        <h1>CompuConnect</h1>
        <Boton boton="Home"/>
        <Boton boton="Contacto"/>
        <Boton boton="Productos"/>
        <Cart />
        </div>
    )
};

export default Navbar