import React from "react";
import { useEffect, useState, useRef } from "react";
import Container from "react-bootstrap/Container";
import { Card, Button } from "react-bootstrap";
import "./Selectr.css";
import {imdatabase} from "./imdbMovies"
// import {movieRef} from '../firebase'
import {firestore} from "../firebase";
import {addDoc, collection} from "@firebase/firestore";
import {apiKey} from '../apikey.js';

const Selectr = () => {
  // randomly generated tt + 7digit number (imdb id)
  const [randomId, setRandomId] = useState("tt0076759");

  // json of the film to be displayed on the center tinder-esque card
  const [film, setFilm] = useState([]);

  // random "good" movie from imdatabase list
  // if randomId is not correlated to a movie, 
  const [goodMovie, setGoodMovie] = useState("");

  // favorites list that will be pushed into the Google firebase firestore db
  const [favorites, createFavorites] = useState("");

  const ref = collection(firestore, "favorites");
//   const [property, setProperty] = useState(false);

  // called once like or dislike button is click, generates new movie
  const getRandomFilm = async (randomId) => {
    const url = `http://www.omdbapi.com/?i=${randomId}&apikey=${apiKey}1`;
    const response = await fetch(url);
    const responseJson = await response.json();

    // checkIfProperty();
    // retry random movie generation if there was no response or it was an episode
    if (responseJson.Response==="False" || (responseJson.Title.includes("Episode"))) {
        getGoodMovie(imdatabase[Math.floor(Math.random() * imdatabase.length)].id);
    } else {
        setFilm(responseJson);
    //   getRandomFilm(randomId);
    }
  };

  // if randomId is not correlated with property, this function is called
  // fetches from api movie information from goodMovie id
  const getGoodMovie = async(goodMovie) => {
    const url = `http://www.omdbapi.com/?i=${goodMovie}&apikey=${apiKey}`;
    const response = await fetch(url);
    const responseJson = await response.json();

    console.log("get good movie'd")
    setFilm(responseJson);
  }

//   function checkIfProperty() {
//     const getRandomFilm = async (randomId) => {
//         const url = `http://www.omdbapi.com/?i=${randomId}&apikey=67845d31`;
//         const response = await fetch(url);
//         const responseJson = await response.json();

//         if (!responseJson.Title) {
//             setProperty(false);
//         } else {
//             setProperty(true);
//         }
//     }
//   }

  useEffect(() => {
    getRandomFilm(randomId);
  }, [randomId]);

  // called if dislike button is clicked -> doesn't save movie to db
  // genereates random 7digit number in format of imdb id
  // in future, should be saved to 'dislike' portion of db, and less movies
    // in the genre could be recommended
  function handleNextDislike() {
    setRandomId("tt"+Math.floor(1000000 + Math.random() * 9000000));
    console.log(Math.floor(1000000 + Math.random() * 9000000));
    getRandomFilm(randomId);
  }


  // called if like button is clicked
  // genereates random 7digit number in format of imdb id
  // calls addToFavorites
  function handleNextLike() {
    setRandomId("tt"+Math.floor(1000000 + Math.random() * 9000000));
    console.log(Math.floor(1000000 + Math.random() * 9000000));
    getRandomFilm(randomId);
    addToFavorites();
  }

  // adds liked movies to favorites list in firestore
  const addToFavorites = async(e) => {
    console.log(film);

    try {
        addDoc(ref, film);
    } catch(e) {
        console.log(e);
    }
  }

  return (
    <div className="outerdiv">
        <br></br>
      <Container className="container">
        <Card className="mainCard">
          <Card.Img variant="top" src={film.Poster} />
          <Card.Body>
            <Card.Title>
              {film.Title} {'(' + film.Year + ')'}
            </Card.Title>
            <Card.Text>IMDB rating: {film.imdbRating}</Card.Text>
            <Card.Text>{film.Genre}</Card.Text>
            <Card.Text>{film.Plot}</Card.Text>
            <Button class="mr-1" variant="link">
                            <img src="./netflix.png" height="30" width="30"></img>
                        </Button>
                        <Button class="mr-1" variant="link">
                            <img src="./disney.png" height="30" width="30"></img>
                        </Button>
                        <Button class="mr-1" variant="link">
                            <img src="./hbomax.png" height="30" width="30"></img>
                        </Button>
            <br></br>
            <Button onClick={handleNextDislike} style={{margin:'1rem'}} variant="danger">Dislike</Button>
            <Button onClick={handleNextLike} style={{margin:'1rem'}} variant="success">Like</Button>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};

export default Selectr;
