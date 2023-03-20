import React from 'react';// Bring React in to build a component.
import {useState, useEffect} from 'react';


var ActionButton = () => {
  const buttonStyle = {
    position: 'absolute',
    zIndex: 3,
    top: '10px',
    right: '10px'
  };
  return (
    <div style={buttonStyle} >
      <button>X/*</button>
    </div>
  );
}

export default ActionButton