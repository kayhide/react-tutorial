import React from "react";
import { connect } from "react-redux";
import { withRouter, Redirect } from "react-router";
import { Switch, Route } from "react-router-dom";

import MainAppBar from "components/MainAppBar";
import Page from "components/Page";


function withRouteUpdate(Comp) {
  function RouteUpdateContainer(props) {
    const path = props.game.currentStep === 0 ? "/" : `/moves/${props.game.currentStep}`;
    if (props.location.pathname !== path) {
      return (<Redirect to={path} />);
    }
    return (<Comp {...props} />);
  }
  const toProps = state => state;
  return connect(toProps)(withRouter(RouteUpdateContainer));
}

function App(props) {
  return (
    <div>
      <MainAppBar />
      <main>
        <Switch>
          <Route path="/" exact component={withRouteUpdate(Page)} />
          <Route path="/moves/:move" component={withRouteUpdate(Page)} />
        </Switch>
      </main>
    </div>
  );
};


export default App;
