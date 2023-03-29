import React, { useState, useContext } from "react";
import axios from "axios";
import "./QnA.css";
import ElementContext from "../../ElementContext.js";
import ClickTracker from "../../ClickTracker.jsx";

var Amodal = ({ open, onClose, product, question }) => {
  if (!open) return null;
  const photoHandler = (event) => {
    const selectedPhotos = event.target.files;
    const selectedPhotosArray = Array.from(selectedPhotos);
    const imagesArray = selectedPhotosArray.map((file) => {
      return URL.createObjectURL(file);
    });

    // setPhotos(imagesArray)
    const submission = document.getElementById("submission");
    if (selectedPhotosArray.length > 5) {
      window.alert("Photo Limit Reached. Max-Limit = 5");
      setPhotos([]);
      submission.style.visibility = "hidden";
    } else {
      setPhotos(imagesArray);
      submission.style.visibility = "visible";
    }
  };
  const element = useContext(ElementContext);
  const id = question.question_id;
  const [answer, setAnswer] = useState("");
  const [nickname, setNickname] = useState("");
  const [email, setEmail] = useState("");
  const [photos, setPhotos] = useState([]);
  const formData = {
    question_id: question.question_id,
    body: answer,
    name: nickname,
    email: email,
    photos: photos,
  };

  const changeHandler = (e) => {
    if (e.target.name === "answer") {
      setAnswer(e.target.value);
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
      .post(`/qa/questions/:question_id/answers`, formData)
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
      <div className="overlay">
        <form onSubmit={submitHandler} id="amodal" className="qmodal">
          <ClickTracker
            selector={`${element}-AModal_CloseButton-QuestionId:${id}`}
            WrappedComponent={
              <button onClick={() => onClose(false)}>Close</button>
            }
          />
          <ClickTracker
            selector={`${element}-AModal_Title-QuestionId:${id}`}
            WrappedComponent={
              <div>
                <h3>Product: {product}</h3>
                <h3>Question: {question.question_body}</h3>
              </div>
            }
          />
          <ClickTracker
            selector={`${element}-AModal_Form-QuestionId:${id}`}
            WrappedComponent={
              <div>
                <div>
                  <label>Nickname:</label>
                  <br></br>
                  <input
                    onChange={changeHandler}
                    type="text"
                    maxLength="60"
                    placeholder="Example: jack543!"
                    name="nickname"
                    id="anickname"
                    value={nickname}
                    required
                  ></input>
                  <div style={{ fontSize: "10px" }}>
                    For privacy reasons, do not use your full name or email
                    address.
                  </div>
                </div>
                <div>
                  <label>Email:</label>
                  <br></br>
                  <input
                    onChange={changeHandler}
                    type="text"
                    maxLength="60"
                    placeholder="jack@email.com"
                    name="email"
                    id="aemail"
                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                    value={email}
                  ></input>
                  <div style={{ fontSize: "10px" }}>
                    For authentication reasons, you will not be emailed.
                  </div>
                </div>
                <div>
                  <label>Answer:</label>
                  <br></br>
                  <textarea
                    name="answer"
                    id="answer"
                    maxLength="1000"
                    value={answer}
                    onChange={changeHandler}
                    required
                  ></textarea>
                </div>
                <div></div>
                <input
                  type="file"
                  name="images"
                  onChange={photoHandler}
                  multiple
                ></input>
              </div>
            }
          />
          <div className="images">
            {photos &&
              photos.map((image, index) => {
                return (
                  <ClickTracker
                    selector={`${element}-Thumbnail-QuestionId:${id}`}
                    WrappedComponent={
                      <div key={image}>
                        <img className="image" src={image} />
                        <button
                          onClick={() =>
                            setPhotos(photos.filter((e) => e !== image))
                          }
                        >
                          Delete
                        </button>
                      </div>
                    }
                  />
                );
              })}{" "}
          </div>

          <button id="submission" type="submit">
            Submit Answer
          </button>
        </form>
      </div>
    </>
  );
};

export default Amodal;
