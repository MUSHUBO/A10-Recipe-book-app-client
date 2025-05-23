import React, { useEffect, useState } from 'react';
import BestRecipe from '../BestRecipe/BestRecipe';

const BestRecipes = () => {
    const [best, setBest] = useState([]);

    useEffect(() => {
        fetch('RecipesOfTheYear.json')
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setBest(data);
            });
    }, []);

    return (
        <div className='mx-1'>
            <h2 className="text-4xl font-bold mb-4 text-center">Top 3 <span className='text-green-600'>Healthiest</span>  Recipes of the Year</h2>
            <p className="text-gray-600 mb-10 text-center">
                Discover recipes recognized for promoting better health and helping prevent common diseases.
            </p>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
                {
                    best.map(bestRecp => <BestRecipe
                        key={bestRecp.id}
                        bestRecp={bestRecp}
                    ></BestRecipe>)
                }
            </div>
        </div>
    );
};

export default BestRecipes;