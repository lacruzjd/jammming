import React, { useState } from "react";
import "./App.css";
import SearchBar from "../SearchBar/SearchBar";
import SearchResults from "../SeachResult/SearchResults";
import Playlist from "../Playlist/Playlist";

export default function App() {
    const [seachResults, setSeachResults] = useState([])
    const [playList, setPlaylist] = useState([])
    const [playLists, setPlaylists] = useState([])

    function handlerSearch(term) {

    }

    function addToPlaylist(term) {
        const newPlayList = playList.slice()

        if (playList.every(e => e.id !== term.id)) {
            newPlayList.push(term)
            setPlaylist(newPlayList)
        }

    }

    function addPlaylist() {

        if (playList.length > 0) {
            const newPlayList = playList.slice()
            const newPlayLists = playLists.slice()
            newPlayLists.push({ title: title, playList: newPlayList })
            setPlaylists(newPlayLists)
            setPlaylist([])
        } else {
            return
        }
    }

    function removeTrak(term) {
        const newPlayList = playList.filter(trak => trak.id !== term.id)
        setPlaylist(newPlayList)

    }

    let title = 'New Playlist'

    function handlerTitulo(e) {
       title = e.target.value
    }

    return (
        <>
            <header>
                <h1>Ja<span className="highlight">mmm</span>ing</h1>
            </header>
            <main>
                <SearchBar handlerSearch={handlerSearch} ></SearchBar>
                <SearchResults results={seachResults} addToPlaylist={addToPlaylist}></SearchResults>
                <Playlist playList={playList} removeTrak={removeTrak} addPlaylist={addPlaylist} handlerTitulo={handlerTitulo} playLists={playLists}></Playlist>
            </main>
        </>
    )
}