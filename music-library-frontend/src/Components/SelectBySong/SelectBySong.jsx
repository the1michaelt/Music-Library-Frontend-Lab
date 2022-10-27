import axios from 'axios';


//GET (Filter, MAPS by one song)

async function SelectBySongs(props) {
    try {
        let response = await axios.get('http://127.0.0.1:8000/api/music/')
        let songSelection = songs.map((song) => {
        setSongs(response.data)   
        console.log('Success in SelectBySongs (Get):', songSelection)
        })
    catch (songSelection) {
        console.log('Error in SelectBySongs (Get):', songSelection)
    }

return (
    <div>
        <p>Filter a Single Song</p>
        <button onClick={SelectBySongs}>Select a Song</button>
    </div>
)
}
export default SelectBySongs(props)
