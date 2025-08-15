import { useEffect, useState } from "react";

const URL = "https://api.spoonacular.com/recipes/complexSearch";
const API_KEY = "2cf5e88a0bf14f87909d5fdb3ad2ac27";

 function Search() {
    const [query, setQuery] = useState("pasta");
// useEffect function: Making API calls to retrieve data.
    useEffect (() => {
        async function fetchFood() {
            const response = await fetch(`${URL}?query=${query}&apiKey=${API_KEY}`);
            const data = await response.json();
            console.log(data.results);
        }
        fetchFood();
    }, [query]);
    return ( 
        <div>
        <input type="text" 
        value={query}
        onChange={(e) => setQuery(e.target.value)}
         />
        </div>
    )
}
export default Search