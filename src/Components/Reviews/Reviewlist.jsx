import React, { useState, useEffect } from "react";
import axios from "axios";
import ReviewItem from "./ReviewItem.jsx";
import Modal from "./Modal.jsx";

const Reviewlist = ({reviews, product_id, postForm, setSortmethod}) => {
  //console.log(reviews)
  const [reviewnumber, setReviewnumber] = useState(2);
  const [showModal, setshowModal] = useState(false);
  const [rating, setRating] = useState(null);
  const [summary, setSummary] = useState('');
  const [body, setBody] = useState('');
  const [recommend, setRecommend] = useState(null);
  const [username, setUsername] = useState('');
  const[email, setEmail] = useState('');
  const[photos, setPhotos] = useState([]);
  const[characteristics, setCharacteristics] = useState({});
  const [form, setForm] = useState(false);
  const [sort, setSort] = useState('relevant');

  const addReview = () => {
    var r = reviewnumber;
    setReviewnumber(r + 2);
  }

  const createReview = () => {
    setshowModal(!showModal);
  }

  const sortmethods = (e) => {
    setSort(e.target.value);
    setSortmethod(e.target.value);
  }

  var rl = reviews||[];
  //get reviews from api for specific product id
  var rl = rl.slice(0, reviewnumber);
  var rlist = rl.map((r)=>{
    return <ReviewItem key = {r.review_id} product_id={product_id} review={r}/>;
  });
  //console.log(rl);

  if (form === true) {
    postForm({
      "product_id": product_id,
      "rating": Number(rating),
      "summary": summary,
      "body": body,
      "recommend": recommend,
      "name": username,
      "email": email,
      "photos": photos,
      "characteristics": characteristics
    });
    setForm(false);
  };

  if (rlist.length > 0 ){
    return (
    <div>
      <div>{rlist.length} reviews, sorted by
      <select name ="Sort" id="reviews" onChange={sortmethods}>
        {['relevant', 'helpful', 'newest'].map((item, i)=> {
          return <option key={i} value={item}>{item}</option>
        })}
      </select>
      </div>
      <div className = 'review-list'>
          {rlist}
      </div>
      <button className="ReviewButtons" onClick={addReview}>more reviews</button>
      <div className="modal">
      <button className="ReviewButtons" onClick={createReview}>write a review</button>
      <Modal
        show={showModal}
        closeModal={createReview}
        setUsername={setUsername}
        setEmail={setEmail}
        setRating={setRating}
        setSummary={setSummary}
        setRecommend={setRecommend}
        setBody={setBody}
        setPhotos={setPhotos}
        setForm={setForm}
        customClass="CustomModal"
      >
      </Modal>
      </div>
    </div>
    )
  } else {
    return <div>No comment now. Be the first one to comment?</div>
  }


}

export default Reviewlist;