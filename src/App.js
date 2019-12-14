import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import Shortener from "./Shortener";
import "./style.css";

const App = () => {
  return (
    <HashRouter basename="/">
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
    </HashRouter>
  );
};

export default App;
