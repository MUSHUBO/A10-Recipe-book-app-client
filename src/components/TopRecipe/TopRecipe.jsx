import React from 'react';
import { FaHeart } from 'react-icons/fa';
import { Link } from 'react-router';

const TopRecipe = ({ recipe }) => {
    console.log(recipe);
    const { _id, image, title, cuisineType, likes, } = recipe;


    return (
        <div className="card bg-base-100 shadow-sm">
            <figure>
                <img
                    src={image || 'https://i.ibb.co/PG0JqTLK/placeholder.jpg'}
                    alt={title} className="w-full h-full object-cover"
                />
            </figure>
            <div className="card-body">
                <h2 className="card-title"> {title} </h2>
                <div className="flex justify-between items-center text-sm text-gray-500">
                    <span className='text-lg'>{cuisineType}</span>
                    <span className="flex items-center gap-1 text-red-500">
                        <FaHeart size={20} /> {likes}
                    </span>
                </div>
                <div className="card-actions justify-end mt-4">
                    <Link to={`/recipe/${_id}`}>
                        <button className="font-medium">View Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default TopRecipe;