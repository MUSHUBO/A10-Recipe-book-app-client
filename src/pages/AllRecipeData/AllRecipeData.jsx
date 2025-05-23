import React from 'react';
import { FaClock, FaHeart } from 'react-icons/fa';
import { Link } from 'react-router';

const AllRecipeData = ({ AllRecipesData }) => {
    console.log(AllRecipesData);

    const { _id, image, title, categories, cuisineType, likes } = AllRecipesData;

    return (
        <div className="card  bg-base-100 shadow-sm mb-10">
            <figure>
                <img
                    src={image || 'https://i.ibb.co/PG0JqTLK/placeholder.jpg'}
                    alt={title} className="w-full h-full sm:h-57 object-cover"
                />
            </figure>
            <div className="card-body space-y-1">
                {/* title */}
                <h2 className="card-title text-2xl"> {title} </h2>

                {/* cuisineType/likes */}
                <div className="flex justify-between items-center font-medium text-lg text-gray-500">
                    <span>{cuisineType}</span>

                    {/* Like Button */}
                    <div className="card-actions justify-end mt-2">
                        <span className="flex items-center gap-0.5 text-sky-600">
                            <FaHeart size={20} /> {likes}
                        </span>
                    </div>
                </div>

                {/*  */}
                <div className='gap-3 w-2 text-lg'>
                    <span className='font-semibold'>categories:</span>
                    {
                        categories.map((category, index) => <p key={index} className='text-gray-600'>{category}</p>)
                    }
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

export default AllRecipeData;