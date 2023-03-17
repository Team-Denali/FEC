import React from "react";
import "./QnA.css";

var AnswerList = ({ answer }) => {

  return (
    <>
      <div style={{ display: "flex" }}>
        <div className="qaList">
          <div>
            <b>A:</b> {answer.body}
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div>
              by {answer.answerer_name}, {answer.date} Helpful | <u>Yes</u>(
              {answer.helpfulness}) | Report
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AnswerList;
