import React from "react";
import { Route, Redirect, useLocation } from "react-router-dom";

function PrivateRoute({ isAuthenticate, children, ...props }) {
  const location = useLocation();

  return (
    <Route {...props}>
      {isAuthenticate ? (
        children
      ) : (
        <Redirect to={{ pathname: "/", state: { from: location } }} />
      )}
    </Route>
  );
}

export default PrivateRoute;
