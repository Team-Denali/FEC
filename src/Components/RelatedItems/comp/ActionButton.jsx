import React from 'react';// Bring React in to build a component.
import {useState, useEffect} from 'react';


var ActionButton = ({item, onButton}) => {
  function handleButton(event) {
    event.stopPropagation();
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
    // <div style={buttonStyle} >
      <button style={buttonStyle} onClick={handleButton} >X/*</button>
    // </div>
  );
}

export default ActionButton