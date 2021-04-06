import React, { useState } from 'react';
import '../card.css';


const Movie = ({ title, pic, overview }) => {

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
