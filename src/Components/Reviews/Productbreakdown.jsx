import React, { useState, useEffect } from 'react';
import Slider from '@mui/material/Slider';

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
      {ch.Comfort ? (<div  className="characteristic">comfort:
      <Slider value={comfortv} step={0.1} marks={markcomfort} min={1} max={5} track={false} size={'small'} disabled />
      </div>):null}
      { ch.Fit?(<div  className="characteristic"> &nbsp; &nbsp; fit: &nbsp; &nbsp; &nbsp;
      <Slider value={fitv} step={0.1} marks={markfit} min={1} max={5} track={false} size={'small'} disabled />
      </div>) : null}
      { ch.Length?(<div  className="characteristic">length: &nbsp; &nbsp;
      <Slider value={lengthv} step={0.1} marks={marklength} min={1} max={5} track={false} size={'small'} disabled />
      </div>) : null}
      { ch.Quality?(<div  className="characteristic">quality: &nbsp;
      <Slider value={qualityv} step={0.1} marks={markquality} min={1} max={5} track={false} size={'small'} disabled />
      </div>) : null}
      { ch.Size?(<div  className="characteristic">&nbsp; size: &nbsp; &nbsp;
      <Slider value={sizev} step={0.1} marks={marksize} min={1} max={5} track={false} size={'small'} disabled />
      </div>) : null}
      { ch.Width?(<div  className="characteristic">width:
      <Slider value={widthv} step={0.1} marks={markwidth} min={1} max={5} track={false} size={'small'} disabled />
      </div>) : null}
    </div>
   )

}

export default Productbreakdown;
