export default function FoodList({ foodData, setFoodId }) {
    return (
     <div>
        {foodData.map((food) => (
        <FoodItem setFoodId={setFoodId} key ={food.id} food={food} />
      ))}   
      </div>
      );

}

// Create an array thats holds food items
