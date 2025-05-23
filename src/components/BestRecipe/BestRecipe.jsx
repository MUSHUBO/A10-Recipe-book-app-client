import React from 'react';

const BestRecipe = ({ bestRecp }) => {
    console.log(bestRecp);
    const { name, image, disease, benefit, award } = bestRecp;

    return (
        <div className="card bg-base-200 shadow-lg hover:shadow-xl transition duration-300">
            <figure>
                <img src={image} alt={name} className="w-full h-full object-cover" />
            </figure>
            <div className="card-body">
                <h2 className="card-title text-xl font-semibold">{name}</h2>
                <p className="text-sm text-primary">{award}</p>
                <p className="text-gray-700 text-sm">
                    <strong>Helps With:</strong> {disease}
                </p>
                <p className="text-gray-600 text-sm">{benefit}</p>
                <div className="card-actions justify-end mt-4">
                    <button className="btn btn-sm btn-outline">View Recipe</button>
                </div>
            </div>
        </div>
    );
};

export default BestRecipe;