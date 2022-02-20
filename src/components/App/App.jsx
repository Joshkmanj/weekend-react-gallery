import React from 'react';
import './App.css';
import GalleryList from '../GalleryList/GalleryList';
import { useState, useEffect } from 'react';
import axios from 'axios';




function App() {

  const [galleryItems, setGalleryItems] = useState([]);

  const clickLike = (id)=>{
    console.log("Inside clickLike, id:", id);
    axios.put(`/gallery/like/${id}`)
    .then(response=>{
      console.log('Server responded to PUT request');
      getImages()
    }).catch(error=>{
      console.log('Server hasn\'t responded to PUT request');
    })
  }


  useEffect(() => {
    getImages()
  }, [])


  const getImages = () => {
    console.log('Getting images');
    axios.get('/gallery')
    .then(response=>{
      console.log('Server responded to GET request:', response.data);
      setGalleryItems(response.data)
    }).catch(error=>{
      console.log('Server didn\'t respond to GET request:', error);
    })
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Gallery of My Life</h1>
      </header>
      <GalleryList
        galleryItems={galleryItems}
        clickLike={clickLike}
         />
    </div>
  );
}

export default App;
