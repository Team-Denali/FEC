const express = require("express");
const path = require("path");
const controller = require("./controller.js");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.static(path.join(__dirname,'../public')));
app.use(express.json());

app.get('/reviews/', (req,res) => {
  //console.log("running");
  controller.getReviews(req,res);
})
app.get('/qa/questions', (req,res) => {
  //console.log("running");
  controller.getQuestions(req,res);
})




app.listen(PORT);
console.log(`Server listening at http://localhost:${PORT}`);