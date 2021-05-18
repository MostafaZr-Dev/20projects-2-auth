export const initState = {
  user: null,
  isAuthenticate: false,
};

export const reducer = (state = initState, action) => {
  switch (action.type) {
    case "INIT":
      return {
        ...state,
        ...action.payload,
      };

    case "SET_USER":
      return {
        ...state,
        ...action.payload,
      };

    default:
      throw new Error("there is no handler for action");
  }
};
