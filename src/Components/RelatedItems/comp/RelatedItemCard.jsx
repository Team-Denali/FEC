import React from 'react';// Bring React in to build a component.
import {useState, useEffect, useContext} from 'react';
import ProductPreviewImages from './ProductPreviewImages.jsx';
import ProductPreviewInformation from './ProductPreviewInformation.jsx';
import ActionButton from './ActionButton.jsx';
import ModuleContext from './../../../ModuleContext.js';
import ElementContext from './../../../ElementContext.js';
import ClickTracker from '../../../ClickTracker.jsx';


var RelatedItemCard = ({id, item, onClick, onButton, icon}) => {
  const module = useContext(ModuleContext);
  const element = useContext(ElementContext);
  function handleClick(event) {
    // console.log(module, element, id);
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
    width: 'min-content',
    maxWidth: '100%',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)'
  };
  const liStyle = {
    display: 'inline-block',
    color: 'white',
    textAlign: 'center',
    textDecoration: 'none'
  }
  return (
    <ElementContext.Provider value={`${element}-card-${id}`}>
      <ClickTracker selector={`${element}-card-${id}`} WrappedComponent={(
        <div style={divStyle} onClick={handleClick}>
          <ProductPreviewImages item={item} />
          <ProductPreviewInformation item={item} />
          <ActionButton item={item} onButton={onButton} icon={icon} />
        </div>
      )}/>
    </ElementContext.Provider>
  );
}

export default RelatedItemCard