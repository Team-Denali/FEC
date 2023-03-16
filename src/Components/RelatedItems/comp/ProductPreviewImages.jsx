import React from 'react';// Bring React in to build a component.
import {useState, useEffect} from 'react';


var ProductPreviewImages = () => {
  const divStyle = {
    color: 'blue',
    borderStyle: 'solid',
    margin: '5%',
    padding: '5%',
    borderRadius: '10%'
  };
  const imgStyle = {
    width: '200px',
    maxWidth: '100%',
    objectFit: 'contain'
  }
  return (
    <div style={divStyle} >
      {/* <h4>ProductPreviewImages</h4> */}
      <img style={imgStyle} src="https://cdn.shoplightspeed.com/shops/602983/files/206985/acts-ribbon-logo-t-shirt.jpg" ></img>
    </div>
  );
}

export default ProductPreviewImages