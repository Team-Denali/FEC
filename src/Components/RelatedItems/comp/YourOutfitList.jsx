import React from 'react';// Bring React in to build a component.
import {useState, useEffect} from 'react';
import RelatedItemCard from './RelatedItemCard.jsx';


var YourOutfitList = () => {
  const outerDivStyle = {
    color: 'blue',
    borderStyle: 'solid',
    margin: '2%',
    padding: '2%',
    borderRadius: '10%',
    overflow: 'hidden'
  };
  const divStyle = {
    overflow: 'hidden',
    height: '1%',
    width: '400%'
  };
  const ulStyle = {
    display: 'inline-block',
    margin: '0 auto',
    padding: '0 auto',
    listStyleType: 'none'
  }
  const liStyle = {
    display: 'inline-block',
    color: 'white',
    textAlign: 'center',
    textDecoration: 'none'
  }
  return (
    <div style={outerDivStyle} >
      <h2>Your Outfit</h2>
      <div style={divStyle} >
        <ul style={ulStyle} >
          {/* <li style={liStyle} ><RelatedItemCard /></li>
          <li style={liStyle} ><RelatedItemCard /></li>
          <li style={liStyle} ><RelatedItemCard /></li>
          <li style={liStyle} ><RelatedItemCard /></li>
          <li style={liStyle} ><RelatedItemCard /></li>
          <li style={liStyle} ><RelatedItemCard /></li> */}
        </ul>
      </div>
    </div>
  );
}

export default YourOutfitList