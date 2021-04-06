import React, { useState, useEffect } from 'react';
import TopRatedMovie from './TopRatedMovie';
import Footer from '../Footer/Footer';

const TopRatedMovies = () => {

    const API_KEY = "api_key";
    const IMAGE_API = "https://image.tmdb.org/t/p/w1280";

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        getMovies()
    }, [])

    const getMovies = async () => {
        const response = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`);

        const data = await response.json();
        setMovies(data.results);
        console.log(data.results);
    }


    return (
        <div>


            <div id="demo-1" style={{
                backgroundImage: `url(/avengers.jpg)`
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

                                        <li class="active"><a href="/top-rated">Top-Rated</a></li>
                                        <li><a href="/tv-series">TV-Series</a></li>
                                        <li><a href="/up-coming">Up-Coming</a></li>
                                        <li><a href="/now-showing">Now-Showing</a></li>




                                    </ul>

                                </div>
                                <div class="clearfix"> </div>
                            </nav>
                            <div class="w3ls_search">
                                <div class="cd-main-header">
                                    <ul class="cd-header-buttons">
                                        <li><a class="cd-search-trigger" href="cd-search"> <span></span></a></li>
                                    </ul>
                                </div>
                                <div id="cd-search" class="cd-search">
                                    <form action="#" method="post">
                                        <input name="Search" type="search" placeholder="Search..." />
                                    </form>
                                </div>
                            </div>
                        </div>

                    </div>

                    
                </div>
            </div>



            <section className="movie-container">
                {
                    movies.map(movie => (
                        <TopRatedMovie
                            key={movie.id}
                            summary={movie.overview}
                            title={movie.title}
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

export default TopRatedMovies;
