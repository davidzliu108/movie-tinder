import React, { useState, useEffect } from 'react';
import '../App.css';
import Navbar from '../Components/Navbar';
import SearchBox from '../Components/SearchBox';
import SubHeading from '../Components/SubHeading';
import MovieList from '../Components/MovieList';


const Search = () => {
    const [searchResults, setSearchResults] =useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [movies, setMovies] = useState([]);

    const getMovieRequest = async (searchValue) => {
        const url = 'http://www.omdbapi.com/?s=${searchValue}&apikey=fd314c78';
    
        const response = await fetch(url);
        const responseJson = await response.json();

        if(responseJson.Search) { // only set results if search returns something
            setMovies(responseJson.Search);
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
            <div className='row'>
                <MovieList
                  movies={movies}
                />
            </div>
        </div>
    );
};

export default Search;