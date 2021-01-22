import React, { useContext, useEffect } from 'react';
import { GlobalContext } from '../context/GlobalState';
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { Link } from 'react-router-dom';

const DetailedEpisodeInformation = (props) => {
  const { episodes, loading } = useContext(GlobalContext);
  // useEffect(() => {
  //   getEpisodes();

  // }, []);


  let episode = episodes.filter(episodes_item => episodes_item.id == props.match.params.episode_id)

  return (

    <div>

      <Typography variant="h4" color="inherit">
        Detailed Episode Information
      </Typography>


      <div>
        {loading ? (

          <Typography variant="h4" color="inherit">Loading...</Typography>
        ) : (
            <div>
              <hr />
              <img src={episode[0].image.medium} alt="img" />
              <div>Title: {episode[0].name}</div>
              <div>Number: {episode[0].number}</div>
              <div>Season: {episode[0].season}</div>
              <div>Type: {episode[0].type}</div>
              <div>Date: {episode[0].airdate}</div>
              <br />
              <br />
              <div>Summary: <span dangerouslySetInnerHTML={{ __html: episode[0].summary }} /></div>
            </div>
          )}
      </div>
      <div>

        <Button
          component={Link}
          to="/"
          variant="outlined"
          color="primary"
          startIcon={<ArrowBackIcon />}>
          Back
        </Button>
      </div>
    </div>


  );
};

export default DetailedEpisodeInformation;