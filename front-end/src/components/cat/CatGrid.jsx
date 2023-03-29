import React, { useState, useEffect } from "react";
<<<<<<< HEAD
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
=======
import axios from 'axios'

export default function CatGrid() {
    const [images, setImages] = useState([])

    useEffect(() => {
        axios.get('/cats/{catId}')
            .then(response => {
                setImages(response.data)
            })
            .catch(error => {
                console.log(error)
            })
    }, [])

    return (
        <div className="container flex flex-wrap justify-between 
         mx-auto ">
            {images.map(image => (
                <div key={image.id} style={{ width: "calc(33.33% - 10px)" }}>
                    <img className="w-100% height-100% object-fit-cover" src={image.urls.small} alt={image.alt_description} />
                </div>
            ))}
            
        </div>
    )

    
}
>>>>>>> af335cace52712f4d8c30d384a370293d84ac79b
