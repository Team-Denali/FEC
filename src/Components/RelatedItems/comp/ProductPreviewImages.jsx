import React from 'react';// Bring React in to build a component.
import {useState, useEffect} from 'react';


var ProductPreviewImages = ({item}) => {

  const containerStyle = {
    overflow: 'hidden'
  }
  const divStyle = {
    // color: 'blue',
    // borderStyle: 'solid',
    // margin: '5%',
    // padding: '5%',
    borderRadius: '10% 10% 0% 0%',
    height: '25vw',
    maxHeight: '25vh',
    width: '25vw',
    maxWidth: '25vh',
    overflow: 'hidden',
    // backgroundImage: `url(${item.styles[0].photos[0].url})`,
    // position: 'absolute'
    // filter: 'blur(4px)'
  };
  const imgBGStyle = {
    height: '125%',
    width: '125%',
    top: '-12.5%',
    left: '-12.5%',
    position: 'absolute',
    backgroundImage: `url(${item.styles[0].photos[0].url})`,
    filter: 'blur(4px)'
  }
  const imgStyle = {
    height: '100%',
    maxHeight: '100%',
    maxWidth: '120%',
    objectFit: 'contain',
    position: 'relative',
    zIndex: 2,
    display: 'block',
    // position: 'absolute',
    marginLeft: 'auto',
    marginRight: 'auto',
    // width: '40%',
  }
  return (
    <div style={containerStyle} >
      <div style={divStyle} >
        <img style={imgStyle} src={item.styles[0].photos[0].url} ></img>
        <img style={imgBGStyle} src={item.styles[0].photos[0].url} ></img>
      </div>
    </div>
  );
}

export default ProductPreviewImages