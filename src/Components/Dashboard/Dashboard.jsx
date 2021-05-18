import React, { useEffect, useLayoutEffect } from "react";

import Layout from "./Layout";
import RouteWithSubRoutes from "Routes/RouteWithSubRoutes/RouteWithSubRoutes";
import { useHistory, useLocation } from "react-router-dom";

function Dashboard({ base, routes }) {
  const location = useLocation();
  const history = useHistory();

  useEffect(() => {
    localStorage.setItem("path", location.pathname);
  }, [location]);

  useLayoutEffect(() => {
    const path = localStorage.getItem("path");
    if (path) {
      history.replace({ pathname: path });
    }

    return () => {
      localStorage.removeItem("path", location.pathname);
    };
  }, []);

  const renderRoutes = routes.map((route, index) => (
    <RouteWithSubRoutes base={base} route={route} key={index} />
  ));

  return <Layout>{renderRoutes}</Layout>;
}

export default Dashboard;
