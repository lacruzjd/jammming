import Track from "../Track/Track"
import "./Tracklist.css"

export default function Tracklist({trakList}) {

    const lists = trakList? trakList.map((li) => <Track track={li}/>) : null

    return (
        <section className="traklist">
            <h2>Track List</h2>
                <ol>{lists}</ol>
        </section>
    )
}