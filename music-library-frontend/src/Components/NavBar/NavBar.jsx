import "./SearchBar.css"
import './NavBar.css';

function NavBar() {
    return (
        <div className='row'>
            <h3 className='NavBar'>MusicBox</h3>
            <SearchBar />
        </div>
    );
}
export default NavBar;
