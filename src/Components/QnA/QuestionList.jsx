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

  //formats our answers to make it able to slice
  function format(answers) {
    let answerArray = [];
    for (var key in answers) {
      answerArray.push(answers[key]);
    }
    return answerArray;
  }
  let array = format(answers);
  //set seller to #1 result
  const sortedArray = array.sort((a, b) =>
    a.helpfulness < b.helpfulness ? 1 : -1
  );
  //slices the data to show more answers on request
  function clickHandler(amount) {
    setResult((currentResult) => {
      return currentResult + amount;
    });
  }
  // vote handler for question helpfulness
  function voteHandler(event) {
    event.currentTarget.classList.toggle("voted");
    axios
      .put(`/qa/questions/${question.question_id}/helpful`, {
        params: {
          question_id: question.question_id,
        },
      })
      .then((res) => {
        console.log("response to put for questions", res);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  //reports questions for violations
  function reportHandler(event) {
    event.target.innerText = "ReportEDdddd";
    axios
      .put(`/qa/questions/${question.question_id}/report`, {
        params: {
          question_id: question.question_id,
        },
      })
      .then((res) => {
        console.log("response to put for questions", res);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  //keeps the questions list updated
  useEffect(() => {
    setAnswers(question.answers)
  }, [question]);

  return (
    <>
      <div className="qQuestionCard">
        <div>
          <div>
            <b>Q: {question.question_body}</b>
          </div>
          <br></br>

          {array.slice(0, result).map((answer, i) => (
            <AnswerList answer={answer} key={i} />
          ))}

          {result < array.length && (
            <button
              className="buttonStyle"
              style={{ height: "1rem" }}
              onClick={() => clickHandler(array.length)}
            >
              Load More Answers <MdOutlineExpandCircleDown />
            </button>
          )}
          {array.length > 2 && result > array.length && (
            <button
              className="buttonStyle"
              style={{ height: "1rem" }}
              onClick={() => setResult(2)}
            >
              Collapse Answers <MdOutlineExpandCircleDown />
            </button>
          )}
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
        <Amodal
          open={modal}
          onClose={setModal}
          question={question.question_id}
        />
      </div>
    </>
  );
};

export default QuestionList;
