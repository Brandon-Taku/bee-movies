import React from 'react';

import Header from '../Header/Header';
import Movies from '../Home/Movies';
import SearchBar from '../Home/Search';
import './Search.css';

const Home = () => {
    
    return(

        <div>
            <Header />
            <br/>
            <div className="container mt-5">
                <SearchBar />
            </div>
            
            <Movies />
        </div>
    )
}

export default Home;