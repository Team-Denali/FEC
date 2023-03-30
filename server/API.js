const axios = require ('axios'); // .require("dotenv").config(); .env config
const config = require('../config/myConfig.js');
const TOKEN = config.token;
const API = `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/`;

const getReviews = (params, callback) => {
  const route = API + `reviews/`;
  axios.get(route, {headers:
    {Authorization: TOKEN}, params: params})

  .then((res) => {
    callback(null, res.data)
  })
  .catch((err) => {
    callback(err);

  })
};

const getProducts = (params, callback) => {

  const route = API + `products/${params.id + (params.related === '' ? '' : ('/' + params.related))} `;
  axios.get(route, {headers:

    {Authorization: TOKEN}})
  .then((res) => {
    callback(null, res.data)
  })
  .catch((err) => {
    callback(err);
  })
};

const updateReviewHelpful = (params, callback) => {
  const route = API + `reviews/${params.review_id}/helpful`;
  //console.log(route);
  axios.put(route, null, {headers:
    {Authorization: TOKEN}, params: params})
  .then((res) => {

    callback(null, res.data)
  })

  .catch((err) => {

    callback(err);

  })
};



const getStyles = (id, callback) => { //console.log("IN API FUNC:", id)

  let headers = { Authorization: `${TOKEN}` };
  return axios.get(`${API}products/${id}/styles`, { headers: headers })
  .then((res) => { //console.log(res.data)

    callback(null, res.data);
  })

  .catch((err) => { callback(err); })

};










const getReviewsMeta = (params, callback) => {
  const route = API + `reviews/meta`;
  axios.get(route, {headers:
    {Authorization: TOKEN}, params: params})
  .then((res) => {
    callback(null, res.data)
  })
  .catch((err) => {
    callback(err);
  })
};

const postForm = (params, callback) => {
  const route = API + `reviews/`;
  axios.post(route, params, {headers:
    {Authorization: TOKEN}})
  .then((res) => {
    callback(null, res.data)
  })
  .catch((err) => {
    callback(err);
  })
};
//**********************Question and Answers ****************************/
const getQuestions = (params, callback) => {
  const route = API + `qa/questions`;
  axios.get(route, {headers:
    {Authorization: TOKEN}, params: params})
  .then((res) => {
    callback(null, res.data)
  })
  .catch((err) => {
    callback(err);
  })
};
const updateQuestionHelpful = (params, callback) => {
  const route = API + `qa/questions/${params.question_id}/helpful`;
  axios.put(route, null, {headers:
    {authorization: TOKEN}, params: params})
  .then((res) => {
    callback(null, res.data)
  })
  .catch((err) => {
    callback(err);
  })
};
const updateQuestionReport = (params, callback) => {
  const route = API + `qa/questions/${params.question_id}/report`;
  axios.put(route, null, {headers:
    {authorization: TOKEN}, params: params})
  .then((res) => {
    callback(null, console.log(res.data))
  })
  .catch((err) => {
    callback(console.log(err));
  })
};
const updateAnswerHelpful = (params, callback) => {
  const route = API + `qa/answers/${params.answer_id}/helpful`;
  axios.put(route, null, {headers:
    {authorization: TOKEN}, params: params})
  .then((res) => {
    callback(null, res.data)
  })
  .catch((err) => {
    callback(err);
  })
};
const updateAnswerReport = (params, callback) => {
  const route = API + `qa/answers/${params.answer_id}/report`;
  axios.put(route, null, {headers:
    {authorization: TOKEN}, params: params})
  .then((res) => {
    callback(null, res.data)
  })
  .catch((err) => {
    callback(err);
  })
};

const submitAnswer = (body, callback) => {
  console.log('API console log', body)
  const route = API + `qa/questions/${body.question_id}/answers`
  axios.post(route, body, {headers:
    {authorization: TOKEN}})
  .then((res) => {
    callback(null, res.data)
  })
  .catch((err) => {
    callback(err);
  })
};

const submitQuestion = (body, callback) => {
  const route = API + `qa/questions`
  axios.post(route, body, {headers:
    {authorization: TOKEN}})
  .then((res) => {
    callback(null, console.log(res.data))
  })
  .catch((err) => {
    callback(console.log('error in api'), err);
  })
};

const postInteraction = (params, callback) => {
  const route = API + `interactions/`;
  console.log(params);
  axios.post(route, params, {headers:
    {Authorization: TOKEN}})
  .then((res) => {
    callback(null, res.data)
  })
  .catch((err) => {
    callback(err);
  })
};

module.exports = {
  getReviews,
  updateReviewHelpful,
  getReviewsMeta,
  getQuestions,
  getProducts,
  postForm,
  updateQuestionHelpful,
  updateQuestionReport,
  updateAnswerHelpful,
  updateAnswerReport,
  submitAnswer,
  submitQuestion,
  getStyles,
  postInteraction
};