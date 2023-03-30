import React from 'react';
import {useState, useEffect} from 'react';
import Rating from '@mui/material/Rating';
import axios from 'axios';

var ProductStars = ({id, size}) => {
  var getAverageRating = (id) => {
    return axios.get('/reviews/meta', {
      params: {
        product_id: id
      }
    })
    .then((res) => {
      var ratings = res.data.ratings;
      var count = (
        Number.parseInt(ratings['1']) +
        Number.parseInt(ratings['2']) +
        Number.parseInt(ratings['3']) +
        Number.parseInt(ratings['4']) +
        Number.parseInt(ratings['5']));
      var sum = (
        Number.parseInt(ratings['1']) * 1 +
        Number.parseInt(ratings['2']) * 2 +
        Number.parseInt(ratings['3']) * 3 +
        Number.parseInt(ratings['4']) * 4 +
        Number.parseInt(ratings['5']) * 5);
      return sum / count;
    })
    .catch((err)=> {
      console.log(err);
    })
  }

  const [rating, setRating] = useState(5);

  useEffect(() => {
    if (id) {
      getAverageRating(id)
        .then(avg => setRating(avg))
    }
  }, [id]);

  return (
    <Rating name="qtr-rating-read" value={rating || 0} precision={0.25} readOnly size={size} />
  );
}

export default ProductStars;