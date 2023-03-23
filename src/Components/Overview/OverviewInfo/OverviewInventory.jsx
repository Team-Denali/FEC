import React from 'react'; var _ = require('lodash');// Bring React in to build a component.

//import { createRoot } from "react-dom/client";

// Huzzah for jsx!

var OverviewInventory = ({num}) => { let quantArr = _.range(num + 1); quantArr.shift();//include state variables for currently viewed product
  if (num <= 0) { return ( <option className='overviewCartQuantity' value='quantity' selected>SELECT QUANTITY</option> );}

  return (<><option className='overviewCartQuantity' value='quantity' selected>SELECT QUANTITY</option>

      {quantArr.map((num) =>{ if (num <= 15) {return (<option value={num}>{num}</option>)}})} </>)





}

export default OverviewInventory