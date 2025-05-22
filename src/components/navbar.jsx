import { NavLink } from "react-router-dom";
import './navbar.css';
import React from "react";


const Navbar = () => {
    return  <div className="navbar">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/recipe">Recipes</NavLink>
        <NavLink to="/about">About</NavLink>
    </div>
    
}
export default Navbar;