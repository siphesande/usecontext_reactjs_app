import React, { useContext, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import EpisodeList from './components/EpisodeList';
import DetailedEpisodeInformation from './components/DetailedEpisodeInformation';
import { GlobalContext } from './context/GlobalState';
import MainAppBar from './components/AppBar'
import './App.css';


const App = () => {
  const { getEpisodes } = useContext(GlobalContext);

  useEffect(() => {
    getEpisodes();
  }, []);

  return (
    <div className="App">
      <Router>
        <MainAppBar />
        <div className="container">
          <Route exact path="/" component={EpisodeList} />
          <Route exact path="/detailedepisodeinformation/:episode_id" component={DetailedEpisodeInformation} />
        </div>
      </Router>
    </div>
  );
}

export default App;
