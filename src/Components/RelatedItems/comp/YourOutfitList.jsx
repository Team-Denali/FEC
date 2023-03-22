import React from 'react';// Bring React in to build a component.
import {useState, useEffect} from 'react';
import RelatedItemCard from './RelatedItemCard.jsx';
import AddToOutfitCard from './AddToOutfitCard.jsx';
import Carousel from './Carousel.jsx';


var YourOutfitList = ({current, outfit, setCurrentById, addToOutfit, removeFromOutfit}) => {
  const [outfitList, setOutfitList] = useState([]);

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
    listStyleType: 'none'
  }
  const liStyle = {
    display: 'inline-block',
    color: 'white',
    textAlign: 'center',
    textDecoration: 'none'
  }

  useEffect(() => {
    var list = outfit.map(item => <RelatedItemCard key={item.id} item={item} onClick={_ => setCurrentById(item.id)} onButton={removeFromOutfit} />);
    list.unshift(<AddToOutfitCard key={'current'} item={current} onClick={addToOutfit} />)
    setOutfitList(list);
  }, [current, outfit])

  return (
    <div style={outerDivStyle} >
      <h2>Your Outfit</h2>
      <Carousel items={outfitList} />
      {/* <div style={divStyle} >
        <ul style={ulStyle} >
          <AddToOutfitCard item={current} onClick={addToOutfit} />
          {outfit.map(item => <RelatedItemCard key={item.id} item={item} onClick={_ => setCurrentById(item.id)} onButton={removeFromOutfit} />)}
        </ul>
      </div> */}
    </div>
  );
}

export default YourOutfitList