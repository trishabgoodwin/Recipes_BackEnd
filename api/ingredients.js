import express from "express";
const router = express.Router();
export default router;

import { createIngredient, getIngredients } from "../db/queries/ingredients";

router.route("/").get(async (req, res) => {
  const ingredients = await getIngredients();
  res.send(ingredients);
});

