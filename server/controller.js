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

module.exports = {getReviews}