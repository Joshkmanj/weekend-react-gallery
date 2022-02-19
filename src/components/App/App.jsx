import React from 'react';
import './App.css';
import GalleryList from '../GalleryList/GalleryList';

let galleryArray = [
  {id:1,
    note: "This was a fun day"
  },
  {id:2,
    note: "This was a fun day"
  },
  {id:3,
    note: "This was a fun day"
  },
  {id:4,
    note: "This was a fun day"
  },
  {id:5,
    note: "This was a fun day"
  },
  {id:6,
    note: "This was a fun day"
  },
  {id:7,
    note: "This was a fun day"
  },
  {id:8,
    note: "This was a fun day"
  },
  {id:9,
    note: "This was a fun day"
  },
  {id:10,
    note: "This was a fun day"
  }
];


function App() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <GalleryList
        galleryArray={galleryArray}/>
      </div>
    );
}

export default App;
