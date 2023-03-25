import * as React from 'react';
import * as ReactDOM from 'react-dom';

//---------Import Testing Libraries---------
// import {rest} from 'msw';
// import {setupServer} from 'msw/node';
import { render, screen, cleanup, getByText, waitFor, fireEvent } from '@testing-library/react';

import App from '../index.jsx';
import Overview from '../Overview/Overview.jsx';
import Reviews from '../Reviews/Reviews.jsx';
import Ratingbreakdown from '../Reviews/Ratingbreakdown.jsx';
import Reviewlist from '../Reviews/Reviewlist.jsx';
import Productbreakdown from '../Reviews/Productbreakdown.jsx';
import Sizes from '../Reviews/Sizes.jsx';
import ReviewItem from '../Reviews/ReviewItem.jsx';

afterEach(() => {
  cleanup();
});

const reviewData =
{
  "product": "37311",
  "page": 0,
  "count": 1000,
  "results": [
    {
      "review_id": 1135865,
      "rating": 5,
      "summary": "pls",
      "recommend": false,
      "response": null,
      "body": "pleasss",
      "date": "2023-03-25T00:00:00.000Z",
      "reviewer_name": "working?",
      "helpfulness": 0,
      "photos": []
    }
  ]
}


test('expect RatingReview Component to render string',
async () => {
    render(<Reviewlist reviews={reviewData}/>);
    const value = await screen.getByText('Ratings and Reviews');
    expect(value).toBeInTheDocument();
  })