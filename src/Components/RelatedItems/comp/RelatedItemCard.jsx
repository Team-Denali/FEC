import React from 'react';// Bring React in to build a component.
import {useState, useEffect} from 'react';
import ProductPreviewImages from './ProductPreviewImages.jsx';
import ProductPreviewInformation from './ProductPreviewInformation.jsx';
import ActionButton from './ActionButton.jsx';


var RelatedItemCard = ({item, onClick}) => {
  function handleClick(event) {
    event.stopPropagation();
    onClick();
  }
  const divStyle = {
    position: 'relative',
    color: 'lightgrey',
    borderStyle: 'solid',
    // margin: '5%',
    // padding: '5%',
    borderRadius: '10%',
    overflow: 'hidden',
    backgroundColor: 'lightgrey',
    width: 'max-content'
  };
  const liStyle = {
    display: 'inline-block',
    color: 'white',
    textAlign: 'center',
    textDecoration: 'none'
  }
  return (
    <li style={liStyle} >
      <div style={divStyle} onClick={handleClick}>
        {/* <h3>RelatedItemCard</h3> */}
        <ProductPreviewImages item={item} />
        <ProductPreviewInformation item={item} />
        <ActionButton />
      </div>
    </li>
  );
}

export default RelatedItemCard