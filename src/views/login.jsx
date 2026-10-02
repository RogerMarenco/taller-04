import { useState } from "react";
import "./login.css";

function Login() {

    const [correo, setCorreo] = useState("");
    const [contrasena, setContrasena] = useState("");
    const [enviado, setEnviado] = useState(false);

    const formularioCompleto =
        correo.trim() !== "" && contrasena.trim() !== "";

    const manejarEnvio = (e) => {
        e.preventDefault();

        if (formularioCompleto) {
            setEnviado(true);
        }
    };

    return (
        <main className="login">

            <div className="login__contenedor">

                <h1 className="login__titulo">
                    Ingresar
                </h1>

                <p className="login__descripcion">
                    Ingresa tus datos para continuar.
                </p>

                <form
                    className="login__formulario"
                    onSubmit={manejarEnvio}
                >

                    <label className="login__label">
                        Correo electrónico
                    </label>

                    <input
                        className="login__input"
                        type="email"
                        value={correo}
                        onChange={(e) => setCorreo(e.target.value)}
                        disabled={enviado}
                        placeholder="correo@ejemplo.com"
                    />

                    <label className="login__label">
                        Contraseña
                    </label>

                    <input
                        className="login__input"
                        type="password"
                        value={contrasena}
                        onChange={(e) => setContrasena(e.target.value)}
                        disabled={enviado}
                        placeholder="Contraseña"
                    />

                    <button
                        className="login__boton"
                        type="submit"
                        disabled={!formularioCompleto || enviado}
                    >
                        {enviado ? "Enviado" : "Ingresar"}
                    </button>

                </form>

                <p className="login__microcopy">
                    Esta pantalla es solo una interfaz de demostración.
                    No valida usuarios ni contraseñas.
                </p>

            </div>

        </main>
    );
}

export default Login;