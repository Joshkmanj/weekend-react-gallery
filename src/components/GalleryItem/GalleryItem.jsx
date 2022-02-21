import "./GalleryItem.css"
import { useState } from "react";

function GalleryItem({ photo, clickLike }) {

    const [highlight, setHighlight] = useState(false)



    const imageClick = () => {
        console.log('Clicked image');
        setHighlight(!highlight)
        // console.log('note:', picObject.note);
    };


    console.log('Highlighted image:', highlight);
    return (
        <>
                <div
                    className="frame">
                    <div className={'card'} style={{backgroundImage: `url(${photo.path})`}} onClick={(event) => (imageClick())}>
                    <p>{photo.note}</p>
                    </div>
                    <button onClick={(event) => (clickLike(photo.id))}>Like {photo.likes}</button>
                </div>
        
            
        </>)
}
export default GalleryItem;


/*



*/