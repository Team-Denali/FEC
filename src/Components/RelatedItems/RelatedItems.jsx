import React from 'react';// Bring React in to build a component.
import {useState, useEffect} from 'react';
import RelatedItemsList from './/comp/RelatedItemsList.jsx';
import YourOutfitList from './/comp/YourOutfitList.jsx';
import _ from 'lodash';
import axios from 'axios';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import CheckIcon from '@mui/icons-material/Check';
import Divider from '@mui/material/Divider';

var RelatedItemsModal = ({open, setOpen, comparison}) => {
  var gridStyle = {
    textAlign: 'center'
  }
  const modalStyle = {
    fontFamily: 'Verdana, sans-serif',
    color: 'rgb(87 72 72)',
    backgroundColor: 'rgb(240, 240, 240)'
  }
  var nameGrid = comparison.slice(0, 1).map(feature => (
    <Grid container spacing={1} columns={12}>
        <Grid item xs={3} sm={3} md={3}>
          <h4>{feature[0]}</h4>
        </Grid>
        <Grid item xs={6} sm={6} md={6}>
          <div>{feature[1]}</div>
        </Grid>
        <Grid item xs={3} sm={3} md={3}>
          <h4>{feature[2]}</h4>
        </Grid>
    </Grid>
  ))
  var priceGrid = comparison.slice(1, 2).map(feature => (
    <Grid container spacing={1} columns={12}>
        <Grid item xs={12} sm={12} md={12}>
          <Divider></Divider>
        </Grid>
        <Grid item xs={3} sm={3} md={3}>
          <div>${feature[0]}</div>
        </Grid>
        <Grid item xs={6} sm={6} md={6}>
          <div>{feature[1]}</div>
        </Grid>
        <Grid item xs={3} sm={3} md={3}>
          <div>${feature[2]}</div>
        </Grid>
        <Grid item xs={12} sm={12} md={12}>
          <Divider></Divider>
        </Grid>
      </Grid>
    ))
    //case 1: both have feature and theyre equal =>
    //case 2: both have feature and not equal =>
    //case 3: only one has that feature =>
  var comparisonGrid = comparison.slice(2).map(feature => {
    var left, center, right;
    if (feature[0] === null || feature[2] === null) {
      left = feature[0] === null ? <CheckIcon /> : '';
      right = feature[2] === null ? <CheckIcon /> : '';
      center = `${feature[1]}`
    } else if (feature[0] !== feature [2] && feature[0] !== undefined && feature[2] !== undefined) {
      left = feature[0];
      right = feature[2];
      center = feature[1];
    }
    else if (feature[0] !== feature [2] && (feature[0] !== undefined || feature[2] !== undefined)) {
      left = feature[0] ? feature[0]: '';
      right = feature[2] ? feature[2] : '';
      center = `${feature[1]}`
    }
    else {
      left = '???';
      right = '???';
      center = 'WHAT';
    }

    return (
    <Grid container spacing={1} columns={12}>
        <Grid item xs={3} sm={3} md={3}>
          <div>{left}</div>
        </Grid>
        <Grid item xs={6} sm={6} md={6}>
          <div>{center}</div>
        </Grid>
        <Grid item xs={3} sm={3} md={3}>
          <div>{right}</div>
        </Grid>
        <Grid item xs={12} sm={12} md={12}>
          <Divider></Divider>
        </Grid>
    </Grid>
    )})
  var grid = (
  <Grid style={gridStyle} container spacing={2} columns={12}>
    {nameGrid.concat(priceGrid.concat(comparisonGrid))}
  </Grid>
  );
  return (
    <div>
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
      >
        <DialogContent style={modalStyle} >
          <h3>Comparing:</h3>
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
    var combinedKeys = _.uniq(currentKeys.concat(comparatorKeys)).sort();
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
      <RelatedItemsModal open={open} setOpen={setOpen} comparison={comparison} />
      <RelatedItemsList related={related} setCurrentById={setCurrentById} getProducts={getProducts} openComparisonModal={openComparisonModal} />
      <YourOutfitList current={current} outfit={outfit} setCurrentById={setCurrentById} addToOutfit={addToOutfit} removeFromOutfit={removeFromOutfit} />
    </div>
  );
}

export default RelatedItems