import React from 'react';// Bring React in to build a component.
import { useState, useEffect } from 'react';
import { createRoot } from "react-dom/client"; import Overview from './Components/Overview/Overview.jsx'; import QuestionsAnswers from './Components/QnA/QnA.jsx'; import RelatedItems from './Components/RelatedItems/RelatedItems.jsx'; import Reviews from './Components/Reviews/Reviews.jsx';
import axios from 'axios';
const root = createRoot(document.getElementById("root"));

// Huzzah for jsx!
const App = () => {
  const [current, setCurrent] = useState(getProducts('37311')); //current product
  function getProducts(id) {
    console.log(`/products${id === undefined ? '' : '/' + id}`)
    axios.get(`/products${id === undefined ? '' : '/' + id}`, {
      params: {
        product_id: id
      }
    })
    .then((res) => {
      console.log('products:',res.data)
    })
    .catch((err)=> {
      console.log(err);
    })
  }
  return ( <>
  <h1>Hello World</h1>
    <Overview current={current} />

    <QuestionsAnswers current={current} />
    <Reviews current={current} />
    <RelatedItems current={current} setCurrent={setCurrent} getProducts={getProducts} />
  </>)
}


root.render(<App />);