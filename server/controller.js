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
<<<<<<< HEAD



//**********************Question and Answers ****************************/
const getQuestions = (req, res) => {
=======
const getQuestions = (req, res) => { //console.log('in getQuestions')
>>>>>>> f480afdf806ac90fd4cb0f963f58c5b4a6d25556
  const params = req.query;
  API.getQuestions(params, (err, questions) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(questions);
    }
  })
};
<<<<<<< HEAD
const updateQuestionHelpful = (req, res) => {
  const params = req.params;
  API.updateQuestionHelpful(params, (err, result) => {
    if(err) {
      res.status(500).send(console.log('error in controller'));
    } else {
      res.status(200).send(result);
    }
  })
}
const updateQuestionReport = (req, res) => {
  const params = req.params;
  API.updateQuestionReport(params, (err, result) => {
    if(err) {
      res.status(500).send(console.log('error in controller'));
    } else {
      res.status(200).send(result);
    }
  })
}
const updateAnswerHelpful = (req, res) => {
  const params = req.params;
  API.updateAnswerHelpful(params, (err, result) => {
    if(err) {
      res.status(500).send(console.log('error in controller', err));
    } else {
      res.status(200).send(result);
    }
  })
}
const updateAnswerReport = (req, res) => {
  const params = req.params;
  API.updateAnswerReport(params, (err, result) => {
    if(err) {
      res.status(500).send(console.log('error in controller', err));
    } else {
      res.status(200).send(result);
    }
  })
}

const submitAnswer = (req, res) => {
  const body = req.body;
  API.submitAnswer(body, (err, result) => {
    if(err) {
      res.status(500).send(console.log('error in controller', err));
    } else {
      res.status(200).send(result);
    }
  })
}

const submitQuestion = (req, res) => {
  console.log('submit Question controller', req.body)
  const body = req.body
  API.submitQuestion(body, (err, result) => {
    if(err) {
      res.status(500).send(console.log('error in controller', err));
    } else {
      res.status(200).send(result);
    }
  })
}








const getProducts = (req, res) => {
=======
const getProducts = (req, res) => { //console.log('in getProducts')
>>>>>>> f480afdf806ac90fd4cb0f963f58c5b4a6d25556
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
<<<<<<< HEAD
=======

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

}




>>>>>>> f480afdf806ac90fd4cb0f963f58c5b4a6d25556
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











module.exports = {
  getReviews,
  updateReviewHelpful,
  getReviewsMeta,
  getQuestions,
  getProducts,
<<<<<<< HEAD
  postForm,
  updateQuestionHelpful,
  updateQuestionReport,
  updateAnswerHelpful,
  updateAnswerReport,
  submitAnswer,
  submitQuestion
=======
  getStyles,
  postForm
>>>>>>> f480afdf806ac90fd4cb0f963f58c5b4a6d25556
}