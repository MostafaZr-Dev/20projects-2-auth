import React from "react";
import { Route } from "react-router-dom";

import PrivateRoute from "Routes/PrivateRoute";
import PublicRoute from "Routes/PublicRoute";

function RouteWithSubRoutes({ base, route, isAuthenticate }) {
  if (base) {
    const path = `${base}${route.path}`;
    return (
      <Route exact={route.exact} path={path}>
        <route.component
          base={route.routes ? path : null}
          routes={route.routes}
        />
      </Route>
    );
  }

  return (
    <>
      {route.isPrivate && (
        <PrivateRoute
          exact={route.exact}
          path={route.path}
          isAuthenticate={isAuthenticate}
        >
          <route.component
            base={route.routes ? route.path : null}
            routes={route.routes}
          />
        </PrivateRoute>
      )}
      {!route.isPrivate && (
        <PublicRoute
          exact={route.exact}
          path={route.path}
          isAuthenticate={isAuthenticate}
        >
          <route.component
            base={route.routes ? route.path : null}
            routes={route.routes}
          />
        </PublicRoute>
      )}
    </>
  );
}

export default RouteWithSubRoutes;
