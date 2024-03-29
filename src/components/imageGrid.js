// ImageGrid.js
import React from "react";

const ImageGrid = ({ images }) => {
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 gap-4">
      {images.map((image, index) => (
        <div key={index} className=" ">
          <img
            src={image.url}
            alt={image.title}
            className="w-full h-auto rounded-lg"
          />
          <div className="px-6 py-4 text-center">
            <div className="font-bold text-xs mb-2">{image.title}</div>
          </div>
        </div>
      ))}
    </div>
  );
};



export default ImageGrid;

