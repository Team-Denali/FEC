import React, { useState } from "react";
import "./QnA.css";

var Qmodal = ({ open, onClose }) => {
  if (!open) return null;

  return (
    <>
      <div className="overlay">
        <form className="qmodal">ß
          <div>
            <label>Question:</label>
            <input type="text" name="answer" id="answer"></input>
          </div>
          <div>
            <label>Nickname:</label>
            <input type="text" name="nickname" id="qnickname"></input>
          </div>
          <div>
            <label>Email</label>
            <input type="text" name="email" id="qemail"></input>
          </div>
          <button onClick={onClose} type="button">
            Sumbit
          </button>
        </form>
      </div>
    </>
  );
};

export default Qmodal;
