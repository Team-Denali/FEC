import React from 'react';// Bring React in to build a component.
import {useState, useEffect} from 'react';
import ProductPreviewImages from './ProductPreviewImages.jsx';
import ProductPreviewInformation from './ProductPreviewInformation.jsx';
import ActionButton from './ActionButton.jsx';


var RelatedItemCard = ({item, onClick, onButton, icon}) => {
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
      <div style={divStyle} onClick={handleClick}>
        <ProductPreviewImages item={item} />
        <ProductPreviewInformation item={item} />
        <ActionButton item={item} onButton={onButton} icon={icon} />
      </div>
  );
}

export default RelatedItemCard