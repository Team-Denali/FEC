import React, { useState, useEffect } from 'react';

const Ratingbreakdown = (props) => {
  var star = props.reviewStars.ratings;
 //console.log('star',star)
  var rec = props.reviewStars.recommended ;
  // rec? console.log((rec.true+rec.false)):null
  //console.log(rec)
  const averagerating = (ratingsObj) => {
    //console.log(ratingsObj);
    var totalCount = 0;
    var averageCount = 0;
    for (let key in ratingsObj) {
      let value = Number(ratingsObj[key]);
      let num = Number(key);
      totalCount += value;
      averageCount += (num * ratingsObj[key]);
    }
    if (totalCount === 0) {
      return 0;
    }
    let average = averageCount / totalCount;
    average = Math.round(average * 10) / 10
    return average;
  }
  var obj = {
    '1': 0,
    '2': 0,
    '3': 0,
    '4': 0,
    '5': 0
  }

  var total = 0;
  for (let key in star) {
    total += Number(star[key]);
    for (let key1 in obj) {
      if (key === key1) {
        obj[key] += Number(star[key]);
      }
    }
  }

  var fivestar = Math.round((obj['5']/total)*100);
  var fourstar = Math.round((obj['4']/total)*100);
  var threestar = Math.round((obj['3']/total)*100);
  var twostar = Math.round((obj['2']/total)*100);
  var onestar = Math.round((obj['1']/total)*100);

  var average = averagerating(star);
  var width = average * 20;
  return(
    <div>
    <div>{average}</div>
    <div>{rec?Math.round((Number(rec.true)/(Number(rec.true)+Number(rec.false)))*100): 0}% of reviews recommend this product</div>
    <div className='5star'>
      5star:{fivestar}%
    </div>
    <div className='4star'>
      4star:{fourstar}%
    </div>
    <div className='3star'>
      3star:{threestar}%
    </div>
    <div className='2star'>
      2star:{twostar}%
    </div>
    <div className='1star'>
      1star:{onestar}%
    </div>
    </div>
  )
}

export default Ratingbreakdown;
