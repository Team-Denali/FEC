import React from 'react';// Bring React in to build a component.
import {useState, useEffect, useContext} from 'react';
import ProductPreviewImages from './ProductPreviewImages.jsx';
import ProductPreviewInformation from './ProductPreviewInformation.jsx';
import ActionButton from './ActionButton.jsx';

import ElementContext from './../../../ElementContext.js';
import ClickTracker from '../../../ClickTracker.jsx';


var AddToOutfitCard = ({item, onClick}) => {
  const element = useContext(ElementContext);
  function handleClick(event) {
    // event.stopPropagation();
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
  const pStyle = {
    color: 'rgb(87 72 72)',
    height: '25vw',
    maxHeight: '20vh',
    width: '25vw',
    maxWidth: '25vh',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column'
  };
  const liStyle = {
    display: 'inline-block',
    color: 'white',
    textAlign: 'center',
    textDecoration: 'none'
  }
  return (
    <ClickTracker selector={`${element}-add-to-outfit-card`} WrappedComponent={(
      <div style={divStyle} onClick={handleClick}>
        <div>
          <h1 style={pStyle}>{`+`}</h1>
        </div>
        <ProductPreviewInformation item={item} />
      </div>
    )}/>
  );
}

export default AddToOutfitCard