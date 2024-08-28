import Track from "../Track/Track"
import "./Playlist.css"

export default function Playlist({ playList }) {

    const playListToSave = playList ? playList.map(pista => {
        return (
            <>
                <Track track={pista} />
                <button>-</button>
            </>
        )
    }) : null
    return (
        <section className="playlist">
            <h2>Play List</h2>
            <ol>{playListToSave}</ol>
            <section className="save-module">
                <input placeholder="Add Name List"></input>
                <button>Save List</button>
            </section>
        </section>
    )
}