import React, { useState } from 'react';
import '../card.css';


const Movie = ({ title, pic, overview }) => {

    const API_KEY = "fe5e020771ca617fdbe53a006489cea5";
    const IMAGE_API = "https://image.tmdb.org/t/p/w1280";

    // useEffect(() => {
    //     getEachgMovie()
    // }, [])

    const [single, setSingle] = useState([]);

    const getEachgMovie = async () => {
        const response = await fetch(`https://api.themoviedb.org/3/movie/527774?api_key=${API_KEY}&language=en-US`);

        const data = await response.json();
        setSingle(data);
        console.log(data);
    }

    return (

            
            <div className="card">
                {/* <a href="#"> */}
                    <div className="img1" style={{
                        backgroundImage: `url(${pic})`
                    }}></div>
                    <div className="img2" style={{
                        backgroundImage: `url(${pic})`
                    }}></div>
                    <div className="title"></div>
                    <div className="text">{overview}</div>
                    <a href="#"><div className="title"></div></a>
                    {/* <a href="#"><div className="catagory">Download <i className="fas fa-film"></i></div></a> */}
                    {/* <a href="#"><div className="views">20211  <i className="far fa-eye"></i> </div></a> */}
                {/* </a> */}
            </div>



    )
}

export default Movie
