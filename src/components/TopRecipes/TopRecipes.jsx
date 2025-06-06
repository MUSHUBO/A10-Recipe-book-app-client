import React, { useContext } from 'react';
import TopRecipe from '../TopRecipe/TopRecipe';
import { Link } from 'react-router';
import { AuthContext } from '../../contexts/AuthContext';
import Loading from '../../pages/Loading/Loading';

const TopRecipes = ({ recipesData }) => {
    const {loading} = useContext(AuthContext);
    
    if(loading){
        return <Loading></Loading>
    }

    return (
        <div className='my-32'>
            <h1 className='font-bold text-4xl text-center mb-4'>TOP <span className='text-pink-600'>RECIPES</span> </h1>
            <p className="text-center text-gray-500 mb-10 max-w-2xl mx-auto">
                Discover the most loved and highest-rated recipes from our community. These top picks are perfect for impressing guests or treating yourself to something special!
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    recipesData.map(recipe => (<TopRecipe
                        key={recipe._id}
                        recipe={recipe}
                    ></TopRecipe>))
                }
            </div>

            {/* See All Button */}
            <div className="text-center mt-16">
                <Link to="/allRecipes">
                    <button className="btn btn-outline px-20 btn-primary">See All Recipes</button>
                </Link>
            </div>
        </div>
    );
};

export default TopRecipes;