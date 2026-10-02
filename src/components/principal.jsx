import { Link } from "react-router-dom";
import "./principal.css";

function Principal() {
    return (
        <section className="hero">

            <h1 className="hero__title">
                Aprende <span className="hero__highlight">React</span> desde cero
            </h1>

            <p className="hero__description">
                Domina la librería más popular del frontend con proyectos
                prácticos y reales.
            </p>

            <Link to="/cursos" className="hero__button">
                Ver Cursos
            </Link>

        </section>
    );
}

export default Principal;