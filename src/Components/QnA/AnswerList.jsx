import React, { useContext } from "react";
import "./QnA.css";
import { format } from "date-fns";
import axios from "axios";
import Button from "@mui/material/Button";
import ClickTracker from "../../ClickTracker.jsx";
import ElementContext from "../../ElementContext.js";

var AnswerList = ({ answer }) => {
  const element = useContext(ElementContext);
  const id = answer.id;

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
        <ClickTracker
          selector={`${element}-AnswerText-answerId:${id}`}
          WrappedComponent={
            <div>
              <b>A:</b> {answer.body}
            </div>
          }
        />

        <div className="qAnswerInfo">
          <div>
            by <b>{answer.answerer_name}</b>,<time>{formatDate}</time>
          </div>
          <div>
            <span style={{ textSize: "10px", color: "grey" }}> Helpful?</span>
            <ClickTracker
              selector={`${element}-vote_A_Button-AnswerId:${id}`}
              WrappedComponent={
                <Button onClick={voteHandler} className="vote">
                  YES [{answer.helpfulness}]
                </Button>
              }
            />
            <ClickTracker
              selector={`${element}-Report_A_Button-AnswerId:${id}`}
              WrappedComponent={
                <Button
                  className="q.report"
                  onClick={reportHandler}
                  value="Report"
                >
                  Report
                </Button>
              }
            />
          </div>
        </div>
        <div className="qModalContent">
          {answer.photos.map((photo, index) => {
            return (
              <ClickTracker
                selector={`${element}-PhotoThumbnail-AnswerId:${id}`}
                WrappedComponent={
                  <div key={index}>
                    {" "}
                    <img
                      style={{ padding: ".25rem" }}
                      className="image"
                      src={photo}
                    />{" "}
                  </div>
                }
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default AnswerList;
