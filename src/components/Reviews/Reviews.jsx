import React, { useEffect, useState } from 'react';
import Review from '../Review/Review';

const Reviews = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('reviewsData.json')
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setData(data);
            });
    }, []);

    return (
        <div className='my-32'>
            <h1 className="text-4xl font-bold mb-10 text-start">User
                <span className='text-blue-800'> Reviews</span> </h1>

            <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
                {
                    data.map(reviews => <Review key={reviews.id} reviews={reviews}></Review>)
                }
            </div>
        </div>
    );
};

export default Reviews;