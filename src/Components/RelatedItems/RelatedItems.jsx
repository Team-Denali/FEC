import React from 'react';// Bring React in to build a component.
import {useState, useEffect} from 'react';
import RelatedItemsList from './/comp/RelatedItemsList.jsx';
import YourOutfitList from './/comp/YourOutfitList.jsx';

var RelatedItems = () => {

  return (
    <div>
      <h1>RelatedItems</h1>
      <RelatedItemsList />
      <YourOutfitList />
    </div>
  );
}

export default RelatedItems