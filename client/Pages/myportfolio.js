import React from "react";
import ImageUploadForm from "../components/ImageUploadForm"

const MyPortfolio = () => {
  return (
    <div className="content">
      <h2>My Portfolio</h2>
      <div>
        <ImageUploadForm />
      </div>
    </div>
  );
}

export default MyPortfolio;