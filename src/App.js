import React, { useRef, useEffect, FC } from "react";
import { useLocation, Switch } from "react-router-dom";
import AppRoute from "./utils/AppRoute";
import ScrollReveal from "./utils/ScrollReveal";
import ReactGA from "react-ga";

// Layouts
import LayoutDefault from "./layouts/LayoutDefault";

// Views
import Home from "./views/Home";

// Creator
import Creator from "./views/Creator";

//MarketPlace
import MarketPlace from "./views/MarketPlace";

import { createTheme, ThemeProvider } from "@material-ui/core";
import { deepPurple, pink } from "@material-ui/core/colors";
import "antd/dist/antd.dark.less";
import { SnackbarProvider } from "notistack";

import "./App.css";

// Initialize Google Analytics
// ReactGA.initialize(process.env.REACT_APP_GA_CODE);

// const trackPage = (page) => {
//   ReactGA.set({ page });
//   ReactGA.pageview(page);
// };

/* from sol-nft program */

const theme = createTheme({
  palette: {
    type: "dark",
    primary: {
      main: deepPurple[700],
    },
    secondary: {
      main: pink[700],
    },
  },
  overrides: {
    MuiButtonBase: {
      root: {
        justifyContent: "flex-start",
      },
    },
    MuiButton: {
      root: {
        textTransform: undefined,
        padding: "12px 90px",
      },
      startIcon: {
        marginRight: 8,
      },
      endIcon: {
        marginLeft: 8,
      },
    },
  },
});

/* from sol-nft program */

const App = () => {
  const childRef = useRef();
  let location = useLocation();

  useEffect(() => {
    const page = location.pathname;
    document.body.classList.add("is-loaded");
    // childRef.current.init();
    // trackPage(page);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  return (
    <ThemeProvider theme={theme}>
      <SnackbarProvider>
        <ScrollReveal
          ref={childRef}
          children={() => (
            <Switch>
              <AppRoute
                exact
                path="/"
                component={Home}
                layout={LayoutDefault}
              />
              <AppRoute
                path="/Become-A-Creator"
                component={Creator}
                layout={LayoutDefault}
              />
              <AppRoute
                path="/KuMarketPlace"
                component={MarketPlace}
                layout={LayoutDefault}
              />
            </Switch>
          )}
        />
      </SnackbarProvider>
    </ThemeProvider>
  );
};

export default App;
