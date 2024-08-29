import Track from "../Track/Track"
import "./SeachResults.css"

export default function SearchResults({ results, addToPlaylist }) {

    const resulsList = results ? results.map(track => {
        return (
            <li>
                <Track track={track} />
                <button onClick={() => handlerClick(track)}>+</button>
            </li>
        )
    }) : null

    function handlerClick(track) {
        addToPlaylist(track)
    }

    return (
        <section className="results">
            <h2>Results Search</h2>
            <ol>{resulsList}</ol>
        </section>
    )
}