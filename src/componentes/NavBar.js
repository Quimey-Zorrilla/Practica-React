import CartWidget from './CartWidget';
import {Link, NavLink} from "react-router-dom";

function NavBar() {
    return (
        <>
        <header>
            <Link to="/">
                <h1><CartWidget/> INCENTIA</h1>
            </Link>
            <nav>
                <ul>
                    <li><NavLink to="/categoria/1">Organicos Certificados</NavLink></li>
                    <li><NavLink to="/categoria/2">Fisiorresolutivos</NavLink></li>
                    <li><NavLink to="/categoria/3">Nutrición de base</NavLink></li>
                    <li><NavLink to="/carrito">Carrito</NavLink></li>
                </ul>
            </nav>
        </header>
        </>
    )
}

export default NavBar;