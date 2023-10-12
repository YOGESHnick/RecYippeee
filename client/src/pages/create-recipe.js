export const CreateRecipe = ()=>{
    return (
        <div className="create-recipte">
            <h2>Create a recipe!</h2>
            <form>
                <label htmlFor="name" >Name</label>
                <input type="text" id="name"  />
                <label htmlFor="ingredients" >Ingredients</label>

                <label htmlFor="instructions" >Instructions</label>
                <textarea type="text" id="instructions" name="istructions" > </textarea>
                <label htmlFor="imageUrl" >Image URL</label>
                <input type="text" id="imageUrl"  />
            </form>
        </div>
    )
}