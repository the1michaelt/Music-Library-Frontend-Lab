import React, { useEffect, useState } from 'react';
import NavBar from './Components/NavBar/NavBar';
import MusicTable from './Components/MusicTable/MusicTable';
import AddSongForm from './Components/AddSongForm/AddSongForm';
import axios from 'axios'
import './App.css';

function App() {

  const [songs, setSongs] = useState([])

  useEffect(() => {
    setSongs();
  }, [])

  return (
       <div>
        <NavBar />
        <MusicTable /> 
        <AddSongForm />
        <BackgroundImage />
      </div>
    )
    
 }
export default App;