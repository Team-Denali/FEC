import React from 'react';// Bring React in to build a component.
import {useState, useEffect, useContext} from 'react';
import RelatedItemCard from './RelatedItemCard.jsx';
import AddToOutfitCard from './AddToOutfitCard.jsx';
import Carousel from './Carousel.jsx';
import CloseIcon from '@mui/icons-material/Close';

import ElementContext from './../../../ElementContext.js';
import ClickTracker from '../../../ClickTracker.jsx';

var YourOutfitList = ({current, outfit, setCurrentById, addToOutfit, removeFromOutfit}) => {
  const element = useContext(ElementContext);
  const [outfitList, setOutfitList] = useState([]);

  const outerDivStyle = {
    // color: 'blue',
    // borderStyle: 'solid',
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
    listStyleType: 'none'
  }
  const liStyle = {
    display: 'inline-block',
    color: 'white',
    textAlign: 'center',
    textDecoration: 'none'
  }

  useEffect(() => {
    var list = outfit.map(item => (
      <RelatedItemCard
        key={item.id}
        id={item.id}
        item={item}
        onClick={() => setCurrentById(item.id)}
        onButton={removeFromOutfit} icon={<CloseIcon />}
      />
    ));
    list.unshift(<AddToOutfitCard key={'current'} id={'current'} item={current} onClick={addToOutfit} />)
    setOutfitList(list);
  }, [current, outfit])

  return (
    <ClickTracker selector={`${element}`} WrappedComponent={(
      <div style={outerDivStyle} >
        <div className="reviewtitle">Your Outfit</div>
        <Carousel items={outfitList} />
      </div>
    )}/>
  );
}

export default YourOutfitList