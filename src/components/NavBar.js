import { Link, NavLink } from "react-router-dom"
import CartWidget from "./CartWidget"
import Links from "./Links"

function NavBar() {
    return (
        <>
            <nav className="navbar">
                <Link to="/"><img src={"/assets/kyotogameslogosvg.svg"} alt="Kyoto Games" className="logo"/></Link>
                <Links/>
                <NavLink to="/carrito"><CartWidget numero="0" /></NavLink>
            </nav>
        </>
    )
}

export default NavBar