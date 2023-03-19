const API = require('./API.js');

const getReviews = (req, res) => {
  const params = req.query;
  API.getReviews(params, (err, reviews) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(reviews);
    }
  })
};
const getQuestions = (req, res) => {
  const params = req.query;
  API.getQuestions(params, (err, reviews) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(reviews);
    }
  })
};
const getProducts = (req, res) => {
  const params = req.params;
  params.id = params.id === undefined ? '' : req.params.id;
  params.related = params.related === undefined ? '' : req.params.related;
  // console.log('params', params);
  API.getProducts(params, (err, products) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(products);
    }
  })
};

const getStyles = (req, res) => { 
  let params = req.query;

  let id = params.product_id; //console.log(id);
  API.getStyles(id, (err, styles) => {

    if (err) {
      res.status(500).send(err);
    } else {

      res.status(200).send(styles)

    }
  })






}

module.exports = {getReviews, getQuestions, getProducts, getStyles}
