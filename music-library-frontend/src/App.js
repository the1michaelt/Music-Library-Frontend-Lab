import React, { useEffect, useState } from 'react';
// import DisplayMusic from './Components/DisplayMusic/DisplayMusic';
// import MusicTable from './Components/MusicTable/MusicTable';
import axios from 'axios'
import './App.css';

function App() {

  const [songs, setSongs] = useState([])

  useEffect(() => {
    setSongs();
  }, [])

  
  //     // <div className='container-fluid'>
  //     //   <div className='row'>
  //     //     <NavBar />
  //     //     <div className='col-md-6'>
  //     //       <div className='border-box'>
  //     //       <DisplayMusic /> 
 
  //     //       </div>
  //     //       <div className='border-box'>
  //     //         <MusicTable addNewSongEntryProperty={newSongEntry} />
 
  //     //       </div>
  //     //     </div>
  //     //   </div>
  //     // </div>
  //   );
  // }

  // export default App;

 
  async function createSong(newSong) {
    try {
      let response = await axios.post('http://127.0.0.1:8000/api/music/', newSong);
      if (response.status === 201) {
        console.log('Success in songs Posted:', response);
        await createSong(newSong);
      }
    }
    catch {
      console.log('Errors in Posted');
    }
  }
    return (
      <div>
        <p>Post songs</p>
        {console.log('Return songs Posted:', songs)}
      </div>
    )
    
 
  }
export default App;