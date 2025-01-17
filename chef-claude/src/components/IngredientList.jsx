export default function IngredientList(props) {

    const ingredientsListItems = props.ingredients.map(ingredient => (
        <li key={ingredient} className="ingredient_list">{ingredient}</li>
    ))

    return (
        <section className="ingredients_section">
            <h2>Ingredients on hand:</h2>
            <ul>
                {ingredientsListItems}
            </ul>
            {ingredientsListItems.length > 3 &&
                <div className="recepie_box">
                    <div ref={props.ref}>
                        <p className="ready_for_recepie">Ready for a recepie?</p>
                        <p className="generate_text">Generate a recepie from your list of ingredients.</p>
                    </div>
                    <button onClick={props.toggleRecepie}>Get a recepie</button>
                </div>
            }
        </section>
    )
}