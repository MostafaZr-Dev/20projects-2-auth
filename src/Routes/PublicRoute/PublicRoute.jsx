import React from "react";
import { Redirect, Route, useLocation } from "react-router-dom";

function PublicRoute({ isAuthenticate, children, ...props }) {
  const location = useLocation();

  return (
    <Route {...props}>
      {!isAuthenticate ? (
        children
      ) : (
        <Redirect to={{ pathname: "/dashboard", state: { from: location } }} />
      )}
    </Route>
  );
}

export default PublicRoute;
