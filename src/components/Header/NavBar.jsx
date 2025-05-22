import React from 'react';
import { Link, NavLink } from 'react-router';
import logo from '../../assets/Recipe_Book-nav-logo.png'
import avatar from '../../assets/profile-avatar.png'
import './navLinks.css'

const NavBar = () => {

    const links = <>
        <NavLink to="/" className={({ isActive }) => isActive ? "link active" : "link"}>
            Home
        </NavLink>
        <NavLink to="/allRecipes" className={({ isActive }) => isActive ? "link active" : "link"}>
            All Recipes
        </NavLink>
        <NavLink to="/addRecipe" className={({ isActive }) => isActive ? "link active" : "link"}>
            Add Recipe
        </NavLink>
        <NavLink to="/myRecipes" className={({ isActive }) => isActive ? "link active" : "link"}>
            My Recipes
        </NavLink>
    </>

    return (
        <div className="navbar w-11/12 mx-auto p-5">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow font-semibold">
                        {links}
                    </ul>
                </div>
                {/* nav logo */}
                <div className='flex gap-1'>
                    <img className='w-12 h-12' src={logo} alt="" />
                    <div className='font-extrabold'>
                        <h3 className='text-green-700'>Recipe</h3>
                        <h3 className='text-orange-700'>Book</h3>
                    </div>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 flex gap-6 font-medium">
                    {links}
                </ul>
            </div>
            <div className="navbar-end gap-3">
                <img className='w-12 h-12 rounded-full object-cover cursor-pointer' src={avatar} alt="" />
                <Link to="/auth/login" className="btn btn-outline btn-primary">
                    Login
                </Link>
            </div>
        </div>
    );
};

export default NavBar;