export default function FoodDetails ({ foodId }) {
    const [food,setFood] = useState({});
    const URL = `https://api.spoonacular.com/recipes/${foodId}/information`
    const API_KEY = "2cf5e88a0bf14f87909d5fdb3ad2ac27";
    useEffect(() => {
        async function fetchFood() {
        const response = await fetch(`${URL}?apiKey=${API_KEY}`)
        const data = await response.json();
        console.log(data);    
        setFood(data);
    }
        fetchFood();
    }, []);
    return <div> 
        THE FOOD MENU {foodId}
         {food.title}
     </div>
}