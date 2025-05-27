import {useForm} from "react-hook-form";
import './create.css';
import { nanoid } from "nanoid";
import { useContext } from "react";
import { recipecontext } from "../context/RecipeContext";

const Create=()=>{
    const {data, setData} = useContext(recipecontext);

const {register, handleSubmit, reset} = useForm();

const submitHandler=(recipe)=>{
    recipe.id = nanoid()
    console.log(recipe)

   setData([...data, recipe] )
   reset();
}

    return(
    <form className="create-recipe" onSubmit={handleSubmit(submitHandler)}>
        <input {...register("title")} className="recipe-title" placeholder="Recipe Title" type="text"/>
        <input {...register("image")} className="recipe-image" placeholder="Recipe Image URL" type="url"/> 
         <input {...register("chef")} className="chefName" placeholder="Chef Name" type="text"/>
        <textarea  {...register("ingredients")} className="recipe-ingredients" placeholder="Recipe Ingredients //Comma separated" type="text"/>
        <textarea {...register("instructions")} className="recipe-instructions" placeholder="Recipe Instructions" type="text"/>
        <select {...register("category")} className="recipe-category">
            <option value="breakfast">Breakfast</option>
            <option value="lunch">Lunch</option>
            <option value="dinner">Dinner</option>
            <option value="snack">Snack</option>
            </select>
        
        <button className="submit-button" type="submit">Create Recipe</button>
    </form>
    )
}

export default Create;