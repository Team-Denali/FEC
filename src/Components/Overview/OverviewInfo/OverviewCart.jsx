import React from 'react'; var _ = require('lodash'); // Bring React in to build a component.

import {useState, useEffect} from 'react'; import OverviewInventory from './OverviewInventory.jsx'; //import { createRoot } from "react-dom/client";

// Huzzah for jsx!

var OverviewCart = ({styleView}) => { const [num, setNum] = useState(0); const [quantArr, setQuantArr] = useState([])//include state variables for currently viewed product
  if (!(Object.keys(styleView).length)) {
    return;
  }

// let num = 0;
console.log('the SKUS:', styleView.skus); var arr = [1,2,3];// if (sku.quantity > 0) { console.log(sku, sku.quantity, "*****");  }}<OverviewInventory quantity={size}/></select>

//return <OverviewInventory itemtorender={styleView.skus[key]}/> setSize(e.target.value); let iventoryValue = styleView.skus.setQuantArr(() => _.range())



return ( <>
    <h1>OverviewCart</h1>
    <div className='overviewCartContainer'>
      <div className='cartTopRow'>
        <div className='overviewCartSize'>
          <select id='selectSize' name="sizeSelector" form="sizeForm" onChange={(e) => {console.log('switched', e.target.value); setNum(styleView.skus[e.target.value].quantity); console.log('QUANTITY:', num); }}>

            <option value='select-size' selected>SELECT SIZE</option>
            {Object.keys(styleView.skus).map((sku) => {

           if (styleView.skus[sku].quantity > 0 )  { return <option title={sku} value={sku}>{styleView.skus[sku].size}</option>}

})}

          </select>
        </div>
        <div className='overviewCartQuantity'>

        <select className='overviewCartQuantity' id='selectQuantity' name="quantitySelector" form="quantityForm">
          <OverviewInventory num={num}/>

        </select> </div>
      </div>

      <div className='cartBottomRow'>

      <div className='addToCart'><button>ADD TO CART</button></div>
      </div>



    </div>






    </>)

}

export default OverviewCart