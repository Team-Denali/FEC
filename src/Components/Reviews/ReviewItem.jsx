import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Rating from '@mui/material/Rating';
import DoneIcon from '@mui/icons-material/Done';
import Button from '@mui/material/Button';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import { format } from "date-fns";

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
  var photographs = props.review.photos||[];
  //console.log(props.review);

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  let date = new Date(props.review.date);
  const formatDate =
    monthNames[date.getMonth()] +
    " " +
    date.getDate() +
    ", " +
    date.getFullYear();

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
      <span className="name">
          {!props.review.reviewer_email ? (<VerifiedUserIcon size={"small"}>VerifiedUserIcon</VerifiedUserIcon>): null}
        {props.review.reviewer_name}
        </span>
      </div>
      <div className='summary'>
        {props.review.summary}
      </div>
      <div className='body'>
        {props.review.body}
      </div>
      <div className='recom' style={{ display: props.review.recommend ? 'flex' : 'none' }}>
        {props.review.recommend ? (<DoneIcon>DoneIcon</DoneIcon>): null}
        {props.review.recommend ?  `I recommend this product`: null}
      </div>
      <div>
      <div className="reviewphoto">
      {photographs.map((_, index) =>
        photographs[index] ? (
          <img src={photographs[index]['url']} key={index} className="ansPhotos" style={{height:80, width:80}} />
        ) : null
      )}
    </div>
      </div>
      <div className='reviewresponse' style={{ display: props.review.response ? 'flex' : 'none' }}>
        <div className="responsetitle">{props.review.response ? 'Response' : null}</div>
        <div  className="responsebody">
        {props.review.response ? props.review.response : null}
       </div>
      </div>
      <div className='helpful'>
      <span> Helpful? <Button size="small" onClick={updateHelpful}>Yes[{helpful}]</Button></span>
      <span className='reviewdate'> <time>{formatDate}</time></span>
</div>
<div className='borderline'></div>

    </div>
  )
}

export default ReviewItem;