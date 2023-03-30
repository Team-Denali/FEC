import React from "react";
import $ from "jquery"; // Bring React in to build a component.
import { useState, useEffect } from "react"; //var arr = [1, 2, 3];//import { createRoot } from "react-dom/client";

const ExpandedView = require("./ExpandedView").ExpandedView; import RefactoredCarousel from './RefactoredCarousel.jsx';

import ZoomedView from "./ZoomedView";
import FlipToBackIcon from "@mui/icons-material/FlipToBack"; //ChangePic = require('./ExpandedView').ChangePic;//SlMagnifier// Huzzah for jsx!

var OverviewMainPic = ({
  current,
  currentStyles,
  styleView,
  setStyleView,
  mainPic,
  picHandler,
}) => {
  //let obj = currentStyles[0]; console.log('in main pic component:', currentStyles[0]); //const [pic, setPic] = useState(currentStyle[0].photos[0].thumbnail_url) //include state variables for currently viewed product

  if (!currentStyles.length || !Object.keys(currentStyles).length) {
    return;
  }

  const [zoomed, setZoomed] = useState(false); //console.log('THE current PROPS:', current, 'THE currentstyles PROPS:', currentStyles, 'the item prop:', styleView)
  const [pic, setPic] = useState(styleView.photos[0].url);
  useEffect(() => {
    setPic(styleView.photos[0].url);
  }, [styleView]);

  return (
    <div
      className="productOverviewPic"
      style={{
        cursor: "zoom-in",
        backgroundImage: `url(${pic})`,
        maxWidth: "100%",
        maxHeight: "auto",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        display: "flex",
        justifyContent: "space-around",
      }}
      onMouseEnter={(e) => {}}
      onClick={(e) => {
        e.preventDefault();
        ExpandedView(pic);
      }}
    >
      <div

        className="overviewSidePanel"
        style={{
          position: "relative",

          width: "50%", //overflow: 'hidden',
          height: "auto",
          display: "flex",
          justifyContent: "space-between",
        }}
      ><RefactoredCarousel pic={pic} setPic={setPic} style={{zIndex: '5'}} items={styleView.photos}/>
        {/* {styleView.photos.map((photo, i) => (
          <>
            <div
              key={i}
              className="overviewMiniPic"
              style={{
                cursor: "default",
                backgroundImage: `url(${photo.thumbnail_url})`,
                width: "40px",
                height: "40px",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                border: "3px solid",
              }}
              onClick={(e) => {
                e.preventDefault();
                $(".overviewMiniPic").css({ "border-color": "black" });
                $(document.getElementsByClassName("overviewMiniPic")[i]).css({
                  "border-color": "yellow",
                });
                setPic(photo.url);
                e.stopPropagation();
              }}
            ></div>
            <br></br>
          </>
        ))} */}
      </div>

      <div
        id="ExpandedViewModal"
        style={{
          cursor: "default",
          visibility: "hidden",
          animation: "",
          width: "100%",
          height: "100%",
        }}
      >
        <div
          id="imageView"
          style={{
            cursor: "default",
            transition: "",
            width: "75%",
            height: "80%",
          }}
        >
          <div
            id="overview-expanded-img"
            style={{
              cursor: "crosshair", position: 'relative',
              //display: "block",
              marginLeft: "auto",
              marginRight: "auto",
              width: "80%",
              height: "75%",
              marginTop: "100px", zIndex: '1'
              // backgroundImage: `url(${pic})`,
              // backgroundSize: "cover",
              // backgroundPosition: 'center',
              // backgroundRepeat: "no-repeat",
            }}

          ><img  id='img' src={pic} style={{height: '100%', width: '100%', position: 'absolute', zIndex: '2'}} ></img>
            <div
              className="photo"
              style={{
                backgroundImage: `url(${pic})`,
                width: "100%",
                height: "100%", backgroundRepeat: 'no-repeat', position: 'relative', zIndex: '2'
              }}
              onClick={(e) => {
                e.preventDefault();

                 //setZoomed(!zoomed);
                //console.log('zoomed in onClick: ', zoomed);
                ZoomedView(zoomed);
                e.stopPropagation();
              }} ><img id='zoom-img' src={pic} style={{height: '100%', width: '100%', zIndex: ''}}></img></div>
          </div>

          <div
            className="imageViewThumbnails"
            style={{ animation: "fadeIn .75s" }}
          >
            <div
              className="overviewModalSidePanel"
              style={{
                position: "relative",
                width: "100%",
                height: "auto",
                display: "flex",
                justifyContent: "space-around",
              }}
            >
              {styleView.photos.map((photo, i) => (
                <>
                  <div
                    key={i}
                    className="overviewExpandedMiniPic"
                    style={{
                      backgroundImage: `url(${photo.thumbnail_url})`,
                      width: "20px",
                      height: "20px",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "center",
                      border: "3px solid black",
                      borderRadius: "50%",
                    }}
                    onClick={(e) => {
                      e.preventDefault();
                      $(".overviewExpandedMiniPic").css({
                        "border-color": "black",
                      });
                      $(
                        document.getElementsByClassName(
                          "overviewExpandedMiniPic"
                        )[i]
                      ).css({ "border-color": "yellow" });
                      $("#overview-expanded-img").hide((e) => {
                        $("#overview-expanded-img").attr("src", photo.url);
                        $("#overview-expanded-img").show();
                      });
                      e.stopPropagation();
                    }}
                  ></div>
                  <br></br>
                </>
              ))}
            </div>
          </div>
        </div>

        <div>
          <button
            className="overviewModalButton"
            style={{ opacity: "0.5", marginTop: "75px" }}
          >
            <FlipToBackIcon />
          </button>
        </div>
      </div>
    </div>
  );
};
export default OverviewMainPic; //ZoomView();animation: 'fadeIn 3s'
