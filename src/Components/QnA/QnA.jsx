import React, { useState, useEffect, useContext } from "react";
import QuestionList from "./QuestionList.jsx";
import Qmodal from "./QuestionModal.jsx";
import axios from "axios";
import Button from "@mui/material/Button";
import "./QnA.css";
import ElementContext from "../../ElementContext.js";
import ClickTracker from "../../ClickTracker.jsx";
const QuestionsAnswers = ({ current }) => {
  let product = current.id;
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
    if (result >= sortedArray.length) {
      setHideButton(false);
    } else if (filteredData.length < 3) {
      setHideButton(false);
    } else {
      setHideButton(true);
    }
  }, sortedArray);
  const element = useContext(ElementContext);
  const id = current.id;
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
  //sort an array of objects based no helpfulnes using the searched input as a first check
  const sortedArray = filteredData.sort((a, b) =>
    a.question_helpfulness < b.question_helpfulness ? 1 : -1
  );

  // get questions on initial render
  useEffect(() => {
    getQuestions();
    setResult(2);
  }, [product]);

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

  return (
    <>
      <h4>Questions & Answers</h4>
      {qaData.length === 0 ? (
        <ElementContext.Provider value="noData">
          <ClickTracker
            selector={`${element}-NoQuestionLanding-ProductId:${id}`}
            WrappedComponent={
              <div className="qaMainContainer">
                <h2>no questions</h2>
                <button className="buttonStyle" onClick={() => setModal(true)}>
                  ADD A QUESTION +
                </button>
                <Qmodal current={product} open={modal} onClose={setModal} />
              </div>
            }
          />
        </ElementContext.Provider>
      ) : (
        <div className="qaMainContainer">
          <ElementContext.Provider value="search-module">
            <div className="qaSearchContainer">
              <ClickTracker
                selector={`${element}-SearchField-ProductId:${id}`}
                WrappedComponent={
                  <input
                    onChange={changeHandler}
                    className="qaSearchStyle"
                    type="text"
                    placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS..."
                  ></input>
                }
              />
            </div>
          </ElementContext.Provider>
          <ElementContext.Provider value="questionContainer">
            <div className="qaListContainer">
              <div>
                {sortedArray.slice(0, result).map((question, i) => (
                  <QuestionList
                    product={current.name}
                    question={question}
                    key={i}
                  />
                ))}
              </div>
            </div>
          </ElementContext.Provider>
          <ElementContext.Provider value="buttonContainer">
            <div className="qaButtonContainer">
              {hideButton && (
                <ClickTracker
                  selector={`${element}-MoreQuestionsButton-ProductId:${id}`}
                  WrappedComponent={
                    <Button variant="outlined" onClick={() => clickHandler(2)}>
                      MORE ANSWERED QUESTIONS
                    </Button>
                  }
                />
              )}
              {!hideButton && (
                <Button variant="outlined" onClick={() => setResult(2)}>
                  COLLAPSE QUESTIONS
                </Button>
              )}

              <Button variant="outlined" onClick={() => setModal(true)}>
                ADD A QUESTION +
              </Button>
              <Qmodal current={current} open={modal} onClose={setModal} />
            </div>
          </ElementContext.Provider>
        </div>
      )}
    </>
  );
};

export default QuestionsAnswers;
