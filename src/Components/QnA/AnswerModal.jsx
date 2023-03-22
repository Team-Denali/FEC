import React, {useState} from "react";
import "./QnA.css";

var Amodal = ({ open, onClose }) => {
  if (!open) return null;


const photoHandler = (event) => {
  const selectedPhotos = event.target.files;
  const selectedPhotosArray = Array.from(selectedPhotos);
  const imagesArray = selectedPhotosArray.map((file) => {
    return URL.createObjectURL(file)
  })

  // setPhotos(imagesArray)
  const submission = document.getElementById("submission")
  if(selectedPhotosArray.length > 5) {
    window.alert('Photo Limit Reached. Max-Limit = 5')
    setPhotos([])
    submission.style.visibility = 'hidden'
    } else {
    setPhotos(imagesArray)
    submission.style.visibility = 'visible'
    }
}

const [answer, setAnswer] = useState('')
const [nickname, setNickname] = useState('')
const [email, setEmail] = useState('')
const [photos, setPhotos] = useState([])

const changeHandler = (e) => {
  if(e.target.name === 'answer'){
    setAnswer(e.target.value)
  }
  if(e.target.name === 'nickname'){
    setNickname(e.target.value)
    console.log(nickname)
  }
  if(e.target.name === 'email'){
    setEmail(e.target.value)
  }
const submitHandler = () => {
  //click handler for the submit button
}

}
  return (
    <>
      <div className="overlay">
        <form className="qmodal">
            <h1>Submit Your Answer</h1>
            <h3>[Product Name: Quesiton Body]</h3>
            <div style = {{display: 'flex', flexDirection: 'column', alignItems: 'flexEnd'}}>
            <div>
              <label>Nickname:</label>
              <input onChange = {changeHandler} type="text" maxLength = '60' placeholder = 'Example: jack543!'name="nickname" id="anickname" value = {nickname}></input>
             <div>For privacy reasons, do not use your full name or email address.</div>
            </div>
            <div>
              <label>Email</label>
              <input onChange = {changeHandler} type="text" maxLength = '60' placeholder = 'jack@email.com' name="email" id="aemail" value = {email}></input>
              <div>For authentication reasons, you will not be emailed.</div>
            </div>
            <div>
              <label>Answer:</label>
              <textarea name="answer" id="answer" maxLength = '1000' value = {answer} onChange = {changeHandler}></textarea>
            </div>
            <div>
            </div>
              <input
              type = 'file'
              name = 'images'
              onChange = {photoHandler}
              multiple></input>
              <div className = 'images'>{photos && photos.map((image, index) => {
                return(
                  <div key = {image} >
                    <img className = 'image'src ={image}/>
                    <button onClick= {() => setPhotos(photos.filter((e)=> e !==image))}>Delete</button></div>
                )
              })} </div>
              <button id ='submission' onClick={onClose} type="button">
                Submit Answer
              </button>
            </div>

        </form>
      </div>
    </>
  );
};

export default Amodal;
