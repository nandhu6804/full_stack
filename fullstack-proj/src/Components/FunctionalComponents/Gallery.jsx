/*import { useState } from "react";

const Gallery = () => {
    var [counter,setCount]=useState(0);
    function increment() {
        setCount(counter+1)
    }
    function decrement() {
        setCount(counter-1)
    }
    function reset() {
        setCount(counter=0)
    }
    return (
        <section>
            <h1>This is Gallery Page</h1>
            <h2>Learning State</h2>
            <h3>The State of my variable count is {counter}</h3>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
        </section>
    );
};

export default Gallery*/

import React, { useState } from 'react';
import './Gallery.css'; // Ensure you have a corresponding CSS file for styling

const Gallery = () => {
  const [images, setImages] = useState([]);
  const [newImage, setNewImage] = useState(null);

  // Handle image file selection
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setNewImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // Handle adding the new image to the gallery
  const addImageToGallery = () => {
    if (newImage) {
      setImages([...images, newImage]);
      setNewImage(null); // Reset the new image state after adding
    }
  };

  return (
    <div className="gallery-container">
      <h2 className="gallery-title">Our Image Gallery</h2>

      {/* Image Upload Section */}
      <div className="upload-section">
        <input
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
        />
        {newImage && (
          <div className="preview-section">
            <img src={newImage} alt="Preview" className="preview-image" />
            <button onClick={addImageToGallery}>Add to Gallery</button>
          </div>
        )}
      </div>

      {/* Display Gallery Images */}
      <div className="gallery-grid">
        {images.map((image, index) => (
          <div key={index} className="gallery-item">
            <img src={image} alt={`Gallery Item ${index}`} className="gallery-image" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;






