import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FaClock, FaHeart } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router';

const RecipeDetails = () => {
    const recipeData = useLoaderData();
    // console.log(recipeData);
    
    const [likes, setLikes] = useState(recipeData.likes || 0);

    const { _id, image, title, categories, cuisineType, ingredients, instructions, preparationTime } = recipeData;

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleLike = async() => {
        try {
            const response = await axios.patch(`https://a10-recipe-book-app-server-lilac.vercel.app/recipes/${_id}/like`);
            if (response.data.modifiedCount > 0) {
                setLikes(prev => prev + 1);
            }
        } catch (error) {
            console.error("Error updating likes:", error);
        }
    }

    return (
        <div className='lg:w-2/4 mx-auto my-10'>
            <div className="card  bg-base-100 shadow-sm mb-10">
                <figure>
                    <img
                        src={image || 'https://i.ibb.co/PG0JqTLK/placeholder.jpg'}
                        alt={title} className="w-full h-full object-cover"
                    />
                </figure>
                <div className="card-body space-y-4">
                    {/* title */}
                    <h2 className="card-title text-2xl"> {title} </h2>

                    {/* cuisineType/likes */}
                    <div className="flex justify-between items-center font-medium text-lg text-gray-500">
                        <span>{cuisineType}</span>
                        <span className='flex items-center gap-1 font-bold'> {preparationTime} <FaClock /></span>
                    </div>

                    {/*  */}
                    <div className='flex gap-3 w-2 text-lg'>
                        <span className='font-semibold'>categories:</span>
                        {
                            categories.map((category, index) => <p key={index} className='text-gray-600'>{category}</p>)
                        }
                    </div>

                    {/* ingredients/instructions */}
                    <div className='text-lg '>
                        <h5 className='mb-6'> <span className='font-semibold'>ingredients:</span> <br /> <span className='text-gray-600'> {ingredients} </span> </h5>
                        <h5><span className='font-semibold'>instructions:</span> <br /> <span className='text-gray-600'> {instructions} </span> </h5>
                    </div>

                    {/* Like Button */}
                    <div className="card-actions justify-end mt-4">
                        <button onClick={handleLike} className="flex btn items-center gap-1 text-sky-600">
                            <FaHeart size={20} /> {likes}
                        </button>
                    </div>
                </div>
            </div>
            <Link className='flex items-center justify-center' to="/">
                <button className='btn btn-outline btn-primary'>Back To Home</button>
            </Link>
        </div>
    );
};

export default RecipeDetails;