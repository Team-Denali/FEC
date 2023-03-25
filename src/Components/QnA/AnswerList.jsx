import React from "react";
import "./QnA.css";
import { format } from "date-fns";
import {
  BsFillArrowUpSquareFill,
  BsFillArrowDownSquareFill,
} from "react-icons/bs";
import axios from "axios";

var AnswerList = ({ answer }) => {
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  let date = new Date(answer.date);
  const formatDate =
    monthNames[date.getMonth()] +
    " " +
    date.getDate() +
    ", " +
    date.getFullYear();

  function voteHandler(event) {
    event.currentTarget.classList.toggle("voted");
    // console.log(answer);
    axios
      .put(`/qa/answers/${answer.id}/helpful`, {
        params: {
          answer_id: answer.id,
        },
      })
      .then((res) => {
        // console.log("response to put for answers", res);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function reportHandler(event) {
    event.target.innerText = "ReportED";
    axios
      .put(`/qa/answers/${answer.id}/report`)
      .then((res) => {
        // console.log("response to put for questions", res);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  return (
    <>
      <div className="qAnswerCard">
        <div>
          <b>A:</b> {answer.body}
        </div>
        <div className="qAnswerInfo">
          <div>
            by <b>{answer.answerer_name}</b>,<time>{formatDate}</time>
          </div>
          <div>
            <span>Upvote!</span>
            <BsFillArrowUpSquareFill onClick={voteHandler} className="vote" />(
            {answer.helpfulness})
            <span className="q.report" onClick={reportHandler} value="Report">
              Report
            </span>
          </div>
        </div>
        <div className="qModalContent">
          {answer.photos.map((photo, index) => {
            return (
              <div key={index}>
                {" "}
                <img
                  style={{ padding: ".25rem" }}
                  className="image"
                  src={photo}
                />{" "}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default AnswerList;
