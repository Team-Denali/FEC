import React from 'react';// Bring React in to build a component.

import {useState, useEffect} from 'react'; //var arr = [1, 2, 3];//import { createRoot } from "react-dom/client";

const ExpandedView = require('./ExpandedView').ExpandedView; const ZoomView = require('./ExpandedView').ZoomView; //ChangePic = require('./ExpandedView').ChangePic;//SlMagnifier// Huzzah for jsx!

var OverviewMainPic = ({current, currentStyles, styleView, setStyleView, mainPic, picHandler}) => { //let obj = currentStyles[0]; console.log('in main pic component:', currentStyles[0]); //const [pic, setPic] = useState(currentStyle[0].photos[0].thumbnail_url) //include state variables for currently viewed product

if (!currentStyles.length || (!(Object.keys(currentStyles)).length)) {
  return;

}


//console.log('THE current PROPS:', current, 'THE currentstyles PROPS:', currentStyles, 'the item prop:', styleView)
const [pic, setPic] = useState(styleView.photos[0].url); useEffect(() => {setPic(styleView.photos[0].url)}, [styleView])

return (

    <div className='productOverviewPic' style={{backgroundImage: `url(${pic})`, maxWidth: '100%', maxHeight: 'auto', backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', display: 'flex', justifyContent: 'space-around' }} onClick={(e) => {e.preventDefault(); ExpandedView(pic)}}>

    <div className='overviewSidePanel' style={{position: 'relative', width: '100%', height: 'auto', display: 'flex', justifyContent: 'space-between' }} >{styleView.photos.map((photo, i) => <><div key={i} className="overviewMiniPic" style={{backgroundImage: `url(${photo.thumbnail_url})`, width: '40px', height: '40px', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', border: '3px solid black'}} onClick={(e) => {e.preventDefault(); setPic(photo.url); e.stopPropagation() }}></div><br></br></>)}</div>

    <div id="ExpandedViewModal" style={{visibility: 'hidden', animation: ''}}>

    <div id='imageView' style={{ transition: ''}}>
      <img style={{ animation: 'fadeIn 1.5s' }} class='overview-expanded-img' src='' onClick={(e) => {e.preventDefault();  }}></img>

      <div className="imageViewThumbnails" style={{animation: 'fadeIn 5s'}}><div className='overviewModalSidePanel' style={{position: 'relative', width: '100%', height: 'auto', display: 'flex', justifyContent: 'space-between' }} >{styleView.photos.map((photo, i) => <><div key={i} className="overviewMiniPic" style={{backgroundImage: `url(${photo.thumbnail_url})`, transition: 'fadeIn 3s', width: '20px', height: '20px', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', border: '3px solid black', borderRadius: '50%'}} onClick={(e) => {e.preventDefault(); ExpandedView(photo.url, true); e.stopPropagation() }}></div><br></br></>)}</div></div></div>

      <div><button>CLose</button></div>

     </div>

    </div>


)

}
export default OverviewMainPic //ZoomView();animation: 'fadeIn 3s'