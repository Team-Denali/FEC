import React from 'react';// Bring React in to build a component.
import {useState, useEffect} from 'react';
import RelatedItemsList from './/comp/RelatedItemsList.jsx';
import YourOutfitList from './/comp/YourOutfitList.jsx';

var RelatedItems = ({current, setCurrentById, getProducts}) => {
  const [related, setRelated] = useState([]);

  function getRelated() {
    if(!current.id) {
      console.log('nothing in current yet, returning')
      return;
    }
    return getProducts(`${current.id}/related`)
      .then(res => {
        // console.log(res);
        let relatedIds = res.data;
        relatedIds = relatedIds.map(id => getProducts(id));
        return Promise.all(relatedIds)
      })
      .then(results => {
        results = results.map(result => result.data);
        setRelated(results);
        return results;
      })
      .then(results => {
        return Promise.all(results.map(result => getProducts(`${result.id}/styles`)))
      })
      .then(results => {
        // console.log('styles: ', results)
      })
      .catch(err => console.log(err))
  }

  useEffect(() => {
    getRelated()
  }, [current])

  useEffect(() => {
    // console.log('change to related: ', related);
  }, [related])

  return (
    <div>
      {/* <h1>RelatedItems</h1> */}
      <RelatedItemsList related={related} setCurrentById={setCurrentById} getProducts={getProducts} />
      <YourOutfitList />
    </div>
  );
}

export default RelatedItems