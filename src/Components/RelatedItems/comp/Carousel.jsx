import React from 'react';// Bring React in to build a component.
import {useState, useEffect} from 'react';


var Carousel = ({items}) => {

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
  const rightArrowStyle = {
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
  const leftArrowStyle = {
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

  //  if scroll < 0
  //    render back

  //  if scroll > 0
  //    render forward

  useEffect(() => {setScroll(0)}, [items])

  useEffect(() => {
    setRenderFwd(checkRenderFwd());
    setRenderBack(checkRenderBack());
  }, [scroll, items])
  var handleClickForward = (e) => {
    e.stopPropagation();
    // console.log('clicked arrow');
    setScroll(scroll - 25);
  }
  var handleClickBack= (e) => {
    e.stopPropagation();
    // console.log('clicked arrow');
    setScroll(scroll + 25);
  }

  return (
    <div style={containerStyle} >
      {renderFwd ? (<div style={rightArrowStyle} onClick={handleClickForward} >
        <h1>{'>'}</h1>
      </div>) : ''}
      <div style={divStyle} >
          <ul style={ulStyle} >
            {items.map((item, index) => <li key={index} style={liStyle} >{item}</li>)}
          </ul>
      </div>
      {renderBack ? (<div style={leftArrowStyle} onClick={handleClickBack} >
        <h1>{'<'}</h1>
      </div>) : ''}
    </div>
  );
}

export default Carousel