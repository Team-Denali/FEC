import React from 'react';
import { useState, useEffect, useContext } from 'react';
import ModuleContext from './ModuleContext.js';
import ElementContext from './ElementContext.js';

var ClickTracker = ({selector, WrappedComponent}) => {
  const module = useContext(ModuleContext);
  const element = useContext(ElementContext);
  var handleClick = () => {
    console.log('Interaction:\n', {
      element: element,
      widget: module,
      time: Date.now()
    });
  }
  const style = {
    // padding: '50px',
    // borderRadius: '50%',
    overflow: 'hidden'
  }
  return (
    <ElementContext.Provider value={selector}>
      <div style={style} onClick={handleClick} className={selector} >
        {WrappedComponent}
      </div>
    </ElementContext.Provider>
  )
}

export default ClickTracker;