import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./Components/App";
import { AppProvider } from "./State";
import StyleProvider from "./Utils/Theme";

const app = document.getElementById("app");

render(
  <Router>
    <AppProvider>
      <StyleProvider>
        <App />
      </StyleProvider>
    </AppProvider>
  </Router>,
  app
);
