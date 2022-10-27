import React, { useEffect, useState } from 'react';
import axios from 'axios'
import './MusicTable'
import AddSongForm from '../AddSongForm/AddSongForm';
import SelectBySong from '../SelectBySong/SelectBySong';
import PostMusic from '../PostMusic/PostMusic';
import DisplayAddedSong from '../DisplayAddedSong/DisplayAddedSong';
    

function MusicTable(props) {

    const [songs, setSongs] = useState([])

    useEffect(() => {
        setSongs();
    }, [])

    return (
        <div>
            <AddSongForm />
            <DisplayAddedSong />
            <SelectBySong />
            <PostMusic />
        </div>
    )
}
export default MusicTable;