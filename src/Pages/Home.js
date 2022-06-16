import React, {useState, useEffect} from "react";
import "../App.css";
import Navbar from "../Components/Navbar";
import MovieList from '../Components/MovieList';
import './Home.css';
import {firestore} from "../firebase";
import {collection, onSnapshot} from "firebase/firestore";
import Card from "react-bootstrap/Card";
import { Button } from 'react-bootstrap';


const Home = () => {
  const [favs, setFavs] = useState([]);
  const favsCollectionRef = collection(firestore, "favorites");

  useEffect(() => {
    onSnapshot(favsCollectionRef, snapshot => {
      setFavs(snapshot.docs.map(doc => {
        return {
          id: doc.id,
          viewing: false,
          ...doc.data()
        }
      }))
    })
  }, [])

  const [spaceMovies, setSpaceMovies] = useState([
    {
      "Title": "Star Wars",
      "Year": "1977",
      "imdbID": "tt0076759",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BNzg4MjQxNTQtZmI5My00YjMwLWJlMjUtMmJlY2U2ZWFlNzY1XkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX300.jpg"
    },
    {
      "Title": "Star Wars: Episode I - The Phantom Menace",
      "Year": "1999",
      "imdbID": "tt0120915",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BYTRhNjcwNWQtMGJmMi00NmQyLWE2YzItODVmMTdjNWI0ZDA2XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"
   },
   {
    "Title": "Rogue One: A Star Wars Story",
    "Year": "2016",
    "imdbID": "tt3748528",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMjEwMzMxODIzOV5BMl5BanBnXkFtZTgwNzg3OTAzMDI@._V1_SX300.jpg"
    },
    {
      "Title": "Star Trek",
      "Year": "2009",
      "imdbID": "tt0796366",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMjE5NDQ5OTE4Ml5BMl5BanBnXkFtZTcwOTE3NDIzMw@@._V1_SX300.jpg"
    },
  ]);

  const [animationMovies, setAnimationMovies] = useState([
    {
      "Title": "Toy Story",
      "Year": "1995",
      "imdbID": "tt0114709",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMDU2ZWJlMjktMTRhMy00ZTA5LWEzNDgtYmNmZTEwZTViZWJkXkEyXkFqcGdeQXVyNDQ2OTk4MzI@._V1_SX300.jpg"
    },
    {
    "Title": "The Lego Movie",
    "Year": "2014",
    "imdbID": "tt1490017",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMTg4MDk1ODExN15BMl5BanBnXkFtZTgwNzIyNjg3MDE@._V1_SX300.jpg"
    },
    {
      "Title": "WALL·E",
      "Year": "2008",
      "imdbID": "tt0910970",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMjExMTg5OTU0NF5BMl5BanBnXkFtZTcwMjMxMzMzMw@@._V1_SX300.jpg"
    },
    {
      "Title": "Shrek",
      "Year": "2001",
      "imdbID": "tt0126029",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BOGZhM2FhNTItODAzNi00YjA0LWEyN2UtNjJlYWQzYzU1MDg5L2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
    },
  ])

  const [documentaryMovies, setDocumentaryMovies] = useState([
    {
      "Title": "Free Solo",
      "Year": "2018",
      "imdbID": "tt7775622",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMjMwYjcwNWQtNTQ5YS00MzVlLTkxYzMtNDIwZWIxZTE4Zjg2XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
    },
    {
      "Title": "March of the Penguins",
      "Year": "2005",
      "imdbID": "tt0428803",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMTM1NDc5MDYxMl5BMl5BanBnXkFtZTcwMjMzNDAzMQ@@._V1_SX300.jpg"
    },
    {
      "Title": "Man on Wire",
      "Year": "2008",
      "imdbID": "tt1155592",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMTMxNTk3NDY1NV5BMl5BanBnXkFtZTcwNDk0ODg3MQ@@._V1_SX300.jpg"
    },
    {
      "Title": "Won't You Be My Neighbor?",
      "Year": "2018",
      "imdbID": "tt7681902",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMjM1NDg1MjUzNF5BMl5BanBnXkFtZTgwNTAxNjIzNTM@._V1_SX300.jpg"
  },
  ])

  return (
    <div id="Home-Page-Content">
      <h1 className="standard-content">Home</h1>
      <p className="standard-content">Welcome to Film Select</p>
      
      <div className="favorites">
        <h6 className="standard-content">Favorites:</h6>

        <div className='container-fluid movie-tinder'>
          <div className='row'>
          <MovieList movies={favs}/>
          </div>
        </div>
        <br></br>
      </div>

      <br></br>

      <h6 className="standard-content">Space</h6>
      <div className='container-fluid movie-tinder'>
        <div className='row'>
          <MovieList movies={spaceMovies}/>
        </div>
      </div>

      <h6 className="standard-content">Animation</h6>
      <div className='container-fluid movie-tinder'>
        <div className='row'>
          <MovieList movies={animationMovies}/>
        </div>
      </div>

      <h6 className="standard-content">Documentary</h6>
      <div className='container-fluid movie-tinder'>
        <div className='row'>
          <MovieList movies={documentaryMovies}/>
        </div>
      </div>

    </div>
    );
  };

export default Home;
