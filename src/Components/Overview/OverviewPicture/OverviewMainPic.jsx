import React from 'react';// Bring React in to build a component.

var arr = [1, 2, 3];//import { createRoot } from "react-dom/client";

// Huzzah for jsx!

var OverviewMainPic = () => { //include state variables for currently viewed product
  return (

    <div className='productOverviewPic' style={{backgroundImage: `url(${'https://images.unsplash.com/photo-1492447105260-2e947425b5cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80'})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat'}}>

    {arr.map((num) => <div>{num}</div>)}

    </div>
    )
}


export default OverviewMainPic