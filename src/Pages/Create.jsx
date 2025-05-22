const Create=()=>{
    return(
    <form>
        <input {...register("title")} placeholder="Recipe title" type="text"/>
    </form>
    )
}

export default Create;