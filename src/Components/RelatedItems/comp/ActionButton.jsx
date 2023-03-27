import React from 'react';// Bring React in to build a component.
import {useState, useEffect, useContext} from 'react';
import ElementContext from './../../../ElementContext.js';
import ClickTracker from '../../../ClickTracker.jsx';


var ActionButton = ({item, onButton, icon}) => {
  const element = useContext(ElementContext);
  function handleButton(event) {
    event.preventDefault();
    // event.stopPropagation();
    // console.log('action!', onButton)
    onButton(item);
  }
  const buttonStyle = {
    position: 'absolute',
    zIndex: 3,
    top: '10px',
    right: '10px',
    borderRadius: '50%',
    backgroundColor: '#d3d3d399',
    color: 'rgb(87 72 72)',
  };
  return (
    <ClickTracker selector={`${element}-action-button-${item.id}`} WrappedComponent={(
      <button style={buttonStyle} onClick={handleButton} >{icon}</button>
    )}/>
  );
}

export default ActionButton