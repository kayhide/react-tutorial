import React from "react";
import ReactDOM from "react-dom";
import { Router, Switch, Route } from "react-router-dom";

import Page from "components/Page";
import history from "./history";

import "normalize.css";
import "./index.css";

ReactDOM.render(
  <Router history={history}>
    <Switch>
      <Route path="/" exact component={Page} />
      <Route path="/moves/:move" component={Page} />
    </Switch>
  </Router>
  ,
  document.getElementById('root')
);

