import React from 'react';// Bring React in to build a component.

import {useState, useEffect} from 'react'; //var arr = [1, 2, 3];//import { createRoot } from "react-dom/client";

// Huzzah for jsx!

var OverviewMainPic = ({current, currentStyles, item, setItem, mainPic, picHandler}) => { let obj = currentStyles[0]; //console.log('in main pic component:', currentStyles[0]); //const [pic, setPic] = useState(currentStyle[0].photos[0].thumbnail_url) //include state variables for currently viewed product

if (!currentStyles.length || (!(Object.keys(currentStyles)).length)) {

  return;
}


// console.log('THE current PROPS:', current, 'THE currentstyles PROPS:', currentStyles, 'the item prop:', item)
//const [pic, setPic] = useState(item.photos[0].thumbnail_url)

return (

    <div className='productOverviewPic' style={{backgroundImage: `url(${currentStyles[0].photos[0].thumbnail_url})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}>

    {currentStyles[0].photos.map((photo, i) => <div className="overviewMiniPics" style={{backgroundImage: `url(${photo.thumbnail_url})`, width: '40px', height: '40px', backgroundSize: 'cover' }} onClick={(e) => {e.preventDefault(); picHandler(photo.thumbnail_url); }}></div>)}

    </div>
    )
}


export default OverviewMainPic