import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import MovieDetails from '../MovieDetails/MovieDetails';
import '../style.css';


const Movie = ({ title, pic, summary }) => {

    const API_KEY = "fe5e020771ca617fdbe53a006489cea5";
    const IMAGE_API = "https://image.tmdb.org/t/p/w1280";

    const [movies, setMovies] = useState([]);
    const [movieById, setMovieById] = useState([]);

    useEffect(() => {
        getMovies()
    }, [])

    const getMovies = async () => {
        const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`);

        const data = await response.json();
        setMovies(data.results);
    }

    return (
        
        <div className="container">
	       	<img src={pic} alt="Avatar" className="image" style={{ width: 290 }} />
            <div className="middle">
            <div className="text"><strong style={{ fontSize: 30 }}>{title}</strong><br/> {summary} <br/></div>
            </div>
	    </div>

    )
}

export default Movie
