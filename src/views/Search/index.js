import { useState } from "react";
import SearchBox from "./Components/SearchBox";

import "./style.css";

export default function Search(){
   return(
       <div className="search">
           <SearchBox/>
       </div>
   )
}