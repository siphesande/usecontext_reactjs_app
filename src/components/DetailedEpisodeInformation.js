import React, { useContext, useEffect } from 'react';
import { GlobalContext } from '../context/GlobalState';

const DetailedEpisodeInformation = (props) => {
  const { episodes, loading, getEpisodes } = useContext(GlobalContext);
  useEffect(() => {
    getEpisodes();

  }, []);


  let episode = episodes.filter(episodes_item => episodes_item.id == props.match.params.episode_id)
  console.log(episode[0].name);
  return (

    <div>
      <h1>Detailed Episode Information</h1>


      <hr />
      <div>
        {loading ? (
          <h4> Loading ... </h4>
        ) : (
            <div>
              <img src={episode[0].image.medium} alt="img" />
              <div>Title: {episode[0].name}</div>
              <div>Number: {episode[0].number}</div>
              <div>Season: {episode[0].season}</div>
              <div>Type: {episode[0].type}</div>
              <div>Summary: {episode[0].summary}</div>
              <div>Date: {episode[0].airdate}</div>



            </div>
          )}
      </div>
    </div>


  );
};

export default DetailedEpisodeInformation;