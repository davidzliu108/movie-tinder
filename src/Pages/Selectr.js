import React from 'react';
import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import { Card, Button } from 'react-bootstrap';
import './Selectr.css';


const Selectr = () => {
    const [randomId, setRandomId] = useState('tt0076759');
    const [film, setFilm] = useState([]);

    const getRandomFilm = async (randomId) => {
        const url = `http://www.omdbapi.com/?i=${randomId}&apikey=fd314c78`;
        const response = await fetch(url);
        const responseJson = await response.json();
        if(responseJson.Title) { // only set results if search returns something
            setFilm(responseJson);
        } else {
            getRandomFilm(randomId);
        }
    }

    useEffect(() => {
        getRandomFilm(randomId);
    }, [randomId]);


    return (
        <Container className= "container">
            <br></br>
            <h2>Recommendations</h2>
            <br></br>
            <Card className="mainCard">
                <Card.Img variant="top" src={film.Poster} />
                <Card.Body>
                    <Card.Title>{film.Title} {film.Year}</Card.Title>
                    <Card.Text>
                        IMDB rating: {film.imdbRating}
                    </Card.Text>
                    <Card.Text>
                        {film.Genre}
                    </Card.Text>
                    <Card.Text>
                        {film.Plot}
                    </Card.Text>
                    <Button variant="dark">Watch Now</Button>
                </Card.Body>
            </Card>
            <Button className="dislike">Dislike</Button>
            <Button className="like">Like</Button>
        </Container>
    );
}

export default Selectr;