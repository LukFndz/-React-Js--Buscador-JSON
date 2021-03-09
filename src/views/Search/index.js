import { useState } from "react";
import SearchBox from "./Components/SearchBox";

import data from "../../data/users.json";
import "./style.css";
import SearchResults from "./Components/SearchResults";

export default function Search(){
    const [isAtTop, setIsAtTop] = useState(false);
    const [results, setResults] = useState([]);

    const handleCloseClick = () => {
        setIsAtTop(false);
        setResults([]);
    }
    const handleSearchClick = (searchText) => {
        setIsAtTop(true);
        if(data?.length) {
            const searchTextLow = searchText.toLowerCase();
            const filter = data.filter((value) =>
                (value.name.toLowerCase().includes(searchTextLow) ||
                value.email.toLowerCase().includes(searchTextLow) ||
                value.username.toLowerCase().includes(searchTextLow) ||
                value.phone.toLowerCase().includes(searchTextLow)
            ));
            setResults(filter);
        }
    }

    console.log(results);
   return(
       <div className={`search ${isAtTop ? "search--top" : "search--center"}`}>
           <SearchBox onSearch={handleSearchClick} onClose={handleCloseClick} isSearching={isAtTop}/>
           <SearchResults results={results} isSearching={isAtTop}/>
       </div>
   )
}