import React from 'react'; const axios = require('axios');// Bring React in to build a component.

import {useState, useEffect} from 'react'; import OverviewMainPic from './OverviewPicture/OverviewMainPic.jsx';

import OverviewStyles from './OverviewInfo/OverviewStyles.jsx';
// Huzzah for jsx!
var Overview = ({current}) => { //include state variables for currently viewed product
const [itemView, setItemView] = useState(current); const [style, setStyle] = useState({}); let headers =  { Authorization: '*****' }; const [styleIndex, setIndex] = useState(0); const [photoIndex, setPhotoIndex] = useState(0); //${current.id}
useEffect(() => {
  axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products/37313/styles`, {headers: headers} ).then((res) => { console.log(res.data); setStyle(res.data)} )


}, [itemView])


//className="productOverviewPic"

  return (
<>
  <div className="overviewContainer">
    <OverviewMainPic/>







    <div className="overviewProductInfo">

      <div>Review Stuff Goes Here</div>

      <div>Category Filler</div>
      <h1>Item Name Filler</h1>
      <div><OverviewStyles/></div>

    </div>


  </div>


  </>)
}


export default Overview