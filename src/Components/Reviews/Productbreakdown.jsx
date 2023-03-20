import React, { useState, useEffect } from 'react';

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

  return (
    <div className="Size&Comfort">
      <div>comfort: {comfortv}
      </div>
      <div>fit: {fitv}
      </div>
      <div>comfort: {lengthv}
      </div>
      <div>comfort: {qualityv}
      </div>
    </div>
  )

}

export default Productbreakdown;
