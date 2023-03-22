import React, { useState, useEffect } from "react";
import axios from "axios";
import ReviewItem from "./ReviewItem.jsx";
import Modal from "./Modal.jsx";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';


const Reviewlist = ({reviews, product_id, postForm, setSortmethod, reviewStars}) => {
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
      <div className='SortContainer'>
        {rlist.length} reviews, sorted by <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }} size={'small'} margin={'normal'}>
        <Select
          size={'small'}
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={sort}
          onChange={sortmethods}
          label="sort"
          sx={{fontWeight: `10px`
        }}
        >
          <MenuItem value={'relevant'}>relevance</MenuItem>
          <MenuItem value={'helpful'}>helpful</MenuItem>
          <MenuItem value={'newest'}>newest</MenuItem>
        </Select>
      </FormControl>
      </div>
      <div className = 'review-list'>
          {rlist}
      </div>
      <div className = 'buttons'>
        <Button variant="outlined" onClick={addReview}>more reviews</Button>
        <Button variant="outlined" onClick={createReview}>write a review +</Button></div>
      <div>
      <Modal
        show={showModal}
        closeModal={createReview}
        setUsername={setUsername}
        setEmail={setEmail}
        setRating={setRating}
        setCharacteristics={setCharacteristics}
        setSummary={setSummary}
        setRecommend={setRecommend}
        setBody={setBody}
        setPhotos={setPhotos}
        setForm={setForm}
        reviewStars={reviewStars}
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