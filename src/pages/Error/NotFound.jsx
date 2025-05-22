import React from 'react';
import { Link } from 'react-router';

const NotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center text-center min-h-screen bg-gradient-to-b from-[#e4f0f5] to-white px-8">

            <img src="https://i.ibb.co/qLpQ9CJK/404-error-not-fouend-page.png"
                alt="404 robot" className="w-full max-w-xl h-auto mb-6 rounded-xl shadow-2xl" 
            />

            <div className="text-center">
                <h1 className="text-2xl font-bold text-pink-500 mb-2">404 - Page Not Found</h1>
                <p className="text-gray-700 mb-6">
                    Oops! The page you're looking for doesn't exist.
                </p>
                <Link className='btn btn-outline px-6' to='/'>Back To Home</Link>
            </div>
        </div>
    );
};

export default NotFound;