import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ReviewItem = (props) => {
  return (
    <div className="ReviewList">
      <div>
        {props.review.summary}
      </div>
    </div>
  )
}

export default ReviewItem;