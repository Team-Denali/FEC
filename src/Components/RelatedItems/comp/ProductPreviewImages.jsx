import React from 'react';// Bring React in to build a component.
import {useState, useEffect} from 'react';


var ProductPreviewImages = ({item}) => {

  const divStyle = {
    // color: 'blue',
    // borderStyle: 'solid',
    // margin: '5%',
    // padding: '5%',
    borderRadius: '10% 10% 0% 0%',
    height: '255px',
    width: '255px',
    overflow: 'hidden',
    backgroundImage: `url(${item.styles[0].photos[0].url})`,
    // filter: 'blur(4px)'
  };
  // const imgBGStyle = {
  //   backgroundImage: `url(${item.styles[0].photos[0].url})`,
  //   filter: 'blur(4px)'
  // }
  const imgStyle = {
    width: '200px',
    maxWidth: '100%',
    objectFit: 'contain',
    position: 'relative',
    // zIndex: 2
  }
  return (
    <div>
      <div style={divStyle} >
        {/* <h4>ProductPreviewImages</h4> */}
        <img style={imgStyle} src={item.styles[0].photos[0].url} ></img>
      </div>
    </div>
  );
}

export default ProductPreviewImages