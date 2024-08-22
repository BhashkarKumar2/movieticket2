import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './MovieForm.css';

const MovieForm = ({ onSubmit, movies }) => {
    const [movie, setMovie] = useState({
        title: '',
        image: '',
        language: '',
        genre: '',
        director: '',
        trailer: '',
        description: '',
        duration: '',
        startDate: '',
        endDate: '',
    });

    const navigate = useNavigate();
    const { id } = useParams();
    const isEdit = Boolean(id);

    useEffect(() => {
        if (isEdit) {
            const movieToEdit = movies.find((m) => m.id === parseInt(id, 10));
            if (movieToEdit) {
                setMovie(movieToEdit);
            }
        }
    }, [id, movies, isEdit]);

    const handleChange = (e) => {
        setMovie({
            ...movie,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(movie, isEdit);
        navigate('/movies');
    };

    return (
        <form className="movie-form" onSubmit={handleSubmit}>
            <h2>{isEdit ? 'Update Movie' : 'Add a New Movie'}</h2>
            {/* Form fields remain the same */}
            <div className="form-group">
                <label htmlFor="title">Title:</label>
                <input
                    type="text"
                    id="title"
                    name="title"
                    value={movie.title}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="form-group">
                <label htmlFor="image">Image URL:</label>
                <input
                    type="text"
                    id="image"
                    name="image"
                    value={movie.image}
                    onChange={handleChange}
                    required
                />
            </div>

            <div className="form-group">
                <label htmlFor="language">Language:</label>
                <input
                    type="text"
                    id="language"
                    name="language"
                    value={movie.language}
                    onChange={handleChange}
                    required
                />
            </div>

            <div className="form-group">
                <label htmlFor="genre">Genre:</label>
                <input
                    type="text"
                    id="genre"
                    name="genre"
                    value={movie.genre}
                    onChange={handleChange}
                    required
                />
            </div>

            <div className="form-group">
                <label htmlFor="director">Director:</label>
                <input
                    type="text"
                    id="director"
                    name="director"
                    value={movie.director}
                    onChange={handleChange}
                    required
                />
            </div>

            <div className="form-group">
                <label htmlFor="trailer">Trailer URL:</label>
                <input
                    type="text"
                    id="trailer"
                    name="trailer"
                    value={movie.trailer}
                    onChange={handleChange}
                    required
                />
            </div>

            <div className="form-group">
                <label htmlFor="description">Description:</label>
                <textarea
                    id="description"
                    name="description"
                    value={movie.description}
                    onChange={handleChange}
                    required
                />
            </div>

            <div className="form-group">
                <label htmlFor="duration">Duration (in minutes):</label>
                <input
                    type="number"
                    id="duration"
                    name="duration"
                    value={movie.duration}
                    onChange={handleChange}
                    required
                />
            </div>

            <div className="form-group">
                <label htmlFor="startDate">Start Date:</label>
                <input
                    type="date"
                    id="startDate"
                    name="startDate"
                    value={movie.startDate}
                    onChange={handleChange}
                    required
                />
            </div>

            <div className="form-group">
                <label htmlFor="endDate">End Date:</label>
                <input
                    type="date"
                    id="endDate"
                    name="endDate"
                    value={movie.endDate}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="form-group">
                <button type="submit" className="submit-button">
                    {isEdit ? 'Update' : 'Submit'}
                </button>
            </div>
        </form>
    );
};

export default MovieForm;
