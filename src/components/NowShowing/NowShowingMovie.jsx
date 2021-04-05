import React from 'react';
import '../card.css';


const NowShowingMovies = ({ title, pic, summary }) => {


    return (

        <div class="card">
            {/* <a href="#"> */}
                <div class="img1" style={{
                    backgroundImage: `url(${pic})`
                }}></div>
                <div class="img2" style={{
                    backgroundImage: `url(${pic})`
                }}></div>
                <div class="title">{title}</div>
                <div class="text">{summary}</div>
                {/* <a href="#"><div class="catagory">Download <i class="fas fa-film"></i></div></a>
                <a href="#"><div class="views">20211  <i class="far fa-eye"></i> </div></a> */}
            {/* </a> */}
        </div>

    )
}

export default NowShowingMovies;
