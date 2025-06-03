import db from "../client.js";

export async function createRecipe( {title, instructions, prep_time} ) {
  const sql = `
    INSERT INTO recipes (title, instructions, prep_time) 
    VALUES ($1, $2, $3) 
    RETURNING *;
    `
  const {rows: recipe} = await db.query(sql, [title, instructions, prep_time])
  return recipe[0]
}
