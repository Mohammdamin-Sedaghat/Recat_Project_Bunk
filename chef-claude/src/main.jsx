import { useState} from "react"
import ClaudeRecepie from "./ClaudeRecepie"
import IngredientList from "./IngredientList"

export default function Main() {
    const [ingredients, setIngredients] = useState([])
    const [recepieShown, setRecepieShown] = useState(false)

    

    function newIngredient(formData) {
        const newIngredient = formData.get("ingredient")
        setIngredients(prevIngredients => [...prevIngredients, newIngredient])
    }

    function toggleRecepie() {
        setRecepieShown(prevRecepieShown => !prevRecepieShown)
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
            {recepieShown &&
                <ClaudeRecepie />
            }
        </main>
    )
}