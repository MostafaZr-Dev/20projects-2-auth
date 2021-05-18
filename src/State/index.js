import React, { createContext, useReducer, useContext } from "react";

import { initState, reducer } from "./reducer";
import HttpService from "Services/http";

const AppContext = createContext({});

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initState);

  return (
    <AppContext.Provider
      value={{
        state,
        dispatch,
        httpService: new HttpService(),
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppState = () => {
  return useContext(AppContext);
};
