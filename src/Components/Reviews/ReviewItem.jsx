import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Rating from '@mui/material/Rating';
import DoneIcon from '@mui/icons-material/Done';
import Button from '@mui/material/Button';

const ReviewItem = (props) => {
  const [helpful, setHelpful] = useState(props.review.helpfulness);

  var rating = props.review.rating;
  // var stars = [];
  // for (var i = 0; i< rating; i++) {
  //   stars.push('⭐');
  //   if (i> rating && i< rating + 1) {
  //     stars.push(<i class="fa-solid fa-star-half"></i>)
  //   }
  // }

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
      <div className='ratingname'>
      <Rating name="read-only" value={rating}  precision={0.1} size={'small'} readOnly />
        {props.review.reviewer_name}
      </div>
      <div className='summary'>
        {props.review.summary}
      </div>
      <div className='body'>
        {props.review.body}
      </div>
      <div className='recom'>
        {props.review.recommend ? (<DoneIcon>DoneIcon</DoneIcon>): null}
        {props.review.recommend ?  `I recommend this product`: null}
      </div>
      <div>
        {props.review.response ? `Response: ${props.review.response}` : null}
      </div>
      <div className='helpful' onClick={updateHelpful}>Helpful? <Button size="small">Yes[{helpful}]</Button>
</div>

    </div>
  )
}

export default ReviewItem;