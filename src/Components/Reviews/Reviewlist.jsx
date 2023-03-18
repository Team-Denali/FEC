import React, { useState, useEffect } from "react";
import axios from "axios";
import ReviewItem from "./ReviewItem.jsx"

const Reviewlist = ({reviews, product_id}) => {
  //console.log(reviews)
  const [reviewnumber, setReviewnumber] = useState(2);

  const addReview = () => {
    var r = reviewnumber
    setReviewnumber(r + 2);
  }

  const createReview = () => {

  }

  var rl = reviews||[];
  //get reviews from api for specific product id
  var rl = rl.slice(0, reviewnumber);
  var rlist = rl.map((r)=>{
    return <ReviewItem key = {r.review_id} product_id={product_id} review={r}/>;
  });
  //console.log(rl);

  if (rlist.length > 0 ){
    return (
    <div>
      <div>{rlist.length} reviews, sorted by relevance</div>
      <div className = 'review-list'>
          {rlist}
      </div>
      <div className="ReviewButtons" onClick={addReview}>more reviews</div>
      <div className="ReviewButtons" onClick={createReview}>write a review</div>
    </div>
    )
  } else {
    return <div>No comment now. Be the first one to comment?</div>
  }


}

export default Reviewlist;