import React, { useState } from "react";
import "../styles/uploadImage.css";

const UploadImage = (props) => {
  const [previewImage, setPreviewImage] = useState();
  const [isShown, setIsShown] = useState(false);
  function showPreview(event) {
    console.log("file:", event.target.files.length);
    if (event.target.files.length > 0) {
      let src = URL.createObjectURL(event.target.files[0]);
      setPreviewImage(src);
      setIsShown(true);
      props.catchImage(src);
    }
  }

  return (
    <div
      className="upload-image"
      style={{
        background: isShown && "#fff",
      }}
    >
      <div className="center">
        <div className="form-input">
          <div className="preview">
            <img
              id="file-ip-1-preview"
              style={{
                display: isShown ? "block" : "none",
              }}
              src={previewImage}
            />
          </div>
          <label htmlFor="file-ip-1">Upload Image</label>
          <input
            type="file"
            id="file-ip-1"
            accept="image/*"
            onChange={showPreview}
          />
        </div>
      </div>
    </div>
  );
};

export default UploadImage;
