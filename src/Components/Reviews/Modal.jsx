import React, { useState } from 'react';
import Rating from '@mui/material/Rating';
import Upload from './Upload.jsx';


const Modal = (props) => {
  const [modalRating, setModalRating] = useState(0);
  const [modalSummary, setModalSummary] = useState('');
  const [modalBody, setModalBody] = useState('');
  const [modalRecommend, setModalRecommend] = useState(null);
  const [modalUsername, setModalUsername] = useState('');
  const[modalEmail, setModalEmail] = useState('');
  const[modalPhoto, setModalPhoto] = useState([])
  const handlesubmit = () => {
    if (typeof modalRecommend === 'string' && modalRecommend === 'No') {
      setRecommend(false);
    } else {
      setRecommend(true);
    };
    setForm(true);
    alert("Submission Successful!");
  }

  const uploadphoto = (photos) => {
    setModalPhoto(photos);
    props.setPhotos(photos);
  }
  return (
    <div style={{ display: props.show ? 'block' : 'none' }}>
    <div className="overlay" onClick={props.closeModal}></div>
    <div className="modalContent">
      <form onSubmit={handlesubmit}>

      <div>
        <div className="modalBar starRating" > Your rating for this product: {modalRating} </div>
        <Rating name="simple-controlled" value={null} onChange={(event, newvalue)=>{setModalRating(newvalue); props.setRating(newvalue);}}/>
      </div>

        <div className="modalSummary">
          <label>
            Summary:
            <input
            onChange={(e)=>{setModalSummary(e.target.value); props.setSummary(e.target.value);}}
            type="text"
            maxLength="60"
            placeholder="Tell us about your experience"
            value={modalSummary}
            required
            />
          </label>
        </div>

        <div className="modalBody">
          <label>
            Body:
            <input
            onChange={(e)=>{setModalBody(e.target.value); props.setBody(e.target.value);}}
            type="text"
            maxLength="1000"
            placeholder="Tell us about your experience"
            value={modalBody}
            required
            />
          </label>
        </div>

        <div className="modalRecommend">
          <label>
            Recommend?:
            <input
            onChange={(e)=>{setModalRecommend(e.target.value); }}
            type="radio"
            name="radioBut"
            value='Yes'
            required
            />
            Yes
          </label>
          <label>
            <input
            onChange={(e)=>{setModalRecommend(e.target.value); }}
            type="radio"
            name="radioBut"
            value='No'
            required
            />
            No
          </label>
        </div>

        <label>Upload Photos:</label>
          <Upload photos={modalPhoto} upload={uploadphoto} />

        <div className="modalNameEmail">
          <label>
            Name:
            <input
            onChange={(e)=>{setModalUsername(e.target.value); props.setUsername(e.target.value);}}
            type="text"
            maxLength="60"
            placeholder="Your Name"
            value={modalUsername}
            required
            />
          </label>
        </div>

        <div className="modalNameEmail">
          <label>
            Email:
            <input
            onChange={(e)=>{setModalEmail(e.target.value); props.setEmail(e.target.value);}}
            type="email"
            placeholder="Your Email"
            value={modalEmail}
            />
          </label>
        </div>

        <input
              className="modalBar modalSubmit"
              type="submit"
              value="Submit"
              messsage='Submission Sucessful'
            />

      </form>
      <button title="Close" className="closeModal" onClick={props.closeModal} >close</button>
    </div>
  </div>
  );
}
export default Modal;
