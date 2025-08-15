export default function FoodItem({ food }) {
    return(
        <div>
            <img src={food.image} alt="A Pasta Dish" />
            <h1>{food.title}</h1>
            <button>View The Recipe</button>
        </div>
    );
}