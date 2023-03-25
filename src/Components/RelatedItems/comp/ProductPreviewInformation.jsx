import React from 'react';// Bring React in to build a component.
import {useState, useEffect} from 'react';
import ProductStars from './ProductStars.jsx';


var ProductPreviewInformation = ({item}) => {

  const divStyle = {
    color: 'rgb(87 72 72)',
    // borderStyle: 'solid',
    // margin: '5%',
    padding: '5%',
    zIndex: 3,
    backgroundColor: '#d3d3d399',

    height: '13vh',
    // maxHeight: '15vh',
    // width: '20vw',
    // maxWidth: '25vh',

    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    position: 'relative',
    // borderRadius: '0% 0% 10% 10%'
  };
  const catStyle = {
    margin: '1%',
    fontSize: 'large',
    fontWeight: 300,
    fontVariantCaps: 'all-small-caps',
    textAlign: 'left'
  }
  const nameStyle = {
    margin: '1%',
    fontSize: 'larger',
    fontVariantCaps: 'all-small-caps',
    textAlign: 'right'
  }
  const priceStyle = {
    margin: '1%',
    fontSize: 'large',
    fontWeight: 200,
    fontVariantCaps: 'all-small-caps',
    textAlign: 'right',
    fontStyle: 'italic'
  }
  const salePriceStyle = {
    color: 'red',
    margin: '1%',
    fontSize: 'large',
    fontWeight: 200,
    fontVariantCaps: 'all-small-caps',
    textAlign: 'right',
    fontStyle: 'italic'
  }
  const strikethroughStyle = {
    textDecoration: 'line-through',
    margin: '1%',
    fontSize: 'large',
    fontWeight: 200,
    fontVariantCaps: 'all-small-caps',
    textAlign: 'right',
    fontStyle: 'italic'
  }
  const starStyle = {
    margin: '1% 1% 1% 1%'
  }
  const saleDivStyle = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end'
  }


  const [price, setPrice] = useState(<h5 style={priceStyle} >${item.default_price}</h5>);

  useEffect(() => {
    console.log('rendering info for ', item)
    if (Array.isArray(item.styles)) {
      item.styles.forEach(style => {
        if (style['default?']) {
          console.log('default style: ', style);
          if (style.sale_price === null) {
            console.log('NULL SALE PRICE SETTING OG', item.name);
            setPrice(<h5 style={priceStyle} >${style.original_price}</h5>);
          } else {
            console.log('!!!SALE PRICE!!!', item.name);
            setPrice(<div style={saleDivStyle} ><h5 style={salePriceStyle} >${style.sale_price}</h5><h5 style={strikethroughStyle} >${style.original_price}</h5></div>);
          }
        }
      })
    } else {
      console.log('how did YOU get here', item);
      setPrice(<h5 style={priceStyle} >${item.default_price}</h5>)
    }
  }, [item])

  return (
    <div style={divStyle} >
      <h5 style={catStyle} >{item.category}</h5>
      <h5 style={nameStyle} >{item.name}</h5>
      {price}
      <h5 style={starStyle} ><ProductStars id={item.id} size={'small'} /></h5>
    </div>
  );
}

export default ProductPreviewInformation