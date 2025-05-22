import {useForm} from "react-hook-form";
import './create.css';

const Create=()=>{
const {register, handleSubmit} = useForm();

    return(
    <form className="create-recipe">
        <input {...register("title")} className="recipe-title" placeholder="Recipe Title" type="text"/>
        <input {...register("image")} className="recipe-image" placeholder="Recipe Image URL" type="url"/> 
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