import React from 'react';// Bring React in to build a component.
import {useState, useEffect} from 'react';


var ProductPreviewInformation = () => {
  const divStyle = {
    color: 'blue',
    borderStyle: 'solid',
    margin: '5%',
    padding: '5%',
    borderRadius: '10%'
  };
  const h5Style = {
    margin: '1% 1% 1% 1%'
  }
  return (
    <div style={divStyle} >
      {/* <h4>ProductPreviewInformation</h4> */}
      <h5 style={h5Style} >ProductCategory</h5>
      <h5 style={h5Style} >ProductName</h5>
      <h5 style={h5Style} >$$Price$$</h5>
      <h5 style={h5Style} >Rating *****</h5>
    </div>
  );
}

export default ProductPreviewInformation