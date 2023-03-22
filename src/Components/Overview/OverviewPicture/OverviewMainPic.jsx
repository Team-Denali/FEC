import React from 'react';// Bring React in to build a component.

import {useState, useEffect} from 'react'; //var arr = [1, 2, 3];//import { createRoot } from "react-dom/client";

// Huzzah for jsx!

var OverviewMainPic = ({current, currentStyles, styleView, setStyleView, mainPic, picHandler}) => { let obj = currentStyles[0]; console.log('in main pic component:', currentStyles[0]); //const [pic, setPic] = useState(currentStyle[0].photos[0].thumbnail_url) //include state variables for currently viewed product

if (!currentStyles.length || (!(Object.keys(currentStyles)).length)) {

  return;
}


console.log('THE current PROPS:', current, 'THE currentstyles PROPS:', currentStyles, 'the item prop:', styleView)
const [pic, setPic] = useState(styleView.photos[0].thumbnail_url); useEffect(() => {setPic(styleView.photos[0].thumbnail_url)}, [styleView])

return (

    <div className='productOverviewPic' style={{backgroundImage: `url(${pic})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}>

    <div className='overviewSidePanel'>{styleView.photos.map((photo, i) => <div className="overviewMiniPic" style={{backgroundImage: `url(${photo.thumbnail_url})`, width: '40px', height: '40px', backgroundSize: 'cover' }} onClick={(e) => {e.preventDefault(); setPic(photo.thumbnail_url); }}></div>)}</div>

    </div>
    )
}


export default OverviewMainPic