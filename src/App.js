import React, { useContext, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import EpisodeList from './components/EpisodeList';
import DetailedEpisodeInformation from './components/DetailedEpisodeInformation';
import { GlobalProvider } from './context/GlobalState';
import { GlobalContext } from './context/GlobalState';


const App = () => {
  

  
  return (
    <GlobalProvider>
      <div className="App">
        <Router>
          <div className="container">
            <Route exact path="/" component={EpisodeList} />
            <Route exact path="/detailedepisodeinformation/:episode_id" component={DetailedEpisodeInformation} />
          </div>
        </Router>
      </div>
    </GlobalProvider>
  );
}

export default App;
