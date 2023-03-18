import React from 'react';// Bring React in to build a component.
import {useState, useEffect} from 'react';
import ProductPreviewImages from './ProductPreviewImages.jsx';
import ProductPreviewInformation from './ProductPreviewInformation.jsx';
import ActionButton from './ActionButton.jsx';


var RelatedItemCard = ({item, onClick}) => {
  const divStyle = {
    position: 'relative',
    color: 'blue',
    borderStyle: 'solid',
    margin: '5%',
    padding: '5%',
    borderRadius: '10%'
  };
  return (
    <div style={divStyle} onClick={onClick}>
      {/* <h3>RelatedItemCard</h3> */}
      <ProductPreviewImages item={item} />
      <ProductPreviewInformation item={item} />
      <ActionButton />
    </div>
  );
}

export default RelatedItemCard