import GalleryItem from "../GalleryItem/GalleryItem";

function GalleryList({galleryItems, clickLike}) {


    return (
        <div className="gallery">
            <GalleryItem 
            galleryItems={galleryItems}
            clickLike={clickLike}
            />
        </div>
    )
}
export default GalleryList;