import React, { useState } from "react";
import "./App.css";
import SearchBar from "../SearchBar/SearchBar";
import SearchResults from "../SeachResult/SearchResults";
import Playlist from "../Playlist/Playlist";

const listSpotify = [{name: "name"}, {name: "name"}]

export default function App() {
    return (
        <>
            <header>
                <h1>Ja<span className="highlight">mmm</span>ing</h1>
            </header>
            <main>
                <SearchBar></SearchBar>
                <SearchResults></SearchResults>
                <Playlist></Playlist>
            </main>
        </>
    )
}