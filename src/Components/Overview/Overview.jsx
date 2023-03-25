import React from "react";
import axios from "axios"; // Bring React in to build a component.
import { useState, useEffect } from "react";

import OverviewMainPic from "./OverviewPicture/OverviewMainPic.jsx";

import OverviewStyles from "./OverviewInfo/OverviewStyles.jsx"; import OverviewPrice from './OverviewInfo/OverviewPrice.jsx'
import OverviewCart from "./OverviewInfo/OverviewCart.jsx"; // Huzzah for jsx!

var Overview = ({ current }) => {

  //console.log(current, "current prop"); //include state variables for currently viewed product
  const [itemView, setItemView] = useState({});
  const [styles, setStyles] = useState({});
  const [styleView, setStyleView] = useState({}); const [defaultPrice, setDefaultPrice] = useState(''); const [salePrice, setSalePrice] = useState(0);
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

    let paramObj = { product_id: styleId };

    axios
      .get(`${url}/styles`, { params: paramObj })
      .then((res) => {

        //console.log("the data:", res.data);
        setStyles(res.data.results);

        setStyleView(res.data.results[0]); setDefaultPrice(current.default_price)
      })

      .catch((err) => {
        console.log("axios req error:", err);
      });
  };
  useEffect(() => {

    styleFinder(current.id);
  }, [current]);

  //console.log('THE CURRENT PRICE:', current.default_price)//changeStyle(styles[0]);
  //console.log('THE STYLEviewS:', styleView);//className="productOverviewPic
  // setMainPic(styles[0]);

  //console.log('current itemview:', itemView)
  return (
    // }
    <>

      {" "}

      <div className="overviewContainer"style={{}}>



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
            <div className="info">Ratings Info</div>
            <div className="info">{current.category}</div>
            <div className="productName ">
              <h3>{current.name}</h3>



            </div>
            <div className='overviewPricing'>
              <div><OverviewPrice defaultPrice={defaultPrice} salePrice={styleView.sale_price}/></div>
            </div><div style={{fontSize: 'small', flexShrink: '3'}}>{current.description}</div>
            <div className="overviewStyles info">
              <OverviewStyles
                overviewStyles={styles}
                mainPic={mainPic}

                picHandler={changePic}

                styleView={styleView}
                setStyleView={setStyleView}defaultPrice={defaultPrice} setDefaultPrice={setDefaultPrice}
              />
            </div>
            <div className="overviewCart info">
              <OverviewCart current={current} styleView={styleView} itemName={current.name}/>
            </div>
          </div>
        </div>
        <div className="overviewBottom" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-around', alignItems: 'center', fontSize: 'small'}}>
          {/* <div style={{}}>{current.description}</div> */}


        </div>
      </div>
    </>
  );


};
export default Overview;
