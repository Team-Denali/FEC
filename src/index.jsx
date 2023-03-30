import React from 'react';// Bring React in to build a component.
import { lazy, useState, useEffect, createContext } from 'react';
import { createRoot } from "react-dom/client";
const Overview = lazy(() => import("./Components/Overview/Overview.jsx"));
const QuestionsAnswers = lazy(() => import("./Components/QnA/QnA.jsx"));
const RelatedItems = lazy(() => import("./Components/RelatedItems/RelatedItems.jsx"));
const Reviews = lazy(() => import("./Components/Reviews/Reviews.jsx"));

import axios from 'axios';

import CurrentContext from './CurrentContext.js';
import ModuleContext from './ModuleContext.js';

const root = createRoot(document.getElementById("root"));

// Huzzah for jsx!
const App = () => {
  const [current, setCurrent] = useState({});

  function scrollTo(selector) {
    var div = document.getElementsByClassName(selector);
    div[0].scrollIntoView();
  }

  useEffect(() => {
    scrollTo('app')
  }, [current]);

  const appStyle = {
    fontFamily: 'Verdana, sans-serif',
    color: 'rgb(87 72 72)',
    backgroundColor: 'rgb(240, 240, 240)',
    width: '960px',
    marginLeft: 'auto',
    marginRight: 'auto',
  };

  return (
    <div className='app' style={appStyle}>
      <CurrentContext.Provider value={current.id}>
        <ModuleContext.Provider value='overview'>
          <h1>Hello World</h1>
          <Overview current={current}/>
        </ModuleContext.Provider>
        <ModuleContext.Provider value='questions-answers'>
          <QuestionsAnswers current={current} />
        </ModuleContext.Provider>
        <ModuleContext.Provider value='related-items'>
          <RelatedItems current={current} setCurrent={setCurrent} />
        </ModuleContext.Provider>
        <ModuleContext.Provider value='reviews'>
          <Reviews current={current.id}/>
        </ModuleContext.Provider>
      </CurrentContext.Provider>
    </div>
  );
}

root.render(<App />);