import React from 'react';
import {useState, useEffect} from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import CheckIcon from '@mui/icons-material/Check';
import Divider from '@mui/material/Divider';

const RelatedItemsModal = ({open, setOpen, comparison}) => {
  const gridStyle = {
    textAlign: 'center'
  };
  const modalStyle = {
    fontFamily: 'Verdana, sans-serif',
    color: 'rgb(87 72 72)',
    backgroundColor: 'rgb(240, 240, 240)'
  };
  var nameGrid = comparison.slice(0, 1).map(feature => (
    <Grid key={feature[1]} container spacing={1} columns={12}>
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
  ));
  var priceGrid = comparison.slice(1, 2).map(feature => (
    <Grid key={feature[1]} container spacing={1} columns={12}>
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
  ));
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
    <Grid key={center} container spacing={1} columns={12}>
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
    )
  })
  var grid = (
    <Grid style={gridStyle} container spacing={2} columns={12}>
      {nameGrid.concat(priceGrid.concat(comparisonGrid))}
    </Grid>
  );
  return (
    <div className='related-item-comparison-modal' >
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

export default RelatedItemsModal