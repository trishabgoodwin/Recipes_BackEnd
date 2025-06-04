import db from "../client.js";

export async function createIngredient( {name, quantity, recipe_id} ) {
  const sql = `
    INSERT INTO ingredients (name, quantity, recipe_id) 
    VALUES ($1, $2, $3) 
    RETURNING *;
    `
  const {rows: ingredient} = await db.query(sql, [name, quantity, recipe_id])
  return ingredient[0]
}

export async function getIngredients() {
  const sql = `
  SELECT *
  FROM ingredients;
  `;
  const { rows: ingredients } = await db.query(sql);
  return ingredients
}


