import React from 'react';
import './App.css';
import GalleryList from '../GalleryList/GalleryList';
import { useState, useEffect } from 'react';
import Axios from 'axios';

// let galleryArray = [
//   {id:1,
//     note: "Solo ride around Uptown and lake Bde Maka Ska."
//   },
//   {id:2,
//     note: "My friends and I refueling during a camping trip."
//   },
//   {id:3,
//     note: "Fun solo ride to a water-side park in Prescott WI."
//   },
//   {id:4,
//     note: "Quick evening stroll along the Minneapolis scenic riverside parks."
//   },
//   {id:5,
//     note: "Late afternoon ride north of the metro."
//   },
//   {id:6,
//     note: "Camping trip party split up, my friend and I went off exploring and found ourselves lost on a dirt road."
//   },
//   {id:7,
//     note: "Solo trip around the massive lake Minnetonka through the winding lakeside roads."
//   },
//   {id:8,
//     note: "While camping, a small furry friend came by to get a closer look at our bikes."
//   },
//   {id:9,
//     note: "Brief pit stop to bask in the scenery near the Stone Arch Bridge."
//   },
//   {id:10,
//     note: "Last stop for gas we ended our riding season in November."
//   }
// ];


function App() {

  const {galleryItems, setGalleryItems} = useState([])

  useEffect(() => {
    getImages()
  }, [])


  const getImages = () => {
    console.log('Getting images');
    Axios.get('/gallery').then(response=>{
      console.log('Server responded to GET request:', response);
      setGalleryItems(response)
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
        galleryItems={galleryItems} />
    </div>
  );
}

export default App;
