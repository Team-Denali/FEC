import React from 'react';
import { useState, useEffect, createContext } from 'react';
import { createRoot } from "react-dom/client";
import axios from 'axios';

import Overview from './Components/Overview/Overview.jsx';
import QuestionsAnswers from './Components/QnA/QnA.jsx';
import Reviews from './Components/Reviews/Reviews.jsx';
import RelatedItems from './Components/RelatedItems/RelatedItems.jsx';
import ModuleContext from './ModuleContext.js';

const root = createRoot(document.getElementById("root"));

// Huzzah for jsx!
const App = () => {
  const [current, setCurrent] = useState({}); //current product
  const [rating, setRating] = useState(null);

  function getProducts(id) {
    return axios.get(`/products${id === undefined ? '' : '/' + id}`, {
      params: {
        product_id: id
      }
    })
    .then((res) => {
      return res
    })
    .catch((err) => {
      console.log(err);
    })
  };
  function setCurrentById(id) {
    getProducts(id)
        .then(res => setCurrent(res.data))
  };
  useEffect(() => {
    if(!current.id) {
      getProducts('37345')
        .then(res => setCurrent(res.data))
    }
  }, []);

  return (
    <>
      <h1>Hello World</h1>
      <Overview current={current}/>
      <QuestionsAnswers current={current} />
      <Reviews current={current}/>
      <ModuleContext.Provider value='related-items-module'>
        <RelatedItems current={current} setCurrentById={setCurrentById} getProducts={getProducts}/>
      </ModuleContext.Provider>
    </>
  )
}

root.render(<App />);