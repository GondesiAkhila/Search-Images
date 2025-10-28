import React, { useEffect, useState } from "react";
import axios from "axios";

let SearchingImages = () => {
    let [images,setImages] = useState([]);
    let [change,setChange] = useState([]);

    let searchImage = (e) => {
        setChange(e.target.value);
    }

    useEffect(() => {
        axios.get(`https://pixabay.com/api/?key=52957892-06edb58273d7bae159c2d1209&q=${change}&image_type=photo&pretty=true`)
             .then(res => setImages(res.data.hits)).catch(err=>console.log(err))
    },[change])
    console.log(images);
    
    return(
        <div className="image-search-container">
        <h1 className="heading">Pixabay Image Search 🔍</h1>
        <input type="text" placeholder="Search Image" className="search-box" onChange={searchImage}/>
        <div className="gallery">
            {images.map(res=>(
                <div className="image-card" key={res.id}>
                   <img src={res.webformatURL} alt={res.tags} className="image"/>
                </div>
            ) )}
        </div>
        </div>
    )
}
export default SearchingImages;