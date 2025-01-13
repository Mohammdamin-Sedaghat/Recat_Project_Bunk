import { useState} from "react"
import ClaudeRecepie from "./ClaudeRecepie"
import IngredientList from "./IngredientList"
import { getRecepie } from "../backend"

export default function Main() {
    const [ingredients, setIngredients] = useState([])
    // const [recepieShown, setRecepieShown] = useState(false)
    const [recepie, setRecepie] = useState("")
    

    function newIngredient(formData) {
        const newIngredient = formData.get("ingredient")
        setIngredients(prevIngredients => [...prevIngredients, newIngredient])
    }

    async function toggleRecepie() {
        console.log("Process Started")
        const markdown = await getRecepie(ingredients)
        setRecepie(markdown)
    }

    return (
        <main>
            <form action={newIngredient} className="add-ingredient-form">
                <input
                    type="text"
                    placeholder="e.g. oregano"
                    aria-label="Add ingredient"
                    name="ingredient"
                    required
                />
                <button>Add ingredient</button>
            </form>
            {ingredients.length > 0  &&
                <IngredientList
                    ingredients={ingredients} 
                    toggleRecepie={toggleRecepie} 
                />
            }
            {recepie != "" &&
                <ClaudeRecepie 
                    markdown = {recepie}
                />
            }
        </main>
    )
}