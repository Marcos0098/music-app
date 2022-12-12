import { useState, useEffect } from 'react'
import Player from "./components/Player";

import './App.css'

function App() {
  const [songs] = useState([
    {
      title: "Living Hell",
      artist: " Skan",
      img_src: "./images/Skan.jfif",
      src: "./musics/Living-Hell.mp3"
    },
    {
      title: "Devil and I",
      artist: "Slipknot",
      img_src: "./images/devil-and-i.jpg",
      src: "./musics/Devil-in-I.mp3"
    },
    {
      title: "Trapped in a Nightmare",
      artist: "Neffex",
      img_src: "./images/neffex.jpg",
      src: "./musics/Trapped-in-a-Nightmare.mp3"
    }
  ])

  const [currentSongIndex, setCurrentSongIndex] = useState(0)  
  const [nextSongIndex, setNextSongIndex] = useState(currentSongIndex + 1)  

  useEffect(() => {
    setNextSongIndex(() => {
      if(currentSongIndex + 1 > songs.length - 1){
        return 0;
      } else {
        return currentSongIndex + 1;
      }
    });

  }, [currentSongIndex])

  return (
    <div className="App">
     <Player currentSongIndex={currentSongIndex} setCurrentSongIndex={setCurrentSongIndex} nextSongIndex={nextSongIndex} songs={songs}/>
    </div>
  )
}

export default App
