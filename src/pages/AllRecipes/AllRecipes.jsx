import React, { useEffect } from 'react';
import { useLoaderData } from 'react-router';
import AllRecipeData from '../AllRecipeData/AllRecipeData';

const AllRecipes = () => {
    const AllRecipesData = useLoaderData();
    // console.log(AllRecipesData);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className='my-10'>
            <h1 className="text-3xl font-semibold text-center">All The Recipes</h1>
            <p className="text-gray-600 text-center mt-2 mb-10">
                Discover a variety of delicious recipes from around the world, including breakfast, lunch, dinner, desserts, and more.
            </p>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-3'>
                {
                    AllRecipesData.map(AllRecipesData => <AllRecipeData
                        key={AllRecipesData._id}
                        AllRecipesData={AllRecipesData}
                    ></AllRecipeData>)
                }
            </div>
        </div>
    );
};

export default AllRecipes;