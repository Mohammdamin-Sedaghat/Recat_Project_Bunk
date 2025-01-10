import React from "react"

export default function Main() {

    const [ingredients, setIngredients] = React.useState(["chicken", "cum"])

    const ingredientsListItems = ingredients.map(ingredient => (
        <li key={ingredient} className="ingredient_list">{ingredient}</li>
    ))

    function newIngredient(formData) {
        const newIngredient = formData.get("ingredient")
        setIngredients(prevIngredients => [...prevIngredients, newIngredient])
    }

    return (
        <main>
            <form action={newIngredient} className="add-ingredient-form">
                <input
                    type="text"
                    placeholder="e.g. oregano"
                    aria-label="Add ingredient"
                    name="ingredient"
                />
                <button>Add ingredient</button>
            </form>
            <section>
                <h2>Ingredients on hand:</h2>
                <ul>
                    {ingredientsListItems}
                </ul>
                <div className="recepie_box">
                    <div>
                        <p className="ready_for_recepie">Ready for a recepie?</p>
                        <p className="generate_text">Generate a recepie from your list of ingredients.</p>
                    </div>
                    <button>Get a recepie</button>
                </div>
            </section>
            
        </main>
    )
}