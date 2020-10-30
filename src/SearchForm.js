import React, { useState } from "react";
import Edit from "./Edit";
export default function SearchForm ({setQuery}) {
    const [value, setValue] = useState("");

    const handleSubmit = e => {
        e.preventDefault();
        if (!value) return;
        setQuery(value);
        // setValue("");
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="search" placeholder="Search stories by title, url or author" className="SearchInput" value={value} onChange={e => setValue(e.target.value)} />
            <button className="searchButton">Search</button>
            <Edit />
        </form>
    )
}