async function createSong(newSong) {
    try {
        let response = await axios.post('http://127.0.0.1:8000/api/music/', newSong);
        if (response.status === 201) {
            console.log('Success in songs Posted:', response);
            await createSong(newSong);
        }
    }
    catch {
        console.log('Errors in Posted:', response);
    }
}
return (
    <div>
        <p>Post songs</p>
        {console.log('Return songs Posted:', props.songs)}
    </div>
)
export default createSong;