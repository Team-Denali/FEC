import React from 'react';// Bring React in to build a component.

import {useState, useEffect} from 'react';//import { createRoot } from "react-dom/client";

// Huzzah for jsx!

var OverviewStyles = ({overviewStyles}) => { console.log('overviewstyles:', overviewStyles); //let stylesArr = overviewStyles.results; console.log(stylesArr, 'FSDKL:FKDSFJ');


if (!overviewStyles.length || (!(Object.keys(overviewStyles).length))) {

  return;
}

return (<>
<div className='overviewStylesContainer'>

  <div>STYLE → {overviewStyles[0].name}</div>
  <div className='styleSelectorArea'>
  {overviewStyles.map((overviewStyle, i) => <div key={i} style={{height: '35px', width: '20px', backgroundImage: `url(${overviewStyle.photos[0].thumbnail_url})`, backgroundSize: 'cover'}}></div>)}</div>
</div>

</>)

}

export default OverviewStyles

{/* <div>{styles.results.map((oneStyle) => (<div><img src="https://images.unsplash.com/photo-1552902865-b72c031ac5ea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80"
/></div></div>))} */}