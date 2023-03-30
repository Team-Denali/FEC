import * as React from 'react';
import * as ReactDOM from 'react-dom';
import 'babel-polyfill';
import { act } from 'react-dom/test-utils';
import userEvent from '@testing-library/user-event';

//---------Import Testing Libraries---------
// import {rest} from 'msw';
// import {setupServer} from 'msw/node';
import { render, screen, cleanup, getByText, waitFor, fireEvent, getAllByText } from '@testing-library/react';
//import {toBeInTheDocument} from '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';

import App from '../index.jsx';
import Overview from '../Components/Overview/Overview.jsx';
import Reviews from '../Components/Reviews/Reviews.jsx';
import Ratingbreakdown from '../Components/Reviews/Ratingbreakdown.jsx';
import Reviewlist from '../Components/Reviews/Reviewlist.jsx';
import Productbreakdown from '../Components/Reviews/Productbreakdown.jsx';
import Sizes from '../Components/Reviews/Sizes.jsx';
import ReviewItem from '../Components/Reviews/ReviewItem.jsx';
import ModuleContext from '../ModuleContext.js';
import CurrentContext from '../CurrentContext.js';
// import axios from 'axios';
// jest.mock('axios');


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

const current1 =   {
  campus: 'hr-rfe',
  category: 'Jackets',
  default_price: '140.00',
  description: 'The So Fatigues will wake you up and fit you in. This high energy camo will have you blending in to even the wildest surroundings.',
  id: '37311',
  name: 'Camo Onesie',
  slogan: 'Blend in to your crowd',
  updated_at: '2021-08-13T14:37:33.145Z'
}

test('expect Reviewlist Component to render sort string', async () => {
  render(<Reviewlist reviews={reviewData.results} reviewStars={metaData} filter={0}/>);
  await waitFor(() => screen.getByText('write a review +'));
  const value = screen.getByText('write a review +');
  expect(value).toBeInTheDocument();
})



describe('Reviewlist', () => {
  const reviews = [
    {
      review_id: 1135865,
      rating: 3,
      summary: 'This is a summary',
      body: 'This is the review body',
    },
    {
      review_id: 1135866,
      rating: 5,
      summary: 'This is another summary',
      body: 'This is another review body',
    },
  ];

  const setSortmethod = jest.fn();
  const product_id = 37311;
  const reviewStars = jest.fn();
  const filter = 0;
  const postForm = jest.fn();

  it('renders the Reviewlist component', async () => {
    render(
      <Reviewlist
        reviews={reviews}
        product_id={product_id}
        postForm={postForm}
        setSortmethod={setSortmethod}
        reviewStars={reviewStars}
        filter={filter}
      />
    );

    // Check that the component renders
    expect(screen.getByText('This is a summary')).toBeInTheDocument();

    // Check that the second review is visible
    expect(screen.getByText('This is another summary')).toBeInTheDocument();

    // Check that the sort dropdown is visible
    expect(screen.getByText('relevance')).toBeInTheDocument();

    // Click the button to create a review
    fireEvent.click(screen.getByText('write a review +'));

    // Check that the modal is visible
    expect(screen.getByText('Your rating for this product:')).toBeInTheDocument();
  });
});




describe('RatingBreakdown', () => {
  it('should display the average rating and recommend percentage', async () => {
    const reviewStars = {
      ratings: {
        '1': 5,
        '2': 10,
        '3': 15,
        '4': 20,
        '5': 25,
      },
      recommended: {
        true: 30,
        false: 70,
      },
    };
    const setFilter = jest.fn();

    render(<Ratingbreakdown reviewStars={reviewStars} setFilter={setFilter} />);

    // Wait for the average rating to be displayed
    const averageRating = await screen.findByText('3.7');
    expect(averageRating).toBeInTheDocument();

    // Wait for the recommend percentage to be displayed
    const recommendPercentage = await screen.findByText('30% of reviews recommend this product');
    expect(recommendPercentage).toBeInTheDocument();
  });

  it('should update the filter when a star filter is toggled', async () => {
    const reviewStars = {
      ratings: {
        '1': 5,
        '2': 10,
        '3': 15,
        '4': 20,
        '5': 25,
      },
      recommended: {
        true: 30,
        false: 70,
      },
      characteristics: {
      "Fit": {
          "id": 135494,
          "value": "3.0000000000000000"
      },
      "Length": {
          "id": 135495,
          "value": "3.5000000000000000"
      },
      "Comfort": {
          "id": 135496,
          "value": "2.5000000000000000"
      },
      "Quality": {
          "id": 135497,
          "value": "3.5000000000000000"
      }
  }
    };
    const setFilter = jest.fn();

    render(<Ratingbreakdown reviewStars={reviewStars} setFilter={setFilter} />);

    // Toggle the 5-star filter
    const filter5StarButton = screen.getByRole('button', { name: 'Five Star: 33%' });
    userEvent.click(filter5StarButton);

        // Wait for the filter to update
        await waitFor(() => {
          expect(setFilter).toHaveBeenCalledWith(5);
        });

        // Toggle the 5-star filter again
        userEvent.click(filter5StarButton);

        // Wait for the filter to update
        await waitFor(() => {
          expect(setFilter).toHaveBeenCalledWith(0);
        });
      });
    });


describe('Productbreakdown', () => {
  it('should render sliders for all characteristics that exist in props', async () => {
    const mockProps = {
      reviewStars: {
        characteristics: {
          Comfort: { value: 3 },
          Fit: { value: 4 },
          Quality: { value: 2 },
        },
      },
    };
    const { getByText } = render(<Productbreakdown {...mockProps} />);
    expect(getByText('comfort:')).toBeInTheDocument();
    expect(getByText('fit:')).toBeInTheDocument();
    expect(getByText('quality:')).toBeInTheDocument();
  });

  it('should display correct labels for slider marks', async () => {
    const mockProps = {
      reviewStars: {
        characteristics: {
          Comfort: { value: 3 },
          Fit: { value: 4 },
          Quality: { value: 2 },
        },
      },
    };
    const { getByText } = render(<Productbreakdown {...mockProps} />);
    await waitFor(() => expect(getByText('OK')).toBeInTheDocument());
    await waitFor(() => expect(getByText('too tight')).toBeInTheDocument());
    await waitFor(() => expect(getByText('poor')).toBeInTheDocument());
  });
});
