import React, { useState } from "react";
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';

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
          <img src={photoArray[index]} key={index} className="ansPhotos" style={{height:50, width:50}}  loading="lazy"/>
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
