import React, { useState, useEffect } from 'react';
import Slider from '@mui/material/Slider';

const Productbreakdown = (props) => {
  var ch = props.reviewStars.characteristics||{};
  //console.log(ch);
  var comfort = ch.Comfort||{};
  var fit = ch.Fit||{};
  var length = ch.Length||{};
  var quality = ch.Quality||{};

  var comfortv = Math.round(comfort.value*10)/10||0;
  var fitv = Math.round(fit.value*10)/10||0;
  var lengthv = Math.round(length.value*10)/10||0;
  var qualityv = Math.round(quality.value*10)/10||0;
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
  if (comfortv!==0 && fitv!==0 && lengthv!==0 && qualityv!==0) {
    return (
      <div className="Size&Comfort">
      <div  className="characteristic">comfort:
      <Slider defaultValue={comfortv} step={0.1} marks={markcomfort} min={1} max={5} track={false} size={'small'} disabled />
      </div>
      <div  className="characteristic">fit:
      <Slider defaultValue={fitv} step={0.1} marks={markfit} min={1} max={5} track={false} size={'small'} disabled />
      </div>
      <div  className="characteristic">length:
      <Slider defaultValue={lengthv} step={0.1} marks={marklength} min={1} max={5} track={false} size={'small'} disabled />
      </div>
      <div  className="characteristic">quality:
      <Slider defaultValue={qualityv} step={0.1} marks={markquality} min={1} max={5} track={false} size={'small'} disabled />
      </div>
    </div>
   )
  }

}

export default Productbreakdown;
