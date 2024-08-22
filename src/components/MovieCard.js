import React from 'react';
import { Card, Button } from 'react-bootstrap';
import './MovieCard.css';

const MovieCard = ({ movie, onDelete }) => {
    return (
        <Card style={{ width: '18rem', marginBottom: '20px' }}>
            <Card.Img variant="top" src={movie.image} className="movie-image" />
            <Card.Body>
                <Card.Title>{movie.title}</Card.Title>
                <Card.Text>
                    <strong>Language:</strong> {movie.language}<br />
                    <strong>Genre:</strong> {movie.genre}<br />
                    <strong>Director:</strong> {movie.director}<br />
                    <strong>Duration:</strong> {movie.duration} minutes<br />
                    <strong>Description:</strong> {movie.description}<br />
                    <strong>Start Date:</strong> {new Date(movie.startDate).toLocaleDateString()}<br />
                    <strong>End Date:</strong> {new Date(movie.endDate).toLocaleDateString()}
                </Card.Text>
                <Button variant="primary" href={movie.trailer} target="_blank">Watch Trailer</Button>
                <Button variant="danger" className="mt-2" onClick={() => onDelete(movie.id)}>Delete</Button>
            </Card.Body>
        </Card>
    );
};

export default MovieCard;
