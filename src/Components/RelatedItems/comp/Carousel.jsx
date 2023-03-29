import React from 'react';
import {useState, useEffect, useContext} from 'react';
import Grow from '@mui/material/Grow';
import anime from 'animejs/lib/anime.es.js';

import ClickTracker from '../../../ClickTracker.jsx';
import ElementContext from './../../../ElementContext.js';
import CurrentContext from './../../../CurrentContext.js';

var Carousel = ({items}) => {
  const element = useContext(ElementContext);
  const current = useContext(CurrentContext);
  var checkRenderFwd = () => {
    // console.log('scroll and length: ', scroll, items.length)
    if (items.length > 4 && ((items.length - 4) * -25) < scroll) {
      return true
    } else {
      return false
    }
  }
  var checkRenderBack = () => {
    if (scroll < 0 && items.length > 4) {
      return true
    } else {
      return false
    }
  }

  const [transition, setTransition] = useState(true);
  const [scroll, setScroll] = useState(0);
  const [renderFwd, setRenderFwd] = useState(checkRenderFwd());
  const [renderBack, setRenderBack] = useState(checkRenderBack());


  const outerDivStyle = {
    color: 'blue',
    borderStyle: 'solid',
    margin: '2%',
    padding: '2%',
    borderRadius: '10%',
    overflow: 'hidden'
  };
  const divStyle = {
    overflow: 'hidden',
    height: '1%',
    // width: `${Math.max(25 * items.length, 100)}%`,
    width: `100%`,
    maxHeight: `42vh`
  };
  const ulStyle = {
    display: 'flex',
    flexDirection: 'row',
    margin: '0 auto',
    padding: '0 auto',
    listStyleType: 'none',
    position: 'relative',
    // left: `${scroll}vw`
    left: `${scroll}%`
  }
  const liStyle = {
    display: 'inline-block',
    color: 'white',
    textAlign: 'center',
    textDecoration: 'none',
    width: '25%',
    margin: '0.1vw'
  }
  const fwdArrowStyle = {
    position: 'absolute',
    zIndex: 6,
    color: 'rgb(87 72 72)',
    top: '0%',
    right: '-3%',
    display: 'flex',
    justifyContent: 'center',
    height: '100%',
    width: '15%',
    alignItems: 'center',
    background: 'linear-gradient(to right, #0000, #f0f0f0 50%)'
  }
  const backArrowStyle = {
    position: 'absolute',
    zIndex: 6,
    color: 'rgb(87 72 72)',
    top: '0%',
    left: '-3%',
    display: 'flex',
    justifyContent: 'center',
    height: '100%',
    width: '15%',
    alignItems: 'center',
    background: 'linear-gradient(to left, #0000, #f0f0f0 50%)'
  }
  const containerStyle = {
    position: 'relative'
  }

  const retriggerTransition = () => {
    console.log('retrigger transition?')
    if (transition === false) {
      console.log('YES')
      setTransition(true);
    } else {
      console.log('NO')
    }
  }
  const retriggerTransitionCB = (node, cb) => {
    console.log('retrigger transition?')
    if (transition === false) {
      console.log('YES')
      setTransition(true);
    } else {
      console.log('NO')
    }
  }
  useEffect(() => {
    // console.log('rendering carousel OR change to current item; resetting scroll\n', current)
    setScroll(0)
  }, [current])
  useEffect(() => {
    setRenderFwd(checkRenderFwd());
    setRenderBack(checkRenderBack());
  }, [scroll, items])
  var handleClickForward = (e) => {
    e.preventDefault();
    setTransition(false);
    setScroll(scroll - 25);
  }
  var handleClickBack= (e) => {
    e.preventDefault();
    setTransition(false);
    setScroll(scroll + 25);
  }
  var fwdArrow = (
    <ClickTracker selector={`${element}-fwd-arrow`} WrappedComponent={(
      <div style={fwdArrowStyle} onClick={handleClickForward} >
        <h1>{'>'}</h1>
      </div>
    )}/>
  );
  var backArrow = (
    <ClickTracker selector={`${element}-back-arrow`} WrappedComponent={(
      <div style={backArrowStyle} onClick={handleClickBack} >
        <h1>{'<'}</h1>
      </div>
    )}/>
  );

  return (
    <div style={containerStyle} >
      {renderFwd ? fwdArrow : ''}
      <div style={divStyle} >
          <ul style={ulStyle} >
            {items.map((item, index) =>
              <li key={index} style={liStyle} >
                <Grow
                  in={transition}
                  onEnter={() => console.log('enter')}
                  onEntering={() => console.log('entering')}
                  onEntered={() => console.log('entered')}
                  onExit={() => console.log('exit')}
                  onExiting={() => {console.log('exiting'); /*retriggerTransition();*/}}
                  onExited={() => console.log('exited')}
                  addEndListener={() => retriggerTransition()}
                  timeout={{'enter?': 2000}} >
                  <div>{item}</div>
                </Grow>
              </li>
            )}
          </ul>
      </div>
      {renderBack ? backArrow : ''}
    </div>
  );
}

export default Carousel