import React from 'react';
import useReviews from '../../hooks/useReviews';
import Review from '../Review/Review';
import './Reviews.css'

const Reviews = () => {
    const [reviews, setReviews] = useReviews();
    return (
        <div className='reviews-container'>

            {
                reviews.map(review => <Review
                    key={review._id}
                    review={review}
                ></Review>)
            }
        </div>
    );
};

export default Reviews;