import React from 'react';// Bring React in to build a component.

import {useState, useEffect} from 'react';var arr = [1, 2, 3];//import { createRoot } from "react-dom/client";

// Huzzah for jsx!

var OverviewMainPic = ({currentStyle}) => { let obj = currentStyle[0]; console.log('in main pic component:', currentStyle[0]); //include state variables for currently viewed product

if (!currentStyle.length || (!(Object.keys(currentStyle)).length)) {

  return;
}





return (

    <div className='productOverviewPic' style={{backgroundImage: `url(${currentStyle[0].photos[0].thumbnail_url})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}>

    {arr.map((num) => <div>{num}</div>)}

    </div>
    )
}


export default OverviewMainPic