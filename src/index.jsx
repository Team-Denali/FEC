import React from 'react';// Bring React in to build a component.

import { createRoot } from "react-dom/client"; import Overview from './Components/Overview/Overview.jsx'; import QuestionsAnswers from './Components/QnA/QnA.jsx'; import RelatedItems from './Components/RelatedItems/RelatedItems.jsx'; import Reviews from './Components/Reviews/Reviews.jsx';
const root = createRoot(document.getElementById("root"));

// Huzzah for jsx!
const App = () => { //include state variables for currently viewed product
  return ( <>
  <h1>Hello World</h1>
    <Overview/>

    <QuestionsAnswers/>
    <Reviews/>
    <RelatedItems/>
  </>)
}


root.render(<App />);