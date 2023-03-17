import React, { useState, useEffect } from "react";
import AnswerList from "./AnswerList.jsx";
import "./QnA.css";

const QuestionList = ({ question }) => {
  const [answers, setAnswers] = useState(question.answers);
  const [result, setResult] = useState(2);

  var answerArray = []
  function change (answers) {
     for(var key in answers) {
       answerArray.push(answers[key])
    }
  }
change(answers)
console.log(answerArray)
//set seller to #1 result
const sortedArray = answerArray.sort((a,b) => a.helpfulness < b.helpfulness ? 1 : -1)

  function clickHandler(amount) {
    setResult((currentResult) => {
      return currentResult + amount;
    });
  }



  return (
    <>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div>
          <div>
            <b>Q: {question.question_body}</b>
          </div>
          <br></br>

          {answerArray
            .slice(0, result)
            .map((answer, i) => (
              <AnswerList answer={answer} key={i} />
            ))}

          <button onClick={() => clickHandler(2)}>Load More Answers</button>
        </div>
        <div>
          Helpful{"  "}
          <u>Yes</u>  ({question.question_helpfulness})| {"  "} Add
          Answer
        </div>
      </div>
    </>
  );
};

export default QuestionList;
