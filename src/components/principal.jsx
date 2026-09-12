import "./principal.css";

function Principal() {
    return (
        <section id="inicio" className="principal">
            <h1 className="principal__titulo">
                Aprende <span className="principal__subtitulo">React</span> desde cero
            </h1>

            <p className="principal__descripcion">
                Domina la librería más popular del frontend con proyectos prácticos y reales.
            </p>

            <a href="#cursos" className="principal__boton">
                Ver Cursos
            </a>
        </section>
    )
}

export default Principal;