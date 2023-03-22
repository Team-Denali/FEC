const API = require('./API.js');

const getReviews = (req, res) => { //console.log('in getReviews')
  const params = req.query;
  API.getReviews(params, (err, reviews) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(reviews);
    }
  })
};
const getQuestions = (req, res) => { //console.log('in getQuestions')
  const params = req.query;
  API.getQuestions(params, (err, reviews) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(reviews);
    }
  })
};
const getProducts = (req, res) => { //console.log('in getProducts')
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

const getStyles = (req, res) => { //console.log('IN CONTROLLERS:', req.query)
  let params = req.query;

  let id = params.product_id; //console.log(id);
  API.getStyles(id, (err, styles) => {

    if (err) {
      res.status(500).send(err);
    } else {

      res.status(200).send(styles)

    }
  })






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

const postForm = (req, res) => {
  const params = req.body;
  console.log('params:',params)
  API.postForm(params,(err, reviews)=> {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send();
    }
  })
}



}

module.exports = {getReviews, getQuestions, getProducts, getStyles}

}



module.exports = {
  getReviews,
  updateReviewHelpful,
  getReviewsMeta,
  getQuestions,
  getProducts,
  getStyles,
  postForm
}