import React from 'react';
import './Stylesheet/StarRating.css'

const StarRating = ({ rating }) => {
  return (
    <div className="rate">
    <input type="radio"  name="rate" value="1" />
    <label for="star1" ></label>
    <input type="radio" name="rate" value="2" />
    <label for="star2" ></label>
    <input type="radio" name="rate" value="3" />
    <label for="star3" ></label>
    <input type="radio"  name="rate" value="4" />
    <label for="star4" ></label>
    <input type="radio"  name="rate" value="5" />
    <label for="star5" ></label>
  </div>
  );
};

export default StarRating;
