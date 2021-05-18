import React from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

import ItimRegular from "../Assets/Fonts/Itim-Regular.ttf";
import OpenSans from "../Assets/Fonts/OpenSans-Regular.ttf";
import VazirWoff from "../Assets/Fonts/Vazir.woff";

const Itim = {
  fontFamily: "itim",
  fontStyle: "normal",
  fontWeight: 400,
  src: `
    local('itim'),
    url(${ItimRegular}) format('truetype')
  `,
};

const OpenSansFont = {
  fontFamily: "open-sans",
  fontStyle: "normal",
  fontWeight: 400,
  src: `
      local('open-sans'),
      url(${OpenSans}) format('truetype')
    `,
};

const VzirFont = {
  fontFamily: "vazir",
  fontStyle: "normal",
  fontWeight: 400,
  src: `
      local('vazir'),
      url(${VazirWoff}) format('truetype')
    `,
};

const theme = createMuiTheme({
  typography: {
    fontFamily: "vazir,open-sans, Arial",
  },
  overrides: {
    MuiCssBaseline: {
      "@global": {
        "@font-face": [Itim, OpenSansFont, VzirFont],
      },
    },
  },
});

const StyleProvider = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default StyleProvider;
