import "./GalleryItem.css"

function GalleryItem({ galleryItems, clickLike }) {

    const [highlight, setHighlight] = useState('')

    

    const imageClick = (id) => {
        console.log('Clicked image', id);
        // console.log('note:', picObject.note);
    };

    return (
        <>
            {galleryItems.map((picObject) => (
                <div
                    className="card"
                    key={picObject.id}>
                    <img
                        onClick={(event) => (imageClick(picObject.id))}
                        src={picObject.path}
                    />
                    <button onClick={(event) => (clickLike(picObject.id))}>Like {picObject.likes}</button>
                </div>)
            )}
        </>)
}
export default GalleryItem;


/*



*/