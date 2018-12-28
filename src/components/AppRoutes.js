import React from "react";
import { connect } from "react-redux";
import { withRouter, Redirect } from "react-router";
import { Switch, Route } from "react-router-dom";

import Page from "components/Page";


const basename = process.env.PUBLIC_URL;

function withRouteUpdate(Comp) {
  function RouteUpdateContainer(props) {
    const path = props.game.currentStep === 0 ?
          `${basename}/` :
          `${basename}/moves/${props.game.currentStep}`;
    if (props.location.pathname !== path) {
      return (<Redirect to={path} />);
    }
    return (<Comp {...props} />);
  }
  const toProps = state => state;
  return connect(toProps)(withRouter(RouteUpdateContainer));
}

function AppRoutes(props) {
  return (
    <Switch>
      <Route path={`${basename}/`} exact component={withRouteUpdate(Page)} />
      <Route path={`${basename}/moves/:move`} component={withRouteUpdate(Page)} />
    </Switch>
  );
};


export default AppRoutes;
