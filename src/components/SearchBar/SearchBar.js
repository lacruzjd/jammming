import React, { useState } from "react"

import "./SearchBar.css"
export default function SearchBar({handlerSearch}) {
    const [term, setTerm] = useState('')

    function handlerChange(e) {
        setTerm(e.target.value)
    }
    
    function handlerClick() {
        handlerSearch(term)
    }

    return (
        < section className="search-bar" >
            <input type="text" placeholder="Enter A Song Title" onChange={handlerChange}></input>
            <button onClick={handlerClick}>Search</button>
        </section >
    )
}