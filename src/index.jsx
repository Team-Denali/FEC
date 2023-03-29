import React from 'react';// Bring React in to build a component.
import { lazy, useState, useEffect } from 'react';
import { createRoot } from "react-dom/client";
const Overview = lazy(() => import("./Components/Overview/Overview.jsx"));
const QuestionsAnswers = lazy(() => import("./Components/QnA/QnA.jsx"));
const RelatedItems = lazy(() => import("./Components/RelatedItems/RelatedItems.jsx"));
const Reviews = lazy(() => import("./Components/Reviews/Reviews.jsx"));
// import Overview from './Components/Overview/Overview.jsx';
// import QuestionsAnswers from './Components/QnA/QnA.jsx';
// import RelatedItems from './Components/RelatedItems/RelatedItems.jsx';
// import Reviews from './Components/Reviews/Reviews.jsx';
import axios from 'axios';
const root = createRoot(document.getElementById("root"));

// Huzzah for jsx!
const App = () => {
  const [current, setCurrent] = useState({}); //current product
  const [rating, setRating] = useState(null);
  //console.log('rating:',rating)
  function getProducts(id) {
    // console.log(`/products${id === undefined ? '' : '/' + id}`)
    return axios.get(`/products${id === undefined ? '/37311' : '/' + id}`, {
      params: {
        product_id: id
      }
    })
    .then((res) => {
      //console.log('products:',res.data)
      return res
    })
    .catch((err) => {
      console.log(err);
    })
  }

  function setCurrentById(id) {
    getProducts(id)
        .then(res => setCurrent(res.data))
  }

  useEffect(() => {
    if(!current.id) {
      getProducts('37345')
        .then(res => setCurrent(res.data))
      // getProducts('37311')
      //   .then(res => setCurrent(res.data))
    }
  }, [])

  //console.log(current, 'the current')
  return ( <>
  <h1>Hello World</h1>
    <Overview current={current}/>

    <QuestionsAnswers current={current} />
    <Reviews current={current}/>
    <RelatedItems current={current} setCurrentById={setCurrentById} getProducts={getProducts}/>
  </>)
}


root.render(<App />);