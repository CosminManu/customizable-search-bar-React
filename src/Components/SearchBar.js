import react, { useState } from "react"
import "./SearchBar.css"
import SearchIcon from '@mui/icons-material/Search';

function SearchBar({ placeholder, data }) {
    const [filteredData, setFilteredData] = useState([])
    
    const handleFilter = (event) => {
        const enteredWord = event.target.value
        const newFilter = data.filter((value) => {
            return value.title.toLowerCase().includes(enteredWord.toLowerCase())
            //filters also for small letters
        })
        setFilteredData(newFilter)

    }
    //handle event when user enters a letter

    return (
        <div className="search">
            <div className="searchInputs">
                {/*here we write name to search in input
            and make use of other icons */}
                <input type="text" placeholder={placeholder} onChange={handleFilter}></input>
                <div className="searchIcon">
                    <SearchIcon />
                </div>
            </div>

            {filteredData.length != 0 && (
                <div className="dataResult">
                    {filteredData.map((value, key) => {
                        return <a className="dataItem" href={value.link} target="_blank">
                            <p>{value.title}</p>
                        </a>

                        //data.map works like a loop
                        //ajuta sa iau date din json despre fiecare carte
                    })}
                </div>
            )}

        </div>
    )

}

export default SearchBar;