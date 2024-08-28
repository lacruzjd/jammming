import Track from "../Track/Track"
import "./SeachResults.css"

export default function SearchResults({results}) {

    const resulsList = results ? results.map(pista => {
        return (
            <>
                <Track track={pista} />
                <button>+</button>
            </>
        )
    }) : null

    return (
        <section className="results">
            <h2>Results Search</h2>
            <ol>{resulsList}</ol>
        </section>
    )
}