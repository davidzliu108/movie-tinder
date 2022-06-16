import React, {useState} from 'react';
import Card from "react-bootstrap/Card";
import { Button } from 'react-bootstrap';
import {firestore} from "../firebase";
import {addDoc, collection, setDoc} from "@firebase/firestore";


const MovieList = (props) => {

	return ( // returns a list of cards, each one displaying a movie, its poster, and the streaming services' links, etc.
		<>
			{props.movies.map((movie, index) => (
                <div class="card" style={{ width: '18rem', margin: '1rem' }}>
                    <img class="card-img-top searchImg" variant="top" src={movie.Poster} />
                    <Card.Body>
                        <Card.Title>{movie.Title} {'(' + movie.Year + ')'} </Card.Title>
                    </Card.Body>
                    <div class = 'card-footer mx-auto'>
                        <Button class="searchButton btn btn-link btn-sm" variant="link">
                            <img src="./netflix.png" height="30" width="30"></img>
                        </Button>
                        <Button class="searchButton btn btn-link btn-sm" variant="link">
                            <img src="./disney.png" height="30" width="30"></img>
                        </Button>
                        <Button class="searchButton btn btn-link btn-sm" variant="link">
                            <img src="./hbomax.png" height="30" width="30"></img>
                        </Button>
                    </div>
                    
                </div>               
			))}
		</>
	);
};

export default MovieList;