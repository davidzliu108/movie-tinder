import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import SearchBox from './components/SearchBox';

const Search = () => {
    const [searchResults, setSearchResults] =useState([]);
    const [searchValue, setSearchValue] = useState('marvel');

    const getMovieRequest = async (searchValue) => {
        const url = 'http://www.omdbapi.com/?s=${searchValue}&apikey=fd314c78';
    
        const response = await fetch(url);
        const responseJson = await response.json();

        if(responseJson.Search) { // only set results if search returns something
            setResults(responseJson.search);
        }
    };

    useEffect(() => {
        getMovieRequest(searchValue);
    }, [searchValue]);

    return (
        <div className='container-fluid movie-tinder'>
            <div className='row dflex align-items-center mt-4 mb-4'>
                <SubHeading heading = "Movie Search" />
                <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
            </div>
        </div>
    );
};

export default Search;