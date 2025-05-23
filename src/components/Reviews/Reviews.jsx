import React, { useEffect, useState } from 'react';

const Reviews = () => {
    const [data, setData] = useState([]);
    console.log(data);

    useEffect(() => {
        fetch('reviewsData.json')
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setData(data);
            });
    }, []);

    return (
        <div>
            <h1 className='font-medium text-3xl text-center mb-10'>Customer's
                <span className='text-blue-700 font-semibold'> Reviews</span> </h1>

            <div>
                {
                    
                }
            </div>
        </div>
    );
};

export default Reviews;