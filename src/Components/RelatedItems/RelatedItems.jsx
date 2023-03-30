import React from 'react';
import {useState, useEffect} from 'react';
import RelatedItemsList from './/comp/RelatedItemsList.jsx';
import YourOutfitList from './/comp/YourOutfitList.jsx';
import axios from 'axios';
import RelatedItemsModal from './/comp/RelatedItemsModal.jsx';
import ElementContext from '../../ElementContext.js';
import uniq from 'lodash/uniq';




var RelatedItems = ({current, setCurrentById, getProducts}) => {
  const [related, setRelated] = useState([]);
  const [outfit, setOutfit] = useState([]);
  const [open, setOpen] = useState(false);
  const [comparison, setComparison] = useState([]);
  const [currentStyles, setCurrentStyles] = useState([]);

  const componentStyle = {
    fontFamily: 'Verdana, sans-serif',
    color: 'rgb(87 72 72)',
    backgroundColor: 'rgb(240, 240, 240)',
    width: '960px'
  }

  function compareToCurrent(item) {
    var comparison = [[current.name, '', item.name], [current.default_price, 'Price', item.default_price]]
    var mapFeatures = (features) => {
      var featureObj = {};
      features.forEach(feature => featureObj[feature.feature] = feature.value);
      return featureObj;
    }
    var currentFeatures = mapFeatures(current.features);
    var comparatorFeatures = mapFeatures(item.features);
    var currentKeys = Object.keys(currentFeatures);
    var comparatorKeys = Object.keys(comparatorFeatures);
    // var combinedKeys = _.uniq(currentKeys.concat(comparatorKeys)).sort();
    var combinedKeys = uniq(currentKeys.concat(comparatorKeys)).sort();
    for (var i = 0; i < combinedKeys.length; i++) {
      // if (currentFeatures[combinedKeys[i]] || comparatorFeatures[combinedKeys[i]]) {
        comparison.push([currentFeatures[combinedKeys[i]], combinedKeys[i], comparatorFeatures[combinedKeys[i]]])
      // }
    }
    setComparison(comparison);
  }
  function openComparisonModal(item) {
    compareToCurrent(item);
    setOpen(true);
  }
  function outfitIndexOf(item) {
    return outfit.map(outfitItem => outfitItem.id).indexOf(item.id);
  }
  function addToOutfit() {
    if(outfitIndexOf(current) >= 0) {
      return;
    }
    var newOutfit = outfit.slice();
    getProducts(`${current.id}/styles`)
    .then(results => {
      // console.log('styles: ', results)
      results = results.data.results
      // console.log('styles: ', results)
      return results;
    })
    .then(styles => {
      // console.log(rel)
      var currentWithStyles = {};
      currentWithStyles = Object.assign(currentWithStyles, current);
        currentWithStyles.styles = styles;
      // console.log('current, with style property', currentWithStyles)
      newOutfit.push(currentWithStyles);
      setOutfit(newOutfit);
    })
    .catch(err => console.log(err))
  }
  function removeFromOutfit(item) {
    var index = outfitIndexOf(item);
    var newOutfit = outfit.slice();
    newOutfit.splice(index, 1);
    setOutfit(newOutfit);
  }
  function getRelated() {
    let rel;
    if(!current.id) {
      return;
    }
    return getProducts(`${current.id}/related`)
      .then(res => {
        // console.log('response: ', res);
        let relatedIds = uniq(res.data);
        relatedIds = relatedIds.map(id => getProducts(id));
        return Promise.all(relatedIds)
      })
      .then(results => {
        results = results.map(result => result.data);
        rel = results;
        return results;
      })
      .then(results => {
        return Promise.all(results.map(result => getProducts(`${result.id}/styles`)))
      })
      .then(results => {
        results = results.map(result => {
          return result.data.results;
        })
        return results;
      })
      .then(styles => {
        var relatedWithStyles = [];
        relatedWithStyles = Object.assign(relatedWithStyles, rel);
        for (var i = 0; i < relatedWithStyles.length; i++) {
          relatedWithStyles[i].styles = styles[i];
        }
        setRelated(relatedWithStyles);
      })
      .catch(err => console.log(err))
  }

  useEffect(() => {
    // console.log('change to outfit: ', outfit);
    if(outfit.length) {
      axios.post('/outfit', outfit)
      .then(res => {
        // console.log('outfit change response:', res);
      })
      .catch(err => {
        console.log(err);
      })
    }
  }, [outfit])

  useEffect(() => {
    axios.get('/outfit')
      .then(res => {
        // console.log('outfit cookie response:', res);
        setOutfit(res.data);
      })
      .catch(err => {
        console.log(err);
      })
  }, [])

  useEffect(() => {
    getRelated()
  }, [current])

  return (
    <div style={componentStyle} >
      <ElementContext.Provider value='ri-modal'>
        <RelatedItemsModal open={open} setOpen={setOpen} comparison={comparison} />
      </ElementContext.Provider>
      <ElementContext.Provider value='ri-list'>
        <RelatedItemsList related={related} setCurrentById={setCurrentById} getProducts={getProducts} openComparisonModal={openComparisonModal} />
      </ElementContext.Provider>
      <ElementContext.Provider value='ri-outfit-list'>
        <YourOutfitList current={current} outfit={outfit} setCurrentById={setCurrentById} addToOutfit={addToOutfit} removeFromOutfit={removeFromOutfit} />
      </ElementContext.Provider>
    </div>
  );
}

export default RelatedItems