import React from "react"; // Bring React in to build a component.

import { useState, useEffect } from "react"; //import { createRoot } from "react-dom/client";

// Huzzah for jsx!

var OverviewStyles = ({
  overviewStyles,
  mainPic,
  picHandler,
  styleView,
  setStyleView, defaultPrice, setDefaultPrice
}) => {
  // console.log("overviewstyles:", overviewStyles);
  //let style1 = overviewStyles[0];

  //console.log(style1, "STYLE1");
  if (!overviewStyles.length || !Object.keys(overviewStyles).length) {
    return;
  }
  // setCurrentStyle(overviewStyles[0]);
  //const iconStyle = {styleView === overViewStyle ? 'HI' : 'null'};// useEffect(() => {
    //U+000A9 -> &#xA9; U+1F5F9 -> ;  //   console.log("the currentstyle state:", currentStyle);

  // }, [currentStyle]); //setDisplay(overviewStyles[i])
  return (

    <>

      <div className="overviewStylesContainer">

        <div className="styletext">STYLE ▶ {styleView.name}</div>
        <div className="styleSelectorArea">
          {overviewStyles.map((overviewStyle, i) => (

            <div className="overviewStyleIcon"
              key={overviewStyle.style_id}

              value={"thing"}
              style={{
              display: 'flex',
              height: "29px",
              width: "20px",
              backgroundImage: `url(${overviewStyle.photos[0].thumbnail_url})`,
              padding: '5px',
              flex: '0 0 20%',
              backgroundSize: "cover",
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              borderRadius: "50%",
              border: '3px solid #3f51b5',
            }}
              onClick={(e) => {

                e.preventDefault(); setStyleView(overviewStyle);
              }}
            ><div></div></div>

          ))}
        </div>
      </div>
    </>

  );

};



export default OverviewStyles;
{
  /* <div>{styles.results.map((oneStyle) => (<div><img src="https://images.unsplash.com/photo-1552902865-b72c031ac5ea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80"
/></div></div>))} */
}
