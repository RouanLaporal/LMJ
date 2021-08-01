import { plantList } from "../data/plantList";
import PlantItem from "./PlantItem";
import '../styles/ShoppingList.css'
function ShoppingList({ cart, updateCart }) {
    const categories = plantList.reduce(
        (acc, plant) =>
                        acc.includes(plant.category) ? acc : acc.concat(plant.category),
        []
    )

    function addToCart(name, price){
        const currentPlantAdded =  cart.find((plant) => plant.name === name)
        if (currentPlantAdded){
            const cartFilteredCurrentPLant = cart.filter(
                (plant) => plant.name !== name
            )
            updateCart([
                ...cartFilteredCurrentPLant,
                { name, price, amount: currentPlantAdded.amount + 1}
            ])
        }else {
            updateCart([...cart, {name, price, amount: 1}])
        }
    }
    return (
        <div className='lmj-shopping-list'> 
            <ul>
              {categories.map((cat)=>(
                  <li key={cat}>{cat}</li>
              ))}
            </ul>
            <ul className='lmj-plant-list'>
                {plantList.map((plant)=>(
                    <div key={plant.id}>
                        <PlantItem name={plant.name} cover={plant.cover} id={plant.id} light={plant.light} water={plant.water}/>
                        <button onClick={() => addToCart(plant.name,plant.price)}>Ajouter</button>
                    </div>
                ))}
            </ul>
        </div>
    );
}

export default ShoppingList;