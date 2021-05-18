import React, { useEffect, useState } from "react";
import { LinearProgress } from "@material-ui/core";

import routes from "Routes";
import RouteWithSubRoutes from "Routes/RouteWithSubRoutes";
import { useAppState } from "State";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const { state, dispatch, httpService } = useAppState();
  

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      setIsLoading(false);
      return dispatch({
        type: "INIT",
        payload: {
          isAuthenticate: false,
          user: null,
        },
      });
    }

    httpService
      .get("/user/init", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        if (response.data.success) {
          const { user } = response.data;
          setIsLoading(false);
          dispatch({
            type: "INIT",
            payload: {
              isAuthenticate: true,
              user,
            },
          });
        }
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
        dispatch({
          type: "INIT",
          payload: {
            isAuthenticate: false,
            user: null,
          },
        });
      });
  }, []);

  const AppRoutes = routes.map((route, index) => (
    <RouteWithSubRoutes
      route={route}
      key={index}
      isAuthenticate={state.isAuthenticate}
    />
  ));

  return (
    <>
      {isLoading && <LinearProgress color="secondary" />}
      {!isLoading && <>{AppRoutes}</>}
    </>
  );
}

export default App;
