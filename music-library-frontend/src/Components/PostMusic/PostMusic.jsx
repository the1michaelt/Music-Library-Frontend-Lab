import React from 'react'
import axios from 'axios'


async function PostMusic() {

    try {
        let response = await axios.get('http://127.0.0.1:8000/api/music/')
        console.log('Success response in PostMusic', response)
        setSongs(response.data)
    }
    catch (err) {
        console.log('Error in PostMusic', err)
    }
}
export default PostMusic;
