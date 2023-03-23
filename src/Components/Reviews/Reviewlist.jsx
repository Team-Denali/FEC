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


const Reviewlist = ({reviews, product_id, postForm, setSortmethod, reviewStars, filter}) => {
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
  const [button, setButton] = useState(true);

  useEffect(()=>{
    if (reviewnumber && rl) {
      if (reviewnumber <= rl.length) {
        setButton(true);
      }
    }
  })

  const addReview = () => {
    var r = reviewnumber;
    setReviewnumber(r + 2);
    if (r + 2 >= rl.length) {
      setButton(false);
    }
  }

  const createReview = () => {
    setshowModal(!showModal);
  }

  const sortmethods = (e) => {
    setSort(e.target.value);
    setSortmethod(e.target.value);
  }

  var rl = reviews||[];
  //console.log(filter);
  // console.log(rl);
  //get reviews from api for specific product id
  rl = rl.filter((r)=>{
    if (filter === 0) {
      return true;
    }
    if (filter === 5) {
      //console.log(r)
      if (r.rating === 5) {
        return true;
      }
      return false;
    }
    if (filter === 4) {
      //console.log(r)
      if (r.rating === 4) {
        return true;
      }
      return false;
    }
    if (filter === 3) {
      //console.log(r)
      if (r.rating === 3) {
        return true;
      }
      return false;
    }
    if (filter === 2) {
      //console.log(r)
      if (r.rating === 2) {
        return true;
      }
      return false;
    }
    if (filter === 1) {
      //console.log(r)
      if (r.rating === 1) {
        return true;
      }
      return false;
    }
  })
  var rli = rl.slice(0, reviewnumber);
  var rlist = rli.map((r)=>{
    return <ReviewItem key = {r.review_id} product_id={product_id} review={r}/>;
  });
  //console.log(rl);

  if (form === true) {
    postForm({
      product_id: Number(product_id),
      rating: Number(rating),
      summary: summary,
      body: body,
      recommend: recommend,
      name: username,
      email: email,
      photos: photos,
      characteristics: characteristics
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
      {button ? <Button variant="outlined" onClick={addReview}>more reviews</Button>: null}
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
    return <div>
      No comment now. Be the first one to comment?
      <div className='SortContainer'>
      <Button variant="outlined" onClick={createReview}>write a review +</Button>
      </div>
          </div>
  }


}

export default Reviewlist;