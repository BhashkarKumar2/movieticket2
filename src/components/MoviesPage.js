import React from 'react';
import MovieCard from './MovieCard';
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const MoviesPage = ({ movies, onEdit, onDelete }) => {
    const navigate = useNavigate();

    const handleEdit = (movie) => {
        onEdit(movie);
        navigate(`/edit-movie/${movie.id}`);
    };

    const handleAddNew = () => {
        navigate('/');
    };

    return (
        <div className="container">
            <h2>Movies</h2>
            <Button variant="success" className="mb-4" onClick={handleAddNew}>
                Add New Movie
            </Button>
            <div className="row mt-4">
                {movies.map((movie, index) => (
                    <div className="col-md-4" key={index}>
                        <MovieCard movie={movie} onDelete={onDelete} />
                        <Button variant="warning" className="mt-2" onClick={() => handleEdit(movie)}>
                            Edit
                        </Button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MoviesPage;
