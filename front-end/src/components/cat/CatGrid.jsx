import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getCatImages } from "../../services/cats";

export default function CatGrid() {
  const [images, setImages] = useState([]);

  const { catId } = useParams();

  useEffect(() => {
    getCatImages(catId).then((res) => {
      setImages(res.data);
    });
  }, []);

  useEffect(() => {
    if (!images.length) return;
    console.log("cat images 불러오기");
    console.log(images);
  }, [images]);

  return (
    <div className="flex flex-wrap mt-2">
      {images.map((img) => {
        return (
          <img
            className="w-1/3 p-2"
            key={img.board_id}
            src={img.image}
            alt="고양이글이미지"
          />
        );
      })}
    </div>
  );
}
