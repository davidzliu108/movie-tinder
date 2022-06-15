import React from 'react';
import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import { Card } from 'react-bootstrap';

const Selectr = () => {
    const [randomId, setRandomId] = useState('tt0076759');
    const [film, setFilm] = useState('');

    const getRandomFilm = async (randomId) => {
        const url = "http://www.omdbapi.com/?i=${randomId}&apikey=fd314c78"
        const response = await fetch(url);
        const responseJson = await response.json();
        setFilm(responseJson.Title);
    }

    useEffect(() => {
        
        getRandomFilm('tt0076759');
    })


    return (
        <Container>
            <h2>Recommendations</h2>
            <Card>
                {film}
            </Card>
        </Container>
    );
}

export default Selectr;