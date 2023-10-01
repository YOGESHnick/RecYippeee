import {Link} from "react-router-dom";

export const Navbar = ()=>{
    return (
        <div className="navbar">
            <Link to="/" >Home</Link> 
            <Link to="/create-recipe" >Create a RecYippee!</Link> 
            <Link to="/saved-recipes" >Saved RecYippees</Link> 
            <Link to="/auth" >Login/Register</Link> 
        </div>
    )
}