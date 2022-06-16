import React, { useState, useEffect } from 'react';
import '../App.css';
import './search.css'
import Navbar from '../Components/Navbar';
import SearchBox from '../Components/SearchBox';
import SubHeading from '../Components/SubHeading';
import MovieList from '../Components/MovieList';


const Search = () => {
    const [searchResults, setSearchResults] =useState([]);
    const [searchValue, setSearchValue] = useState('');

    const getMovieRequest = async (searchValue) => {
        const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=67845d31`;
    
        const response = await fetch(url);
        const responseJson = await response.json();

        if(responseJson.Search) { // only set results if search returns something
            setSearchResults(responseJson.Search);
        }
    };

    useEffect(() => {
        getMovieRequest(searchValue);
    }, [searchValue]);

    return (
        <div className='container-fluid'>
            <div className='row dflex align-items-center mt-4 mb-4'>
                {/* <SubHeading heading = "Movie Search" /> */}
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