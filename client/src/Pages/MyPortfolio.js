import React from "react";
import ImageUploadForm from "../components/ImageUploadForm";

export const Home = () => {
  return (
    <div>
      <h2>My Portfolio</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur,
            est?</p>
      <div>
        <label imageUpload={ImageUploadForm}></label>
      </div>
    </div>
  );
}