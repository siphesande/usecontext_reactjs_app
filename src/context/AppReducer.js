import {
  GET_EPISODES,
  EPISODES_ERROR,
 } from "./Types";

 const AppReducer = (state, action) => {
    switch (action.type) {
      case GET_EPISODES:
        return {
          ...state,
          loading: false,
          episodes: action.payload
        };
  
      case EPISODES_ERROR:
        return {
          ...state,
          error: action.payload
        };
  
      default:
        return state;
    }
  };

  export default AppReducer;
