import "./GalleryItem.css"

function GalleryItem({ galleryArray }) {

    const clickLikeHandler = (id) => {
        console.log('Clicked like button', id);
    };
    const imageClick = (id) => {
        console.log('Clicked image', id);
        // console.log('note:', picObject.note);
    };

    return (
        <>
            {galleryArray.map( picObject =>(
                <div 
                className="card"
                key={picObject.id}>
                    <img 
                    onClick={(event)=>(imageClick(picObject.id))} 
                    src={picObject.path}
                    />
                    <button onClick={(event)=>(clickLikeHandler(picObject.id))}>Like {picObject.likes}</button>
                </div>
            )
            )}

        </>
        

        //     <div
        //         className="card"
        //         key={1}>
        //         <img src="images/bike1.jpeg" onClick={(event)=>(imageClick(1))}/>
        //         <button onClick={(event) => (clickLikeHandler(1))}>Like</button>
        //     </div>
        //     <div
        //         className="card"
        //         key={2}>
        //         <img src="images/bike2.jpeg" onClick={(event)=>(imageClick(2))}/>
        //         <button onClick={(event) => (clickLikeHandler(2))}>Like</button>
        //     </div>
        //     <div
        //         className="card"
        //         key={3}>
        //         <img src="images/bike3.jpeg" onClick={(event)=>(imageClick(3))}/>
        //         <button onClick={(event) => (clickLikeHandler(3))}>Like</button>
        //     </div>
        //     <div
        //         className="card"
        //         key={4}>
        //         <img src="images/bike4.jpeg" onClick={(event)=>(imageClick(4))}/>
        //         <button onClick={(event) => (clickLikeHandler(4))}>Like</button>
        //     </div>
        //     <div
        //         className="card"
        //         key={5}>
        //         <img src="images/bike5.jpeg" onClick={(event)=>(imageClick(5))}/>
        //         <button onClick={(event) => (clickLikeHandler(5))}>Like</button>
        //     </div>
        //     <div
        //         className="card"
        //         key={6}>
        //         <img src="images/bike6.jpeg" onClick={(event)=>(imageClick(6))}/>
        //         <button onClick={(event) => (clickLikeHandler(6))}>Like</button>
        //     </div>
        //     <div
        //         className="card"
        //         key={7}>
        //         <img src="images/bike7.jpeg" onClick={(event)=>(imageClick(7))}/>
        //         <button onClick={(event) => (clickLikeHandler(7))}>Like</button>
        //     </div>
        //     <div
        //         className="card"
        //         key={8}>
        //         <img src="images/bike8.jpeg" onClick={(event)=>(imageClick(8))}/>
        //         <button onClick={(event) => (clickLikeHandler(8))}>Like</button>
        //     </div>
        //     <div
        //         className="card"
        //         key={9}>
        //         <img src="images/bike9.jpeg" onClick={(event)=>(imageClick(9))}/>
        //         <button onClick={(event) => (clickLikeHandler(9))}>Like</button>
        //     </div>
        //     <div
        //         className="card"
        //         key={10}>
        //         <img src="images/bike10.jpeg" onClick={(event)=>(imageClick(10))}/>
        //         <button onClick={(event) => (clickLikeHandler(10))}>Like</button>
        //     </div>


    )
}
export default GalleryItem;