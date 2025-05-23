import React from 'react';
import { FaHeart } from 'react-icons/fa';
import { Link } from 'react-router';

const TopRecipe = ({ recipe }) => {
    // console.log(recipe);
    const { _id, image, title, cuisineType, likes, } = recipe;


    return (
        <div className="card bg-base-100 shadow-md">
            <figure>
                <img
                    src={image || 'https://i.ibb.co/PG0JqTLK/placeholder.jpg'}
                    alt={title} className="w-full h-80 object-cover"
                />
            </figure>
            <div className="card-body">
                {/* title */}
                <h2 className="card-title"> {title} </h2>

                <div className="flex justify-between items-center text-sm text-gray-500">
                    {/* cuisineType */}
                    <span className='text-lg'>{cuisineType}</span>

                    {/* Like Button */}
                    <div className="card-actions justify-end mt-4">
                        <span className="flex items-center gap-1 text-sky-600">
                            <FaHeart size={20} /> {likes}
                        </span>
                    </div>
                </div>

                {/* View Button */}
                <div className="card-actions justify-end mt-4">
                    <Link to={`/recipe/${_id}`}>
                        <button className="font-medium hover:text-blue-800">View Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default TopRecipe;