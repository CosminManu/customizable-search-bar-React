import React from 'react';
import './App.css';
import SearchBar from './Components/SearchBar';
import Books from "./data.json"

function App() {
    return <div className='App' >
        <SearchBar placeholder="Search here..." data={Books}/>
    </div>
}

export default App;