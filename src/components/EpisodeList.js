import React, { useContext, useEffect } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
const EpisodeList = () => {
  const { episodes, loading, error, getEpisodes } = useContext(GlobalContext);

  if (error) {
    return <Typography variant="p" color="inherit">Error! Failed to load episodes!</Typography>
  }


  return (

    <div>

      <Typography variant="h4" color="inherit">Rick and Morty Episodes</Typography>
      <br />
      <br />



      <div>
        {loading ? (
          <Typography variant="h4" color="inherit">Loading...</Typography>
        ) : (
            <div>
              
              { episodes.length === 0 ?
                <Typography variant="p" color="inherit">Nothing to show...</Typography>
                :

                <div>
                <Divider />
                  {
                    episodes.map((item) => (

                      <div key={item.id}>

                        <img src={item.image.medium} alt="img" />
                        <div>Title: {item.name}</div>
                        <div>Number: {item.number}</div>
                        <div>

                          <Button
                            component={Link}
                            to={`/detailedepisodeinformation/${item.id}`}
                            variant="outlined"
                            color="primary">
                            more
                          </Button>

                        </div>
                        <Divider />
                      </div>

                    ))
                  }

                </div>
              }
            </div>
          )}
      </div>
    </div>

  );
};




export default EpisodeList;