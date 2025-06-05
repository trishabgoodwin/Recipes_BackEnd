import express from "express";
const router = express.Router();
export default router;

import { createIngredient, getIngredients, getIngredient, deleteIngredient } from "../db/queries/ingredients.js";

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

router.route("/:id").get(async (req,res)=>{
  const {id} = req.params

  const ingredient = await getIngredient(id)

  if (!ingredient){
      return res.status(404).send({error: "ID does not exist."})
    }
    res.send(ingredient)
})

router.route("/:id").delete(async (req,res)=>{
  const {id} = req.params

  const deletes = await deleteIngredient(id)

  if (!deletes){
      return res.status(404).send({error: "That ingredient does not exist."})
    }
    
    res.sendStatus(204)
})