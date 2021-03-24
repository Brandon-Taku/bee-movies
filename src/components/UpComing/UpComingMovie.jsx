import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import MovieDetails from '../MovieDetails/MovieDetails';
import '../style.css';


const UpComingMovie = ({ title, pic, summary }) => {

   
    return (
        
        <div className="container">
	       	<img src={pic} alt="Avatar" className="image" style={{ width: 290 }} />
            <div className="middle">
            <div className="text"><strong style={{ fontSize: 30 }}>{title}</strong><br/> {summary} <br/></div>
            </div>
	    </div>

    )
}

export default UpComingMovie;
