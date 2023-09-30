import React from 'react'
import { useState } from "react";

const ImageUploadForm = () => {
  const [image, setImage] = useState(null);
  const [title, setTitle] = useState("");
  const [medium, setMedium] = useState("");
  
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    //validate file type
    if (file && (file.type === 'image/jpeg' || file.type === 'image/')) {
      setImage(file);
    } else {
      setImage(null);
      console.log('Image must be JPEG or PNG');
    }
  };
  
  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleMediumChange = (event) => {
    setMedium(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("medium", medium);
    formData.append("image", image);

    try {
      const customEvent = new Event("customSubmit", { bubbles: true});
      customEvent.formData = formData;

      document.dispatchEvent(customEvent);

      console.log("Image upload requested");

      //reset form fields
      setImage(null);
      setTitle("");
      setMedium("");
    }
    catch(error){
      console.error("Error requesting image upload", error);
    }
  };
  
  return (
    <div>
      {image && (
        <div>
          <h3>Image Preview:</h3>
          <img src={URL.createObjectURL(image)} alt="Uploaded" width="350" />
        </div>  
      )}
      <form className="imageForm" onSubmit={handleSubmit}>
        <div>
          <label className='custom-file-upload'>
            <input
            type="file"
            accept=".jpeg, .jpg, .png"
            id="imageUpload"
            onChange={handleImageUpload}
            />
          </label>
        </div>
        <div>
          {/* <label htmlFor="title">Title:</label> */}
          <input
            type="text"
            id="title"
            placeholder='Title'
            value={title}
            onChange={handleTitleChange}
            required
          />  
        </div>
        <div>
          {/* <label htmlFor="medium">Medium:</label> */}
          <input
            type="text"
            id="medium"
            placeholder='Medium'
            value={medium}
            onChange={handleMediumChange}
            required
          />  
        </div>
        <button type="submit">Add Art</button>
      </form>
    </div>
  );
}

export default ImageUploadForm;