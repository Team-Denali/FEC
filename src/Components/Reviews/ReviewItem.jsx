import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Rating from '@mui/material/Rating';
import DoneIcon from '@mui/icons-material/Done';
import Button from '@mui/material/Button';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import { format } from "date-fns";
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';


const ReviewItem = (props) => {
  const [helpful, setHelpful] = useState(props.review.helpfulness);
  const [helpfulclick, setHelpfulclick] = useState(false);
  const [counthelpfulclick, setCounthelpfulclick] = useState([]);
  const [countreportclick, setCountreportclick] = useState([]);
  const [open, setOpen] = useState(false);
  const [currentpic, setCurrentpic] = useState(0);
  const [showbody, setShowbody] = useState(false);

  const handleOpen = (index) => {
    setOpen(true);
    setCurrentpic(index)
  }
  const handleClose = () => setOpen(false);

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    height: 500,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  var rating = props.review.rating;
  // var stars = [];
  // for (var i = 0; i< rating; i++) {
  //   stars.push('⭐');
  //   if (i> rating && i< rating + 1) {
  //     stars.push(<i class="fa-solid fa-star-half"></i>)
  //   }
  // }
  var photographs = props.review.photos||[];
  //console.log(props.review);

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

  let date = new Date(props.review.date);
  const formatDate =
    monthNames[date.getMonth()] +
    " " +
    date.getDate() +
    ", " +
    date.getFullYear();

  const updateHelpful = () => {
    if (helpfulclick === false) {
      var review_id = props.review.review_id;
      //console.log(review_id);
      axios.put(`review/:review_id/helpful`, { params: {review_id: review_id}})
        .then(()=> {
          setHelpful(helpful + 1);
        })
        .catch((err)=> {
          console.log(err);
        })
      setHelpfulclick(true);
    }
  }

  const body = props.review.body.slice(0,80);
  const left = props.review.body.slice(80);

  return (
    <div className="Reviewitem">
      <div className='ratingname'>
      <Rating name="read-only" value={rating}  precision={0.1} size={'small'} readOnly />
      <span className="name">
          {!props.review.reviewer_email ? (<VerifiedUserIcon size={"small"}>VerifiedUserIcon</VerifiedUserIcon>): null}
        {props.review.reviewer_name}
        </span>
      </div>
      <div className='summary'>
        {props.review.summary}
      </div>
      <div className='body'>
        {props.review.body.length>80 ? (body):props.review.body}
        {props.review.body.length>80 && !showbody ? <span onClick={() => {
          setShowbody(true)
      }}>...show more</span> :left}
      </div>
      <div className='recom' style={{ display: props.review.recommend ? 'flex' : 'none' }}>
        {props.review.recommend ? (<DoneIcon>DoneIcon</DoneIcon>): null}
        {props.review.recommend ?  `I recommend this product`: null}
      </div>
      <div>
      <div className="reviewphoto">
      {photographs.map((_, index) =>
        photographs[index] ? (
          <img src={photographs[index]['url']} key={index} onClick={() => {handleOpen(index)}} className="ansPhotos" style={{height:80, width:80}} />
        ) : null
      )}
    </div>
    <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {photographs[currentpic] ?(<img src={photographs[currentpic]['url']} key={currentpic} className="ansPhotos" style={{height:500, width:500}} />):null}
        </Box>
      </Modal>
      </div>
      <div className='reviewresponse' style={{ display: props.review.response ? 'flex' : 'none' }}>
        <div className="responsetitle">{props.review.response ? 'Response' : null}</div>
        <div  className="responsebody">
        {props.review.response ? props.review.response : null}
       </div>
      </div>
      <div className='helpful'>
      <span> Helpful?
        <Button size="small" onClick={() => {
        updateHelpful();
        var temp = counthelpfulclick;
        temp.push(Date.now());
        setCounthelpfulclick(temp);
        //console.log(counthelpfulclick)
      }}>Yes[{helpful}]</Button>
          <Button size="small" onClick={() => {
        var temp = countreportclick;
        temp.push(Date.now());
        setCountreportclick(temp);
        //console.log(countreportclick)
      }}>Report</Button>
      </span>
      <span className='reviewdate'> <time>{formatDate}</time></span>
</div>
<div className='borderline'></div>

    </div>
  )
}

export default ReviewItem;