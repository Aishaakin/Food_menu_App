import { useState, useEffect } from 'react';
import styles from './fooddetails.module.css';
export default function FoodDetails ({ foodId }) {
    const [food,setFood] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const URL = `https://api.spoonacular.com/recipes/${foodId}/information`
    const API_KEY = "2cf5e88a0bf14f87909d5fdb3ad2ac27";
    useEffect(() => {
        async function fetchFood() {
        const response = await fetch(`${URL}?apiKey=${API_KEY}`)
        const data = await response.json();
        console.log(data);    
        setFood(data);
        isLoading(false);
    }
        fetchFood();
    }, [foodId]);

    return ( 
    <div> 
    <div className='${styles.recipeCard}'>
      <h1 className={styles.recipeName}>{food.title}</h1>

<img className={styles.recipeImage} src={food.image} alt={food.title} />
<div className={styles.recipeDetails}>
<span><strong>{food.readyInMinutes} Minutes</strong></span>
<span><strong>Serves {food.servings}</strong></span> 
<span><strong>{food.vegetarian ? "🫐 Vegetarian" : "🥩 Non Vegetarian"}</strong></span>
<span><strong>{food.vegan ? "🐮 Vegan" : "" }</strong></span> 
</div>
  <div>
$ <span><strong>{food.pricePerServing / 100} Per Serving</strong></span>
</div>
</div>    /* not there */
<div>
    <h2>Ingredients</h2>
    {food.extendedIngredients.map((item) => (
      <div>
<img src={`https://spoonacular.com/cdn/ingredients_100x100/` + item.image} alt="" />
<h3>{item.nmae}</h3>
<h3>{item.amount} {item.unit}</h3>
</div>  
     ))} 
    <h2>Instructions</h2>
<div className={styles.recipeInstructions}>    
<ol>

    {isLoading ? (
        <p>Loading...</p>
    )  : (
        foodanalyzedInstructions[0].steps.map((step) =>
            <li>{step.step}</li> )
    )}
    </ol>
</div>
</div>
     </div>
    );
}    