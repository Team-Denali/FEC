const express = require("express"); require("dotenv").config();
const path = require("path"); const bodyParser = require('body-parser');
const controller = require("./controller.js");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.static(path.join(__dirname,'../public'))); app.use(express.json());
 //app.get('/', (req, res) => {console.log('in root url get req!!!'); res.end})

app.get('/reviews/', (req,res) => {
  //console.log("running");
  controller.getReviews(req,res);
})
app.get('/qa/questions', (req,res) => {

  //console.log("running");
  controller.getQuestions(req,res);
})
app.get(['/products', '/products/:id', '/products/:id/:related'], (req,res) => {
  //console.log('get products params: ', req.params);
  controller.getProducts(req,res);
})

app.get('/styles', (req, res) => { //console.log('overview req got here!');
  //console.log(req.query)

  controller.getStyles(req, res)

})

app.listen(PORT, () => {console.log(`Server is listening at http://localhost:${PORT}`);});
