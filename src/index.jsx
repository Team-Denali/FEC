import React from 'react';
import { useState, useEffect, createContext } from 'react';
import { createRoot } from "react-dom/client";

import Overview from './Components/Overview/Overview.jsx';
import QuestionsAnswers from './Components/QnA/QnA.jsx';
import Reviews from './Components/Reviews/Reviews.jsx';
import RelatedItems from './Components/RelatedItems/RelatedItems.jsx';

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
        <ModuleContext.Provider value='reviews'>
          <Reviews current={current}/>
        </ModuleContext.Provider>
        <ModuleContext.Provider value='related-items'>
          <RelatedItems current={current} setCurrent={setCurrent} />
        </ModuleContext.Provider>
      </CurrentContext.Provider>
    </div>
  );
}

root.render(<App />);