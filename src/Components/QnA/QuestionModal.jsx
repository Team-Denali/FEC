import React, { useState } from "react";
import axios from "axios";
import "./QnA.css";

var Qmodal = ({ open, onClose, current }) => {
  if (!open) return null;
console.log(current)
  const [question, setQuestion] = useState("");
  const [nickname, setNickname] = useState("");
  const [email, setEmail] = useState("");
  const formData = {
    body: question,
    name: nickname,
    email: email,
    product_id: current,
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
        console.log("response from answer modal axios submission", res);
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
      <div id = 'qmodal' className="overlay">
        <form className="qmodal" onSubmit={submitHandler}>
        <h1>Submit Question</h1>
          <h3>[Product Name: Quesiton Body]</h3>
          <div>
            <label>Nickname:</label><br></br>
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
            <label>Email:</label><br></br>
            <input
              onChange={changeHandler}
              type="text"
              name="email"
              id="qemail"
              value={email}
              pattern = '[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$'
            ></input>
          </div>
          <div>
            <label>Question:</label><br></br>
            <textarea
              onChange={changeHandler}
              maxLength='1000'
              name="question"
              id="question"
              value = {question}
              required
            ></textarea>
          </div>
          <button type="submit">Submit Question</button>
        </form>
      </div>
    </>
  );
};

export default Qmodal;
