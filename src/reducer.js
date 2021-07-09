let localUser = JSON.parse(localStorage.getItem("user"));

export const initialState = {
  user: localUser ? localUser : null,
};

export const actionTypes = {
  SET_USER: "SET_USER",
  REMOVE_USER: "REMOVE_USER",
};

const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.SET_USER:
      localStorage.setItem("user", JSON.stringify(action.user));
      return {
        ...state,
        user: action.user,
      };
    case actionTypes.REMOVE_USER:
      localStorage.removeItem("user");
      return {
        ...state,
        user: null,
      };
    default:
      return state;
  }
};
export default reducer;
