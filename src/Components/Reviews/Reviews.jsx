import React, { lazy, useState, useEffect } from 'react';
import axios from 'axios';
//import Reviewlist from './Reviewlist.jsx';
//import Ratingbreakdown from './Ratingbreakdown.jsx';
//import Productbreakdown from './Productbreakdown.jsx';
import css from "./style.css";
const Reviewlist = lazy(() => import("./Reviewlist.jsx"));
const Ratingbreakdown = lazy(() => import("./Ratingbreakdown.jsx"));
const Productbreakdown = lazy(() => import("./Productbreakdown.jsx"));
import ElementContext from '../../ElementContext.js';
import {BodyProvider} from '../../BodyContext.jsx';

// Bring React in to build a component.

//import { createRoot } from "react-dom/client";


// Huzzah for jsx!
const Reviews = (props) => { //include state variables for currently viewed product
  // const [product_id, setProduct_id] = useState("37311");
  const [reviews, setReviews] = useState({});
  const [reviewStars, setReviewStars] = useState('');
  const [sortmethod,setSortmethod] = useState('relevant');
  const [filter, setFilter] = useState(0);

  //console.log('id:',props.current.id)
  var product_id = props.current || "";
  //console.log(props.current);

  const getReviews = () => {
    if (product_id) {
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
  }

  const getReviewsStars = () => {
    if (product_id) {
      axios.get('/reviews/meta', {
        params: {
          product_id
        }
      })
      .then((res) => {
        setReviewStars(res.data);
      })
      .catch((err)=> {
        console.log(err);
      })
    }
  }

  const postForm = (params) => {
    //console.log(params);
    axios.post('/reviews/',params)
    .then(()=>{
      getReviews();
    }).catch((err)=> {
      console.log(err);
    });
  }


  // const setRating = (num) => {
  //   props.setRating(num);
  // }

  useEffect(() => {
    if (product_id) {
      getReviews();
      getReviewsStars();
    }
  },[product_id, sortmethod]);

  return (
    <div>
    <div className="reviewtitle">Ratings & reviews</div>
    <div className ="Reviews">
      <div>
    <ElementContext.Provider value='re-rating'>
    <Ratingbreakdown className="Ratingbreakdown" reviewStars={reviewStars} setFilter={setFilter}/>
    </ElementContext.Provider>

    <ElementContext.Provider value='re-product'>
    <Productbreakdown className="Productbreakdown" reviewStars={reviewStars}/>
    </ElementContext.Provider>
      </div>

    <ElementContext.Provider value='re-list'>
    <BodyProvider>
    <Reviewlist className="ReviewList" reviews= {reviews.results} product_id= {product_id} postForm={postForm} setSortmethod={setSortmethod} reviewStars={reviewStars} filter={filter}/>
    </BodyProvider>
    </ElementContext.Provider>
      </div>
      </div>
  )
}


export default Reviews;