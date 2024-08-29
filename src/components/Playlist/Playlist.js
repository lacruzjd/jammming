import Track from "../Track/Track"
import Tracklist from "../Tracklist/Tracklist"
import "./Playlist.css"

export default function Playlist({ playList, removeTrak, addPlaylist, handlerTitulo, playLists }) {

    const playListToSave = playList ? playList.map(pista => {
        return (
            <li>
                <Track track={pista} />
                <button onClick={() => removeTrak(pista)}>-</button>
            </li>
        )
    }) : null

    return (
        <section className="playlist">
            <h2>Play List:</h2>
            {playLists? playLists.map(play => <li>{play.title}</li>): null}
            {playList.length > 0 ? <Tracklist trakList={playListToSave} handlerTitulo={handlerTitulo}/> : null}
            <section className="save-module">
                <button onClick={addPlaylist}>Save List</button>
            </section>
        </section>
    )
}