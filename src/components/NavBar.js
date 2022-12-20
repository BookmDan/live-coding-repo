import React from "react";
import { NavLink } from "react-router-dom";

function NavBar(){
    return(
        <div id="navbar">
            <h3>THIS IS THE NAVBAR</h3>
            <NavLink to="/" >Home</NavLink>
            <NavLink to="/recipe-box">My Recipe Box</NavLink>
            <NavLink to="/recipes">Search New Recipes</NavLink>
            <NavLink to="/add-recipe">Add New Recipe</NavLink>
        </div>
    )
}

export default NavBar;