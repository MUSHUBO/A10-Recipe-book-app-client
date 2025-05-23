import React from 'react';
import TopRecipe from '../TopRecipe/TopRecipe';
import { Link } from 'react-router';

const TopRecipes = ({ recipesData }) => {

    const topSixRecipes = recipesData.slice(0, 6);

    return (
        <div className='my-32'>
            <h1 className='font-medium text-3xl text-center mb-4'>Top <span className='text-pink-600'>Recipes</span> </h1>
            <p className="text-center text-gray-500 mb-10 max-w-2xl mx-auto">
                Discover the most loved and highest-rated recipes from our community. These top picks are perfect for impressing guests or treating yourself to something special!
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    topSixRecipes.map(recipe => (<TopRecipe
                        key={recipe._id}
                        recipe={recipe}

                    ></TopRecipe>))
                }
            </div>

            {/* See All Button */}
            <div className="text-center mt-16">
                <Link to="/allRecipes">
                    <button className="btn btn-outline btn-primary">See All Recipes</button>
                </Link>
            </div>
        </div>
    );
};

export default TopRecipes;