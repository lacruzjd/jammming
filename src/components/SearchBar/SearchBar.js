import React, { useState } from "react"

import "./SearchBar.css"
export default function SearchBar() {
    const [term, setTerm] = useState('')

    function handlerChange(e) {
        setTerm(e.target.value)
    }

    return (
        < section className="search-bar" >
            <input type="text" placeholder="Enter A Song Title" onChange={handlerChange}></input>
            <button>Search</button>
        </section >
    )
}