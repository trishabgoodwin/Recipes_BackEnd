import app from "./app.js";
import db from "./db/client.js";
import express from "express";
import recipesRouter from "./api/recipes.js"
import ingredientsRouter from "./api/ingredients.js"

const PORT = process.env.PORT ?? 3000;

await db.connect();

app.use(express.json());

app.use("/recipes", recipesRouter);

app.use("/ingredients", ingredientsRouter);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});
