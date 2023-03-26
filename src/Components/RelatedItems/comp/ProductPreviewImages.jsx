import React from 'react';// Bring React in to build a component.
import {useState, useEffect} from 'react';
import Carousel from './Carousel.jsx';

var Thumbnail = ({image, setImage}) => {

  const outerDivStyle = {
    contain: 'content',
  }
  const divStyle = {
    // color: 'blue',
    // borderStyle: 'solid',
    // margin: '5%',
    // padding: '5%',
    borderRadius: '50%',
    // height: '64px',
    // width: '64px',
    display: 'flex',
    flexDirection: 'row',
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'nowrap',
    // height: '100%',
    // maxHeight: '2vh',
    // width: '100%',
    // zIndex: 4,
    // maxWidth: '2vh',
    // overflow: 'hidden',
    // backgroundImage: `url(${item.styles[0].photos[0].url})`,
    // position: 'absolute'
    // filter: 'blur(4px)'
  };

  const imgStyle = {
    // height: '100%',
    // maxHeight: '100%',
    // maxWidth: '100%',
    objectFit: 'contain',
    maxHeight: '64px',
    maxWidth: '64px',
    // position: 'relative',
    zIndex: 4,
    // display: 'block',
    // position: 'absolute',
    // marginLeft: 'auto',
    // marginRight: 'auto',
    // width: '40%',
  }

  const imgBGStyle = {
    height: '125%',
    width: '125%',
    top: '-12.5%',
    left: '-12.5%',
    position: 'absolute',
    backgroundImage: `url(${image.url})`,
    filter: 'blur(8px)'
  }

  return (
    <div style={outerDivStyle} >
      <div style={divStyle} onClick={e => {e.stopPropagation(); setImage(image);}} >
        <img style={imgStyle} src={image.thumbnail_url} ></img>
        {/* <img style={imgBGStyle} src={image.url} ></img> */}
      </div>
    </div>
  )
}

var ProductPreviewImages = ({item}) => {
  const [image, setImage] = useState(item.styles[0].photos[0])
  const [images, setImages] = useState([item.styles[0].photos[0]]);
  const [showImages, setShowImages] = useState(false);
  const containerStyle = {
    overflow: 'hidden'
  }
  const divStyle = {
    // color: 'blue',
    // borderStyle: 'solid',
    // margin: '5%',
    // padding: '5%',
    borderRadius: '10% 10% 0% 0%',
    height: '25vw',
    maxHeight: '25vh',
    width: '25vw',
    maxWidth: '25vh',
    overflow: 'hidden',
    // backgroundImage: `url(${item.styles[0].photos[0].url})`,
    // position: 'absolute'
    // filter: 'blur(4px)'
  };
  const imgBGStyle = {
    height: '125%',
    width: '125%',
    top: '-12.5%',
    left: '-12.5%',
    position: 'absolute',
    // backgroundImage: `url(${image.url})`,
    filter: 'blur(4px)'
  }
  const imgStyle = {
    height: '100%',
    maxHeight: '100%',
    maxWidth: '100%',
    objectFit: 'contain',
    position: 'relative',
    zIndex: 2,
    display: 'block',
    // position: 'absolute',
    marginLeft: 'auto',
    marginRight: 'auto',
    // width: '40%',
  }
  const carouselParentStyle = {
    position: 'absolute',
    zIndex: 2,
    bottom: '38%',
    width: '100%',
  }


  var handleMouseOver = (e) => {
    // console.log('mouse over', item.id);
    setShowImages(true);
  }
  var handleMouseLeave = (e) => {
    // console.log('mouse leave', item.id);
    setShowImages(false);
  }

  useEffect(() => {
    // console.log('item effect')
    var images = item.styles.map(style => style.photos);
    images = images.flat();
    // console.log('images', images)
    setImages(images.map(image => <Thumbnail image={image} setImage={setImage} />));
  }, [item])

  return (
    <div style={containerStyle} onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave} >
      <div style={divStyle} >
        <img style={imgStyle} src={image.url} ></img>
        <img style={imgBGStyle} src={image.url} ></img>
      </div>
      <div style={carouselParentStyle} >
        {showImages ? <Carousel items={images} /> : ''}
      </div>
    </div>
  );
}

export default ProductPreviewImages