import axios from 'axios';
import App from 'App.jsx';

async function selectBySongs(props) {
    try {
        let response = await axios.get('http://127.0.0.1:8000/api/music/')
        { props.songs.map((props.songs) => console.log('single song inside getSongs map:', props.songs)) }
        setSongs(response.data)
    }
    catch (err) {
        console.log('Error in filterSongs', err)
    }
}
return (
    <div>
        <p>Filter Single</p>
        <button onClick={getSongs}>Find a Song</button>
    </div>
)
export default selectBySongs(props)
