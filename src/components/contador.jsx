import { useState } from "react";
import "./contador.css";

function Contador() {
    const [estudiantes, setEstudiantes] = useState(0);

    const aumentar = () => {
        setEstudiantes(estudiantes + 1);
    };

    const disminuir = () => {
        if (estudiantes > 0) {
            setEstudiantes(estudiantes - 1);
        }
    };

    return (
        <section id="nosotros" className="contador">
            <h2 className="contador__titulo">
                Cuántos estudiantes van a inscribirse?
            </h2>
            <p className="contador__descripcion">
                Usa los botones para ajustar el número
            </p>
            <div className="contador__control">
                <button
                    className="contador__boton"
                    onClick={disminuir}
                >
                    −
                </button>
                <span className="contador__numero">
                    {estudiantes}
                </span>
                <button
                    className="contador__boton"
                    onClick={aumentar}
                >
                    +
                </button>
            </div>
            <p className="contador__texto">
                estudiantes inscritos
            </p>

        </section>
    );
}

export default Contador;