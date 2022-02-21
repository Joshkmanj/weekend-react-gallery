import GalleryItem from "../GalleryItem/GalleryItem";

function GalleryList({galleryItems, clickLike}) {


    return (
        <div className="gallery">
            {galleryItems.map((photo) => (
            <GalleryItem 
            key={photo.id}
            photo={photo}
            clickLike={clickLike}
            />))}
        </div>
    )
}
export default GalleryList;