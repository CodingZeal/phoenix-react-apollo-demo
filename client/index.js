import "babel-polyfill";
import "roboto-fontface/css/roboto/roboto-fontface.css";
import "material-design-icons/iconfont/material-icons.css";

import React from "react";
import ReactDOM from "react-dom";
import { ApolloProvider } from "react-apollo";
import { ThemeProvider } from "react-css-themr";
import { BrowserRouter } from "react-router-dom";

import { apolloClient, configureStore } from "./base";
import App from "./modules/app/components/App";

import "./styles/commons.scss";
import theme from "./styles/theme";

const rootEl = document.getElementById("root");
const store = configureStore();

ReactDOM.render(<Root currentApp={App} />, rootEl);

function Root({ currentApp }) {
  return (
    <ApolloProvider client={apolloClient} store={store}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          {React.createElement(currentApp)}
        </BrowserRouter>
      </ThemeProvider>
    </ApolloProvider>
  );
}

if (module.hot) {
  module.hot.accept("./modules/app/components/App", () => {
    // eslint-disable-next-line global-require
    const NextApp = require("./modules/app/components/App").default;

    ReactDOM.render(<Root currentApp={NextApp} />, rootEl);
  });
}
