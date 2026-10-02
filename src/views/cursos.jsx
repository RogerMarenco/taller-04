import Cajas from "../components/cajas";
import "./cursos.css";



function Cursos() {

    const cursos = [
        {
            icono: "⚛️",
            titulo: "React Básico",
            descripcion:
                "Componentes, props, estado y eventos. Todo lo que necesitas para empezar.",
            nivel: "Principiante"
        },
        {
            icono: "🔄",
            titulo: "React Hooks",
            descripcion:
                "Profundiza en useState, useEffect y crea tus propios custom hooks.",
            nivel: "Intermedio"
        },
        {
            icono: "📁",
            titulo: "Estado Global",
            descripcion:
                "Gestiona el estado con Context API y aprende cuándo usarlo.",
            nivel: "Intermedio"
        },
        {
            icono: "🚀",
            titulo: "React Avanzado",
            descripcion:
                "Rendimiento, patrones avanzados y arquitectura para proyectos grandes.",
            nivel: "Avanzado"
        }
    ];

    return (
        <section className="cursos">

            <h1 className="cursos__titulo">
                Nuestros Cursos
            </h1>

            <p className="cursos__descripcion">
                Elige el camino que mejor se adapte a ti.
            </p>

            <div className="cursos__lista">

                {cursos.map((curso) => (
                    <Cajas
                        key={curso.titulo}
                        icono={curso.icono}
                        titulo={curso.titulo}
                        descripcion={curso.descripcion}
                        nivel={curso.nivel}
                    />
                ))}

            </div>

        </section>
    );
}

export default Cursos;