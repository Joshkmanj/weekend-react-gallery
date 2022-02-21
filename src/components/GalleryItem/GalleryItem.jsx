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
                    <div 
                    className={'card'} 
                    style={{backgroundImage: `url(${photo.path})`}} 
                    // style={ highlight ? {backgroundImage: `url(${photo.path})`,backdropfilter: `blur(3px)` } : {backgroundImage: `url(${photo.path})`} } 
                    onClick={(event) => (imageClick())}>
                    {highlight && <div className='blurCard'><h4 className="description">{photo.note}</h4></div>}
                    </div>
                    <button onClick={(event) => (clickLike(photo.id))}>Like {photo.likes}</button>
                </div>
        
            
        </>)
}
export default GalleryItem;


/*



*/