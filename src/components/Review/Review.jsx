import React from 'react';
import { FaStar } from 'react-icons/fa';

const Review = ({ reviews }) => {
    console.log(reviews);
    const { name, photo, date, rating, review } = reviews;

    return (
        <div className="card bg-base-200 shadow-md p-5">
            {/* User Info */}
            <div className="flex items-center gap-4 mb-3">
                <img src={photo} alt={name} className="w-12 h-12 rounded-full object-cover" />
                <div>
                    <p className="font-semibold">{name}</p>
                    <p className="text-sm text-gray-500">{date}</p>
                </div>
            </div>

            {/* Rating */}
            <div className="flex items-center mb-2 text-yellow-400">
                {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className={i < rating ? "" : "text-gray-300"} />
                ))}
            </div>

            {/* Review Text */}
            <p className="text-sm text-gray-700">{review}</p>
        </div>
    );
};

export default Review;