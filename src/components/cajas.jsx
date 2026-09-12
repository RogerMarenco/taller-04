import "./cajas.css";

function Cajas({ icono, titulo, descripcion, nivel }) {
    return (
        <article className="cajas">
            <div className="cajas__icono">
                {icono}
            </div>
            <h3 className="cajas__titulo">
                {titulo}
            </h3>
            <p className="cajas__descripcion">
                {descripcion}
            </p>

            <span className="cajas__nivel">
                {nivel}
            </span>
        </article>
    );
}

export default Cajas;