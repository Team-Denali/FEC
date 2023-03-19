import React from 'react'; import axios from 'axios';// Bring React in to build a component.

import {useState, useEffect} from 'react'; import OverviewMainPic from './OverviewPicture/OverviewMainPic.jsx';

import OverviewStyles from './OverviewInfo/OverviewStyles.jsx'; import OverviewCart from './OverviewInfo/OverviewCart.jsx'; // Huzzah for jsx!

var Overview = ({current}) => { //include state variables for currently viewed product
const [itemView, setItemView] = useState({current}); const [style, setStyle] = useState({}); let url = 'http://localhost:3000' //const [styleIndex, setIndex] = useState(0); const [photoIndex, setPhotoIndex] = useState(0); //${current.id}
useEffect(() => { let paramObj = { product_id: 37313 };
  return axios.get(`${url}/styles`, { params: paramObj } ).then((res) => {  setStyle(res.data)} ).catch((err) => {console.log('axios req error:', err)})


}, [itemView])


//className="productOverviewPic"

  return (
<> <div className="overviewContainer">
  <div className="overviewTop">
    <OverviewMainPic/>







    <div className="overviewProductInfo">

      <div>Review Stuff Goes Here</div>

      <div>Category Filler</div>
      <div className='productName'><h1>Item Name Filler</h1></div>
      <div className='overviewStyles'><OverviewStyles styles={style}/></div>

      <div className="overviewCart"><OverviewCart/></div>
    </div>

  </div>
    <div className='overviewBottom'>Insert Pithy Description || Insert Specs</div>

  </div>

  </>)
}


export default Overview