import React, { useState, useEffect } from "react";
import QuestionList from "./QuestionList.jsx";
import Qmodal from "./QuestionModal.jsx";
import axios from "axios";
import "./QnA.css";

const QuestionsAnswers = ({ current }) => {
  let product =current.id
  const getQuestions = () => {
    if (product) {
      axios
      .get("/qa/questions", {
        params: {
          product_id: product, //no questions
          // product_id: 37323, //alot of questions
          // product_id: product //default
          page: 1,
          count: 40,
        },
      })
      .then((res) => {
        setQaData(res.data.results);
        // console.log("questions:", res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    }
  };

  useEffect(() => {
    if (filteredData.length < 3) {
      setHideButton(false);
    } else if (result === sortedArray.length) {
      setHideButton(false);
    } else {
      setHideButton(true);
    }
  }, sortedArray);

  //master variable that holds all the QA info
  const [qaData, setQaData] = useState([]);
  //used to incrementally add more questions
  const [result, setResult] = useState(2);
  //holds the search item in state to filter questions
  const [searchItem, setSearchItem] = useState("");
  //hide and show Modal depending on boolean
  const [modal, setModal] = useState(false);
  //handle more questions show/hide
  const [hideButton, setHideButton] = useState(true);

  //filter the questions based on what is entered into the search bar
  const filteredData = qaData.filter((question) => {
    return question.question_body
      .toLowerCase()
      .includes(searchItem.toLowerCase());
  });
  // get questions on initial render
  useEffect(() => {
    getQuestions()
    setResult(2);
  }, [product]);

  //sort an array of objects based no helpfulnes using the searched input as a first check
  const sortedArray = filteredData.sort((a, b) =>
    a.question_helpfulness < b.question_helpfulness ? 1 : -1
  );

  // //used for dev purposes no needed in final product
  // useEffect(() => {
  //   console.log("USE EFFECT QA DATA LOGGER", qaData);
  // }, [qaData]);

  //onclick reveals more questions
  function clickHandler(amount) {
    setResult((currentResult) => {
      return currentResult + amount;
    });
  }
  //handles search function and returns if search length > 3
  function changeHandler(event) {
    if (event.target.value.length > 3) {
      return setSearchItem(event.target.value);
    } else {
      return setSearchItem("");
    }
  }

  function formHandler(event) {
    event.preventDefault();
    setModal(false);
  }
  return (
    <>
      <h1>Q & A</h1>
      {qaData.length === 0 ? (
        <div className = 'qaMainContainer'>
          <h2>no questions</h2>
          <button className="buttonStyle" onClick={() => setModal(true)}>
              ADD A QUESTION +
            </button>
            <Qmodal current={product} open={modal} onClose={setModal} />
        </div>
      ) : (
        <div className="qaMainContainer">
          <div className="qaSearchContainer">
            <input
              onChange={changeHandler}
              className="qaSearchStyle"
              type="text"
              placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS..."
            ></input>
          </div>
          <div className="qaListContainer">
            <div>
              {sortedArray.slice(0, result).map((question, i) => (
                <QuestionList question={question} key={i} />
              ))}
            </div>
          </div>
          <div className="qaButtonContainer">
            {hideButton && (
              <button className="buttonStyle" onClick={() => clickHandler(2)}>
                MORE ANSWERED QUESTIONS
              </button>
            )}
            {result === sortedArray.length && (
              <button className="buttonStyle" onClick={() => setResult(2)}>
                COLLAPSE QUESTIONS
              </button>
            )}

            <button className="buttonStyle" onClick={() => setModal(true)}>
              ADD A QUESTION +
            </button>
            <Qmodal current={product} open={modal} onClose={setModal} />
          </div>
        </div>
      )}
    </>
  );
};

export default QuestionsAnswers;
