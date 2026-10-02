import { Link } from "react-router-dom";
import "./notfound.css";

function NotFound() {
    return (
        <main className="not-found">

            <h1 className="not-found__titulo">
                404
            </h1>

            <h2 className="not-found__subtitulo">
                Página no encontrada
            </h2>

            <p className="not-found__descripcion">
                La página que estás buscando no existe.
            </p>

            <Link
                to="/"
                className="not-found__boton"
            >
                Volver al inicio
            </Link>

        </main>
    );
}

export default NotFound;