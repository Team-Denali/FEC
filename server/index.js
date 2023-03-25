const express = require("express"); require("dotenv").config();
const path = require("path"); const bodyParser = require('body-parser');
const controller = require("./controller.js");
const sessions = require("./sessions.js");
var session = require('express-session');

const PORT = process.env.PORT || 3000;

const app = express();

let count = 0;
const genId = () => count++;

app.use(express.static(path.join(__dirname,'../public'))); app.use(express.json());
 //app.get('/', (req, res) => {console.log('in root url get req!!!'); res.end})
app.use(session({
  // genid: genId,
  secret: 'keyboard cat'
}))
app.use((req, res, next) => {
  console.log('-----------------------------')
  console.log('serving request: ', req.method, req.path, req.query);
  // console.log('sessionID: ', req.sessionID);
  next();
})

app.get('/reviews/', (req,res) => {
  //console.log("running");
  controller.getReviews(req,res);
})

app.put(`/review/:review_id/helpful`, (req,res) => {
  //console.log("running");
  controller.updateReviewHelpful(req,res);
});

app.get('/reviews/meta', (req,res) => {
  controller.getReviewsMeta(req, res);
})

app.get('/qa/questions', (req,res) => {

  controller.getQuestions(req,res);
})
app.get(['/products', '/products/:id', '/products/:id/:related'], (req,res) => {
  //console.log('get products params: ', req.params);
  controller.getProducts(req,res);
})

app.post('/reviews',(req,res) => {
  controller.postForm(req,res);
})

app.post('/reviews',(req,res) => {
  controller.postForm(req,res);
})

app.get('/styles', (req, res) => {

  controller.getStyles(req, res)

})

app.post('/outfit', (req, res) => {
  sessions.setOutfit(req.sessionID, req.body);
})

app.get('/outfit', (req, res) => {
  var outfit = sessions.getOutfit(req.sessionID);
  outfit = outfit === undefined ? [] : outfit;
  res.status(200).send(outfit);
})

app.get('/null', (req, res) => {
  // console.log('get null req: ', req.sessionStore)
  // console.log('GET /null req: WHY IS THIS HERE?')
  res.sendStatus(200)
})

app.listen(PORT, () => {console.log(`Server is listening at http://localhost:${PORT}`);});
