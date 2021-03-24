import './App.css';
import './index.css';

import Home from './components/Home/Home';
import TopRated from './components/TopRated/TopRatedMovies';
import UpComingMovies from './components/UpComing/UpComingMovies';
import MovieDetails from './components/MovieDetails/MovieDetails';
import NowShowing from './components/NowShowing/NowShowingMovies';
import TvSeries from './components/TvSeries/Seasons';


import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function App() {

  return (

    <Router>
      <div className="App" style={{ 
      backgroundImage: `url(/mate_background.jpg)` 
    }}>

            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/top-rated" component={TopRated} />
              <Route path="/up-coming" component={UpComingMovies} />
              <Route path="/now-showing" component={NowShowing} />
              <Route path="/tv-series" component={TvSeries} />
              <Route path="/movie/movie-details" component={MovieDetails} />


            </Switch>

      </div>

    </Router>
    
  );
}

export default App;
