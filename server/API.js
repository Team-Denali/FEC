const axios = require ('axios'); // .require("dotenv").config(); .env config
const config = require('../config/myConfig.js');
const TOKEN = config.TOKEN;

const API = `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/`;

const getReviews = (params, callback) => {
  const route = API + `reviews/`;
  axios.get(route, {headers:
    {Authorization: `${TOKEN}`}, params: params})

  .then((res) => {
    callback(null, res.data)
  })
  .catch((err) => {
    callback(err);

  })
};
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
    {authorization: TOKEN}, params: params})
  .then((res) => {

    callback(null, res.data)
  })

  .catch((err) => {

    callback(err);

  })
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

const getStyles = (id, callback) => { //console.log("IN API FUNC:", id)

  let headers = { Authorization: `${TOKEN}` };
  return axios.get(`${API}products/${id}/styles`, { headers: headers })
  .then((res) => { //console.log(res.data)

    callback(null, res.data);
  })

  .catch((err) => { callback(err); })

};








const updateReviewHelpful = (params, callback) => {
  const route = API + `reviews/${params.review_id}/helpful`;
  //console.log(route);
  axios.put(route, null, {headers:
    {authorization: TOKEN}, params: params})
  .then((res) => {
    callback(null, res.data)
  })
  .catch((err) => {
    callback(err);
  })
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
  const route = API + `reviews`;
  axios.post(route, params, {headers:
    {Authorization: TOKEN}})
  .then((res) => {
    callback(null, res.data)
  })
  .catch((err) => {
    callback(err);
  })
, getStyles};

module.exports = {
  getReviews,
  updateReviewHelpful,
  getReviewsMeta,
  getQuestions,
  getProducts,
  postForm
};