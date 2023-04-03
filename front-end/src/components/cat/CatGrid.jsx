import React, { useState, useEffect } from "react";

export default function CatGrid({ catInfo }) {
  const [images, setImages] = useState([]);

  return (
    <div
      className="container flex flex-wrap justify-between 
         mx-auto "
    >
      {images.map((image) => (
        <div key={image.id} style={{ width: "calc(33.33% - 10px)" }}>
          <img
            className="w-100% height-100% object-fit-cover"
            src={image.urls.small}
            alt={image.alt_description}
          />
        </div>
      ))}
    </div>
  );
}
