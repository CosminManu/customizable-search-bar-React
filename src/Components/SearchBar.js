import react from "react"
import "./SearchBar.css"
import SearchIcon from '@mui/icons-material/Search';

function SearchBar({ placeholder, data }) {
    return (
        <div className="search">
            <div className="searchInputs">
                {/*here we write name to search in input
            and other icons */}
                <input type="text" placeholder={placeholder}></input>
                <div className="searchIcon">
                    <SearchIcon />
                </div>
            </div>
            <div className="dataResult">
                {data.map((value, key) => {
                    return <a className="dataItem" href={value.link} target="_blank">
                        <p>{value.title}</p>
                    </a>
    
                    //a tag used to nav to specific book
                })}
            </div>

        </div>
    )

}

export default SearchBar;