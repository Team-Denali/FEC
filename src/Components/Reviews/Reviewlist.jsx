import React, { lazy, useState, useEffect, useContext } from "react";
import axios from "axios";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ElementContext from '../../ElementContext.js';
import ClickTracker from '../../ClickTracker.jsx';
import {BodyContext, BodyProvider} from '../../BodyContext.jsx';

import Modal from './Modal.jsx';
import ReviewItem from './ReviewItem.jsx';
// const Modal = lazy(() => import("./Modal.jsx"));
// const ReviewItem = lazy(() => import("./ReviewItem.jsx"));

const Reviewlist = ({reviews, product_id, postForm, setSortmethod, reviewStars, filter}) => {
  //console.log(reviews)
  //const module = useContext(ModuleContext);
  const element = useContext(ElementContext);
  const [reviewnumber, setReviewnumber] = useState(3);
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
  const [searchItem, setSearchItem] = useState("");
  const [addReviewClick, setAddReviewClick] = useState([]);
  const [createReviewClick, setCreateReviewClick] = useState([]);
  const { body1, setBody1 } = useContext(BodyContext);

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

  // const reload = () => {
  //   const body = document.querySelector('body');
  //   const modalOverlay = document.createElement('div');
  //   modalOverlay.classList.add('modal-overlay');
  //   body.classList.add('modal-open');
  //   body.appendChild(modalOverlay);
  //   // body.classList.remove('modal-open');
  //   // body.removeChild(modalOverlay);
  // }

  const createReview = () => {
    setshowModal(!showModal);
  }

  const sortmethods = (e) => {
    setSort(e.target.value);
    setSortmethod(e.target.value);
  }

  const changeHandler = (event) => {
    if (event.target.value.length > 3) {
      return setSearchItem(event.target.value);
    } else {
      return setSearchItem("");
    }
  }

  var rl = reviews||[];
  //console.log(filter);
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
  //console.log(rl);

  rl = rl.filter((r) => {
    return (r.summary
      .toLowerCase()
      .includes(searchItem.toLowerCase()))||(r.body
        .toLowerCase()
        .includes(searchItem.toLowerCase())) ;
  });
  var rli = rl.slice(0, reviewnumber);
  // console.log(rli[0][summary])
  // console.log(rli[0][body])

//console.log(rli[0].review_id)
  var rlist = rli.map((r)=>{
    //console.log(r['review_id']);
    return <ReviewItem key = {r['review_id']}
    keys = {r['review_id']} product_id={product_id} review={r}/>;
  });
  //console.log(rl);

  const outerDivStyle = {
    // color: 'blue',
    // borderStyle: 'solid',
    margin: '2%',
    padding: '2%',
    borderRadius: '10%',
    overflow: 'hidden'
  };

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
      <ClickTracker selector={`${element}`} WrappedComponent={(
    <div>
     <div>
      <input
            onChange={changeHandler}
            className="review-search"
            type="text"
            placeholder="Search for the review..."
          ></input>
      </div>
      <ClickTracker selector={`${element}-sort`} WrappedComponent={(

      <div className='SortContainer'>
        {rlist.length} reviews, sorted by <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }} size={'small'} margin={'normal'}>
        <Select
          size={'small'}
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={sort}
          onChange={sortmethods}
          label="sort"
          sx={{
            fontWeight: 'bold',
            fontFamily: 'Lucida Sans, Lucida Sans Regular, Lucida Grande, Lucida Sans Unicode, Geneva, Verdana, sans-serif',
            fontSize: '16px'
          }}
        >
          <MenuItem value={'relevant'}>relevance</MenuItem>
          <MenuItem value={'helpful'}>helpful</MenuItem>
          <MenuItem value={'newest'}>newest</MenuItem>
        </Select>
      </FormControl>
      </div>
          )
        }/>
      <div className = 'review-list'>
          {rlist}
      </div>


      <ClickTracker selector={`${element}-button`} WrappedComponent={(

      <div className = 'buttons'>
      {button ? <Button variant="outlined"
                sx={{
                  width: 175,
                  fontFamily:
                    'Lucida Sans, Lucida Sans Regular, Lucida Grande, Lucida Sans Unicode, Geneva, Verdana, sans-serif',
                  fontWeight: '10px',
                  fontSize: 15,
                  color: '#3f51b5',
                  margin: '5px',
                  padding: '10px',
                  borderColor: '#3f51b5',
                }}
      onClick={() => {
        addReview();
        var temp = addReviewClick;
        temp.push(Date.now())
        setAddReviewClick(temp);
        //console.log(addReviewClick)
      }}>more reviews</Button>: null}


        <Button variant="outlined"
                        sx={{
                          fontFamily:
                            'Lucida Sans, Lucida Sans Regular, Lucida Grande, Lucida Sans Unicode, Geneva, Verdana, sans-serif',
                          fontWeight: '10px',
                          fontSize: 15,
                          color: '#3f51b5',
                          margin: '5px',
                          padding: '10px',
                          borderColor: '#3f51b5',
                        }}
        onClick={() => {
        createReview();
        var temp = createReviewClick;
        temp.push(Date.now())
        setCreateReviewClick(temp);
        const modalOverlay = document.createElement('div');
        modalOverlay.classList.add('modal-overlay');
        body1.classList.add('modal-open');
        body1.appendChild(modalOverlay);
        //console.log(createReviewClick)
      }}>write a review +</Button></div>
      )
    }/>

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
  }/>
    )
  } else {
    return <div>
           <div>
      <input
            onChange={changeHandler}
            className="review-search"
            type="text"
            placeholder="Search for the review..."
          ></input>
      </div>
      No comment now. Be the first one to comment?
      <div className='SortContainer'>
      <Button variant="outlined"
                        sx={{
                          fontFamily:
                            'Lucida Sans, Lucida Sans Regular, Lucida Grande, Lucida Sans Unicode, Geneva, Verdana, sans-serif',
                          fontWeight: '10px',
                          fontSize: 15,
                          color: '#3f51b5',
                          margin: '5px',
                          padding: '10px',
                          borderColor: '#3f51b5',
                        }}
        onClick={() => {
        createReview();
        var temp = createReviewClick;
        temp.push(Date.now())
        setCreateReviewClick(temp);
        const modalOverlay = document.createElement('div');
        modalOverlay.classList.add('modal-overlay');
        body1.classList.add('modal-open');
        body1.appendChild(modalOverlay);
        //console.log(createReviewClick)
      }}>write a review +</Button>      </div>
    </div>
  }
}

export default Reviewlist;