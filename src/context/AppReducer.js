export default (state, action) => {
    switch (action.type) {
      case 'GET_EPISODES':
        //console.log(action.payload);
        return {
          ...state,
          loading: false,
          episodes: action.payload
        };
  
      case 'EPISODES_ERROR':
        //console.log(action.payload);
        return {
          ...state,
          error: action.payload
        };
  
      default:
        return state;
    }
  };