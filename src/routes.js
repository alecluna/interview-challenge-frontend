import React from "react";
import { Switch, Route } from "react-router-dom";
import QueryColors from "./Components/QueryColors";
import DetailedView from "./Components/DetailedView";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={QueryColors} />
      <Route
        exact
        path="/:hexvalue"
        render={props => <DetailedView {...props} />}
      />
    </Switch>
  );
};

export default Routes;
