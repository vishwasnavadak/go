import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Shortener from "./Shortener";
// import createHistory from "history/createBrowserHistory";

const App = () => {
  // const history = createHistory({
  //   basename: process.env.PUBLIC_URL
  // });

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route
          exact
          path="/"
          component={() => {
            window.location.href = "https://vishwas.tech";
            return null;
          }}
        />
        <Route path="/:shorturl" component={Shortener} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
