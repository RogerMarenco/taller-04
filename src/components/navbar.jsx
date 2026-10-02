import { NavLink } from "react-router-dom";
import "./navbar.css";

function Navbar() {
    return (
        <header className="navbar">

            <span className="navbar__logo">
                ReactAcademy
            </span>

            <nav className="navbar__menu">

                <NavLink to="/" className="navbar__item">
                    Inicio
                </NavLink>

                <NavLink to="/cursos" className="navbar__item">
                    Cursos
                </NavLink>

                <NavLink to="/nosotros" className="navbar__item">
                    Nosotros
                </NavLink>

                <NavLink to="/login" className="navbar__item">
                    Ingresar
                </NavLink>

            </nav>

        </header>
    );
}

export default Navbar;