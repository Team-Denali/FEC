import React from 'react';// Bring React in to build a component.

import {useState, useEffect} from 'react';//import { createRoot } from "react-dom/client";

// Huzzah for jsx! console.log(salePrice);

var OverviewPrice = ({defaultPrice, salePrice}) => {  const mainPriceShowing = {textDecoration: `${salePrice ? 'line-through' : ''}`}; const saleShowing = {visibility: `${salePrice ? 'visible' : 'hidden'}`, color: 'red'};//include state variables for currently viewed product // var salePrice = currentStyle.sale_price;
  return (<><div style={mainPriceShowing}><h5>{defaultPrice}</h5></div><div style={saleShowing}><h5>{salePrice}</h5></div></>)

}

export default OverviewPrice