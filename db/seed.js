import db from "./client.js";
import { createRecipe } from "./queries/recipes.js";
import { createIngredient } from "./queries/ingredients.js";

await db.connect();
await seedRecipes();
await seedIngredients();
await db.end();
console.log("🌱 Database seeded.");


async function seedRecipes() {

  await createRecipe({title:"Bowl of Vegetables", instructions:"Combine all ingredients and stir.", prep_time:10})
  await createRecipe({title:"Plate of Fruit", instructions:"Plate all ingredients. Do not stir.", prep_time:15})
  await createRecipe({title:"Bread", instructions:"Go get a piece of bread.", prep_time:1})
  await createRecipe({title:"Wrap", instructions:"Put things in tortilla. Wrap.", prep_time:10})
  await createRecipe({title:"Ice Water", instructions:"Put ingredients in cup together.", prep_time:2})

}

async function seedIngredients() {

  await createIngredient({name: "corn" , quantity: 5 , recipe_id: 1})
  await createIngredient({name: "greenbean", quantity: 5 , recipe_id: 1})
  await createIngredient({name: "broccoli" , quantity: 5 , recipe_id: 1})
  await createIngredient({name: "cauliflower" , quantity: 5 , recipe_id: 1})
  await createIngredient({name: "apple" , quantity: 2 , recipe_id: 2})
  await createIngredient({name: "orange", quantity: 2 , recipe_id: 2})
  await createIngredient({name: "grape" , quantity: 12 , recipe_id: 2})
  await createIngredient({name: "mango" , quantity: 1 , recipe_id: 2})
  await createIngredient({name: "bread" , quantity: 1 , recipe_id: 3})
  await createIngredient({name: "tortilla", quantity: 1 , recipe_id: 4})
  await createIngredient({name: "spinach", quantity: 10 , recipe_id: 4})
  await createIngredient({name: "tomato" , quantity: 1 , recipe_id: 4})
  await createIngredient({name: "ice" , quantity: 8 , recipe_id: 5})
  await createIngredient({name: "water", quantity: 1 , recipe_id: 5})
  
}

