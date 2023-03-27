import React from 'react'; import {useState, useEffect} from 'react'; import Rating from '@mui/material/Rating';



// Huzzah for jsx!

var OverviewStarRating = ({metaRatings}) => { //include state variables for currently viewed product
// console.log('IN STAR RATING:', metaRatings)

const AvgCalc = (obj) => { let total = 0; let numRatings = 0;

for (var key in obj) { total += Number(key) * (Number(obj[key])); numRatings += Number(obj[key]); }

return total / numRatings
}


if (metaRatings) { //console.log('STAR RATING:', AvgCalc(metaRatings))
  return (<><Rating name="overview-star-rating" value={AvgCalc(metaRatings)} precision={0.25} readOnly/></>)
 }



}

export default OverviewStarRating