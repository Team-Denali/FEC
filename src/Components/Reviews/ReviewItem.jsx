import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ReviewItem = (props) => {
  const [helpful, setHelpful] = useState(props.review.helpfulness);

  var rating = props.review.rating;
  var stars = [];
  for (var i = 0; i< rating; i++) {
    stars.push('⭐');
    if (i> rating && i< rating + 1) {
      stars.push(<i class="fa-solid fa-star-half"></i>)
    }
  }

  const updateHelpful = () => {
    var review_id = props.review.review_id;
    //console.log(review_id);
    axios.put(`review/:review_id/helpful`, { params: {review_id: review_id}})
      .then(()=> {
        setHelpful(helpful + 1);
      })
      .catch((err)=> {
        console.log(err);
      })
  }

  return (
    <div className="Reviewitem">
      <div>
        {stars}
        {props.review.reviewer_name}
      </div>
      <div>
        {props.review.recommend ? `I recommend this product` : null}
      </div>
      <div>
        {props.review.summary}
      </div>
      <div>
        {props.review.body}
      </div>
      <div>
        {props.review.response ? `Response: ${props.review.response}` : null}
      </div>
      <div onClick={updateHelpful}>Helpful? Yes[{helpful}]</div>
    </div>
  )
}

export default ReviewItem;