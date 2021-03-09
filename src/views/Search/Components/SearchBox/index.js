import { useState } from "react";

import "./style.css";

export default function SearchBox({onSearch, onClose, isSearching}) {
    const [searchText, setSearchText] = useState("");

    const handleSearchClick = () => {
        setSearchText("");
        onClose();
    }

    return(
    <div className="search-box">      
            <h2 className="search-box-tile">Buscador de personal</h2>
            <div className="search-box-button">
            <label>
                <input value={searchText} onChange={({target: {value}}) => setSearchText(value)} className="search-box-input"/>
            </label>
            <button onClick={() => onSearch(searchText)} disabled={searchText.length == 0}>Buscar</button>
            {isSearching && <button onClick={handleSearchClick} disabled={searchText.length == 0}>Cerrar</button>}
        </div>
    </div> 
    );
}