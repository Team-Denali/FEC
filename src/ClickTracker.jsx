import React from 'react';
import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import ModuleContext from './ModuleContext.js';

var ClickTracker = ({selector, WrappedComponent}) => {
  // const style = {
  //   boxShadow: 'inset 0 0 0 0 #54b3d6',
  //   color: '#54b3d6',
  //   margin: '0 -.25rem',
  //   padding: '0 .25rem',
  //   transition: 'color .3s ease-in-out, box-shadow .3s ease-in-out',
  // }
  // const hoverStyle = {
  //   boxShadow: 'inset 100px 0 0 0 #54b3d6',
  //   color: 'white',
  // }
  // style={divStyle}
  // onMouseEnter={e => setDivStyle(hoverStyle)}
  // onMouseLeave={e => setDivStyle(style)}
  // const [divStyle, setDivStyle] = useState(style);
  const module = useContext(ModuleContext);
  const [interaction, setInteraction] = useState(undefined);
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
  return (
      <div onClick={handleClick} className={selector} >
        {WrappedComponent}
      </div>
  )
}

export default ClickTracker;

  // const style = {
  //   boxShadow: 'inset 0 0 0 0 #54b3d6',
  //   color: '#54b3d6',
  //   margin: '0 -.25rem',
  //   padding: '0 .25rem',
  //   transition: 'color .3s ease-in-out, box-shadow .3s ease-in-out',
  // }
  // const hoverStyle = {
  //   boxShadow: 'inset 100px 0 0 0 #54b3d6',
  //   color: 'white',
  // }
  // style={divStyle}
  // onMouseEnter={e => setDivStyle(hoverStyle)}
  // onMouseLeave={e => setDivStyle(style)}
  // const [divStyle, setDivStyle] = useState(style);