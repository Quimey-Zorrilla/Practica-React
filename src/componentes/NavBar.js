import { NavLink } from "react-router-dom";

function NavBar() {
    return(
        <>
            <nav>
                <ul>
                    <li><NavLink to="/category/A">Organicos</NavLink></li>
                    <li><NavLink to="/category/B">Fisiorresolutivos</NavLink></li>
                    <li><NavLink to="/category/C">Nutrición de base</NavLink></li>
                    <li><NavLink to="/carrito">Carrito</NavLink></li>
                </ul>
            </nav>
        </>
    )
}

export default NavBar;
