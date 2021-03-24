import React, { useEffect, useState } from 'react';
import Movie from './Movie';

const Search = () => {

    const API_KEY = "fe5e020771ca617fdbe53a006489cea5";
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
        
            <form class="input-group col-md-8 offset-md-1" style={{ width: 650 }} onSubmit={getSearch} >
                <input type="search" class="form-control outline" placeholder="Search" aria-label="Search"
                    aria-describedby="search-addon" value={search} onChange={updateSearch} />
                <button type="submit" class="btn btn-outline-primary">Search</button>
                <br></br>
            </form>

            <div className="col-md-8 offset-md-2" >
              
            </div>

            <section className="movie-container">
                {
                    movies.map(movie => (
                        <Movie 
                            key={movie.id}
                            title={movie.title}
                            pic={IMAGE_API + movie.poster_path}
                            date={movie.release_date}
                            searchValue={updateSearch}
                        />
                    ))

                    
                }

            </section>
       </div>
    )
}

export default Search