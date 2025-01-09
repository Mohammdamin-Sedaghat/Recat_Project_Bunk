import { useState } from "react"

export default function Main() {
    const [ingredients, setIngredients] = useState(["oregano", "tomato", "black"])

    const ingredientListItem = ingredients.map(ingredient => {
        return <li key={ingredient}>{ingredient}</li>
    })

    function handleSubmit(event) {
        event.preventDefault()
        const formData = new FormData(event.currentTarget)
        const ingredientName = formData.get("ingredient")
        
        setIngredients(prevIng => [...prevIng, ingredientName])
    }

    return (
        <main>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    aria-label="Add ingredient" 
                    placeholder="e.g. oregano"
                    name="ingredient" 
                />
                <button>+ Add Ingrediant</button>
            </form>

            <ul>
                { ingredientListItem }
            </ul>
        </main>
    )
}