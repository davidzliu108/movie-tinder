import React from "react";
import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import { Card, Button } from "react-bootstrap";
import "./Selectr.css";
import imdatabase from "./imdbMovies"

const Selectr = () => {
  const [randomId, setRandomId] = useState("tt0076759");
  const [film, setFilm] = useState([]);

  const getRandomFilm = async (randomId) => {
    const url = `http://www.omdbapi.com/?i=${randomId}&apikey=67845d31`;
    const response = await fetch(url);
    const responseJson = await response.json();
    if (responseJson.imdbRating) {
      // only set results if search returns something
      setFilm(responseJson);
    } else {
      //getRandomFilm(randomId);
    }
  };

  useEffect(() => {
    getRandomFilm(randomId);
  }, [randomId]);

  function handleNext() {
    setRandomId("tt"+Math.floor(1000000 + Math.random() * 9000000));
    console.log(Math.floor(1000000 + Math.random() * 9000000));
    getRandomFilm(randomId);
  }

  return (
    <div className="outerdiv">
        <br></br>
        <h2 style={{ color: "white" }}>Recommendations</h2>
        <br></br>
      <Container className="container">
        <Card className="mainCard">
          <Card.Img variant="top" src={film.Poster} />
          <Card.Body>
            <Card.Title>
              {film.Title} {film.Year}
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
            <Button onClick={handleNext} style={{margin:'1rem'}} variant="danger">Dislike</Button>
            <Button onClick={handleNext}style={{margin:'1rem'}} variant="success">Like</Button>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};

export default Selectr;
