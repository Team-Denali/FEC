import React, { useState, useEffect } from "react";
import AnswerList from "./AnswerList.jsx";
import axios from "axios";
import Amodal from "./AnswerModal.jsx";
import {
  BsFillArrowUpSquareFill,
  BsFillArrowDownSquareFill,
} from "react-icons/bs";
import { MdOutlineExpandCircleDown } from "react-icons/md";
import "./QnA.css";

const QuestionList = ({ question }) => {
  const [answers, setAnswers] = useState(question.answers);
  const [result, setResult] = useState(2);
  const [modal, setModal] = useState(false);

  var answerArray = [];
  function format(answers) {
    for (var key in answers) {
      answerArray.push(answers[key]);
    }
  }
  format(answers);
  //set seller to #1 result
  const sortedArray = answerArray.sort((a, b) =>
    a.helpfulness < b.helpfulness ? 1 : -1
  );

  function clickHandler(amount) {
    setResult((currentResult) => {
      return currentResult + amount;
    });
  }
  function formHandler(event) {
    event.preventDefault();
    setModal(false);
  }
  // vote handler for question helpfulness
  function voteHandler(event) {
    event.currentTarget.classList.toggle("voted");
    console.log(question.question_id);
    axios
      .put(`/qa/questions/:${question.question_id}/helpful`)
      .then((res) => {
        console.log("response to put for questions", res);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  function reportHandler(event) {
    event.target.innerText = "ReportED";
    axios
      .put(`/qa/answers/:${question.question_id}/helpful`)
      .then((res) => {
        console.log("response to put for questions", res);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  return (
    <>
      <div className="qQuestionCard">
        <div>
          <div>
            <b>Q: {question.question_body}</b>
          </div>
          <br></br>

          {answerArray.slice(0, result).map((answer, i) => (
            <AnswerList answer={answer} key={i} />
          ))}

        {result < answerArray.length && <button
            className="buttonStyle"
            style={{ height: "1rem" }}
            onClick={() => clickHandler(answerArray.length)}
          >
            Load More Answers <MdOutlineExpandCircleDown />
          </button>}
        {(answerArray.length > 2 && result > answerArray.length ) && <button
            className="buttonStyle"
            style={{ height: "1rem" }}
            onClick={() => setResult(2)}
          >
            Collapse Answers <MdOutlineExpandCircleDown />
          </button>}
        </div>
        <div>
          <BsFillArrowUpSquareFill className="vote" onClick={voteHandler} />(
          {question.question_helpfulness}) Upvote!
          <button
            style={{ background: "white", border: "none", cursor: "pointer" }}
            onClick={() => setModal(true)}
          >
            <b>Add Answer</b>
          </button>{" "}
          <a onClick={reportHandler} style={{ cursor: "pointer" }}>
            Report
          </a>
        </div>
        <Amodal open={modal} onClose={formHandler} />
      </div>
    </>
  );
};

export default QuestionList;
