import React from "react";
import { Switch, Route } from "react-router-dom";
import App from "./App";
import DetailedView from "./Components/DetailedView";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={App} />
      <Route
        exact
        path="/:hexvalue"
        render={props => <DetailedView {...props} />}
      />
    </Switch>
  );
};

export default Routes;
