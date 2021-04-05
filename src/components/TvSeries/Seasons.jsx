import React, { useState, useEffect } from 'react';
import Season from './Season';
import SearchBar from './Search';
import Footer from '../Footer/Footer';

const Seasons = () => {

    const API_KEY = "fe5e020771ca617fdbe53a006489cea5";
    const IMAGE_API = "https://image.tmdb.org/t/p/w1280";

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        getMovies()
    }, [])

    const getMovies = async () => {
        const response = await fetch(`https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}&language=en-US&page=1`);

        const data = await response.json();
        setMovies(data.results);
        console.log(data.results);
    }


    return (
        <div>

            <div id="demo-1" style={{
                backgroundImage: `url(/arrow.jpg)`
            }}>
                <div class="demo-inner-content">

                    <div class="header-w3-agileits" id="home">
                        <div class="inner-header-agile">
                            <nav class="navbar navbar-default">
                                <div class="navbar-header">
                                    <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                                        <span class="sr-only">Toggle navigation</span>
                                        <span class="icon-bar"></span>
                                        <span class="icon-bar"></span>
                                        <span class="icon-bar"></span>
                                    </button>
                                    <h1><a href="/"><span>B</span>ee <span>M</span>ovies</a></h1>
                                </div>

                                <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                                    <ul class="nav navbar-nav">
                                        <li><a href="/">Home</a></li>

                                        <li><a href="/top-rated">Top-Rated</a></li>
                                        <li class="active"><a href="/tv-series">TV-Series</a></li>
                                        <li><a href="/up-coming">Up-Coming</a></li>
                                        <li><a href="/now-showing">Now-Showing</a></li>

                                    </ul>

                                </div>
                                <div class="clearfix"> </div>
                            </nav>
                            
                        </div>

                    </div>
                </div>


            </div>

            <div className="container">
                <SearchBar />
            </div>


            <section className="movie-container">
                {
                    movies.map(movie => (
                        <Season
                            key={movie.id}
                            summary={movie.overview}
                            title={movie.name}
                            pic={IMAGE_API + movie.poster_path}
                            date={movie.release_date}

                        />
                    ))


                }

            </section>

            <Footer />

        </div>

    )
}

export default Seasons;
