import { NavLink } from "react-router-dom"

function Links() {
    return (
        <ul className="links">  
            <NavLink to="/categoria/Accion">Acción</NavLink>
            <NavLink to="/categoria/Aventura">Aventura</NavLink>
            <NavLink to="/categoria/Peleas">Peleas</NavLink>
            <NavLink to="/categoria/Plataformas">Plataformas</NavLink>
            <NavLink to="/categoria/Rol">Rol</NavLink>
            <NavLink to="/categoria/Shooter">Shooter</NavLink>
            <NavLink to="/favoritos">Favoritos</NavLink>
        </ul>
    )
}

export default Links