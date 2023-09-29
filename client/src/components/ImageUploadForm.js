import React, { useState } from "react";

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

  const handleSumbit = (event) => {
    event.preventDefualt();

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
      <h2>+ ART</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="imageUpload">Upload Image (.jpeg or .png)</label>
          <input
            type="file"
            accept=".jpeg, .jpg, .png"
            id="imageUpload"
            onChange={handleImageUpload}
          />
        </div>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={handleTitleChange}
            required
          />  
        </div>
        <div>
          <label htmlFor="medium">Medium:</label>
          <input
            type="text"
            id="medium"
            value={medium}
            onChange={handleMediumChange}
            required
          />  
        </div>
        <button type="submit">Submit</button>
      </form>
      {image && (
        <div>
          <h3>Image Preview:</h3>
          <img src={URL.createObjectURL(image)} alt="Uploaded" width="200" />
        </div>  
      )}
    </div>
  );
}

export default ImageUploadForm;