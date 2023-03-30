import React, { useState, useEffect, useContext } from "react";
import AnswerList from "./AnswerList.jsx";
import axios from "axios";
import Amodal from "./AnswerModal.jsx";
// import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
//import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
// import ExpandCircleDownIcon from '@mui/icons-material/ExpandCircleDown';
//import { MdOutlineExpandCircleDown } from "react-icons/md";
import "./QnA.css";
import Button from "@mui/material/Button";
import ElementContext from "../../ElementContext.js";
import ClickTracker from "../../ClickTracker.jsx";

const QuestionList = ({ product, question, key }) => {
  const element = useContext(ElementContext);
  const [answers, setAnswers] = useState(question.answers);
  const [result, setResult] = useState(2);
  const [modal, setModal] = useState(false);
  const id = question.question_id;
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

  let sortedArray = array.sort((a, b) =>
    a.helpfulness < b.helpfulness ? 1 : -1
  );

  function concattedArray() {
    let sortArray = sortedArray;
    let concatArray = [];
    sortArray.forEach((element, index) => {
      if (element.answerer_name.toLowerCase() === "seller") {
        concatArray = sortArray.splice(index, 1);
      }
    });
    return concatArray.concat(sortArray);
  }

  const newArray = concattedArray();

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
        // console.log("response to put for questions", res);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  //reports questions for violations
  function reportHandler(event) {
    event.target.innerText = "REPORTED";
    axios
      .put(`/qa/questions/${question.question_id}/report`, {
        params: {
          question_id: question.question_id,
        },
      })
      .then((res) => {
        // console.log("response to put for questions", res);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  //keeps the questions list updated
  useEffect(() => {
    setAnswers(question.answers);
  }, [question]);

  return (
    <>
      <div className="qQuestionCard">
        <div>
          <ElementContext.Provider value={`${element}-Questioncard-${id}`}>
            <ClickTracker
              selector={`${element}-QuestionTitle-questionId:${id}`}
              WrappedComponent={
                <div>
                  <b>Q: {question.question_body}</b>
                </div>
              }
            />
          </ElementContext.Provider>
          {newArray.slice(0, result).map((answer, i) => (
            <ClickTracker
              selector={`${element}-AnswerCard-questionId:${id}`}
              WrappedComponent={<AnswerList answer={answer} key={i} />}
            />
          ))}
          {result < array.length && (
            <ClickTracker
              selector={`${element}-Load_More_Question_Button-${id}`}
              WrappedComponent={
                <Button
                  size="small"
                  variant="outlined"
                  onClick={() => clickHandler(array.length)}
                >
                  Load More Answers <MdOutlineExpandCircleDown />
                </Button>
              }
            />
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
          question={question}
          product={product}
        />
      </div>
    </>
  );
};

export default QuestionList;
