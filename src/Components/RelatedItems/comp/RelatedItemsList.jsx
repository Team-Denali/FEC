import React from 'react';// Bring React in to build a component.
import {useState, useEffect, useContext} from 'react';
import RelatedItemCard from './RelatedItemCard.jsx';
import Carousel from './Carousel.jsx';
import StarBorderIcon from '@mui/icons-material/StarBorder';

import ElementContext from './../../../ElementContext.js';
import ClickTracker from '../../../ClickTracker.jsx';

var RelatedItemsList = ({related, setCurrentById, openComparisonModal}) => {
  const element = useContext(ElementContext);

  const outerDivStyle = {
    // color: 'blue',
    // borderStyle: 'solid',
    margin: '2%',
    padding: '2%',
    borderRadius: '10%',
    overflow: 'hidden'
  };

  return (
    <ClickTracker selector={`${element}`} WrappedComponent={(
      <div style={outerDivStyle} >
        <h2>Related Items</h2>
          <Carousel items={related.map(item => <RelatedItemCard key={item.id} id={item.id} item={item} onClick={_ => setCurrentById(item.id)} onButton={() => openComparisonModal(item)} icon={<StarBorderIcon />} />)} />
      </div>
    )
  }/>)
}

export default RelatedItemsList