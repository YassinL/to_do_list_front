const reducer = (state, action) => {
  console.log("hello", action);
  switch (action.type) {
    case "SIGNIN":
      localStorage.setItem("token", action.payload.data.token);
      return {
        ...state,
        isAuthenticated: true,
        token: action.payload.data.token,
        isFetching: false,
      };
    case "LOGOUT":
      localStorage.clear();
      return {
        ...state,
        isAuthenticated: false,
        token: null,
        isFetching: false,
      };
    case "LOAD_USER":
      return {
        ...state,
        isAuthenticated: true,
        token: action.token,
        isFetching: false,
      };
    case "NO_USER":
      return {
        ...state,
        isAuthenticated: false,
        token: null,
        isFetching: false,
      };
    default:
      return state;
  }
};

module.exports = reducer;
