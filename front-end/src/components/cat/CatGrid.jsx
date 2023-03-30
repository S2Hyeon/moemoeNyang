import React, { useState, useEffect } from "react";
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