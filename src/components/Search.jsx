import { useEffect, useState } from "react";
import styles from "./search.module.css";

const URL = "https://api.spoonacular.com/recipes/complexSearch?query=pasta&apiKey=2cf5e88a0bf14f87909d5fdb3ad2ac27";
const API_KEY = "2cf5e88a0bf14f87909d5fdb3ad2ac27";

export default function Search({foodData, setFoodData}) {
    const [query, setQuery] = useState("pasta");
// useEffect function: Making API calls to retrieve data.
    useEffect (() => {
        async function fetchFood() {
            const res = await fetch(`${URL}?query=${query}&apiKey=${API_KEY}`, {
                headers: {
                    'Accept': 'application/json',
                }
            });
            const data = await res.json();
            setFoodData(data.results);
        }
        fetchFood();
    }, [query]);
    return ( 
        <div className={styles.searchContainer}>
        <input type="search" 
        value={query}
        placeholder="Search for food recipes"
        className={styles.input}
        onChange={(e) => setQuery(e.target.value)} />
        </div>
    )
}
