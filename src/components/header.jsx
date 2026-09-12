import "./header.css";

function Header() {
    return (
        <header className="header">
            <span className="header__logo">
                ReactAcademy
            </span>
            <nav className="header__menu">
                <a href="#inicio" className="header__item">
                    Inicio
                </a>
                <a href="#cursos" className="header__item">
                    Cursos
                </a>
                <a href="#nosotros" className="header__item">
                    Nosotros
                </a>
            </nav>
        </header>
    );
}

export default Header;