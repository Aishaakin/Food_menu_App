import styles from "./fooditem.module.css";

export default function FoodItem({ food, setFoodId }) {
    return(
        <div className={styles.itemContainer}>
            <img src={food.image} alt="A Pasta Dish" style={styles.itemImage} />
            <div style={styles.itemContent}>
                <p className={styles.itemName}>{food.title}</p>
            </div>
         <div style={styles.buttonContainer}><button onClick={() => {
console.log(food.id);
setFoodId(food.id);
         }} 
         style={styles.itemButton}>View The Recipe</button></div>
        </div>
    );
}