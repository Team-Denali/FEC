import React, { useState, useEffect } from "react";
import axios from "axios";
import ReviewItem from "./ReviewItem.jsx"

const Reviewlist = ({reviews, product_id}) => {
  //get reviews from api for specific product id
  var rlist = [];
  rlist = reviews.results;

    return <section>
      <table className = 'review-list'>
        <tbody>
          {
            // rlist.map((item, i) => (
            //   <ReviewItem product_id={product_id} review={item}/>
            // ))
          }
        </tbody>
      </table>
    </section>


}

export default Reviewlist;