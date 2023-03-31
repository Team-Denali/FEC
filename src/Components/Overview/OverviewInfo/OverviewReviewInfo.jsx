import React from 'react'; var _ = require('lodash'); import {useState, useEffect} from 'react'; import axios from 'axios'; import Reviews from '../../Reviews/Reviews.jsx'; import getReviewsStars from '../../Reviews/Reviews.jsx'; import OverviewStarRating from './OverviewStarRating.jsx'; import Rating from '@mui/material/Rating'; import {HashLink} from 'react-router-hash-link'; // Bring React in to build a component.

const url = "http://localhost:3000";//import { createRoot } from "react-dom/client";

// Huzzah for jsx!

var OverviewReviewInfo = ({starRating, reviewNum}) => { // const [itemreviews, setItemreviews] = useState([]);
//if(!reviewNum) {return;}

return (<div className='jumptorating'>

<a href="" onClick={(e) => {
  e.preventDefault();
  var div = document.getElementsByClassName('review-list');
  div[0].scrollIntoView();
}}>Read all {reviewNum} Reviews</a>
<div>
  <OverviewStarRating metaRatings={starRating}/>
</div>
</div>)
}


export default OverviewReviewInfo