export default function Track({track}) {
    return (
        <li key={track.id}>
            <h3>Titulo{track.name}</h3>
            <h4>Artista{track.artist}</h4>
            <p>Genero{track.album}</p>
        </li>
    )
}