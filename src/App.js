import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import MovieForm from './components/MovieForm';
import MoviesPage from './components/MoviesPage';

const App = () => {
    const [movies, setMovies] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const storedMovies = localStorage.getItem('movies');
        if (storedMovies) {
            setMovies(JSON.parse(storedMovies));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('movies', JSON.stringify(movies));
    }, [movies]);

    const addOrUpdateMovie = (movie, isEdit) => {
        if (isEdit) {
            setMovies(
                movies.map((m) =>
                    m.id === movie.id ? movie : m
                )
            );
        } else {
            setMovies([...movies, { ...movie, id: movies.length + 1 }]);
        }
    };

    const deleteMovie = (id) => {
        const updatedMovies = movies.filter((movie) => movie.id !== id);
        setMovies(updatedMovies);
    };

    const handleEdit = (movie) => {
        navigate(`/edit-movie/${movie.id}`);
    };

    return (
        <Routes>
            {/* Route for adding a new movie */}
            <Route path="/" element={<MovieForm onSubmit={addOrUpdateMovie} movies={movies} />} />
            {/* Route for editing an existing movie */}
            <Route path="/edit-movie/:id" element={<MovieForm onSubmit={addOrUpdateMovie} movies={movies} />} />
            {/* Route for viewing movies */}
            <Route path="/movies" element={<MoviesPage movies={movies} onEdit={handleEdit} onDelete={deleteMovie} />} />
        </Routes>
    );
};

const AppWrapper = () => {
    return (
        <Router>
            <App />
        </Router>
    );
};

export default AppWrapper;
