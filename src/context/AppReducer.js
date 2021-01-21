export default (state, action) => {
    switch (action.type) {
      case 'GET_EPISODES':
        return {
          ...state,
          loading: false,
          episodes: action.payload
        };
  
      case 'EPISODES_ERROR':
        return {
          ...state,
          error: action.payload
        };
  
      default:
        return state;
    }
  };