import $ from "jquery";
import FlipToBackIcon from "@mui/icons-material/FlipToBack";


var zoom = true;

const ZoomedView = () => {
  // console.log('IN ZOOMED VIEW:', document.getElementById('overview-expanded-img').src);
  // $("#overview-expanded-img").click((e) => {
  //   e.preventDefault(); //console.log('clicked again!');

    if (zoom) {
      //zoom = false;
      $(".imageViewThumbnails").hide();
      $(".overviewModalButton").hide();
      $('#img')
        .on("click", () => {
        zoom = !zoom;
        console.log("Zoom click: ", zoom);
        })
        //.on('mouseover', (e) => { console.log(('e.page vals:', e.pageX, e.pageY, e.pageX - $(this).offset().left) / $(this).width()) * 1})
        .on("mousemove", function (e) {
          console.log("Zoom: ", zoom);
          if (zoom){
            console.log("Mousemove cursor global coords: ", e.pageX, e.pageY);
            // console.log("Mousemove cursor offset coords: ", e.offsetX, e.offsetY);
            // console.log("X: ",(((e.offsetX - $(this).children('#img').offset().left) / $(this).children('#img').width()) * 100).toFixed(2));
            // console.log("Y: ",(((e.offsetY - $(this).children('#img').offset().top) / $(this).children('#img').height()) * 100).toFixed(2));
            $('#zoom-img')

              .css({
                "transform": "scale(2.5)",
                "cursor": "zoom-out",
                "transform-origin":
                  ((e.offsetX - $('#img').offset().left) / $('#img').width()) * 120 +
                  "% " +
                  ((e.offsetY -$('#img').offset().top) / $('#img').height()) * 100 +
                  "%",
              });
          }
          // $(this);
          // add a photo container
          //This is getting appended every time the app receives an update.
          // infinite div
        });
    } else {
      //zoom = true;
      $(".imageViewThumbnails").show();
      $(".overviewModalButton").show();
      $('#zoom-img').css({
        transform: "scale(1)",
        cursor: "crosshair",
      });
      // $("#overview-expanded-img").on("mousemove", function (e) {});
      // $("#overview-expanded-img").css({
      //   transform: "scale(1)",
      //   cursor: "crosshair",
      // });
    }
  };
  // .on('mousemove', (e) => {
  //   console.log()
  //   $('#overview-expanded-img').css({'transform-origin': `-${e.pageX}px -${e.pageY}px`})
// };

// })

export default ZoomedView;
