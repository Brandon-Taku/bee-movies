import React, { useState, useEffect } from 'react';
import Movie from './Movie';

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

    
    const getMovie = async () => {
        const response = await fetch(`https://api.themoviedb.org/3/coming2america/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false`);

        const data = await response.json();
        //setMovies(data.results);
        console.log('Data => ' + data);
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
                            date={movie.release_date}
                            overview={movie.overview}
                        />
                    ))

                    
                }

            </section>


            <footer className="bg-secondary text-center text-lg-start mt-5">

              <div className="container p-4">

                <div className="row">
    
                <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
                    <h2 className="text-normal">Movie Hub</h2>

                    <p>
                    Movie Hub is a peer-to-peer release group known for distributing large numbers of movies as free downloads through BitTorrent.
                     Movie Hub releases were characterised through their consistent HD video quality in a small file size,
                     which attracted many downloaders.
                    </p>
                </div>
    
                <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                    <h5 className="text-normal">Movies</h5>

                    <ul className="list-unstyled mb-0 text-decoration-none">
                    <li>
                        <a href="/top-rated" className="text-dark text-decoration-none">Top Rated</a>
                    </li>
                    <li>
                        <a href="/up-coming" className="text-dark text-decoration-none">Up-Coming</a>
                    </li>
                    <li>
                        <a href="/tv-series" className="text-dark text-decoration-none">Now-Showing</a>
                    </li>
    
                    </ul>
                </div>
 
                <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                    <h5 className="text-normal mb-0">TV Seasons</h5>

                    <ul className="list-unstyled">
                    <li>
                        <a href="#!" className="text-dark text-decoration-none">Latest Series</a>
                    </li>
                    
                    </ul>
                </div>
               
                </div>
            </div>
    
            <div className="bg-dark text-center p-3 text-light" >
                © 2021 Copyright:
                <a className="text-light text-decoration-none" href="https://github.com/Brandon-Taku" style={{ color: "white" }}> Brandon-Taku</a>
            </div>
            </footer>
        </div>
    )
}

export default Movies
