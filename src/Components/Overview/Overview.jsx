import React from "react";
import axios from "axios"; // Bring React in to build a component.
import { useState, useEffect } from "react"; import {HashLink} from 'react-router-hash-link';

import OverviewMainPic from "./OverviewPicture/OverviewMainPic.jsx";

import OverviewStyles from "./OverviewInfo/OverviewStyles.jsx"; import OverviewPrice from './OverviewInfo/OverviewPrice.jsx'
import OverviewCart from "./OverviewInfo/OverviewCart.jsx"; import './OverviewStylesheet.css'; import OverviewReviewInfo from './OverviewInfo/OverviewReviewInfo.jsx'; // Huzzah for jsx!

var Overview = ({ current }) => {

  const [itemreviews, setItemreviews] = useState(null); const [reviewNum, setReviewNum] = useState(null); const [starRating, setStarRating] = useState(null); const [hasReviews, setHasReviews] = useState(false);
//console.log(current, "current prop"); //include state variables for currently viewed product
  const [itemView, setItemView] = useState({});
  const [styles, setStyles] = useState({});
  const [styleView, setStyleView] = useState({}); const [defaultPrice, setDefaultPrice] = useState(''); const [salePrice, setSalePrice] = useState(0);

  let url = "http://localhost:3000"; //const [styleIndex, setIndex] = useState(0); const [photoIndex, setPhotoIndex] = useState(0);
  const [mainPic, setMainPic] = useState(null);
  var changePic = (pic_url) => {
    setMainPic(pic_url);
  };
  var changeStyle = (style) => {
    setStyleView(style);

  };
  const styleFinder = (currentId) => {
    if (currentId) {

    let styleId = currentId;

    let paramObj = { product_id: styleId };

    axios
      .get(`/styles`, { params: paramObj })
      .then((res) => {

        //console.log("the data:", res.data);
        setStyles(res.data.results);

        setStyleView(res.data.results[0]); setDefaultPrice(current.default_price)
      })

      .catch((err) => {
        console.log("axios req error:", err);
      });
    }
  };


  const GetProductReviews = (id) => { let params = {product_id: id, count: 1000}; //console.log('overview review params:', params)
  return axios.get(`/reviews/`, {params: params}).then((res) => { //console.log('GPR data:', res.data.results)

    setItemreviews(res.data.results); setReviewNum(res.data.results.length); //console.log('overview Review retrieval:', itemreviews);
    return axios.get(`${url}/reviews/meta`, {params: params})
    .then((res) => { //console.log('GetRS:' , res.data.ratings)

      setStarRating(res.data.ratings); //console.log('overviewMetaReview data retrieval:', starRating)
    })

    .catch((err) => {console.log('overviewReveiewData axios error:', err)})
  })

}

  useEffect(() => {

    if (current.id) {
      styleFinder(current.id);
      GetProductReviews(current.id);
    }
  }, [current]);

  //console.log('THE CURRENT PRICE:', current.default_price)//changeStyle(styles[0]);
  //console.log('THE STYLEviewS:', styleView);//className="productOverviewPic
  // setMainPic(styles[0]);

  //console.log('current itemview:', itemView)
  return (

    // }
    <>

      {" "}

      <div className="overviewContainer"style={{}}>
        <div className="overviewTop">
          <OverviewMainPic
            key={current.id}
            current={current}
            currentStyles={styles}
            styleView={styleView}
            setStyle={setStyleView}
            mainPic={mainPic}
            setMain={setMainPic}
            picHandler={changePic}
          />

          <div className="overviewProductInfo">

            <div className="OverviewReviewInfoinfo"><OverviewReviewInfo reviewNum={reviewNum} starRating={starRating} /></div>

            <div className="info">{current.category}</div>
            <div className="productName ">
              {current.name}

            </div>
            <div className='overviewPricing'>
              <OverviewPrice key = {defaultPrice} defaultPrice={defaultPrice} salePrice={styleView.sale_price}/>
            </div><div style={{fontSize: 'small', flexShrink: '3'}}>
            </div>
            <div className='description'>
            {current.description}
            </div>
            <div className="overviewStylesinfo">
              <OverviewStyles
                overviewStyles={styles}
                mainPic={mainPic}
                picHandler={changePic}
                styleView={styleView}
                setStyleView={setStyleView}defaultPrice={defaultPrice} setDefaultPrice={setDefaultPrice}
              />
            </div>

            <div className="overviewCartinfo">
              <OverviewCart current={current} styleView={styleView} itemName={current.name}/>
            </div>

          </div>
        </div>
        <div className="overviewBottom" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-around', alignItems: 'center', fontSize: 'small'}}>

          {/* <div style={{}}>{current.description}</div> */}
        </div>

      </div>
    </>

  );
  };

export default Overview;
