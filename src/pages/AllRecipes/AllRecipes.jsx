import React, { useEffect } from 'react';
import { useLoaderData } from 'react-router';

const AllRecipes = () => {
    const AllRecipeData = useLoaderData();
    console.log(AllRecipeData);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className='my-44'>
            <h1 className="text-3xl font-bold text-center">All The Recipes</h1>
            <p className="text-gray-600 text-center mt-2">
                Discover a variety of delicious recipes from around the world, including breakfast, lunch, dinner, desserts, and more.
            </p>
            {
                
            }
        </div>
    );
};

export default AllRecipes;