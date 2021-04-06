import React, { useEffect, useState } from 'react';
import Results from './Results';
import { Link } from 'react-router-dom';
import './Search.css';


const Search = () => {

    const API_KEY = "api_key";
    const IMAGE_API = "https://image.tmdb.org/t/p/w1280";

    const [movies, setMovies] = useState([]);
    const [search, setSearch] = useState("");
    const [query, setQuery] = useState({});

    useEffect(() => {
        getMovies()
    }, [query])

    const getMovies = async () => {
        const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`);

        const data = await response.json();
        setMovies(data.results);
    }

    const updateSearch = (e) => {
        setSearch(e.target.value);
        console.log(search);
    }

    const getSearch = e => {
        setQuery(search);
        setSearch('');
        e.preventDefault();
    }

    return (
        <div className="container">

            <form onSubmit={getSearch}>
                <div class="container">
                    <input type="text" placeholder="Search..." value={search} onChange={updateSearch} />
                    <div class="search"></div>
                </div>
            </form>
            
            <section className="movie-container">


                {
                    movies.map(movie => (
                        <Results
                            key={movie.id}
                            title={movie.title}
                            pic={IMAGE_API + movie.poster_path}
                            date={movie.release_date}
                            searchValue={updateSearch}
                            overview={movie.overview}
                        />
                    ))


                }

            </section>

        </div>
    )
}

export default Search
