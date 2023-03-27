import React, { useState } from "react";
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';

// const Upload = (props) => {

//   const [selectedImage, setSelectedImage] = useState([]);
//   const [currentpic, setCurrentpic] = useState(null);
//   var temppic = selectedImage;
//   return (
//     <div>
//       {temppic[0] && (
//         <div>
//           <img
//             alt="not found"
//             width={"50px"}
//             src={URL.createObjectURL(temppic[0])}
//           />
//         </div>
//       )}
//             {temppic[1] && (
//         <div>
//           <img
//             alt="not found"
//             width={"50px"}
//             src={URL.createObjectURL(temppic[1])}
//           />
//         </div>
//       )}
//                   {temppic[2] && (
//         <div>
//           <img
//             alt="not found"
//             width={"50px"}
//             src={URL.createObjectURL(temppic[2])}
//           />
//         </div>
//       )}
//                   {temppic[3] && (
//         <div>
//           <img
//             alt="not found"
//             width={"50px"}
//             src={URL.createObjectURL(temppic[3])}
//           />
//         </div>
//       )}
//                   {temppic[4] && (
//         <div>
//           <img
//             alt="not found"
//             width={"50px"}
//             src={URL.createObjectURL(temppic[4])}
//           />
//         </div>
//       )}


//       <input
//         type="file"
//         name="myImage"
//         onChange={(event) => {
//           console.log(event.target.files[0]);
//           var temp = selectedImage;
//           if (temp.length < 5) {
//             temp.push(event.target.files[0]);
//             setSelectedImage(temp);
//             setCurrentpic(event.target.files[0]);
//             console.log(selectedImage)
//           } else {
//             temp.shift();
//             temp.push(event.target.files[0]);
//             setSelectedImage(temp);
//             setCurrentpic(event.target.files[0]);
//           }
//         }}
//       />
//       <button onClick={() => {
//             var temp = selectedImage;
//             temp.pop();
//             setSelectedImage(temp)}}>Remove</button>
//       <button onClick={() => {
//         var imagearray = selectedImage.map((image)=>{
//           return URL.createObjectURL(image);
//         })
//         console.log(imagearray);
//         props.upload(imagearray);
//         }}>Upload</button>
//     </div>
//   );
// };

// export default Upload;
const Upload = (props) => {
  const [photoArray, setPhotoArray] = useState([]);
  let temp = [];

  const upload = (event) => {
    event.preventDefault();
    let widget = window.cloudinary.createUploadWidget(
      {
        cloudName: "dsziylmmb",
        uploadPreset: "ml_default",
      },

      (error, result) => {
        if (!error && result && result.event === "success") {
          temp = photoArray.concat(temp);
          temp.push(result.info.url);
          props.upload(temp.slice(0, 5));
          setPhotoArray(temp.slice(0, 5));
        }
      }
    );
    widget.open();
  };

  return (
    <div >
      <br/>
      {[...Array(5)].map((_, index) =>
        photoArray[index] ? (
          <img src={photoArray[index]} key={index} className="ansPhotos" style={{height:50, width:50}} />
        ) : null
      )
      }
      <div className='uploadbutton'>
      <IconButton type="submit" size="small" onClick={upload}>upload</IconButton>
      </div>
    </div>
  );
};

export default Upload;
