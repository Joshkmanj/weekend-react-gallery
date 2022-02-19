import GalleryItem from "../GalleryItem/GalleryItem";
// import { useState } from "react";

function GalleryList({galleryArray}) {

    // let [galleryArray, setGalleryArray] = useState([]);

    return (
        <div className="gallery">
            <GalleryItem galleryArray={galleryArray}/>
        </div>
    )
}
export default GalleryList;