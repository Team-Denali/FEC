import React, { useState, useEffect, useContext } from 'react';
import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button';
import LinearProgressWithLabel from '@mui/material/LinearProgress';
import ElementContext from '../../ElementContext.js';
import ClickTracker from '../../ClickTracker.jsx';
import Typography from '@mui/material/Typography';

const Ratingbreakdown = (props) => {
  const element = useContext(ElementContext);
  const [togglefilter5, setTogglefilter5]= useState(true);
  const [togglefilter4, setTogglefilter4]= useState(true);
  const [togglefilter3, setTogglefilter3]= useState(true);
  const [togglefilter2, setTogglefilter2]= useState(true);
  const [togglefilter1, setTogglefilter1]= useState(true);
  const [count5starclick, setCount5starclick] = useState([]);
  const [count4starclick, setCount4starclick] = useState([]);
  const [count3starclick, setCount3starclick] = useState([]);
  const [count2starclick, setCount2starclick] = useState([]);
  const [count1starclick, setCount1starclick] = useState([]);

  var star = props.reviewStars.ratings;
 //console.log('star',star)
  var rec = props.reviewStars.recommended ;
  // rec? console.log((rec.true+rec.false)):null
  //console.log(rec)
  const nofilter = () => {
    props.setFilter(0);
  }

  const filterfivestar = () => {
    //console.log(togglefilter)
    if (togglefilter5) {
      props.setFilter(5);
      setTogglefilter1(true);
      setTogglefilter2(true);
      setTogglefilter3(true);
      setTogglefilter4(true);
    } else {
      props.setFilter(0);
    }
  }

  const filterfourstar = () => {
    if (togglefilter4) {
      props.setFilter(4);
      setTogglefilter1(true);
      setTogglefilter2(true);
      setTogglefilter3(true);
      setTogglefilter5(true);
    } else {
      props.setFilter(0);
    }
  }

  const filterthreestar = () => {
    if (togglefilter3) {
      props.setFilter(3);
      setTogglefilter1(true);
      setTogglefilter2(true);
      setTogglefilter5(true);
      setTogglefilter4(true);
    } else {
      props.setFilter(0);
    }
  }

  const filtertwostar = () => {
    if (togglefilter2) {
      props.setFilter(2);
      setTogglefilter1(true);
      setTogglefilter5(true);
      setTogglefilter3(true);
      setTogglefilter4(true);
    } else {
      props.setFilter(0);
    }
  }

  const filteronestar = () => {
    if (togglefilter1) {
      props.setFilter(1);
      setTogglefilter5(true);
      setTogglefilter2(true);
      setTogglefilter3(true);
      setTogglefilter4(true);
    } else {
      props.setFilter(0);
    }
  }

  const averagerating = (ratingsObj) => {
    //console.log(ratingsObj);
    var totalCount = 0;
    var averageCount = 0;
    for (let key in ratingsObj) {
      let value = Number(ratingsObj[key]);
      let num = Number(key);
      totalCount += value;
      averageCount += (num * ratingsObj[key]);
    }
    if (totalCount === 0) {
      return 0;
    }
    let average = averageCount / totalCount;
    average = Math.round(average * 10) / 10
    return average;
  }
  var obj = {
    '1': 0,
    '2': 0,
    '3': 0,
    '4': 0,
    '5': 0
  }

  var total = 0;
  for (let key in star) {
    total += Number(star[key]);
    for (let key1 in obj) {
      if (key === key1) {
        obj[key] += Number(star[key]);
      }
    }
  }

  var fivestar = Math.round((obj['5']/total)*100);
  var fourstar = Math.round((obj['4']/total)*100);
  var threestar = Math.round((obj['3']/total)*100);
  var twostar = Math.round((obj['2']/total)*100);
  var onestar = Math.round((obj['1']/total)*100);
  //console.log('fivestar', fivestar)

  var average = averagerating(star);
  var width = average * 20;
  return(
    <div className='rating-breakdown'>

     <div className="RatingText" onClick={nofilter}>{average}
     <Rating name="read-only" value={average}  precision={0.1} size={'small'} readOnly   style={{color: '#3f51b5'}}/>
</div>
    <div className="RecommendText">{rec?Math.round((Number(rec.true)/(Number(rec.true)+Number(rec.false)))*100): 0}% of reviews recommend this product</div>

    <ClickTracker selector={`${element}-starfilter5`} WrappedComponent={(
    <div className='5star'>
      <div className="BarTitle">
        <div>
        <span><Button size="small" onClick={() => {
          setTogglefilter5(!togglefilter5);
          filterfivestar();
          var temp = count5starclick;
          temp.push(Date.now());
          setCount5starclick(temp);
          }}>
            <Typography style={{ fontSize: '10px', fontFamily: 'Lucida Sans, Lucida Sans Regular, Lucida Grande, Lucida Sans Unicode, Geneva, Verdana, sans-serif',color:'gray' }}>
             Five Star: {fivestar}%
            </Typography>

             </Button></span>
        </div>
        <LinearProgressWithLabel variant="determinate" value={fivestar} sx={{ bgcolor: 'lightgrey', '& .MuiLinearProgress-bar': { bgcolor: '#808080', }, }}/>

      </div>
    </div>
      )}/>

    <ClickTracker selector={`${element}-starfilter4`} WrappedComponent={(
    <div className='4star'>
      <div className="BarTitle">
        <div>
        <span><Button size="small" onClick={() => {
          setTogglefilter4(!togglefilter4);
          filterfourstar();
          var temp = count4starclick;
          temp.push(Date.now());
          setCount4starclick(temp);
          }}>
            <Typography style={{ fontSize: '10px', fontFamily: 'Lucida Sans, Lucida Sans Regular, Lucida Grande, Lucida Sans Unicode, Geneva, Verdana, sans-serif',color:'gray' }}>
             Four Star: {fourstar}%
             </Typography>
             </Button></span>
        </div>
        <LinearProgressWithLabel variant="determinate" value={fourstar} sx={{ bgcolor: 'lightgrey', '& .MuiLinearProgress-bar': { bgcolor: '#808080', }, }}/>
    </div>
    </div>
      )}/>

    <ClickTracker selector={`${element}-starfilter3`} WrappedComponent={(
    <div className='3star'>
      <div className="BarTitle">
      <div>
        <span><Button size="small" onClick={() => {
          setTogglefilter3(!togglefilter3);
          filterthreestar();
          var temp = count3starclick;
          temp.push(Date.now());
          setCount3starclick(temp);
          }}>
          <Typography style={{ fontSize: '10px', fontFamily: 'Lucida Sans, Lucida Sans Regular, Lucida Grande, Lucida Sans Unicode, Geneva, Verdana, sans-serif',color:'gray' }}>
          Three Star: {threestar}%
          </Typography>
          </Button></span>
        </div>
        <LinearProgressWithLabel variant="determinate" value={threestar} sx={{ bgcolor: 'lightgrey', '& .MuiLinearProgress-bar': { bgcolor: '#808080', }, }}/>
      </div>
    </div>
      )}/>

   <ClickTracker selector={`${element}-starfilter2`} WrappedComponent={(
    <div className='2star'>
      <div className="BarTitle">
      <div>
        <span><Button size="small" onClick={() => {
          setTogglefilter2(!togglefilter2);
          filtertwostar();
          var temp = count2starclick;
          temp.push(Date.now());
          setCount2starclick(temp);
          }}>
            <Typography style={{ fontSize: '10px', fontFamily: 'Lucida Sans, Lucida Sans Regular, Lucida Grande, Lucida Sans Unicode, Geneva, Verdana, sans-serif',color:'gray' }}>
             Two Star: {twostar}%
             </Typography>
             </Button></span>
        </div>
        <LinearProgressWithLabel variant="determinate" value={twostar} sx={{ bgcolor: 'lightgrey', '& .MuiLinearProgress-bar': { bgcolor: '#808080', }, }}/>
      </div>
    </div>
    )}/>

   <ClickTracker selector={`${element}-starfilter1`} WrappedComponent={(
    <div className='1star'>
       <div className="BarTitle">
       <div>
        <span><Button size="small" onClick={() => { setTogglefilter1(!togglefilter1);
          filteronestar();
          var temp = count1starclick;
          temp.push(Date.now());
          setCount1starclick(temp);
          }}>
            <Typography style={{ fontSize: '10px', fontFamily: 'Lucida Sans, Lucida Sans Regular, Lucida Grande, Lucida Sans Unicode, Geneva, Verdana, sans-serif',color:'gray' }}>
             One Star: {onestar}%
             </Typography>
             </Button></span>
        </div>
        <LinearProgressWithLabel variant="determinate" value={onestar} sx={{ bgcolor: 'lightgrey', '& .MuiLinearProgress-bar': { bgcolor: '#808080', }, }}/>
       </div>
    </div>
    )}/>
    </div>
  )
}

export default Ratingbreakdown;
