import React, { useEffect, useState } from 'react';
import axios from 'axios'
import './MusicTable'
import AddSongForm from '../AddSongForm/AddSongForm';
import SelectBySong from '../SelectBySong/SelectBySong';

function MusicTable(props) {

    return (
        <div>
            <AddSongForm />
            <SelectBySong />
            <PostMusic />
        </div>
    )
}
export default MusicTable;