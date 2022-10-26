import React, { useEffect, useState } from 'react';
import axios from 'axios'
import './DisplayMusic'
import App from 'App';

function DisplayMusic(props) {

    async function getSongs(props) {
        try {
            let response = await axios.get('http://127.0.0.1:8000/api/music/')
            { console.log('songs in getSong Return:', props.songs) }
            setSongs(response.data)
        }
        catch (err) {
            console.log('Error in getSongs', err)
        }
    }
    return (
        <div>
            <p>Display All Songs</p>
            <button onClick={getSongs}>Get Songs</button>
            <PostMusic />
        </div>
    )
}
export default DisplayMusic;