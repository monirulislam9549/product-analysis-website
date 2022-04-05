import React from 'react';
import './Review.css';

const Review = (props) => {
    const { name, ratings, picture, review } = props.review
    return (
        <div className='customer-review'>
            <img src={picture} alt="" />
            <h3>Name:{name}</h3>
            <p>Ratings:{ratings}</p>
            <p>{review}</p>
        </div>
    );
};

export default Review;