import express from "express";
const router = express.Router();
export default router;

import { createRecipe, getRecipes, getRecipe, deleteRecipe, updateRecipe } from "../db/queries/recipes.js";

router.route("/").get(async (req, res) => {
  const recipes = await getRecipes();
  res.send(recipes);
});

router.route("/").post(async (req, res)=>{
    const {title, instructions, prep_time} = req.body
    
    if(!title || !instructions|| !prep_time){
      return res.status(400).send({error: "Missing required params"})
    }

  const recipe = await createRecipe ({title, instructions, prep_time})

  res.status(201).send(recipe)
})

router.route("/:id").get(async (req,res)=>{
  const {id} = req.params

  const recipe = await getRecipe(id)

  if (!recipe){
      return res.status(404).send({error: "ID does not exist."})
    }
    res.send(recipe)
})

router.route("/:id").delete(async (req,res)=>{
  const {id} = req.params

  const deletes = await deleteRecipe(id)

  if (!deletes){
      return res.status(404).send({error: "That recipe does not exist."})
    }
    
    res.sendStatus(204)
})



router.route("/:id").put(async (req,res)=>{
    const {id} = req.params

    const {title, instructions, prep_time} = req.body
    
    if( !title || !instructions || !prep_time)
      return res.status(400).send({error: "Missing required fields."})

    const recipe = await getRecipe(id)
    if(!recipe){
      return res.status(404).send({error: "Recipe not found."})
    }

    const updated = await updateRecipe({id, title, instructions, prep_time})
    res.send(updated)

})