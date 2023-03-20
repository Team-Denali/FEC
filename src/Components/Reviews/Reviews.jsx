import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Reviewlist from './Reviewlist.jsx';
import Ratingbreakdown from './Ratingbreakdown.jsx';
import Productbreakdown from './Productbreakdown.jsx';
import css from "./style.css";
// Bring React in to build a component.

//import { createRoot } from "react-dom/client";


// Huzzah for jsx!
const Reviews = () => { //include state variables for currently viewed product
  const [product_id, setProduct_id] = useState("37322");
  const [reviews, setReviews] = useState({});
  const [reviewStars, setReviewStars] = useState('');
  const [sortmethod,setSortmethod] = useState('relevant');

  const getReviews = () => {
    axios.get('/reviews', {
      params: {
        product_id: product_id,
        sort: sortmethod,
        count: 1000
      }
    })
    .then((res) => {
      setReviews(res.data);
      //console.log('reviews:',res.data)
    })
    .catch((err)=> {
      console.log(err);
    })
  }

  const getReviewsStars = () => {
    axios.get('/reviews/meta', {
      params: {
        product_id
      }
    })
    .then((res) => {
      setReviewStars(res.data);
      //console.log('averagerating:',res.data)
    })
    .catch((err)=> {
      console.log(err);
    })
  }

  const postForm = (params) => {
    console.log(params);
    axios.post('/reviews/',params)
    .then(()=>{
      getReviews();
    }).catch((err)=> {
      console.log(err);
    });
  }

  useEffect(() => {
    getReviews();
    getReviewsStars();
  },[product_id, sortmethod]);


  return (
    <div>
    <h1>Ratings & reviews</h1>
    <div className ="Reviews">
    <Ratingbreakdown className="Ratingbreakdown" reviewStars={reviewStars}/>
    <Reviewlist className="ReviewList" reviews= {reviews.results} product_id= {product_id} postForm={postForm} setSortmethod={setSortmethod}/>
    <Productbreakdown className="Productbreakdown" reviewStars={reviewStars}/>
      </div>
      </div>
  )
}


export default Reviews;