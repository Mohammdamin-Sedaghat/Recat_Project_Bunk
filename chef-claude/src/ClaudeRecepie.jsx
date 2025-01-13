import ReactMarkdown from 'react-markdown'

export default function ClaudeRecepie({markdown}) {
    return (
        <section className='recepie' aria-live='polite'>
            <h2>Chef Claude Recommends:</h2>
            <ReactMarkdown>{markdown}</ReactMarkdown>
        </section>
    )
}

/*
<section>
<h2>Chef Claude Recommends:</h2><p>Sure, I'd be happy to help! Based on the ingredients you have, I recommend making a simple and delicious Chicken Parmesan Pasta. Here's the recipe:</p>
<h4>Chicken Parmesan Pasta</h4>
<h5>Ingredients</h5>
<ul>
<li>8 oz. pasta (any type you have will work)</li>
<li>1 lb. boneless, skinless chicken breasts</li>
<li>1 cup grated Parmesan cheese</li>
<li>1/2 cup grated mozzarella cheese</li>
<li>1/2 cup breadcrumbs</li>
<li>1/2 cup milk</li>
<li>1/2 cup flour</li>
<li>1/4 cup olive oil</li>
<li>2 cloves garlic, minced</li>
<li>1 tsp. dried basil</li>
<li>1 tsp. dried oregano</li>
<li>1/2 tsp. salt</li>
<li>1/2 tsp. black pepper</li>
<li>1 (24-oz.) jar of your favorite tomato sauce</li>
<li>Optional: chopped fresh basil and parsley for garnish</li>
</ul>
<h5>Instructions</h5>
<ol>
<li>Preheat your oven to 450°F (230°C).</li>
<li>Cook pasta according to package instructions. Drain and set aside.</li>
<li>Slice the chicken breasts horizontally to create thin cutlets.</li>
<li>In a shallow dish, combine the flour, half the basil, oregano, salt, and pepper.</li>
<li>In another shallow dish, combine the breadcrumbs, Parmesan cheese, mozzarella cheese, the remaining basil, and oregano.</li>
<li>Dip each chicken cutlet in the flour mixture, then dip in the milk, making sure each piece is coated well. Finally, dip the cutlets in the breadcrumb mixture, pressing gently to adhere.</li>
<li>Heat the olive oil in a large oven-safe skillet over medium-high heat. Add the garlic and sauté until fragrant, about 30 seconds.</li>
<li>Carefully place the chicken in the skillet and cook for 3-5 minutes on each side or until golden brown.</li>
<li>Pour the tomato sauce over the chicken in the skillet and bring to a simmer.</li>
<li>Remove from the heat and add the cooked pasta, stirring well to coat evenly.</li>
<li>Transfer to the preheated oven and bake for 15-20 minutes or until the sauce is bubbling and the cheese is melted and slightly browned on top.</li>
<li>If desired, garnish with chopped fresh basil and parsley before serving.</li>
</ol>
<p>Enjoy your delicious Chicken Parmesan Pasta!</p>
</section>

*/