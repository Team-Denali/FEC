import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Reviewlist from './Reviewlist.jsx';
// Bring React in to build a component.

//import { createRoot } from "react-dom/client";


// Huzzah for jsx!
const Reviews = () => { //include state variables for currently viewed product
  const [product_id, setProduct_id] = useState("37313");
  const [reviews, setReviews] = useState({});

  const getReviews = () => {
    axios.get('/reviews', {
      params: {
        product_id: product_id,
        sort: 'relevant',
        count: 1000
      }
    })
    .then((res) => {
      setReviews(res.data);
      // console.log('reviews:',res.data)
    })
    .catch((err)=> {
      console.log(err);
    })
  }

  useEffect(() => {
    getReviews();
  },[]);

  // return (
  //   <h1>REVIEW LIST:</h1>
  // <Reviewlist reviews= {reviews} product_id= {product_id}/>
  // <div>rating breakdown</div>
  // <div>product breakdown</div>
  // <div>review list</div>
  // )
  return (
    <div>
    <Reviewlist reviews= {reviews} product_id= {product_id}/>
    <div>rating breakdown</div>
    <div>product breakdown</div>
    <div>review list</div>
    </div>

  )

}


export default Reviews;