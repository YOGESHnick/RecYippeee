import {Link} from "react-router-dom";
import 'font-awesome/css/font-awesome.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUtensils } from '@fortawesome/free-solid-svg-icons';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';


export const Navbar = ()=>{
    return (
        <div className="navbar">
            <Link to="/" ><i className="fa fa-home"></i>Home</Link> 
            <Link to="/create-recipe" ><FontAwesomeIcon icon={faUtensils} />Create a RecYippee!</Link> 
            <Link to="/saved-recipes" ><FontAwesomeIcon icon={faBookmark} />Saved RecYippees</Link> 
            <Link to="/auth" ><FontAwesomeIcon icon={faSignInAlt} />Login/Register</Link> 
        </div>
    )
}