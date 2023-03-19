const axios = require ('axios'); require("dotenv").config();
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


const getStyles = (id, callback) => {

  let headers = { Authorization: `${process.env.API_TOKEN}` };
  return axios.get(`${API}products/${id}/styles`, { headers: headers })
  .then((res) => { //console.log(res.data)

    callback(null, res.data);
  })

  .catch((err) => { callback(err); })

};









module.exports = {getReviews, getQuestions, getProducts, getStyles};
