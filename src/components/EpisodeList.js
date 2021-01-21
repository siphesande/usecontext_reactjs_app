import React, { useContext, useEffect } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { Link } from 'react-router-dom';
const EpisodeList = () => {
  const { episodes, loading, getEpisodes } = useContext(GlobalContext);

  useEffect(() => {
    getEpisodes();
    
  }, []);
 
    return (
  
      <div>
      <h1>Rick and Morty Episodes</h1>
      
      
      <hr/>
      <div>
        {loading ? (
          <h4> Loading ... </h4>
        ) : (
            <div>

              {
                episodes.map((item, key) => (

                  <div key={key}>
                    
                    <img src={item.image.medium} alt="img" />
                    <div>Title: {item.name}</div>
                    <div>Number: {item.number}</div>
                    <div><Link to={`/detailedepisodeinformation/${item.id}`}>
                      <button>view more </button>
                    </Link>
                    </div>
                    <hr/>
                  </div>
                  
                ))
              }
              
            </div>
          )}
      </div>
    </div>
  
    );
  };
  
  
  
  
  export default EpisodeList;