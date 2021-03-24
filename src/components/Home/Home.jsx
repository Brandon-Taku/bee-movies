import React from 'react';

import Header from '../Header/Header';
import Movies from '../Home/Movies';
import SearchBar from '../Home/Search';

const Home = () => {
    
    return(

        <div>
            <Header />
            <SearchBar />
            <Movies />
        </div>
    )
}

export default Home;