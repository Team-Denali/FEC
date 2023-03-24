import React from 'react';// Bring React in to build a component.
import {useState, useEffect} from 'react';
import RelatedItemsList from './/comp/RelatedItemsList.jsx';
import YourOutfitList from './/comp/YourOutfitList.jsx';
import _ from 'lodash';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

var RelatedItemsModal = ({open, setOpen, comparison}) => {
  var gridStyle = {
    textAlign: 'center'
  }
  const modalStyle = {
    fontFamily: 'Verdana, sans-serif',
    color: 'rgb(87 72 72)',
    backgroundColor: 'rgb(240, 240, 240)'
  }
  var comparisonGrid = comparison.map(feature => (
    <Grid container spacing={1} columns={12}>
        <Grid item xs={4} sm={4} md={4}>
          <div>{feature[0]}</div>
        </Grid>
        <Grid item xs={4} sm={4} md={4}>
          <div>{feature[1]}</div>
        </Grid>
        <Grid item xs={4} sm={4} md={4}>
          <div>{feature[2]}</div>
        </Grid>
    </Grid>
    ))
  var grid = (
  <Grid style={gridStyle} container spacing={2} columns={12}>
    {comparisonGrid}
  </Grid>
  );
  return (
    <div>
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
      >
        <DialogContent style={modalStyle} >
          <div>Comparing:</div>
        </DialogContent>
        <DialogContent style={modalStyle} >
          <div>{grid}</div>
        </DialogContent>
      </Dialog>
    </div>
  )
}

var RelatedItems = ({current, setCurrentById, getProducts}) => {
  const [related, setRelated] = useState([]);
  const [outfit, setOutfit] = useState([]);
  const [open, setOpen] = useState(false);
  const [comparison, setComparison] = useState([]);
  const [currentStyles, setCurrentStyles] = useState([]);

  const componentStyle = {
    fontFamily: 'Verdana, sans-serif',
    color: 'rgb(87 72 72)',
    backgroundColor: 'rgb(240, 240, 240)'
  }

  function compareToCurrent(item) {
    //NAME    CHAR    NAME
    //VAL     CHAR    VAL
    var comparison = [[current.name, '', item.name], [current.default_price, 'Price', item.default_price]]
    //= {[name1, name2],[price1, price2],...[]};
    //[item.features , item.features[i], ]
    var mapFeatures = (features) => {
      var featureObj = {};
      features.forEach(feature => featureObj[feature.feature] = feature.value);
      return featureObj;
    }
    var currentFeatures = mapFeatures(current.features);
    var comparatorFeatures = mapFeatures(item.features);
    var currentKeys = Object.keys(currentFeatures);
    var comparatorKeys = Object.keys(comparatorFeatures);
    var combinedKeys = _.uniq(currentKeys.concat(comparatorKeys)).sort();
    for (var i = 0; i < combinedKeys.length; i++) {
      comparison.push([currentFeatures[combinedKeys[i]], combinedKeys[i], comparatorFeatures[combinedKeys[i]]])
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
      console.log('current, with style property', currentWithStyles)
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
        let relatedIds = _.uniq(res.data);
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
    getRelated()
  }, [current])

  return (
    <div style={componentStyle} >
      <RelatedItemsModal open={open} setOpen={setOpen} comparison={comparison} />
      <RelatedItemsList related={related} setCurrentById={setCurrentById} getProducts={getProducts} openComparisonModal={openComparisonModal} />
      <YourOutfitList current={current} outfit={outfit} setCurrentById={setCurrentById} addToOutfit={addToOutfit} removeFromOutfit={removeFromOutfit} />
    </div>
  );
}

export default RelatedItems