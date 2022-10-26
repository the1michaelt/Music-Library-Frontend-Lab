import axios from 'axios';


//GET

async function SelectBySongs(props) {
    try {
        let response = await axios.get('http://127.0.0.1:8000/api/music/')
        props.songs.map((song) => { };
            console.log('single song inside getSongs map:', song);
        ) 
        setSongs(response.data)
    }
    catch (err) {
        console.log('Error in filterSongs', err)
    }

return (
    <div>
        <p>Filter Single</p>
        <button onClick={getSongs}>Find a Song</button>
    </div>
)
}
export default SelectBySongs(props)
