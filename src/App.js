import React, { useContext, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import EpisodeList from './components/EpisodeList';
import DetailedEpisodeInformation from './components/DetailedEpisodeInformation';
//import { GlobalProvider } from './context/GlobalState';
import { GlobalContext } from './context/GlobalState';
import DenseAppBar from './components/AppBar'



const App = () => {
  const { getEpisodes } = useContext(GlobalContext);

  useEffect(() => {
    getEpisodes();
   
  }, []);

  
  return (
    
      <div className="App">
        <Router>
        <DenseAppBar />
          <div className="container">
            <Route exact path="/" component={EpisodeList} />
            <Route exact path="/detailedepisodeinformation/:episode_id" component={DetailedEpisodeInformation} />
          </div>
        </Router>
      </div>
  );
}

export default App;
