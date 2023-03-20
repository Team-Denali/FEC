import React from 'react';// Bring React in to build a component.

//import { createRoot } from "react-dom/client";

// Huzzah for jsx!

var OverviewStyles = ({styles}) => { console.log('overviewstyles:', styles); let stylesArr = styles.results; console.log(stylesArr, 'FSDKL:FKDSFJ');
  return ( <>
    <h3>Overview Styles Here</h3>
  {/* <div><div>{stylesArr.map((style) => 'STYLE')}</div>


  </div> */}
  </>)
}


export default OverviewStyles

{/* <div>{styles.results.map((oneStyle) => (<div><img src="https://images.unsplash.com/photo-1552902865-b72c031ac5ea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80"
/></div></div>))} */}