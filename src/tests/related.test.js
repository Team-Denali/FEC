import * as React from 'react';
import * as ReactDOM from 'react-dom';

//---------Import Testing Libraries---------
// import {rest} from 'msw';
// import {setupServer} from 'msw/node';
import { render, screen, cleanup, getByText, waitFor, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

// import App from '../index.jsx';

// import Overview from './Components/Overview/Overview.jsx';
// import QuestionsAnswers from './Components/QnA/QnA.jsx';
// import Reviews from './Components/Reviews/Reviews.jsx';
import RelatedItems from '../Components/RelatedItems/RelatedItems.jsx';

import RelatedItemsList from '../Components/RelatedItems/comp/RelatedItemsList.jsx';
import YourOutfitList from '../Components/RelatedItems/comp/YourOutfitList.jsx';
import RelatedItemsModal from '../Components/RelatedItems/comp/RelatedItemsModal.jsx';

afterEach(() => {
  cleanup();
});

// function getProducts(id) {
//   return axios.get(`/products${id === undefined ? '' : '/' + id}`, {
//     params: {
//       product_id: id
//     }
//   })
//   .then((res) => {
//     return res
//   })
//   .catch((err) => {
//     console.log(err);
//   })
// };

// function setCurrentById(id) {
//   getProducts(id)
//       .then(res => setCurrent(res.data))
// };

const currentData = {
  "id": 37311,
  "campus": "hr-rfe",
  "name": "Camo Onesie",
  "slogan": "Blend in to your crowd",
  "description": "The So Fatigues will wake you up and fit you in. This high energy camo will have you blending in to even the wildest surroundings.",
  "category": "Jackets",
  "default_price": "140.00",
  "created_at": "2021-08-13T14:37:33.145Z",
  "updated_at": "2021-08-13T14:37:33.145Z",
  "features": [
      {
          "feature": "Fabric",
          "value": "Canvas"
      },
      {
          "feature": "Buttons",
          "value": "Brass"
      }
  ]
}

const relatedItemsData = [
  37312,
  37313,
  37318,
  37317
];
// const [current, setCurrent] = React.useState({});

var  currentTest = {}
var setCurrentTest = () => currentTest = currentData;

test('expect RelatedItems to render', async () => {
  render(<RelatedItems
    current={currentTest}
    setCurrent={setCurrentTest}
    />);
  expect(screen.getByText('Related Items')).toHaveTextContent('Related Items');
});