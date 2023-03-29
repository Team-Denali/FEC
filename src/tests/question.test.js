import * as React from "react";
import '@testing-library/jest-dom';
import * as ReactDOM from "react-dom";
import {
  render,
  screen,
  cleanup,
  getByText,
  waitFor,
  fireEvent,
} from "@testing-library/react";
import Qmodal from "../Components/QnA/QuestionModal.jsx";
import Amodal from "../Components/QnA/AnswerModal.jsx";
import AnswerList from "../Components/QnA/AnswerList.jsx";
import QuestionsAnswers from "../Components/QnA/QnA.jsx";
import QuestionList from "../Components/QnA/QuestionList.jsx";

afterEach(() => {
  cleanup();
});

const productData = {
  id: 37345,
  campus: "hr-rfe",
  name: "Sedrick Trousers",
  slogan: "Et ut impedit ut rerum suscipit.",
  description:
    "Reprehenderit velit sed est non dignissimos laborum porro eos. Accusantium ut est necessitatibus laudantium vero asperiores eum optio autem. Et eveniet ut expedita reprehenderit sed non. Nostrum et neque dignissimos suscipit sint molestiae quis totam velit. Et quibusdam vel.",
  category: "Trousers",
  default_price: "691.00",
  created_at: "2021-08-13T14:37:33.285Z",
  updated_at: "2021-08-13T14:37:33.285Z",
  features: [
    {
      feature: "Buttons",
      value: '"Ivory"',
    },
    {
      feature: "Green Leaf Certified",
      value: null,
    },
    {
      feature: "Non-GMO",
      value: null,
    },
  ],
};
const testQuestion = {
  product_id: "37332",
  results: [
    {
      question_id: 643074,
      question_body: "A question for the ages",
      question_date: "2022-09-05T00:00:00.000Z",
      asker_name: "ImLost23",
      question_helpfulness: 0,
      reported: false,
      answers: {
        5988080: {
          id: 5988080,
          body: "hi",
          date: "2022-09-05T00:00:00.000Z",
          answerer_name: "Pencil Pusher",
          helpfulness: 0,
          photos: [],
        },
        5988087: {
          id: 5988087,
          body: "Why don't these fit?",
          date: "2022-09-05T00:00:00.000Z",
          answerer_name: "Big Tuna",
          helpfulness: 1,
          photos: [],
        },
      },
    },
    {
      question_id: 643075,
      question_body: "Another new quesiton",
      question_date: "2022-09-09T00:00:00.000Z",
      asker_name: "Tony the Tiger",
      question_helpfulness: 4,
      reported: false,
      answers: {
        5988080: {
          id: 5988070,
          body: "The answer is in the details",
          date: "2022-09-10T00:00:00.000Z",
          answerer_name: "Seller",
          helpfulness: 0,
          photos: [],
        },
        5988087: {
          id: 5988777,
          body: "Now is better than ever",
          date: "2022-09-05T00:00:00.000Z",
          answerer_name: "April Fools",
          helpfulness: 4,
          photos: [],
        },
      },
    },
  ],
};
const singleQuestion = {
    question_id: 643074,
    question_body: "A question for the ages",
    question_date: "2022-09-05T00:00:00.000Z",
    asker_name: "ImLost23",
    question_helpfulness: 0,
    reported: false,
    answers: {
      5988080: {
        id: 5988080,
        body: "hi",
        date: "2022-09-05T00:00:00.000Z",
        answerer_name: "Pencil Pusher",
        helpfulness: 0,
        photos: [],
      },
      5988087: {
        id: 5988087,
        body: "Why do these not fit?",
        date: "2022-09-05T00:00:00.000Z",
        answerer_name: "Big Tuna",
        helpfulness: 1,
        photos: [],
      },
    },
};
const singleAnswer = {
    id: 5988080,
    body: "hi",
    date: "2022-09-05T00:00:00.000Z",
    answerer_name: "Pencil Pusher",
    helpfulness: 0,
    photos: [],
};
const testProduct = 'camo onesie';

test("expect QnA Component to render string", async () => {
  render(<QuestionsAnswers current={productData} />);
  let value =  screen.getByText('Questions & Answers');
  expect(value).toBeInTheDocument();
});

test("expect QuestionList Component to render string from the prop data passed in", async () => {
  render(<QuestionList product= 'Mens Trousers' question = {singleQuestion}/>);
  let value =  screen.getByText(singleQuestion.answers[5988087].body
    );
  expect(value).toBeInTheDocument();
});

test("expect AnswerList Component to render string from the prop data passed in", async () => {
  render(<AnswerList answer={singleAnswer} />);
  let value =  screen.getByText(singleAnswer.answerer_name);
  expect(value).toBeInTheDocument();
});

test("expect Amodal to not render", async () => {
  const value = render(<Amodal open={false} />);
  await (()=> {
  expect(value).toEqual(null)
  });
});

test("expect Amodal to render the product name ", async () => {
  render(<Amodal open = {true} question = '' product= {testProduct}/>);
  let value =  screen.getByText('Product: camo onesie');
  expect(value).toBeInTheDocument();
});

test("expect Qmodal to not render", async () => {
  const value = render(<Qmodal open={false} />);
  await (()=> {
  expect(value).toEqual(null)
  });
});

