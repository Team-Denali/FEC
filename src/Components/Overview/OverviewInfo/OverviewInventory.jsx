import React from "react";
var { range } = require("lodash"); // Bring React in to build a component.
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";

import FormControl from "@mui/material/FormControl";

import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
//import { createRoot } from "react-dom/client";

// Huzzah for jsx!

var OverviewInventory = ({ num , cartQuantity, setCartQuantity}) => {
  let quantArr = _.range(num + 1);
  quantArr.shift(); //include state variables for currently viewed product
  if (num <= 0) {
    return (
      <FormControl autoWidth>
        <InputLabel id="empty">---</InputLabel>
        <Select value="" label='---'></Select>
      </FormControl>
    );
  }

  {
    /* <option className='overviewCartQuantity' value='quantity' selected>---</option> */
  }
  return (
    <>
      <FormControl >
        <InputLabel id="select-quantity">SELECT QUANTITY</InputLabel >
        <Select style={{width: '200px'}}label="SELECT QUANTITY" onChange={(e) => {setCartQuantity(e.target.value)}}>
          {quantArr.map((num) => {
            if (num <= 15) {
              return <MenuItem value={num}>{num}</MenuItem>;
            }
          })}
        </Select>
      </FormControl>
    </>
  );

  {
    /* <FormControl fullWidth>

<option className='overviewCartQuantity' value='quantity' selected>---</option>

      {quantArr.map((num) =>{ if (num <= 15) {return (<option value={num}>{num}</option>)}})}

<InputLabel id="demo-simple">SELECT QUANTITY</InputLabel>
<Select
labelId="demo-simple-select-label"
id="demo-simple-select"
value="TEST VALUE"
label="SELECT QUANTITY"
onChange={(e) => {

  //console.log("switched", e.target.value);
  setNum(styleView.skus[e.target.value].quantity);

  setCartSize(styleView.skus[e.target.value].size);

}}
>
  {Object.keys(styleView.skus).map((sku) => {
      if (styleView.skus[sku].quantity > 0) {
        return (

          <MenuItem key={sku} value={sku}>
            {styleView.skus[sku].size}
          </MenuItem>
        );

      }

    })}
</Select></FormControl> */
  }
};


export default OverviewInventory;
