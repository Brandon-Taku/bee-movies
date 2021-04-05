import React, { useState, useEffect } from 'react';
import Movie from './Movie';
import Footer from '../Footer/Footer';

const Movies = ({ movie_id }) => {

    const API_KEY = "fe5e020771ca617fdbe53a006489cea5";
    const IMAGE_API = "https://image.tmdb.org/t/p/w1280";

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        getMovies()
    }, [])

    const getMovies = async () => {
        const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`);

        const data = await response.json();
        setMovies(data.results);
        console.log(data.results);
    }


    return (
        <div>
            <section className="movie-container">
                {
                    movies.map(movie => (
                        <Movie 
                            key={movie.id}
                            movie_id={movie.id}
                            title={movie.title}
                            pic={IMAGE_API + movie.poster_path}
                            backPic={IMAGE_API + movie.backdrop_path}
                            date={movie.release_date}
                            overview={movie.overview}
                        />
                    ))

                    
                }

            </section>

            <Footer />


        </div>
            

    )
}

export default Movies
