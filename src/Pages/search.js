import React, { useState, useEffect } from 'react';
import '../App.css';
import './search.css'
import SearchBox from '../Components/SearchBox';
import MovieList from '../Components/MovieList';

const Search = () => {
    // variables for search
    const [searchResults, setSearchResults] =useState([]);
    const [searchValue, setSearchValue] = useState('');

    const getMovieRequest = async (searchValue) => {
        // searchValue depends on what the user types
        const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=67845d31`;
    
        const response = await fetch(url);
        const responseJson = await response.json();

        if(responseJson.Search) { // only set results if search returns something
            setSearchResults(responseJson.Search);
        }
    };

    useEffect(() => {
        // communicating with the API to get search results
        getMovieRequest(searchValue);
    }, [searchValue]);

    return ( // display search bar, then the results
        <div className='container-fluid'>
            <div class='bar'>
                <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
            </div>
            <div className='row'> 
                <MovieList
                  movies={searchResults}
                />
            </div>
        </div>
    );
};

export default Search;