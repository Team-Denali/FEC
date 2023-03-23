import React from "react";
import axios from "axios"; // Bring React in to build a component.
import { useState, useEffect } from "react";

import OverviewMainPic from "./OverviewPicture/OverviewMainPic.jsx";

import OverviewStyles from "./OverviewInfo/OverviewStyles.jsx";
import OverviewCart from "./OverviewInfo/OverviewCart.jsx"; // Huzzah for jsx!

var Overview = ({ current }) => {

  //console.log(current, "current prop"); //include state variables for currently viewed product
  const [price, setPrice] = useState('');
  const [styles, setStyles] = useState({});
  const [styleView, setStyleView] = useState({});
  let url = "http://localhost:3000"; //const [styleIndex, setIndex] = useState(0); const [photoIndex, setPhotoIndex] = useState(0);

  const [mainPic, setMainPic] = useState(null);
  var changePic = (pic_url) => {
    setMainPic(pic_url);
  };

  var changeStyle = (style) => {
    setStyleView(style);

  };
  const styleFinder = (currentId) => {

    let styleId = currentId;
    //console.log("THE ID:", styleId);
    let paramObj = { product_id: styleId };

    axios
      .get(`${url}/styles`, { params: paramObj })
      .then((res) => {

        console.log("the data:", res.data);
        setStyles(res.data.results);

        setStyleView(res.data.results[0]);
      })

      .catch((err) => {
        console.log("axios req error:", err);
      });
  };
  useEffect(() => {

    styleFinder(current.id);
  }, [current]);

  // if (!styles) {
  //   return;
  // }


  return (
    // }
    <>

      {" "}

      <div className="overviewContainer">



        <div className="overviewTop">
          <OverviewMainPic
            current={current}
            currentStyles={styles}
            styleView={styleView}

            setStyle={setStyleView}
            mainPic={mainPic}
            setMain={setMainPic}
            picHandler={changePic}

          />

          <div className="overviewProductInfo">
            <div>Review Stuff Goes Here</div>
            <div>{current.category}</div>
            <div className="productName">
              <h1>{current.name}</h1>



            </div>
            <div>
              <h3>{current.default_price}</h3>
            </div>
            <div className="overviewStyles">
              <OverviewStyles
                overviewStyles={styles}
                mainPic={mainPic}

                picHandler={changePic}

                styleView={styleView}
                setStyleView={setStyleView}
              />
            </div>
            <div className="overviewCart">
              <OverviewCart styleView={styleView} itemName={current.name}/>
            </div>
          </div>
        </div>
        <div className="overviewBottom">
          <div>{current.description}</div>
          <div>||</div>
          <div>Insert Specs</div>
        </div>
      </div>
    </>
  );


};
export default Overview;
