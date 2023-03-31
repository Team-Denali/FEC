import React, { useState, useEffect } from 'react';
import Slider from '@mui/material/Slider';
import Typography from '@mui/material/Typography';

const Productbreakdown = (props) => {
  var ch = props.reviewStars.characteristics||{};
  //console.log('ch:',ch);
  var comfort = ch.Comfort||{};
  var fit = ch.Fit||{};
  var length = ch.Length||{};
  var quality = ch.Quality||{};
  var size = ch.Size||{};
  var width = ch.Width||{};

  var comfortv = Math.round(comfort.value*10)/10||0;
  var fitv = Math.round(fit.value*10)/10||0;
  var lengthv = Math.round(length.value*10)/10||0;
  var qualityv = Math.round(quality.value*10)/10||0;
  var sizev = Math.round(size.value*10)/10||0;
  var widthv = Math.round(width.value*10)/10||0;
  //console.log('widthv:',widthv);
  const markcomfort = [
    {
      value: 1,
      label: 'uncomfort',
    },
    {
      value: 3,
      label: 'OK',
    },
    {
      value: 5,
      label: 'comfortable',
    }
  ];
  const markfit = [
    {
      value: 1,
      label: 'too tight',
    },
    {
      value: 3,
      label: 'perfect',
    },
    {
      value: 5,
      label: 'too big',
    }
  ];
  const marklength = [
    {
      value: 1,
      label: 'too short',
    },
    {
      value: 3,
      label: 'perfect',
    },
    {
      value: 5,
      label: 'too long',
    }
  ];
  const markquality = [
    {
      value: 1,
      label: 'poor',
    },
    {
      value: 3,
      label: 'expected',
    },
    {
      value: 5,
      label: 'perfect',
    }
  ];
  const marksize = [
    {
      value: 1,
      label: 'small',
    },
    {
      value: 3,
      label: 'perfect',
    },
    {
      value: 5,
      label: 'big',
    }
  ];
  const markwidth = [
    {
      value: 1,
      label: 'narrow',
    },
    {
      value: 3,
      label: 'perfect',
    },
    {
      value: 5,
      label: 'wide',
    }
  ];
    return (
      <div className="SizeComfort">
      {ch.Comfort ? (<div  className="characteristic">COMFORT

      <Slider
  value={comfortv}
  step={0.5}
  marks={markcomfort}
  min={1}
  max={5}
  track={false}
  size={'small'}
  disabled
  sx={{
    height: 10,
    '& .MuiSlider-track': {
      height: 5,
    },
    '& .MuiSlider-rail': {
      height: 5,
      borderRadius: 0.5,
      backgroundImage: 'linear-gradient(to right, #3f51b5, #3f51b5 24%, #eee 24%, #eee 26%, #3f51b5 26%, #3f51b5 49%, #eee 49%, #eee 51%, #3f51b5 51%, #3f51b5 74%, #eee 74%, #eee 76%, #3f51b5 76%, #3f51b5)',
    },
    '& .MuiSlider-mark': {
      display: 'none',
    },
    '& .MuiSlider-markLabel': {
      fontSize: '1px',
      fontFamily: 'Lucida Sans, Lucida Sans Regular, Lucida Grande, Lucida Sans Unicode, Geneva, Verdana, sans-serif',
      color: 'grey',
    },
    '& .MuiSlider-thumb': {
      backgroundColor: 'transparent',
      width: 0,
      height: 0,
      borderStyle: 'solid',
      borderWidth: '0 7px 14px 7px',
      borderColor: 'transparent transparent #757575 transparent',
      transform: 'translateY(-6px) rotate(180deg)',
      boxShadow: 'none',
    },
  }}
/>
      </div>):null}
      { ch.Fit?(<div  className="characteristic"> FIT &nbsp; &nbsp; &nbsp;

      <Slider
  value={fitv}
  step={0.5}
  marks={markfit}
  min={1}
  max={5}
  track={false}
  size={'small'}
  disabled
  sx={{
    height: 10,
    '& .MuiSlider-track': {
      height: 5,
    },
    '& .MuiSlider-rail': {
      height: 5,
      borderRadius: 0.5,
      backgroundImage: 'linear-gradient(to right, #3f51b5, #3f51b5 24%, #eee 24%, #eee 26%, #3f51b5 26%, #3f51b5 49%, #eee 49%, #eee 51%, #3f51b5 51%, #3f51b5 74%, #eee 74%, #eee 76%, #3f51b5 76%, #3f51b5)',
    },
    '& .MuiSlider-mark': {
      display: 'none',
    },
    '& .MuiSlider-markLabel': {
      fontSize: '1px',
      fontFamily: 'Lucida Sans, Lucida Sans Regular, Lucida Grande, Lucida Sans Unicode, Geneva, Verdana, sans-serif',
      color: 'grey',
    },
    '& .MuiSlider-thumb': {
      backgroundColor: 'transparent',
      width: 0,
      height: 0,
      borderStyle: 'solid',
      borderWidth: '0 7px 14px 7px',
      borderColor: 'transparent transparent #757575 transparent',
      transform: 'translateY(-6px) rotate(180deg)',
      boxShadow: 'none',
    },
  }}
/>

      </div>) : null}
      { ch.Length?(<div  className="characteristic">LENGTH &nbsp; &nbsp;

      <Slider
  value={lengthv}
  step={0.5}
  marks={marklength}
  min={1}
  max={5}
  track={false}
  size={'small'}
  disabled
  sx={{
    height: 10,
    '& .MuiSlider-track': {
      height: 5,
    },
    '& .MuiSlider-rail': {
      height: 5,
      borderRadius: 0.5,
      backgroundImage: 'linear-gradient(to right, #3f51b5, #3f51b5 24%, #eee 24%, #eee 26%, #3f51b5 26%, #3f51b5 49%, #eee 49%, #eee 51%, #3f51b5 51%, #3f51b5 74%, #eee 74%, #eee 76%, #3f51b5 76%, #3f51b5)',
    },
    '& .MuiSlider-mark': {
      display: 'none',
    },
    '& .MuiSlider-markLabel': {
      fontSize: '1px',
      fontFamily: 'Lucida Sans, Lucida Sans Regular, Lucida Grande, Lucida Sans Unicode, Geneva, Verdana, sans-serif',
      color: 'grey',
    },
    '& .MuiSlider-thumb': {
      backgroundColor: 'transparent',
      width: 0,
      height: 0,
      borderStyle: 'solid',
      borderWidth: '0 7px 14px 7px',
      borderColor: 'transparent transparent #757575 transparent',
      transform: 'translateY(-6px) rotate(180deg)',
      boxShadow: 'none',
    },
  }}
/>


      </div>) : null}
      { ch.Quality?(<div  className="characteristic">QUALITY &nbsp;

      <Slider
  value={qualityv}
  step={0.5}
  marks={markquality}
  min={1}
  max={5}
  track={false}
  size={'small'}
  disabled
  sx={{
    height: 10,
    '& .MuiSlider-track': {
      height: 5,
    },
    '& .MuiSlider-rail': {
      height: 5,
      borderRadius: 0.5,
      backgroundImage: 'linear-gradient(to right, #3f51b5, #3f51b5 24%, #eee 24%, #eee 26%, #3f51b5 26%, #3f51b5 49%, #eee 49%, #eee 51%, #3f51b5 51%, #3f51b5 74%, #eee 74%, #eee 76%, #3f51b5 76%, #3f51b5)',
    },
    '& .MuiSlider-mark': {
      display: 'none',
    },
    '& .MuiSlider-markLabel': {
      fontSize: '1px',
      fontFamily: 'Lucida Sans, Lucida Sans Regular, Lucida Grande, Lucida Sans Unicode, Geneva, Verdana, sans-serif',
      color: 'grey',
    },
    '& .MuiSlider-thumb': {
      backgroundColor: 'transparent',
      width: 0,
      height: 0,
      borderStyle: 'solid',
      borderWidth: '0 7px 14px 7px',
      borderColor: 'transparent transparent #757575 transparent',
      transform: 'translateY(-6px) rotate(180deg)',
      boxShadow: 'none',
    },
  }}
/>

      </div>) : null}

      { ch.Size?(<div  className="characteristic">SIZE &nbsp; &nbsp;

      <Slider
  value={sizev}
  step={0.5}
  marks={marksize}
  min={1}
  max={5}
  track={false}
  size={'small'}
  disabled
  sx={{
    height: 10,
    '& .MuiSlider-track': {
      height: 5,
    },
    '& .MuiSlider-rail': {
      height: 5,
      borderRadius: 0.5,
      backgroundImage: 'linear-gradient(to right, #3f51b5, #3f51b5 24%, #eee 24%, #eee 26%, #3f51b5 26%, #3f51b5 49%, #eee 49%, #eee 51%, #3f51b5 51%, #3f51b5 74%, #eee 74%, #eee 76%, #3f51b5 76%, #3f51b5)',
    },
    '& .MuiSlider-mark': {
      display: 'none',
    },
    '& .MuiSlider-markLabel': {
      fontSize: '1px',
      fontFamily: 'Lucida Sans, Lucida Sans Regular, Lucida Grande, Lucida Sans Unicode, Geneva, Verdana, sans-serif',
      color: 'grey',
    },
    '& .MuiSlider-thumb': {
      backgroundColor: 'transparent',
      width: 0,
      height: 0,
      borderStyle: 'solid',
      borderWidth: '0 7px 14px 7px',
      borderColor: 'transparent transparent #757575 transparent',
      transform: 'translateY(-6px) rotate(180deg)',
      boxShadow: 'none',
    },
  }}
/>


      </div>) : null}
      { ch.Width?(<div  className="characteristic">WIDTH

      <Slider
  value={widthv}
  step={0.5}
  marks={markwidth}
  min={1}
  max={5}
  track={false}
  size={'small'}
  disabled
  sx={{
    height: 10,
    '& .MuiSlider-track': {
      height: 5,
    },
    '& .MuiSlider-rail': {
      height: 5,
      borderRadius: 0.5,
      backgroundImage: 'linear-gradient(to right, #3f51b5, #3f51b5 24%, #eee 24%, #eee 26%, #3f51b5 26%, #3f51b5 49%, #eee 49%, #eee 51%, #3f51b5 51%, #3f51b5 74%, #eee 74%, #eee 76%, #3f51b5 76%, #3f51b5)',
    },
    '& .MuiSlider-mark': {
      display: 'none',
    },
    '& .MuiSlider-markLabel': {
      fontSize: '1px',
      fontFamily: 'Lucida Sans, Lucida Sans Regular, Lucida Grande, Lucida Sans Unicode, Geneva, Verdana, sans-serif',
      color: 'grey',
    },
    '& .MuiSlider-thumb': {
      backgroundColor: 'transparent',
      width: 0,
      height: 0,
      borderStyle: 'solid',
      borderWidth: '0 7px 14px 7px',
      borderColor: 'transparent transparent #757575 transparent',
      transform: 'translateY(-6px) rotate(180deg)',
      boxShadow: 'none',
    },
  }}
/>

      </div>) : null}
    </div>
   )

}

export default Productbreakdown;
