import React from 'react'; import $ from 'jquery';// Bring React in to build a component.
import {useState, useEffect} from 'react'; const ExpandedView = require("./ExpandedView").ExpandedView;


var RefactoredCarousel = ({items, pic, setPic}) => {

  var checkRenderFwd1 = () => {
    // console.log('scroll and length: ', scroll, items.length)
    if (items.length > 7 && ((items.length - 7) * 14) > scroll1) { //change four to seven? 25 to ~14?
      return true
    } else {
      return false
    }
  }
  var checkRenderBack1 = () => {
    if (scroll1 > 0 && items.length > 7) {

      return true
    } else {
      return false
    }
  }

  const [scroll1, setScroll1] = useState(0);
  const [renderFwd1, setRenderFwd1] = useState(checkRenderFwd1());
  const [renderBack1, setRenderBack1] = useState(checkRenderBack1());
  const containerStyle1 = {

    position: 'relative'

  }

  const outerDivStyle1 = {
    color: 'blue',
    borderStyle: 'solid',

    margin: '2%', height: '80%',
    padding: '2%',

    borderRadius: '10%',
    overflow: 'hidden'

  };
  const divStyle1 = {
    overflow: 'hidden',
    height: '100%',
    // width: `${Math.max(25 * items.length, 100)}%`,
    width: `57%`,
    maxHeight: `75vh`
  };
  const ulStyle1 = {
    display: 'flex',
    flexDirection: 'column',
    margin: '0 auto',
    padding: '0 auto',
    listStyleType: 'none',
    position: 'relative',
    // left: `${scroll}vw`
    bottom: `${scroll1}%`
  }
  const liStyle1 = {
    display: 'inline-block',
    color: 'white',



    textAlign: 'center',
    textDecoration: 'none',
    border: 'none',// height: '14%',
    margin: '0.1vw'

  }
  const rightArrowStyle1 = {
    position: 'absolute',
    zIndex: 6,
    color: 'rgb(87 72 72)',
    // top: '0%',
    // right: '-3%',
    // display: 'flex',
    // justifyContent: 'center',
    // height: '15%',
    // width: '100%',
    // alignItems: 'center',
    background: 'linear-gradient(to right, #0000, #4e1919db 50%)'
  }
  const leftArrowStyle1 = {
    position: 'absolute',
    zIndex: 6,
    color: 'rgb(87 72 72)',
    // top: '0%',
    // left: '-3%',
    // display: 'flex',
    // justifyContent: 'center',
    // height: '15%',
    // width: '100%',
    bottom: '50px',// alignItems: 'center',
    background: 'linear-gradient(to left, #0000, #4f1818c8 50%)',
  }


  //  if scroll < 0
  //    render back

  //  if scroll > 0
  //    render forward

  useEffect(() => {setScroll1(0)}, [items])

  useEffect(() => {
    setRenderFwd1(checkRenderFwd1());
    setRenderBack1(checkRenderBack1());
  }, [scroll1, items])
  var handleClickForward1 = (e) => {
    e.stopPropagation();
    // console.log('clicked arrow');
    setScroll1(scroll1 + 14);
  }
  var handleClickBack1= (e) => {
    e.stopPropagation();
    // console.log('clicked arrow');
    setScroll1(scroll1 - 14);
  }

  return (
    <div style={containerStyle1} >
      {renderFwd1 ? (<div style={rightArrowStyle1} onClick={handleClickBack1} >
        <h1>{'^'}</h1>
      </div>) : ''}
      <div style={divStyle1} >
          <ul style={ulStyle1} >
            {items.map((item, index) => {  return (<li key={index} style={liStyle1} ><img className='overviewMiniPic' onClick={(e) => {
                e.preventDefault();
                $(".overviewMiniPic").css({ "border-color": "black" });
                $(document.getElementsByClassName("overviewMiniPic")[index]).css({
                  "border-color": "yellow",
                });
                setPic(item.url);
                e.stopPropagation();
              }} style={{height:'70px', width: '59px', borderRadius: "10%",
              boxShadow: 'rgba(0, 0, 0, 0.5) 0px 0px 10px' }} src={item.thumbnail_url}></img></li>)})}
          </ul>
      </div >
      {renderFwd1 ? (<div style={leftArrowStyle1} onClick={handleClickForward1} >
        <h1>{'⌄'}</h1>
      </div>) : ''}
    </div>
  );
}

export default RefactoredCarousel


//styleView.photos