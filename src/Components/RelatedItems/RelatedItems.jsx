import React from 'react';// Bring React in to build a component.
import {useState, useEffect} from 'react';
import RelatedItemsList from './/comp/RelatedItemsList.jsx';
import YourOutfitList from './/comp/YourOutfitList.jsx';
import _ from 'lodash';

var RelatedItems = ({current, setCurrentById, getProducts}) => {
  const [related, setRelated] = useState([]);
  const [outfit, setOutfit] = useState([]);

  function outfitIndexOf(item) {
    return outfit.map(outfitItem => outfitItem.id).indexOf(item.id);
  }
  function toggleOutfit(item) {
    var index = outfitIndexOf(item);
    if (index >= 0) {
      removeFromOutfit(item)
    } else {
      var newOutfit = outfit.slice();
      newOutfit.push(item);
      setOutfit(newOutfit);
    }
  }
  function removeFromOutfit(item) {
    // console.log('outfit', outfit)
    var index = outfitIndexOf(item);
    // console.log('index', index)
    var newOutfit = outfit.slice();
    newOutfit.splice(index, 1);
    setOutfit(newOutfit);
  }
  function getRelated() {
    let rel;
    if(!current.id) {
      console.log('nothing in current yet, returning')
      return;
    }
    return getProducts(`${current.id}/related`)
      .then(res => {
        console.log('related product ids: ', res.data);
        let relatedIds = _.uniq(res.data);
        relatedIds = relatedIds.map(id => getProducts(id));
        return Promise.all(relatedIds)
      })
      .then(results => {
        results = results.map(result => result.data);
        rel = results;
        // setRelated(results);
        return results;
      })
      .then(results => {
        return Promise.all(results.map(result => getProducts(`${result.id}/styles`)))
      })
      .then(results => {
        results = results.map(result => {
          return result.data.results;
        })
        console.log('styles: ', results)
        return results;
      })
      .then(styles => {
        console.log(rel)
        var relatedWithStyles = [];
        relatedWithStyles = Object.assign(relatedWithStyles, rel);
        for (var i = 0; i < relatedWithStyles.length; i++) {
          relatedWithStyles[i].styles = styles[i];
        }
        console.log('Related Items, with style property', relatedWithStyles)
        setRelated(relatedWithStyles);
      })
      .catch(err => console.log(err))
  }

  useEffect(() => {
    getRelated()
  }, [current])

  useEffect(() => {
    // console.log('change to related: ', related);
  }, [related, outfit])

  return (
    <div>
      {/* <h1>RelatedItems</h1> */}
      <RelatedItemsList related={related} setCurrentById={setCurrentById} getProducts={getProducts} toggleOutfit={toggleOutfit} />
      <YourOutfitList outfit={outfit} setCurrentById={setCurrentById} removeFromOutfit={removeFromOutfit} />
    </div>
  );
}

export default RelatedItems