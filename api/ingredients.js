import express from "express";
const router = express.Router();
export default router;

import { createIngredient, getIngredients } from "../db/queries/ingredients.js";

router.route("/").get(async (req, res) => {
  const ingredients = await getIngredients();
  res.send(ingredients);
});

router.route("/").post(async (req, res)=>{
    if(!req.body){
      return res.status(400).send({error: "Missing req. body"})
    }
    
    const {name, quantity, recipe_id} = req.body
    
    if(!name || !quantity || !recipe_id){
      return res.status(400).send({error: "Missing required params"})
    }

  const ingredient = await createIngredient ({name, quantity, recipe_id})

  res.status(201).send(ingredient)
})

