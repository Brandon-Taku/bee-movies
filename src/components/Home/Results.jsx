import React from 'react';
import Footer from '../Footer/Footer';
import '../card.css';

const Results = ({ pic, overview }) => {


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
                {/* <a href="#"><div className="catagory">Download <i className="fas fa-film"></i></div></a>
                <a href="#"><div className="views">20211  <i className="far fa-eye"></i> </div></a>
            </a> */}


        </div>








    )
}

export default Results
