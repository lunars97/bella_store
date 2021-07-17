const INITIAL_STATE = false;

const fav = (state = INITIAL_STATE, action) => {
  
  switch (action.type) {
    case "LOGIN":
      state = true;
      return state;
    case "LOGOUT":
      state = false;
      return state;
    default:
      return state;
  }
};

export default fav