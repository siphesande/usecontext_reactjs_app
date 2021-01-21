import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';
import axios from 'axios';

// initial state
const initialState = {
  episodes: [],
  error: null,
  loading: true
};

// create context
export const GlobalContext = createContext(initialState);

// provider
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const url = 'https://api.tvmaze.com/singlesearch/shows?q=rick-&-morty&embed=episodes';

  // Actions
  const getEpisodes = () => {
    axios
      .get(url)
      .then(response => {
        dispatch({
          type: 'GET_EPISODES',
          payload: response.data._embedded.episodes
        });
      })
      .catch(error => {
        dispatch({
          type: 'EPISODES_ERROR',
          payload: error
        });
      });
  };

  

  return (
    <GlobalContext.Provider
      value={{
        episodes: state.episodes,
        error: state.error,
        loading: state.loading,
        getEpisodes
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};