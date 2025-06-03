import express from "express";
const router = express.Router();
export default router;

import { createRecipe, getRecipes } from "../db/queries/recipes";

router.route("/").get(async (req, res) => {
  const recipes = await getRecipes();
  res.send(recipes);
});

