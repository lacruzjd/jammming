import { useState } from "react"
import Track from "../Track/Track"
import "./Tracklist.css"

export default function Tracklist({ trakList, handlerTitulo }) {

    const lists = trakList ? trakList.map((li) => <Track track={li} />) : null

    return (
        <section className="traklist">
            <input placeholder="Add Name List" onChange={handlerTitulo}></input>
            <ol>{lists}</ol>
        </section>
    )
}