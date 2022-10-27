import React from 'react';

//POST --Response showing all UPDATED by one song

async function DisplayAddedSong(newSong) {
    try {
        let response = await axios.post('http://127.0.0.1:8000/api/music/', newSong);
        if (response.status === 201) {
            console.log('Success in DisplayAddedSong (Post):', response);
            await DisplayAddedSong(newSong);
        }
    }
    catch {
        console.log('Errors in DisplayAddedSong (Post):', response);
    }
}
return (
    <div>
        <p>Post songs</p>
        {console.log('Return in DisplayAddedSong (Post):', props.songs)}
    </div>
)
export default DisplayAddedSong;