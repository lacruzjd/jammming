import "./Trak.css"
export default function Track({ track }) {
    return (
        <section className="trak">
            <h3>Titulo{track.name}</h3>
            <h4>Artista{track.artist}</h4>
        </section>
    )
}