import React from "react";
var _ = require("lodash"); // Bring React in to build a component.

import { useState, useEffect } from "react";
import OverviewInventory from "./OverviewInventory.jsx"; //import { createRoot } from "react-dom/client";

// Huzzah for jsx!

var OverviewCart = ({ current, styleView, itemName }) => {
  const [num, setNum] = useState(0);

  const [cartSize, setCartSize] = useState(""); const [cartStyle, setCartStyle] = useState('');
  const [cartQuantity, setCartQuantity] = useState("");
  const [name, setCartName] = useState('');
  const [cartPrice, setCartPrice] = useState(""); const [clicked, setClicked] = useState(false);
  const [cartItem, setCartItem] = useState(itemName); //itemName

  const [cartObj, setCartObj] = useState({}); const [cart, setCart] = useState([]);//include state variables for currently viewed product
  if (!Object.keys(styleView).length) {
    return;
  }
//put this conditional ^ and all other functions used on event handlers below into a useEffect that depends on the props changing
  // let num = 0;
 //let click = 0; // console.log("the SKUS:", styleView.skus);

  async function updateStates() {  await setCartObj({name: cartItem, style: cartStyle, size: cartSize, quantity: cartQuantity, price: cartPrice})}// if (sku.quantity > 0) { console.log(sku, sku.quantity, "*****");  }}<OverviewInventory quantity={size}/></select>
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

        <div className="cartTopRow" style={{display: 'flex', flexDirection: 'row' }}>
          <div className="overviewCartSize cartSelector">

            <select
              id="selectSize"

              name="sizeSelector"
              form="sizeForm"
              onChange={(e) => {

                //console.log("switched", e.target.value);
                setNum(styleView.skus[e.target.value].quantity);

                setCartSize(styleView.skus[e.target.value].size);

              }}>

              <option value="select-size" selected>



                SELECT SIZE
              </option>
              {Object.keys(styleView.skus).map((sku) => {
                if (styleView.skus[sku].quantity > 0) {
                  return (

                    <option title={sku} value={sku}>
                      {styleView.skus[sku].size}
                    </option>
                  );

                }

              })}
            </select>
          </div>
          <div className="overviewCartQuantity">
            <select



              className="overviewCartQuantity cartSelect"
              id="selectQuantity"
              name="quantitySelector"
              form="quantityForm"
              onChange={(e) => {
                e.preventDefault();
                setCartQuantity(e.target.value);
              }}

            >

              <OverviewInventory num={num} />
            </select>{" "}
          </div>
        </div>
        <div className="cartBottomRow">

          <div className="addToCart">


            <button className='cartAddButton'
              onClick={(e) => {
                e.preventDefault(); console.log('clicked!');
                // setCartStyle(styleView.name);
                setCartItem(itemName);
               setCartObj({

                  name: current.name,
                // updateStates().then(()=> {console.log("ADD TO CART:", cartObj, 'UPDATED STATES:', cartStyle, cartItem);})

                style: cartStyle,

                size: cartSize,
                quantity: cartQuantity,
                price: cartPrice,

                 }); //setCart([...cart, cartObj])//}, [cartItem, cartStyle])

                 console.log('item added:', cartObj)
  }}

            >
              ADD TO CART
            </button>


          </div>
        </div>

      </div>
    </>

  );
};

export default OverviewCart;
