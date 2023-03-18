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





const updateReviewHelpful = (req, res) => {
  const params = req.body.params;
  //console.log('running')
  API.updateReviewHelpful(params, (err, reviews) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(204).send();
    }
  })
}

const getReviewsMeta = (req, res) => {
  const params = req.query;
  API.getReviewsMeta(params, (err, reviews) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(reviews);
    }
  })
};



module.exports = {
  getReviews,
  updateReviewHelpful,
  getReviewsMeta,
  getQuestions,
  getProducts
}