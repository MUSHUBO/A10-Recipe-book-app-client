import React, { useEffect } from 'react';
import { useLoaderData } from 'react-router';
import AllRecipeData from '../AllRecipeData/AllRecipeData';
import Loading from '../Loading/Loading';

const AllRecipes = () => {
    const AllRecipesData = useLoaderData();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (!AllRecipeData) {
        return <Loading />
    }

    return (
        <div className='my-10 w-10/11 sm:w-full mx-auto'>
            <h1 className="text-4xl font-bold text-center">All The <span className='text-orange-600'>Recipes</span></h1>
            <p className="text-gray-600 text-center mt-2 mb-10">
                Discover a variety of delicious recipes from around the world, including breakfast, lunch, dinner, desserts, and more.
            </p>
            <div className='grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3'>
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