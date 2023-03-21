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
  <Grid container spacing={2} columns={12}>
    {comparisonGrid}
  </Grid>
  );
  return (
    <div>
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
      >
        <DialogContent>
          {grid}
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


  function compareToCurrent(item) {
    //NAME    CHAR    NAME
    //VAL     CHAR    VAL
    var comparison = [[current.name, 'Name', item.name], [current.default_price, 'Price', item.default_price]]
    //= {[name1, name2],[price1, price2],...[]};
    // var currentKeys = Object.keys(current.features);
    // var comparatorKeys = Object.keys(item.features);
    // var combinedKeys = _.uniq(currentKeys.concat(comparatorKeys)).sort();
    // for (var i = 0; i < combinedKeys.length; i++) {
    //   comparison.push([current[combinedKeys[i]], combinedKeys[i], item[combinedKeys[i]]])
    // }

    setComparison(comparison);
  }
  function openComparisonModal(item) {
    compareToCurrent(item);
    setOpen(true);
  }
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
      <RelatedItemsModal open={open} setOpen={setOpen} comparison={comparison} />
      <RelatedItemsList related={related} setCurrentById={setCurrentById} getProducts={getProducts} toggleOutfit={toggleOutfit} openComparisonModal={openComparisonModal} />
      <YourOutfitList outfit={outfit} setCurrentById={setCurrentById} removeFromOutfit={removeFromOutfit} />
    </div>
  );
}

export default RelatedItems