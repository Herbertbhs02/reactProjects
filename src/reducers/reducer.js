const initialState = { count: 0 };

const reducer = (state = initialState, action) => {
  const newState = { ...state };
  switch (action.type) {
    case "INCREMENT":
      return { count: newState.count + 1 };

    case "DECREMENT":
      return { count: newState.count - 1 };

    default:
      return state;
  }
};
export default reducer;
