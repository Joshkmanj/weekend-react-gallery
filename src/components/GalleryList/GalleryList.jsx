import GalleryItem from "../GalleryItem/GalleryItem";
// import { useState } from "react";

function GalleryList({galleryItems}) {


    return (
        <div className="gallery">
            <GalleryItem galleryItems={galleryItems}/>
        </div>
    )
}
export default GalleryList;