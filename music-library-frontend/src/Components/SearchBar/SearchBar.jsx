import "./SearchBar.css"
import "./font-awesome.min.css"

function SearchBar(props) {
    return (
          
    <div class="search-container">
        <form action="/action_page.php">
            <input type="text" placeholder="Search.." name="search"/>
                <button type="submit"><i class="fa fa-search"></i></button>
        </form>
    </div>
    );
}
export default SearchBar;
