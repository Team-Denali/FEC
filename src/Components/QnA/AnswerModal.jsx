import React, { useState } from "react";
import axios from "axios";
import "./QnA.css";

var Amodal = ({ open, onClose, question }) => {
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

  const [answer, setAnswer] = useState("");
  const [nickname, setNickname] = useState("");
  const [email, setEmail] = useState("");
  const [photos, setPhotos] = useState([]);
  const formData = {
    question_id: question,
    body: answer,
    name: nickname,
    email: email,
    photos: photos
  }

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
    console.log(formData)
    e.preventDefault();
    axios
      .post(`/qa/questions/:question_id/answers`, formData)
      .then((res) => {
        console.log('response from answer modal axios submission', res)
      })
      .catch((err) => {
        console.log(err)
      })
    console.log("submitted modal");
    onClose(false);
    //click handler for the submit button
  };

  return (
    <>
      <div className="overlay">
        <form onSubmit = {submitHandler} id="amodal" className="qmodal">
          <h1>Submit Your Answer</h1>
          <h3>[Product Name: Quesiton Body]</h3>

            <div>
              <label>Nickname:</label><br></br>
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
              <div style = {{fontSize: '10px'}}>
                For privacy reasons, do not use your full name or email address.
              </div>
            </div>
            <div>
              <label>Email:</label><br></br>
              <input
                onChange={changeHandler}
                type="text"
                maxLength="60"
                placeholder="jack@email.com"
                name="email"
                id="aemail"
                pattern = '[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$'
                value={email}
              ></input>
              <div style = {{fontSize: '10px'}}>For authentication reasons, you will not be emailed.</div>
            </div>
            <div>
              <label>Answer:</label><br></br>
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
            <div className="images">
              {photos &&
                photos.map((image, index) => {
                  return (
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
