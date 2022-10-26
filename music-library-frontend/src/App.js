import React, { useEffect, useState } from 'react';
// import DisplayEntries from './Components/DisplayEntries/DisplayEntries';
// import AddEntryForm from './Components/AddEntry/AddEntryForm';
import axios from 'axios'
import './App.css';

function App() {

  const [songs, setSongs] = useState([])

  useEffect(() => {
    getSongs();
  }, [])

  async function getSongs() {
    try {
      let response = await axios.get('http://127.0.0.1:8000/api/music/')
      console.log('response in getSongs', response)
      setSongs(response.data)
    }
    catch (err) {
      console.log(err)
    }
  }

  // function addNewEntry(entry) {
  //   let nextEntries = [...entries, entry]; //adds each new entry to the end of the array
  //   setEntries(nextEntries);
  // }

  return (
    <div>
      <p>hello world</p>
    {    console.log('songs in return:', songs)  }
    {
    songs.map((songs) => console.log('single song inside map', songs))
  } 
  </div>
    // <div className='container-fluid'>
    //   <div className='row'>
    //     <h3 style={{ margin: '1em' }}>Music<span>Box</span></h3>
    //     <div className='col-md-6'>
    //       <div className='border-box'>
    //         <DisplayEntries parentEntries={entries} />
    //       </div>
    //       <div className='border-box'>
    //         <AddEntryForm addNewEntryProperty={addNewEntry} />
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}

export default App;
