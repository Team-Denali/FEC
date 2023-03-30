import React, { useState, useContext } from "react";
import axios from "axios";
import "./QnA.css";
import ElementContext from "../../ElementContext.js";
import ClickTracker from "../../ClickTracker.jsx";

var Qmodal = ({ open, onClose, current }) => {
  if (!open) return null;
  const element = useContext(ElementContext);
  const id = current.id;
  const [question, setQuestion] = useState("");
  const [nickname, setNickname] = useState("");
  const [email, setEmail] = useState("");
  const formData = {
    body: question,
    name: nickname,
    email: email,
    product_id: current.id,
  };
  const changeHandler = (e) => {
    if (e.target.name === "question") {
      setQuestion(e.target.value);
    }
    if (e.target.name === "nickname") {
      setNickname(e.target.value);
    }
    if (e.target.name === "email") {
      setEmail(e.target.value);
    }
  };
  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .post(`/qa/questions`, formData)
      .then((res) => {
        // console.log("response from answer modal axios submission", res);
      })
      .catch((err) => {
        console.log(err);
      });

    console.log("submitted modal");
    onClose(false);
    //click handler for the submit button
  };

  return (
    <>
      <div id="qmodal" className="overlay">
        <form className="qmodal" onSubmit={submitHandler}>
          <button onClick={() => onClose(false)}>Close</button>
          <ClickTracker
            selector={`${element}-Qmodal_Title-ProductId:${id}`}
            WrappedComponent={
              <div>
                <h2>Submit Question:</h2>
                <h3>Product: {current.name}</h3>
              </div>
            }
          />
 <ClickTracker
            selector={`${element}-Qmodal_Form-ProductId:${id}`}
            WrappedComponent={
              <div>
          <div>
            <label>Nickname:</label>
            <br></br>
            <input
              onChange={changeHandler}
              type="text"
              name="nickname"
              id="qnickname"
              value={nickname}
              required
            ></input>
          </div>
          <div>
            <label>Email:</label>
            <br></br>
            <input
              onChange={changeHandler}
              type="text"
              name="email"
              id="qemail"
              value={email}
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
            ></input>
          </div>
          <div>
            <label>Question:</label>
            <br></br>
            <textarea
              onChange={changeHandler}
              maxLength="1000"
              name="question"
              id="question"
              value={question}
              required
            ></textarea>
          </div>
          </div>
        }
          />
          <button type="submit">Submit Question</button>
        </form>
      </div>
    </>
  );
};

export default Qmodal;
