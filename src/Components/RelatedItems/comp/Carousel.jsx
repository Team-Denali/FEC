import React from 'react';// Bring React in to build a component.
import {useState, useEffect} from 'react';


var Carousel = ({items}) => {

  var checkRenderFwd = () => {
    console.log('scroll and length: ', scroll, items.length)
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
    width: '400%'
  };
  const ulStyle = {
    display: 'inline-block',
    margin: '0 auto',
    padding: '0 auto',
    listStyleType: 'none',
    position: 'relative',
    left: `${scroll}vw`
  }
  const liStyle = {
    display: 'inline-block',
    color: 'white',
    textAlign: 'center',
    textDecoration: 'none',
    width: '20vw',
    margin: '0.1vw'
  }
  const rightArrowStyle = {
    position: 'absolute',
    zIndex: 4,
    top: '0%',
    right: '-3%',
    display: 'flex',
    justifyContent: 'center',
    height: '99%',
    width: '15%',
    alignItems: 'center',
    background: 'linear-gradient(to right, #0000, #eee 100%)'
  }
  const leftArrowStyle = {
    position: 'absolute',
    zIndex: 4,
    top: '0%',
    left: '-3%',
    display: 'flex',
    justifyContent: 'center',
    height: '99%',
    width: '15%',
    alignItems: 'center',
    background: 'linear-gradient(to left, #0000, #eee 100%)'
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
  var handleClickForward = () => {
    console.log('clicked arrow');
    setScroll(scroll - 25);
  }
  var handleClickBack= () => {
    console.log('clicked arrow');
    setScroll(scroll + 25);
  }

  return (
    <div style={containerStyle} >
      {renderFwd ? (<div style={rightArrowStyle} onClick={handleClickForward} >
        <h1>{'>'}</h1>
      </div>) : ''}
      <div style={divStyle} >
          <ul style={ulStyle} >
            {items.map(item => <li style={liStyle} >{item}</li>)}
          </ul>
      </div>
      {renderBack ? (<div style={leftArrowStyle} onClick={handleClickBack} >
        <h1>{'<'}</h1>
      </div>) : ''}
    </div>
  );
}

export default Carousel