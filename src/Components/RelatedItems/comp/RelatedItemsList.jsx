import React from 'react';// Bring React in to build a component.
import {useState, useEffect} from 'react';
import RelatedItemCard from './RelatedItemCard.jsx';


var RelatedItemsList = () => {
  const divStyle = {
    color: 'blue',
    borderStyle: 'solid',
    margin: '5%',
    padding: '5%',
    borderRadius: '10%',
    textAlign: 'center'
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
    padding: '16px',
    textDecoration: 'none'
  }
  return (
    <div style={divStyle} >
      <h2>Related Items</h2>
      <ul style={ulStyle} >
        <li style={liStyle} ><RelatedItemCard /></li>
        <li style={liStyle} ><RelatedItemCard /></li>
        <li style={liStyle} ><RelatedItemCard /></li>
        <li style={liStyle} ><RelatedItemCard /></li>
      </ul>
    </div>
  );
}

export default RelatedItemsList