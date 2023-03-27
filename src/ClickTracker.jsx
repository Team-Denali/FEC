import React from 'react';
import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import ModuleContext from './ModuleContext.js';
import ElementContext from './ElementContext.js';

var ClickTracker = ({selector, WrappedComponent}) => {
  const module = useContext(ModuleContext);
  const [interaction, setInteraction] = useState(undefined);
  // const element = useContext(ElementContext);
  var handleClick = (e) => {
    e.stopPropagation();
    var newInteraction = {
      element: selector,
      widget: module,
      time: Date.now().toString()
    };
    console.log('Interaction:\n', newInteraction);
    axios.post('/interactions', newInteraction)
      .catch(err => console.log(err));
  }
  const style = {
    // padding: '50px',
    // borderRadius: '50%',
    // overflow: 'hidden'
  }
  return (
    // <ElementContext.Provider value={selector}>
      <div style={style} onClick={handleClick} className={selector} >
        {WrappedComponent}
      </div>
    // </ElementContext.Provider>
  )
}

export default ClickTracker;