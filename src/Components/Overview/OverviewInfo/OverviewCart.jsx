import React from "react";
var _ = require("lodash"); // Bring React in to build a component.
//var _ = require("lodash"); // Bring React in to build a component.

import { useState, useEffect } from "react";
import Button from "@mui/material/Button";

import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";

import Select, { SelectChangeEvent } from "@mui/material/Select";

import OverviewInventory from "./OverviewInventory.jsx"; //import { createRoot } from "react-dom/client";

// Huzzah for jsx!

var OverviewCart = ({ current, styleView, itemName }) => {
  const [num, setNum] = useState(0);

  const [cartSize, setCartSize] = useState("");
  const [cartStyle, setCartStyle] = useState("");
  const [cartQuantity, setCartQuantity] = useState("");
  const [name, setCartName] = useState("");
  const [cartPrice, setCartPrice] = useState("");
  const [clicked, setClicked] = useState(false);
  const [cartItem, setCartItem] = useState(itemName); //itemName
var button = 'ADD TO CART'
  const [cartObj, setCartObj] = useState({});
  const [cart, setCart] = useState([]);
  const [sizeforoverview,setSizeforoverview] = useState('')
  //include state variables for currently viewed product
  if (!Object.keys(styleView).length) {
    return;
  }
  //put this conditional ^ and all other functions used on event handlers below into a useEffect that depends on the props changing
  // let num = 0;
  //let click = 0; // console.log("the SKUS:", styleView.skus);

  async function updateStates() {
    await setCartObj({
      name: cartItem,
      style: cartStyle,
      size: cartSize,
      quantity: cartQuantity,
      price: cartPrice,
    });
  } // if (sku.quantity > 0) { console.log(sku, sku.quantity, "*****");  }}<OverviewInventory quantity={size}/></select>
  //return <OverviewInventory itemtorender={styleView.skus[key]}/> setSize(e.target.value); let iventoryValue = styleView.skus.setQuantArr(() => _.range())

  // useEffect(() => {setCartObj({
  //                 name: cartItem,

  //                 style: cartStyle,

  //                 size: cartSize,
  //                 quantity: cartQuantity,
  // useEffect(() => {console.log('ADDED ITEM:', cartObj)}, [cartObj]); // useEffect(() => {setCartStyle(styleView.name); setCartItem(itemName);}, [current]) //                 price: cartPrice,
  //               })}, [cartItem, cartStyle])

  // }, [cartStyle, cartItem, cartSize, cartQuantity]); //
  return (
    <>
      <div className="overviewCartContainer">
        <div
          className="cartTopRow"
          style={{ display: "flex", flexDirection: "row" }}
        >
          <div className="overviewCartSizecartSelector">
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">SELECT SIZE</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select" style={{width: '150px'}}
                value={sizeforoverview}
                label="SELECT SIZE"
                onChange={(e) => {
                  console.log("switched", e.target.value);
                  setNum(styleView.skus[e.target.value].quantity);
                  setCartSize(styleView.skus[e.target.value].size);
                  setSizeforoverview(e.target.value);
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
              </Select>
            </FormControl>
          </div>

          <div className="overviewCartQuantity">
            <OverviewInventory cartQuantity={cartQuantity} setCartQuantity={setCartQuantity} num={num} />
            {/* </select>{" "} */}
          </div>
        </div>
        <div className="cartBottomRow">

          <div className="cartSize">SIZE: {cartSize}</div>
            <div className="cartQuantity">QUANTITY: {cartQuantity}</div>

            <div className='addToCart'>
      <Button variant="outlined"
                        sx={{
                          fontFamily:
                            'Lucida Sans, Lucida Sans Regular, Lucida Grande, Lucida Sans Unicode, Geneva, Verdana, sans-serif',
                          fontWeight: '10px',
                          width: '300px',
                          fontSize: 15,
                          color: '#3f51b5',
                          margin: '5px',
                          padding: '15px',
                          borderColor: '#3f51b5',
                        }}
                        onClick={(e) => {
                          e.preventDefault();
                          console.log("clicked!");
                          // setCartStyle(styleView.name);
                          setCartItem(itemName);
                          setCartObj({
                            name: current.name,
                            // updateStates().then(()=> {console.log("ADD TO CART:", cartObj, 'UPDATED STATES:', cartStyle, cartItem);})

                            style: cartStyle,

                            size: cartSize,
                            quantity: cartQuantity,
                            price: cartPrice,
                          }); setCartSize(''); setCartQuantity('');//setCart([...cart, cartObj])//}, [cartItem, cartStyle])

                          console.log("Added to Cart!") ;
                        }}>{button}</Button>
      </div>
        </div>
      </div>
    </>
  );
};

export default OverviewCart;
